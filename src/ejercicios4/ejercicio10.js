"use strict";

import arrayPosiblesCapicuas from "../files/listaPosiblesCapicua.json" assert { type: "json" };

const invertirArray = (arrayCapicuas) => {
  const arrayInverso = [];

  for (let i = 0; i < arrayCapicuas.length; i++) {
    let aux = arrayCapicuas[i];
    let inverso = 0;
    while (aux != 0) {
      const residuo = aux % 10;
      inverso = inverso * 10 + residuo;
      aux = Math.trunc(aux / 10);
    }
    arrayInverso.push(inverso);
  }
  return arrayInverso;
};

const esCapicua = (arrayPosiblesCapicuas, arrayInverso) => {
  let capicua = true;
  for (let i = 0; i < arrayPosiblesCapicuas.length; i++) {
    if (arrayPosiblesCapicuas[i] !== arrayInverso[i]) {
      return false;
    }
  }
  return true;
};

const imprimirMensaje = (esCapicua) => {
  console.log(`El array leido del json es capicua ${esCapicua}`);
};
const inverso = invertirArray(arrayPosiblesCapicuas);

imprimirMensaje(esCapicua(arrayPosiblesCapicuas, inverso));
