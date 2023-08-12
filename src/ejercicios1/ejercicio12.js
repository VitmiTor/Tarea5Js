"use strict";

const {
  generarDecimalAleatorio,
  generarEnteroAleatorio,
} = require("../utilities/randomUtilities");

const numCabezas = (vacas, gallinas) => {
  return vacas + gallinas;
};

const numPatas = (vacas, gallinas) => {
  return vacas * 4 + gallinas * 2;
};

const imprimirMensaje = (cabezas, patas, vacas, gallinas) => {
  console.log(`el numero de vacas es de ${vacas} y ${gallinas} gallinas tienen ${cabezas}
                el numero de vacas es de ${vacas} y ${gallinas} gallinas tienen ${patas} patas`);
};

const min = 1;
const max = 100;

const vacas = generarEnteroAleatorio(min, max);
const gallinas = generarEnteroAleatorio(min, max);
const patas = numPatas(vacas, gallinas);
const cabezas = numCabezas(vacas, gallinas);
imprimirMensaje(cabezas, patas, vacas, gallinas);
