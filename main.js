"use strict";
exports.__esModule = true;
var omnivoro_1 = require("./omnivoro");
var carnivoro_1 = require("./carnivoro");
var herviboro_1 = require("./herviboro");
var mamifero1 = new herviboro_1.Herviboro("vaca", "vaquita", 200);
var mamifero2 = new herviboro_1.Herviboro("cabra", "cabrita", 25);
var mamifero3 = new herviboro_1.Herviboro("jirafa", "sabradios", 150);
var mamifero4 = new carnivoro_1.Carnivoro("leon", "michi grande", 30);
var mamifero5 = new carnivoro_1.Carnivoro("tiburon", "pescadito", 75);
var mamifero6 = new carnivoro_1.Carnivoro("aguila", "pajarito grande", 15);
var mamifero7 = new omnivoro_1.Omnivoro("persona", "humnano", 75);
var mamifero8 = new omnivoro_1.Omnivoro("oso yogui", "osito", 200);
var mamifero9 = new omnivoro_1.Omnivoro("gallina", "asdas", 5);
var mamiferos = [mamifero1, mamifero2, mamifero3, mamifero4, mamifero5, mamifero6, mamifero7, mamifero8, mamifero9];
function mostrarMamiferos() {
    function printLine() {
        console.log("=====================================================================================================================================");
    }
    ;
    printLine();
    console.log("                               Bienvenido a mi primer ENCARTA hoy le mostraremos ejemplos de mamiferos");
    for (var i = 0; i < mamiferos.length - 1; i++) {
        printLine();
        console.log("el/la: " + "'" + mamiferos[i].getNombre() + "'" + " es un mamifero, pertenece a la especie: " + mamiferos[i].getEspecie() + ", su peso promedio es de: " + mamiferos[i].getPeso() + "kg y se alimenta de: " + mamiferos[i].getAlimento() + ".");
    }
}
;
mostrarMamiferos();
