"use strict";

import {
  generarEnteroAleatorio,
  generarDecimalAleatorio,
} from "../utilities/randomUtilities.js";

const calcularHipotenusa = (ladoA, ladoB) => {
  const ladoACuadrado = Math.pow(ladoA, 2);
  const ladoBCuadrado = Math.pow(ladoB, 2);
  return Math.sqrt(ladoACuadrado + ladoBCuadrado);
};

const imprimirMensaje = (ladoA, ladoB, cateto) => {
  console.log(
    `La hipotenusa de los lados ${ladoA.toFixed(4)} y 
    ${ladoB.toFixed(4)} es ${cateto.toFixed(2)}`
  );
};

const min = 1;
const max = 50;

const ladoA = generarDecimalAleatorio(min, max);
const ladoB = generarDecimalAleatorio(min, max);

const hipotenusa = calcularHipotenusa(ladoA, ladoB);
imprimirMensaje(ladoA, ladoB, hipotenusa);
