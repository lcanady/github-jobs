import React from "react";
import styles from "./header.module.css";
import bg from "../assets/desktop/bg-pattern-header.svg";
import moon from "../assets/desktop/icon-moon.svg";
import sun from "../assets/desktop/icon-sun.svg";
import mag from "../assets/desktop/icon-search.svg";
import location from "../assets/desktop/icon-location.svg";
import Toggle from "./Toggle";
import Button from "./Button";

const Header = () => {
  return (
    <div classname={styles.container}>
      <h1 className={styles.logo}>devjobs</h1>
      <div className={styles.sliderContainer}>
        <img src={sun} alt="Sun Icon" />
        <Toggle toggle={(ev) => console.log(ev)} />
        <img src={moon} alt="Moon Icon" />
      </div>
      <div className={styles.searchBar}>
        <div className={styles.query}>
          <img src={mag} />
          <input
            type="text"
            placeholder="Filter by title, companies, expertise, etc..."
          />
        </div>
        <div className={styles.filter}>
          <img src={location} />
          <input type="text" placeholder="Filter by location..." />
        </div>
        <div className={styles.fulltime}>
          <input type="checkbox" />
          <p>Fulltime Only</p>
        </div>
        <Button>Search</Button>
      </div>
      <img
        src={bg}
        className={styles.bg}
        height="160px"
        width="100%"
        alt="Header Background"
      />
    </div>
  );
};

export default Header;
