import React, { useState, useEffect } from 'react';
import styles from './TopPerformances.module.css';
import TitleWithButton from '../../../common/titleWithButton/TitleWithButton';
import topPerformances from '../../../../data/static/topPerformances.json';
import getPlayerImageUrl from '../../../../utils/helpers/imageHelpers';

const TopPerformances = () => {
  const [showAllTukTuk, setShowAllTukTuk] = useState(false);
  const [showAllDinda, setShowAllDinda] = useState(false);

  // Prevent body scrolling when the popup is open
  useEffect(() => {
    if (showAllTukTuk || showAllDinda) {
      document.body.classList.add(styles.noScroll);
    } else {
      document.body.classList.remove(styles.noScroll);
    }

    // Cleanup function to remove the class when the component unmounts
    return () => {
      document.body.classList.remove(styles.noScroll);
    };
  }, [showAllTukTuk, showAllDinda]);

  const renderPlayerCard = (performance, isTukTuk) => (
    <div className={styles.playerCard} key={isTukTuk ? performance.match_id : performance.MatchID}>
      <img
        src={getPlayerImageUrl(isTukTuk ? performance.player : performance.BowlerName) || '/assets/images/placeholders/player-placeholder.jpg'}
        alt={isTukTuk ? performance.player : performance.BowlerName}
        className={styles.playerImage}
      />
      <div className={styles.playerDetails}>
        <h3 className={styles.playerName}>{isTukTuk ? performance.player : performance.BowlerName}</h3>
        <p className={styles.team}>{isTukTuk ? performance.batting_team : performance.TeamName}</p>
        <div className={`${styles.statsRow} ${styles.statsParamRow}`}>
          <span>{isTukTuk ? 'Runs' : 'Runs'}</span>
          <span>{isTukTuk ? 'Balls' : 'Overs'}</span>
          <span>{isTukTuk ? 'SR' : 'Econ'}</span>
        </div>
        <div className={`${styles.statsRow} ${styles.statsValueRow}`}>
          <span>{isTukTuk ? performance.runs_scored : performance.TotalRunsConceded}</span>
          <span>{isTukTuk ? performance.balls_faced : (performance.TotalRunsConceded / performance.EconomyRate).toFixed(1)}</span>
          <span>{isTukTuk ? performance.actual_sr?.toFixed(2) : performance.EconomyRate}</span>
        </div>
        <p className={styles.matchContext}>{performance.match_context}</p>
        <p className={styles.caption}>{performance.caption}</p>
      </div>
    </div>
  );

  const renderPopup = (performances, isTukTuk) => (
    <div className={styles.popupOverlay} onClick={() => isTukTuk ? setShowAllTukTuk(false) : setShowAllDinda(false)}>
      <div className={styles.popupContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.popupGrid}>
          {performances.map((performance) => renderPlayerCard(performance, isTukTuk))}
        </div>
      </div>
    </div>
  );

  return (
    <section className={styles.topPerformances}>
      <h2 className={styles.title}>This Season's <span style={{color: 'red'}}>"Finest"</span> Performances</h2>

      {/* Tuk Tuk Performances */}
      <div className={styles.section}>
        <TitleWithButton
          title="Tuk Tuk"
          coloredPart="Displays"
          buttonText="View All"
          onButtonClick={() => setShowAllTukTuk(true)}
        />
        <div className={styles.gridContainer}>
          <div className={styles.performancesGrid}>
            {topPerformances.TukTuk.slice(0, 4).map((performance) => renderPlayerCard(performance, true))}
          </div>
        </div>
        {showAllTukTuk && renderPopup(topPerformances.TukTuk, true)}
      </div>

      {/* Dinda Performances */}
      <div className={styles.section}>
        <TitleWithButton
          title="Dinda"
          coloredPart="Displays"
          buttonText="View All"
          onButtonClick={() => setShowAllDinda(true)}
        />
        <div className={styles.gridContainer}>
          <div className={styles.performancesGrid}>
            {topPerformances.Dinda.slice(0, 4).map((performance) => renderPlayerCard(performance, false))}
          </div>
        </div>
        {showAllDinda && renderPopup(topPerformances.Dinda, false)}
      </div>
    </section>
  );
};

export default TopPerformances;