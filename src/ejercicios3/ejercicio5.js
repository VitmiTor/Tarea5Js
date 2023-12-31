"use strict";

import { generarEnteroAleatorio } from "../utilities/randomUtilities.js";
import { arrayAleatorio } from "../utilities/arrayUtiliites.js";

const calcularMediaGeometrica = (arrayNumbers) => {
  let producto = 1;
  arrayNumbers.forEach((element) => {
    producto *= element;
  });
  return Math.pow(producto, 1 / arrayNumbers.length);
};

const imprimirMensaje = (mediageometrica) => {
  console.log(`la media geometrica es ${mediageometrica.toFixed(5)}`);
};

const cantidadN = generarEnteroAleatorio(1, 10);
const numbers = arrayAleatorio(cantidadN, 100, 999);
const mediaGeometrica = calcularMediaGeometrica(numbers, cantidadN);
imprimirMensaje(mediaGeometrica);
