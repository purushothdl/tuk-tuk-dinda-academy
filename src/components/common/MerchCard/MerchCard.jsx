import React, { useState } from 'react';
import styles from './MerchCard.module.css';

const MerchCard = ({ merch, onAddToCart }) => {
  const { name, image_path, caption, price } = merch;
  const [isLoading, setIsLoading] = useState(false);

  const handleAddToCart = () => {
    setIsLoading(true); // Show loading spinner
    setTimeout(() => {
      setIsLoading(false); // Hide loading spinner
      onAddToCart(); // Trigger the popup
    }, 500); // 0.5 second delay
  };

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={image_path} alt={name} className={styles.image} />
      </div>
      <div className={styles.details}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.caption}>{caption}</p>
        <p className={styles.price}>{price}</p>
        <button className={styles.addToCartButton} onClick={handleAddToCart} disabled={isLoading}>
          {isLoading ? (
            <div className={styles.loadingSpinner}></div> // Show loading spinner
          ) : (
            'Add to Cart'
          )}
        </button>
      </div>
    </div>
  );
};

export default MerchCard;
