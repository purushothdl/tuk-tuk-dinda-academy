import React from 'react';
import styles from './Coaches.module.css';
import SectionHeader from '../../components/common/sectionHeader/SectionHeader';
import CoachCard from '../../components/common/coachCard/CoachCard';
import coachesData from '../../data/static/coaches.json';

const Coaches = () => {
  return (
    <div className={styles.coachesPage}>
      <SectionHeader
        title="Our Esteemed Coaching Staff"
        subtitle="They've mastered the art of the low strike rate, the slow ball, and the passive-aggressive block. If you can survive their drills, you can survive anything."
        color="#000"
        words={['Esteemed']}
        wordsColor="#eeb115"
      />
      <div className={styles.grid}>
        {coachesData.map((coach, index) => (
          <CoachCard key={index} coach={coach} />
        ))}
      </div>
    </div>
  );
};

export default Coaches;
