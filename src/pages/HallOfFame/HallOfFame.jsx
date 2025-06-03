import React, { useState } from 'react';
import SectionHeader from '../../components/common/sectionHeader/SectionHeader';
import LegendsSection from '../../components/sections/hallOFFame/LegendsSection/LegendsSection';
import DynamosSection from '../../components/sections/hallOFFame/DynamosSection/DynamosSection';
import TitleWithButton from '../../components/common/titleWithButton/TitleWithButton';
import hallOfFameData from '../../data/static/hallofFame.json';
import styles from './HallOfFame.module.css';

const HallOfFame = () => {
  const legends = hallOfFameData['Tuk Tuk Legends'];
  const dynamos = hallOfFameData['Dinda Dynamos']; // Assuming data exists
  const [showAllLegends, setShowAllLegends] = useState(false);
  const [showAllDynamos, setShowAllDynamos] = useState(false);

  const toggleShowAllLegends = () => {
    setShowAllLegends(!showAllLegends);
  };

  const toggleShowAllDynamos = () => {
    setShowAllDynamos(!showAllDynamos);
  };

  const closePopup = (e) => {
    if (e.target === e.currentTarget) {
      setShowAllLegends(false);
      setShowAllDynamos(false);
    }
  };

  return (
    <div className={styles.hallOfFame}>
      <SectionHeader
        title="The Illustrious Hall of Fame"
        strikeWord="Illustrious"
        subtitle="Celebrating the noble art of wasting the Powerplay. These icons didn't chase totals — they chased vibes."
        color="#333"
      />
      <TitleWithButton
        title="Tuk Tuk"
        coloredPart="Legends"
        buttonText="View All"
        onButtonClick={toggleShowAllLegends}
      />
      <LegendsSection legends={legends.slice(-4)} />
      <TitleWithButton
        title="Dinda"
        coloredPart="Dynamos"
        buttonText="View All"
        onButtonClick={toggleShowAllDynamos}
      />
      <DynamosSection dynamos={dynamos.slice(-4)} />

      {showAllLegends && (
        <div className={styles.popupOverlay} onClick={closePopup}>
          <div className={styles.popupContent}>
            <LegendsSection legends={legends} />
          </div>
        </div>
      )}
      {showAllDynamos && (
        <div className={styles.popupOverlay} onClick={closePopup}>
          <div className={styles.popupContent}>
            <DynamosSection dynamos={dynamos} />
          </div>
        </div>
      )}
    </div>
  );
};

export default HallOfFame; 