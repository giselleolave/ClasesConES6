import {Cliente} from "./cliente.js"
import {Impuesto} from "./impuestos.js"

//Crear cliente

const Cliente1 = new Cliente();
Cliente1.setNombre = "Giselle"
Cliente1.setImpuesto = {montoBrutoAnual:900000,deducciones:50000}
console.log(`El monto de impuesto a pagar anual de ${Cliente1.getNombre}: es de $`, Cliente1.calcularImpuesto());