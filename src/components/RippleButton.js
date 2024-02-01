import React, { useState, useEffect } from 'react';
import styles from '../styles/modules/RippleButton.module.css';

const RippleButton = ({ onClick, children, className, alt }) => {
  const [ripples, setRipples] = useState([]);

  const handleAnimationEnd = (id) => {
    setRipples((prevRipples) => prevRipples.filter((ripple) => ripple.id !== id));
  };

  const handleClick = (e) => {
    e.preventDefault()
    onClick && onClick()
    const rippleContainer = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rippleContainer.left - 10;
    const y = e.clientY - rippleContainer.top - 10;

    const newRipple = {
      x,
      y,
      id: Date.now(),
    };
    setRipples((prevRipples) => [...prevRipples, newRipple]);
  };

  return (<>
    <div className={`${className ? className : ""} ${styles.rippleContainer}`} onClick={handleClick} >
      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          className={`${styles.ripple} ${alt ? styles.altBackground : ""}`}
          style={{ left: `${ripple.x}px`, top: `${ripple.y}px` }}
          onAnimationEnd={() => handleAnimationEnd(ripple.id)}
        />
      ))}
      <div>
        {children}
      </div>
    </div>
  </>);
};

export default RippleButton;
