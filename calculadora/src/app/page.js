"use client";
import React, { useState } from 'react';
import styles from './page.css';

const CalculatorComponent = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        setResult(eval(input).toString());
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput((prevInput) => prevInput + value);
    }
  };

  return (
  <div className={styles.container}>
  <div className={styles.label}>Calculadora</div>

  <div className={styles.display}>
    <input type="text" value={input} readOnly />
    <div className={styles.result}>{result}</div>
  </div>

  <div className={styles.buttonsContainer}>
    <button className={styles.numeric} onClick={() => handleButtonClick('7')}>7</button>
    <button className={styles.numeric} onClick={() => handleButtonClick('8')}>8</button>
    <button className={styles.numeric} onClick={() => handleButtonClick('9')}>9</button>
  </div>
  <div className={styles.buttonsContainer}>
    <button className={styles.numeric} onClick={() => handleButtonClick('4')}>4</button>
    <button className={styles.numeric} onClick={() => handleButtonClick('5')}>5</button>
    <button className={styles.numeric} onClick={() => handleButtonClick('6')}>6</button>  
  </div>
  <div className={styles.buttonsContainer}>
    <button className={styles.numeric} onClick={() => handleButtonClick('1')}>1</button>
    <button className={styles.numeric} onClick={() => handleButtonClick('2')}>2</button>
    <button className={styles.numeric} onClick={() => handleButtonClick('3')}>3</button>
  </div>
  <div className={styles.operationsContainer}>
    <button className={styles.operation} onClick={() => handleButtonClick('C')}>C</button>
    <button className={styles.operation} onClick={() => handleButtonClick('%')}>%</button>
    <button className={styles.operation} onClick={() => handleButtonClick('+')}>+</button>
    <button className={styles.operation} onClick={() => handleButtonClick('-')}>-</button>
    <button className={styles.operation} onClick={() => handleButtonClick('/')}>/</button>
    <button className={styles.operation} onClick={() => handleButtonClick('*')}>*</button>
    <button className={styles.operation} onClick={() => handleButtonClick('=')}>=</button>
  </div>
  
</div>
    
  );
};

export default CalculatorComponent;

