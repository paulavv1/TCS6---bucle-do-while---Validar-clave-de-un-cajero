'use strict'
let contador = 0;
let claveCorrecta = Number (3214);
let clv;

do {
    contador++ 
    clv = Number (prompt ("Ingrese su clave"))
}
while (clv != claveCorrecta &&  contador < 3);

if (contador == 3 && clv != claveCorrecta) {
    alert ( "Demaciados intentos Tarjeta Bloqueada ")
}
else {
    alert ("Operaciones exitosas")
}