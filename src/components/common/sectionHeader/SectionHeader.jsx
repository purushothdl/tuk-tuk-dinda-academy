import React from 'react';
import styles from './SectionHeader.module.css';

const SectionHeader = ({
  title,
  subtitle,
  color,
  strikeWord,
  words = [],
  wordsColor = '#eeb115'
}) => {
  // Function to highlight specific words or phrases
  const highlightWords = (text) => {
    if (!words.length) return text;
    const pattern = new RegExp(`(${words.join('|')})`, 'gi');
    return text.split(pattern).map((segment, index) => {
      if (words.some(w => w.toLowerCase() === segment.toLowerCase())) {
        return (
          <span key={index} style={{ color: wordsColor }}>
            {segment}
          </span>
        );
      }
      return segment;
    });
  };

  let renderedTitle;
  if (strikeWord && title.includes(strikeWord)) {
    const [before, after] = title.split(strikeWord, 2);
    renderedTitle = (
      <>
        {highlightWords(before)}
        <span className={styles.strikeThrough}>{strikeWord}</span>
        {highlightWords(after)}
      </>
    );
  } else {
    renderedTitle = highlightWords(title);
  }

  return (
    <div className={styles.container} style={{ color }}>
      <h1 className={styles.title}>{renderedTitle}</h1>
      <p className={styles.subtitle}>{highlightWords(subtitle)}</p>
    </div>
  );
};

export default SectionHeader;
