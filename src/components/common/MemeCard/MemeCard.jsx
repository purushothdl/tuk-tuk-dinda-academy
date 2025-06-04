import React from 'react';
import styles from './MemeCard.module.css';

const MemeCard = ({ onClose }) => {
  return (
    <div className={styles.popupOverlay} onClick={onClose}>
      <div className={styles.card} onClick={(e) => e.stopPropagation()}>
        <h2 className={styles.title}>Patience is a Virtue (Apparently)</h2>
        <div className={styles.imageContainer}>
          <img
            src="/assets/images/merch/cart.gif" // Replace with your image path
            alt="Meme"
            className={styles.image}
          />
        </div>
        <p className={styles.caption}>
          Your order has been triumphantly added to the cart! It will embark on its epic journey to your doorstep... eventually
        </p>
        <p className={styles.subCaption}>
          (Don't worry, it's probably faster than one of our academy's legendary innings!)
        </p>
        <button className={styles.continueButton} onClick={onClose}>
          Continue Shopping (Slowly)
        </button>
      </div>
    </div>
  );
};

export default MemeCard;
