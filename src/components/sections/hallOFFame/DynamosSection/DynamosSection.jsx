import React from 'react';
import styles from './DynamosSection.module.css';
import PlayerCard from '../../../common/playerCard/playerCard';

const DynamosSection = ({ dynamos }) => {
  // Create a reversed copy of the dynamos array
  const reversedDynamos = [...dynamos].reverse();

  return (
    <div className={styles.grid}>
      {reversedDynamos.map((dynamo, index) => (
        <PlayerCard
          key={index}
          player={dynamo.player}
          year={dynamo.year}
          teamName={dynamo.DisplayTeamName}
          runs={dynamo.Wickets} // Updated to Wickets
          innings={dynamo.Matches} // Updated to Matches
          avg={dynamo.EconomyRate} // Updated to EconomyRate
          sr={dynamo.OversBowled} // Updated to OversBowled
          tukScore={dynamo.dinda_score} // Updated to dinda_score (displayed as Dindex)
          price={dynamo.price} // Price remains the same
          isBowler={true} // Indicates this is a bowler
        />
      ))}
    </div>
  );
};

export default DynamosSection;
