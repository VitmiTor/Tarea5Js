"use strict";

/**
 *
 * @param {Number} min
 * @param {Number} max
 * @returns
 */
export const generarEnteroAleatorio = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 *ß
 * @param {Number} min
 * @param {Number} max
 * @returns
 */
export const generarDecimalAleatorio = (min, max) => {
  return Math.random() * (max - min + 1) + min;
};
