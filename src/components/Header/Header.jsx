import React from "react";
import logo from "../../assets/img/Vector.png";
import styles from "../Header//Header.module.scss";

const Header = () => {
  return (
    <header>
      <header>
        <div className={styles.container}>
          <img src={logo} alt="logo" className={styles.logo} />
        </div>
      </header>
    </header>
  );
};

export default Header;
