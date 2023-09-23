"use client";
import React, { useState } from 'react';
import styles from './page.css';

const CalculatorComponent = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const agregarCero = () => {
    setInput((prevInput) => prevInput + '0');
  };
  
  const agregarUno = () => {
    setInput((prevInput) => prevInput + '1');
  };
  
  const agregarDos = () => {
    setInput((prevInput) => prevInput + '2');
  };
  
  const agregarTres = () => {
    setInput((prevInput) => prevInput + '3');
  };
  
  const agregarCuatro = () => {
    setInput((prevInput) => prevInput + '4');
  };
  
  const agregarCinco = () => {
    setInput((prevInput) => prevInput + '5');
  };
  
  const agregarSeis = () => {
    setInput((prevInput) => prevInput + '6');
  };
  
  const agregarSiete = () => {
    setInput((prevInput) => prevInput + '7');
  };
  
  const agregarOcho = () => {
    setInput((prevInput) => prevInput + '8');
  };
  
  const agregarNueve = () => {
    setInput((prevInput) => prevInput + '9');
  };
  const sumar = () => {
    if (input !== '') {
      setInput((prevInput) => prevInput + '+');
    }
  };
  
  const restar = () => {
    if (input !== '') {
      setInput((prevInput) => prevInput + '-');
    }
  };
  
  const multiplicar = () => {
    if (input !== '') {
      setInput((prevInput) => prevInput + '*');
    }
  };
  
  const dividir = () => {
    if (input !== '') {
      setInput((prevInput) => prevInput + '/');
    }
  };
  
  const calcularResultado = () => {
    try {
      setResult(eval(input).toString());
    } catch (error) {
      setResult('Error');
    }
  };
  
  const borrar = () => {
    setInput('');
    setResult('');
  };
  const calcularPorcentaje = () => {
    try {
      const resultado = eval(input);
      const porcentaje = resultado / 100;
      setInput(porcentaje.toString());
      setResult('');
    } catch (error) {
      setInput('Error');
      setResult('');
    }
  };
  

  return (
    <div className={styles.container}>
      <div className={styles.label}>Calculadora</div>

      <div className={styles.resultado}>
        <input type="text" value={input} readOnly />
        <div className={styles.result}>{result}</div>
      </div>
      
      <div className={styles.buttons7a9}>
        <button onClick={agregarSiete}>7</button>
        <button onClick={agregarOcho}>8</button>
        <button onClick={agregarNueve}>9</button>
      </div>

        <div className={styles.buttons4a6}>  

        <button onClick={agregarCuatro}>4</button>
        <button onClick={agregarCinco}>5</button>
        <button onClick={agregarSeis}>6</button>
        </div>

        <div className={styles.buttons1a3}>
        <button onClick={agregarUno}>1</button>
        <button onClick={agregarDos}>2</button>
        <button onClick={agregarTres}>3</button>
        </div>
        <div className={styles.button0}>
        <button onClick={agregarCero}>0</button>
        </div>

      <div className={styles.operaciones}>
        <button onClick={calcularPorcentaje}>%</button>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
        <button onClick={multiplicar}>*</button>
        <button onClick={dividir}>/</button>
        <button onClick={calcularResultado}>=</button>
        <button onClick={borrar}>C</button>
      </div>
    </div>
  );
};

export default CalculatorComponent;
