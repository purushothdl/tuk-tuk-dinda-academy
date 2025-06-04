import React, { useState } from 'react';
import styles from './Merchandise.module.css';
import SectionHeader from '../../components/common/sectionHeader/SectionHeader';
import MerchCard from '../../components/common/MerchCard/MerchCard';
import MemeCard from '../../components/common/MemeCard/MemeCard';
import merchData from '../../data/static/merch.json';

const Merchandise = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleAddToCart = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className={styles.merchandisePage}>
      <SectionHeader
        title="Official Merchandise"
        subtitle="Join the legends of Tuk Tuk and Dinda Academies who never rush, always appeal first, and drop catches like it's an art form. Our merch celebrates chaos, stat-padding, and slow innings with maximum attitude. Gear up, rep the tribe, and remember—it's not just cricket, it's a lifestyle."
        color="#000"
        words={['Official', 'Merchandise']}
        wordsColor="#eeb115"
      />
      <div className={styles.grid}>
        {merchData.map((merch, index) => (
          <MerchCard key={index} merch={merch} onAddToCart={handleAddToCart} />
        ))}
      </div>
      {showPopup && <MemeCard onClose={closePopup} />}
    </div>
  );
};

export default Merchandise;
