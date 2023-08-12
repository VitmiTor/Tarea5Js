"use strict";

const {
  generarDecimalAleatorio,
  generarEnteroAleatorio,
} = require("../utilities/randomUtilities");
const calcularMediaGeometrica = (a, b, c, d) => {
  return Math.sqrt(Math.sqrt(a * b * c * d));
};

const imprimirMensaje = (a, b, c, d, mediaGeometrica) => {
  console.log(
    `La media geometrica de los numeros ${a},${b},${c},${d} es
     ${mediaGeometrica.toFixed(4)}`
  );
};

const min = 100;
const max = 999;

const a = generarEnteroAleatorio(min, max);
const b = generarEnteroAleatorio(min, max);
const c = generarEnteroAleatorio(min, max);
const d = generarEnteroAleatorio(min, max);

const mediaGeometrica = calcularMediaGeometrica(a, b, c, d);
imprimirMensaje(a, b, c, d, mediaGeometrica);
