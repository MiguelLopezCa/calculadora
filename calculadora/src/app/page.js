"use client";
import React, { useState } from 'react';
import styles from './page.css';

const CalculatorComponent = () => {
  const [input, setInput] = useState('');

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
  const calcularPorcentaje = () => {
    try {
      const resultado = eval(input);
      const porcentaje = (resultado * 0.01).toString(); // Dividir por 100 para obtener el porcentaje
      setInput(porcentaje);
    } catch (error) {
      setInput('Error');
    }
  };
  
  const calcularResultado = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  const borrar = () => {
    setInput('');
  };

  return (
    <main class="todo">
      <header class="cabecera">
        <label class="label">Calculadora</label>
        <input class="re" type="text" value={input} readOnly />
      </header>
      
      <nav class="numeros">
            <button class="button7" onClick={agregarSiete}>7</button>
            <button class="button8" onClick={agregarOcho}>8</button>
            <button class="button9" onClick={agregarNueve}>9</button>
            <button class="button4" onClick={agregarCuatro}>4</button>
            <button class="button5" onClick={agregarCinco}>5</button>
            <button class="button6" onClick={agregarSeis}>6</button>
            <button class="button1" onClick={agregarUno}>1</button>
            <button class="button2" onClick={agregarDos}>2</button>
            <button class="button3" onClick={agregarTres}>3</button>
            <button class="button0" onClick={agregarCero}>0</button>
        </nav>
        <section class="operaciones">
              <button class="buttonPor" onClick={calcularPorcentaje}>%</button>
              <button class="buttonMas" onClick={sumar}>+</button>
              <button class="buttonMenos" onClick={restar}>-</button>
              <button class="buttonMul" onClick={multiplicar}>*</button>
              <button class="buttonDiv" onClick={dividir}>/</button>
              <button class="buttonRes" onClick={calcularResultado}>=</button>
              <button class="buttonBor" onClick={borrar}>C</button>
        </section>
    </main>
  );
};

export default CalculatorComponent;
