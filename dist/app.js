"use strict";

var _cliente = require("./cliente.js");
var _impuestos = require("./impuestos.js");
//Crear cliente

var Cliente1 = new _cliente.Cliente();
Cliente1.setNombre = "Giselle";
Cliente1.setImpuesto = {
  montoBrutoAnual: 900000,
  deducciones: 50000
};
console.log("El monto de impuesto a pagar anual de ".concat(Cliente1.getNombre, ": es de $"), Cliente1.calcularImpuesto());