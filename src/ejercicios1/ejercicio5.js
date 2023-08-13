"use strict";

const hola = "hola";

const aloha = "aloha";

const computadora = "computadora";

const concat = (a, b, c) => {
  return a + " " + b + " " + c + " " + "fin";
};

const imprimirMensaje = (mensaje) => {
  console.log(mensaje);
};

const message = concat(hola, aloha, computadora);
imprimirMensaje(message);
