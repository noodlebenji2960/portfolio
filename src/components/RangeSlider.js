// RangeSlider.js

import React, { useState, useEffect, useRef } from 'react';
import styles from '../styles/modules/RangeSlider.module.css';

const RangeSlider = ({ icon, value, setValue, min, max }) => {
const [mouseDown, setMouseDown]=useState(false)
const cursorPos = useRef({
    x: 0, y:0
})
const[newValue, setNewValue]=useState(value)

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleMouseMove=(e)=>{
    cursorPos.current={
        x:e.clientX,
        y:e.clientY
    }

    const newValue = e.clientX/window.innerWidth*100
    setNewValue(newValue*36/10)
  }

  const handleMousedown =(e) =>{
    setMouseDown(true)
  }

  const handleMouseUp=(e)=>{
    setMouseDown(false)
    setValue(newValue)
  }

  useEffect(()=>{
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  },[])

  useEffect(()=>{
    console.log(newValue)
  })

  return (
    <div className={styles.dialSlider} onMouseDown={handleMousedown} onMouseUp={handleMouseUp} draggable={false}>
      <input
        type="range"
        min={min}
        max={max}
        step="1"
        value={value}
        onChange={handleChange}
      />
      <div className={styles.sliderDial}>
        <div className={styles.dialNeedle} style={{transform: `translateX(15px) translateY(15px) rotate(${mouseDown ? Math.round(newValue/36*10) : (Math.round(value))}deg)`}}/>
      </div>
      <div className={styles.sliderValue}>
        {icon ? icon : `${Math.round(newValue/36*10)}%`}
      </div>
    </div>
  );
};

export default RangeSlider;
