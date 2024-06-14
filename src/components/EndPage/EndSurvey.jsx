import React from "react";
import styles from "../EndPage/EndSurvey.module.scss";
import Header from "../Header/Header";
import photo from '../../assets/img/image 4.svg'

const EndSurvey = () => {
  return (
    <>
      <Header />

      <main>
        <div className={styles.wrapper}>
          <img src={photo} alt="girl photo" className={styles.img_girl} />
          <h1 className={styles.title}>Вы уже прошли этот опрос</h1>
          <span className={styles.title_text}>
          Спасибо, что делитесь мнением и помогаете нам быть лучше
          </span>
          <button className={styles.next_btn}>Перейти на RUTUBE</button>
        </div>
      </main>
    </>
  );
};

export default EndSurvey;
