import React from 'react';
import styles from './CoachCard.module.css';

const CoachCard = ({ coach }) => {
  const { name, image_path, role, quote, caption } = coach;

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={image_path} alt={name} className={styles.image} loading="eager" />
        <div className={styles.roleBadge}>{role}</div>
      </div>
      <div className={styles.details}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.quote}>"{quote}"</p>
        <p className={styles.caption}>{caption}</p>
      </div>
    </div>
  );
};

export default CoachCard;
