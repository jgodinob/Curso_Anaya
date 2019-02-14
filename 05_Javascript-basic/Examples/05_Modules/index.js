import { pi, e, log2 } from './pi-module.js';
import validateEmail from './validate-email-function.js';
import * as risas from './risas.js';
console.log(pi);
console.log(e);
console.log(log2);
/* En este archivo puedo tener código Javascript
 que no exporto... es como código privado del módulo */
var variableLocalPrivada = 222;

risas.reir();
risas.reirFuerte();
risas.reirSuave();