import React, { useState, useEffect } from 'react';
import styles from './RulesSection.module.css';
import rulesData from '../../../../data/static/rules.json'

const RulesSection = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleCard = (academy) => {
    setExpandedCard(expandedCard === academy ? null : academy);
  };

  // Prevent body scrolling when a card is expanded
  useEffect(() => {
    if (expandedCard) {
      document.body.classList.add(styles.noScroll);
    } else {
      document.body.classList.remove(styles.noScroll);
    }

    // Cleanup function to remove the class when the component unmounts
    return () => {
      document.body.classList.remove(styles.noScroll);
    };
  }, [expandedCard]);

  return (
    <section className={styles.rulesSection}>
      <h2 className={styles.title}>The Sacred Scrolls of Inefficiency</h2>
      <div className={styles.rulesGrid}>
        {Object.entries(rulesData).map(([academy, data]) => (
          <div
            key={academy}
            className={`${styles.ruleCard} ${expandedCard === academy ? styles.expanded : ''}`}
          >
            <div className={styles.imageContainer}>
              {data.image && <img src={data.image} alt={data.title} className={styles.ruleImage} />}
              <h3 className={styles.ruleTitle}>{data.title}</h3>
              <button onClick={() => toggleCard(academy)} className={styles.expandButton}>
                {expandedCard === academy ? '⛔' : '✚'}
              </button>
            </div>
            <ul className={styles.ruleList}>
              {data.rules.map((rule, index) => (
                <li key={index}>
                  <img src="/assets/images/logo/check_mark.svg" alt="check mark" className={`${styles.listIcon} ${styles.checkMarkIcon}`} /> {rule}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {expandedCard && <div className={styles.overlay} onClick={() => setExpandedCard(null)} />}
    </section>
  );
};

export default RulesSection;