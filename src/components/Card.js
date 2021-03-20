import React from "react";
import styles from "./card.module.css";
import moment from "moment";

const Card = ({ job }) => {
  return (
    <div className={styles.container} key={job.id}>
      <img className={styles.logo} src={job.company_logo} />
      <p className={styles.type}>
        {moment(job.created_at).fromNow()}&nbsp;&bull;&nbsp;{job.type}
      </p>
      <p className={styles.title}>{job.title}</p>
      <p className={styles.company}>{job.company}</p>
      <p className={styles.location}>{job.location}</p>
    </div>
  );
};

const Cards = ({ jobs }) => {
  return (
    <div className={styles.cards}>
      {jobs.map((job) => (
        <Card job={job} />
      ))}
    </div>
  );
};

export default Cards;
