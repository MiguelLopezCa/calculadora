"use client";
import React, { useState } from 'react';
import styles from './page.css';

const CalculatorComponent = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const hacerClick = (value) => {
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
        <button className={styles.numeric} onClick={() => hacerClick('7')}>7</button>
        <button className={styles.numeric} onClick={() => hacerClick('8')}>8</button>
        <button className={styles.numeric} onClick={() => hacerClick('9')}>9</button>
        <button className={styles.numeric} onClick={() => hacerClick('4')}>4</button>
        <button className={styles.numeric} onClick={() => hacerClick('5')}>5</button>
        <button className={styles.numeric} onClick={() => hacerClick('6')}>6</button>  
        <button className={styles.numeric} onClick={() => hacerClick('1')}>1</button>
        <button className={styles.numeric} onClick={() => hacerClick('2')}>2</button>
        <button className={styles.numeric} onClick={() => hacerClick('3')}>3</button>
      </div>

      <div className={styles.operationsContainer}>
        <button className={styles.operation} onClick={() => hacerClick('C')}>C</button>
        <button className={styles.operation} onClick={() => hacerClick('%')}>%</button>
        <button className={styles.operation} onClick={() => hacerClick('+')}>+</button>
        <button className={styles.operation} onClick={() => hacerClick('-')}>-</button>
        <button className={styles.operation} onClick={() => hacerClick('/')}>/</button>
        <button className={styles.operation} onClick={() => hacerClick('*')}>*</button>
        <button className={styles.operation} onClick={() => hacerClick('=')}>=</button>
      </div>
    </div>
  );
};

export default CalculatorComponent;
