"use strict";

import { generarEnteroAleatorio } from "../utilities/randomUtilities.js";
import { arrayAleatorio } from "../utilities/arrayUtiliites.js";
import { esCapicua } from "../utilities/algorithmsUtilities.js";

const poblarArrays = (arrayNuevo, arrayCapicua, arrayNotCapicua) => {
  arrayNuevo.forEach((element) => {
    if (esCapicua(element)) {
      arrayCapicua.push(element);
    } else {
      arrayNotCapicua.push(element);
    }
  });
};

const imprimirMensaje = (arrayCapicuas, arrayNotCapicuas) => {
  console.log(arrayCapicuas);
  console.log(arrayNotCapicuas);
  console.log(
    `el array original tiene de numeros capicuas ${arrayCapicuas.length}`
  );
  console.log(`el array original tiene no capicuas ${arrayNotCapicuas}`);
};

const tam = generarEnteroAleatorio(1, 10);
const arrayNuevo = arrayAleatorio(tam, 100, 10000);
const arrayCapicua = [];
const arrayNotCapicua = [];
poblarArrays(arrayNuevo, arrayCapicua, arrayNotCapicua);
imprimirMensaje(arrayCapicua, arrayNotCapicua);
