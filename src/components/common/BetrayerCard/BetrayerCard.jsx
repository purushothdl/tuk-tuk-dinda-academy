import React from 'react';
import styles from './BetrayerCard.module.css';
import getPlayerImageUrl from '../../../utils/helpers/imageHelpers';

const BetrayerCard = ({ betrayer, isBowler = false }) => {
  const { StrikerName, BowlerName, TeamName, AgainstTeamShort, TotalRuns, Balls, StrikeRate, OversBowled, EconomyRate, Caption } = betrayer;

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={getPlayerImageUrl(isBowler ? BowlerName : StrikerName)} alt={isBowler ? BowlerName : StrikerName} className={styles.image} />
        <div className={styles.teamOverlay}>vs {AgainstTeamShort}</div>
      </div>
      <div className={styles.details}>
        <h3 className={styles.playerName}>{isBowler ? BowlerName : StrikerName}</h3>
        <p className={styles.teamName}>{TeamName}</p>
        <div className={styles.stats}>
          <div className={styles.statRow}>
            <span className={styles.statLabel}>Runs</span>
            <span className={styles.statLabel}>{isBowler ? 'Overs' : 'Balls'}</span>
            <span className={styles.statLabel}>{isBowler ? 'Economy' : 'SR'}</span>
          </div>
          <div className={styles.statRow}>
            <span className={styles.statValue}>{TotalRuns}</span>
            <span className={styles.statValue}>{isBowler ? OversBowled : Balls}</span>
            <span className={styles.statValue}>{isBowler ? EconomyRate : StrikeRate}</span>
          </div>
        </div>
        <p className={styles.caption}>{Caption}</p>
      </div>
    </div>
  );
};

export default BetrayerCard;