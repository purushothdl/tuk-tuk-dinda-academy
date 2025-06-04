import React from 'react';
import styles from './BetrayerCard.module.css';
import getPlayerImageUrl from '../../../utils/helpers/imageHelpers';

const BetrayerCard = ({ betrayer, isBowler = false }) => {
  const { StrikerName, BowlerName, TeamName, AgainstTeamShort, TotalRuns, Balls, StrikeRate, InningsWickets, EconomyRate, Caption } = betrayer;

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img 
          src={getPlayerImageUrl(isBowler ? BowlerName : StrikerName)} 
          alt={isBowler ? BowlerName : StrikerName} 
          className={styles.image}
          onError={(e) => {
            e.target.onerror = null; 
            e.target.src = '/assets/images/placeholders/default.png';
          }}
        />
        <div className={styles.teamOverlay}>vs {AgainstTeamShort}</div>
      </div>
      <div className={styles.details}>
        <h3 className={styles.playerName}>{isBowler ? BowlerName : StrikerName}</h3>
        <p className={styles.teamName}>{TeamName}</p>
        <div className={styles.stats}>
          <div className={styles.statRow}>
            <span className={styles.statLabel}>Runs</span>
            <span className={styles.statLabel}>{isBowler ? 'Wickets' : 'Balls'}</span>
            <span className={styles.statLabel}>{isBowler ? 'Economy' : 'SR'}</span>
          </div>
          <div className={styles.statRow}>
            <span className={styles.statValue}>{TotalRuns}</span>
            <span className={styles.statValue}>{isBowler ? InningsWickets : Balls}</span>
            <span className={styles.statValue}>{isBowler ? EconomyRate : StrikeRate}</span>
          </div>
        </div>
        <p className={styles.caption}>{Caption}</p>
      </div>
    </div>
  );
};

export default BetrayerCard;