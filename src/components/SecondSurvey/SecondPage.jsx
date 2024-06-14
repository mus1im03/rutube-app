import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "../SecondSurvey/SecondPage.module.scss";
import Header from "../Header/Header";
import { fetchAnswers, fetchQuestions, fetchRatings } from "../../features/surveySlice";
import phone from "../../assets/img/image 2.svg";

const SecondPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [selectedRatings, setSelectedRatings] = useState({});

  const ratings = useSelector((state) => state.survey.ratings);
  const questions = useSelector((state) => state.survey.questions);
  const answers = useSelector((state) => state.survey.answers);

  useEffect(() => {
    dispatch(fetchAnswers());
    dispatch(fetchQuestions());
    dispatch(fetchRatings());
  }, [dispatch]);

  const handleAnswerClick = (questionIndex, answerIndex) => {
    setSelectedAnswers((prevSelectedAnswers) => ({
      ...prevSelectedAnswers,
      [questionIndex]: answerIndex,
    }));
  };

  const handleRatingClick = (questionIndex, ratingIndex) => {
    setSelectedRatings((prevSelectedRatings) => ({
      ...prevSelectedRatings,
      [questionIndex]: ratingIndex,
    }));
  };

  const allQuestionsAnswered = () => {
    const requiredQuestions = questions;
    return requiredQuestions.every((_, index) => {
      return selectedAnswers[index + 1] !== undefined || selectedRatings[index + 1] !== undefined;
    });
  };

  const handleSubmit = () => {
    const responses = questions.map((question, questionIndex) => {
      const isRatingQuestion = questionIndex >= 1;
      const selectedIndex = isRatingQuestion
        ? selectedRatings[questionIndex + 1]
        : selectedAnswers[questionIndex + 1];
      const responseID = isRatingQuestion
        ? ratings[selectedIndex + 1]?.numId
        : answers[selectedIndex]?.answerId;
      return {
        questionID: question.questionId,
        responseID: responseID || 0,
      };
    });

    console.log(responses);
    localStorage.setItem("surveyResponses", JSON.stringify(responses));

    if (allQuestionsAnswered()) {
      navigate("/thanks");
    } else {
      alert("Please answer all the questions before submitting.");
    }
  };

  useEffect(() => {
    const storedResponses = localStorage.getItem("surveyResponses");
    if (storedResponses) {
      navigate("/last");
    }
  }, [navigate]);

  return (
    <>
      <Header />
      <main>
        <div className={styles.wrapper}>
          <div className={styles.title}>
            <h1>Пожалуйста, ответьте на дополнительные вопросы.</h1>
          </div>
          <div className={styles.question_answer_block}>
            {questions.length > 0 && (
              <>
                {questions.map((question, questionIndex) => (
                  <div key={question.questionId} className={styles.question_block}>
                    <div className={styles.que}>{question.question}</div>
                    <div className={styles.ans_block}>
                      {questionIndex === 0 ? (
                        <div className={styles.column}>
                          {answers.map((answer, answerIndex) => (
                            <button
                              key={answer.answerId}
                              className={`${styles.answer_button} ${
                                selectedAnswers[questionIndex + 1] === answerIndex
                                  ? styles.selected
                                  : ""
                              }`}
                              onClick={() =>
                                handleAnswerClick(questionIndex + 1, answerIndex)
                              }
                            >
                              {answer.answer}
                            </button>
                          ))}
                        </div>
                      ) : (
                        ratings
                          .slice(1, questionIndex === 5 ? 10 : 6)
                          .map((item, ratingIndex) => (
                            <span
                              key={item.numId}
                              className={`${styles.rating_button} ${
                                selectedRatings[questionIndex + 1] === ratingIndex
                                  ? styles.selected
                                  : ""
                              }`}
                              onClick={() =>
                                handleRatingClick(questionIndex + 1, ratingIndex)
                              }
                            >
                              {item.num}
                            </span>
                          ))
                      )}
                    </div>
                  </div>
                ))}
              </>
            )}
            {questions.length === 0 && <p>Loading questions...</p>}
          </div>
          <div className={styles.button_block}>
            <button
              className={styles.submit_btn}
              disabled={!allQuestionsAnswered()}
              onClick={handleSubmit}
            >
              Отправить ответы
            </button>
          </div>
          <div className={styles.img_block}>
            <img src={phone} alt="phone" />
          </div>
        </div>
      </main>
    </>
  );
};

export default SecondPage;
