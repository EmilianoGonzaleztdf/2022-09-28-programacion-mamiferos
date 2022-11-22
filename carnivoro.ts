import { Mamifero } from "./mamifero";

export class Carnivoro extends Mamifero {
    constructor(pNombre: string, pEspecie: string, pPeso: number) {
        super(pNombre, pEspecie, pPeso);
    }
    public alimento : string = "carnes";
    // get & set
    public getAlimento() {
        return this.alimento;
    }
    public setAlimento(pAlimento): void {
        this.alimento = pAlimento;
    };
}