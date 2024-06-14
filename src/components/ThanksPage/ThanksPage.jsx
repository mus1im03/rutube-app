import React from "react";
import styles from "../ThanksPage/Thanks.module.scss";
import Header from "../Header/Header";
import photo3 from "../../assets/img/image 3.svg";

const ThanksPage = () => {
  return (
    <>
      <Header />
      <main>
        <div className={styles.wrapper}>
          <img src={photo3} alt="girl photo" className={styles.img_girl} />
          <h1 className={styles.title}>Спасибо за обратную связь!</h1>
          <span className={styles.title_text}>
            Это поможет нам улучшить сервис
          </span>
            <button className={styles.next_btn}>Перейти на платформу</button>
        </div>
      </main>
    </>
  );
};

export default ThanksPage;
