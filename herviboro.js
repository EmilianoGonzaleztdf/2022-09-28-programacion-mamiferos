"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Herviboro = void 0;
var mamifero_1 = require("./mamifero");
var Herviboro = /** @class */ (function (_super) {
    __extends(Herviboro, _super);
    function Herviboro(pNombre, pEspecie, pPeso) {
        var _this = _super.call(this, pNombre, pEspecie, pPeso) || this;
        _this.alimento = "vegetales";
        return _this;
    }
    // get & set
    Herviboro.prototype.getAlimento = function () {
        return this.alimento;
    };
    Herviboro.prototype.setAlimento = function (pAlimento) {
        this.alimento = pAlimento;
    };
    ;
    return Herviboro;
}(mamifero_1.Mamifero));
exports.Herviboro = Herviboro;
