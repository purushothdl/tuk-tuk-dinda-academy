import React, { useState } from 'react';
import styles from './Betrayers.module.css';
import SectionHeader from '../../components/common/sectionHeader/SectionHeader';
import TitleWithButton from '../../components/common/titleWithButton/TitleWithButton';
import BetrayerCard from '../../components/common/BetrayerCard';
import betrayersData from '../../data/static/betrayers.json';

const Betrayers = () => {
  const { 'Tuk Tuk Betrayers': tukBetrayers, 'Dinda Betrayers': dindaBetrayers } = betrayersData;

  // State for popups
  const [showAllTukTuk, setShowAllTukTuk] = useState(false);
  const [showAllDinda, setShowAllDinda] = useState(false);

  const closePopup = (e) => {
    if (e.target === e.currentTarget) {
      setShowAllTukTuk(false);
      setShowAllDinda(false);
    }
  };

  return (
    <div className={styles.betrayersPage}>
      <SectionHeader 
        title="Wanted: For Crimes Against Tuk Tuk & Dinda Academy" 
        subtitle="With explosive strike rates and miserly spells, these individuals have turned their backs on tradition. The Academy does not endorse this behavior." 
        color="#000" 
        words={["Tuk Tuk", "Dinda"]} 
      />
      <TitleWithButton
        title="Tuk Tuk"
        coloredPart="Traitors"
        buttonText="View All"
        onButtonClick={() => setShowAllTukTuk(true)}
        color="red"
      />
      <div className={styles.grid}>
        {tukBetrayers.slice(0, 4).map((betrayer, index) => (
          <BetrayerCard key={index} betrayer={betrayer} isBowler={false} />
        ))}
      </div>
      <TitleWithButton
        title="Dinda"
        coloredPart="Drohis"
        buttonText="View All"
        onButtonClick={() => setShowAllDinda(true)}
        color="red"
      />
      <div className={styles.grid}>
        {dindaBetrayers.slice(0, 4).map((betrayer, index) => (
          <BetrayerCard key={index} betrayer={{ ...betrayer, TotalRuns: betrayer.TotalRunsConceded }} isBowler={true} />
        ))}
      </div>

      {showAllTukTuk && (
        <div className={styles.popupOverlay} onClick={closePopup}>
          <div className={styles.popupContent}>
            <div className={styles.grid}>
              {tukBetrayers.map((betrayer, index) => (
                <BetrayerCard key={index} betrayer={betrayer} isBowler={false} />
              ))}
            </div>
          </div>
        </div>
      )}
      {showAllDinda && (
        <div className={styles.popupOverlay} onClick={closePopup}>
          <div className={styles.popupContent}>
            <div className={styles.grid}>
              {dindaBetrayers.map((betrayer, index) => (
                <BetrayerCard key={index} betrayer={{ ...betrayer, TotalRuns: betrayer.TotalRunsConceded }} isBowler={true} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Betrayers;