"use strict";

import { generarEnteroAleatorio } from "./randomUtilities.js";

export const arrayAleatorio = (n, min, max) => {
  const array = [];
  for (let i = 0; i < n; i++) {
    const numero = generarEnteroAleatorio(min, max);
    array.push(numero);
  }
  return array;
};
