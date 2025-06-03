import React from 'react';
import styles from './LegendsSection.module.css';
import PlayerCard from '../../../common/playerCard/playerCard';

const LegendsSection = ({ legends }) => {
  // Create a reversed copy of the legends array
  const reversedLegends = [...legends].reverse();

  return (
    <div className={styles.grid}>
      {reversedLegends.map((legend, index) => (
        <PlayerCard
          key={index}
          player={legend.player}
          year={legend.year}
          teamName={legend.DisplayTeamName}
          runs={legend.TotalRuns}
          innings={legend.Innings}
          avg={legend.BattingAverage}
          sr={legend.StrikeRate}
          tukScore={legend.tuk_tuk_score}
          price={legend.price}
        />
      ))}
    </div>
  );
};

export default LegendsSection;