// src/pages/Home/Home.jsx
import React from 'react';
import HeadingSection from '../../components/sections/home/HeroSection';
import RulesSection from '../../components/sections/home/RulesSection';
import TopPerformances from '../../components/sections/home/TopPerformances';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.home}>
      <HeadingSection />
      <RulesSection />
      <TopPerformances />
    </div>
  );
};

export default Home;