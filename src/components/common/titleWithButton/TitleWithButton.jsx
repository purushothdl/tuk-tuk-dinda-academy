import React from 'react';
import styles from './TitleWithButton.module.css';

const TitleWithButton = ({ title, coloredPart, buttonText, onButtonClick, color = '#eeb115' }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title} style={{ borderLeftColor: color }}>
        &nbsp;{title} <span className={styles.coloredPart} style={{ color }}>{coloredPart}</span>
      </h2>
      {buttonText && (
        <button className={styles.button} onClick={onButtonClick} style={{ backgroundColor: color }}>
          {buttonText}
        </button>
      )}
    </div>
  );
};

export default TitleWithButton; 