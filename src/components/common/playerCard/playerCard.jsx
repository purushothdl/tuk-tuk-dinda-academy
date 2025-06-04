import React from 'react';
import styles from './playerCard.module.css';
import getPlayerImageUrl from '../../../utils/helpers/imageHelpers';
import { formatNumber } from '../../../utils/formatters/numberFormatter';

const PlayerCard = ({ player, year, teamName, runs, innings, avg, sr, tukScore, price, isBowler = false }) => {
  const roundedTukScore = parseFloat(tukScore).toFixed(2);

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img 
          src={getPlayerImageUrl(player)} 
          alt={player} 
          className={styles.image}
          onError={(e) => {
            e.target.onerror = null; 
            e.target.src = '/assets/images/placeholders/default.png'
          }}
        />
        <div className={styles.yearOverlay}>{year}</div>
      </div>
      <div className={styles.details}>
        <h3 className={styles.playerName}>{player}</h3>
        <p className={styles.teamName}>{teamName}</p>
        <div className={styles.stats}>
          <div className={styles.statRow}>
            <span className={styles.statLabel}>{isBowler ? 'Wickets' : 'Runs'}</span>
            <span className={styles.statLabel}>{isBowler ? 'Matches' : 'Innings'}</span>
            <span className={styles.statLabel}>{isBowler ? 'Economy' : 'Avg'}</span>
          </div>
          <div className={styles.statRow}>
            <span className={styles.statValue}>{runs}</span>
            <span className={styles.statValue}>{innings}</span>
            <span className={styles.statValue}>{avg}</span>
          </div>
          <div className={styles.statRow}>
            <span className={styles.statLabel}>{isBowler ? 'Overs' : 'SR'}</span>
            <span className={styles.statLabel}>{isBowler ? 'Dindex' : 'Tindex'}</span>
            <span className={styles.statLabel}>Price</span>
          </div>
          <div className={styles.statRow}>
            <span className={styles.statValue}>{sr}</span>
            <span className={styles.statValue}>{roundedTukScore}</span>
            <span className={styles.statValue}>{formatNumber(price / 10000000)} Cr</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;