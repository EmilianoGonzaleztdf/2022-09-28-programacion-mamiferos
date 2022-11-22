"use strict";
exports.__esModule = true;
exports.Mamifero = void 0;
var Mamifero = /** @class */ (function () {
    function Mamifero(pNombre, pEspecie, pPeso) {
        this.nombre = pNombre;
        this.especie = pEspecie;
        this.peso = pPeso;
    }
    // get & set
    Mamifero.prototype.getNombre = function () {
        return this.nombre;
    };
    Mamifero.prototype.setNombre = function (pNombre) {
        this.nombre = pNombre;
    };
    Mamifero.prototype.getEspecie = function () {
        return this.especie;
    };
    Mamifero.prototype.setEspecie = function (pEspecie) {
        this.especie = pEspecie;
    };
    Mamifero.prototype.getPeso = function () {
        return this.peso;
    };
    Mamifero.prototype.setPeso = function (pPeso) {
        this.peso = pPeso;
    };
    return Mamifero;
}());
exports.Mamifero = Mamifero;
