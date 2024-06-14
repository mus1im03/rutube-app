import React, { useEffect } from "react";
import styles from "../FirstSurvey/MainList.module.scss";
import middImg from "../../assets/img/image.png";
import { useDispatch, useSelector } from "react-redux";
import { fetchRatings, fetchQuestions } from "../../features/surveySlice";
import Header from "../Header/Header";
import { Link } from "react-router-dom";

const MainList = () => {
  const dispatch = useDispatch();

  const ratings = useSelector((state) => state.survey.ratings);
  const questions = useSelector((state) => state.survey.questions);

  useEffect(() => {
    dispatch(fetchRatings());
    dispatch(fetchQuestions());
  }, [dispatch]);

  const handleRatingClick = (rating) => {
    console.log({
      questionID: 1,
      responseID: rating.numId,
    });
  };

  return (
    <>
      <Header />

      <main>
        <div className={styles.wrapper}>
          <div className={styles.mid_img}>
            <img src={middImg} alt="client" />
          </div>
          <div className={styles.rating_block}>
            <h1>Уважаемый клиент!</h1>
            <p>Запрос закрыт. Пожалуйста, оцените качество предоставленного сервиса по данному обращению, используя шкалу от 0 до 9, где 0 является «Хуже некуда» и 9 — «Отлично».</p>
            <div className={styles.rating_nums}>
              {ratings.map((rating) => (
                <Link
                  to={`/survey`}
                  className={styles.next_page}
                  key={rating.id}
                  onClick={() => handleRatingClick(rating)}
                >
                  <span className={styles.rating_num}>{rating.num}</span>
                </Link>
              ))}
            </div>
            <div className={styles.rating_text}>
              <span className={styles.bad}>Хуже некуда</span>
              <span className={styles.good}>Отлично</span>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default MainList;