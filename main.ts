import { Omnivoro } from "./omnivoro";
import { Carnivoro } from "./carnivoro";
import { Herviboro } from "./herviboro";

let mamifero1 = new Herviboro("vaca", "vaquita", 200);
let mamifero2 = new Herviboro("cabra", "cabrita", 25);
let mamifero3 = new Herviboro("jirafa", "sabradios", 150);
let mamifero4 = new Carnivoro("leon", "michi grande", 30);
let mamifero5 = new Carnivoro("tiburon", "pescadito", 75);
let mamifero6 = new Carnivoro("aguila", "pajarito grande", 15);
let mamifero7 = new Omnivoro("persona", "humnano", 75);
let mamifero8 = new Omnivoro("oso yogui", "osito", 200);
let mamifero9 = new Omnivoro("gallina", "asdas", 5);

let mamiferos = [mamifero1, mamifero2, mamifero3, mamifero4, mamifero5, mamifero6, mamifero7, mamifero8, mamifero9];

function mostrarMamiferos() {
    function printLine(){
        console.log("=====================================================================================================================================");
    };
    printLine();
    console.log("                               Bienvenido a mi primer ENCARTA hoy le mostraremos ejemplos de mamiferos");
    
    for (let i = 0; i < mamiferos.length - 1; i++) {
        printLine();
        console.log("el/la: " + "'" + mamiferos[i].getNombre() + "'" + " es un mamifero, pertenece a la especie: " + mamiferos[i].getEspecie() + ", su peso promedio es de: " + mamiferos[i].getPeso() + "kg y se alimenta de: " + mamiferos[i].getAlimento() + ".");
    }
};

mostrarMamiferos();