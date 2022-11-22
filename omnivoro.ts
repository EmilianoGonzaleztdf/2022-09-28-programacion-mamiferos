import { Mamifero } from "./mamifero";

export class Omnivoro extends Mamifero {
    constructor(pNombre: string, pEspecie: string, pPeso: number) {
        super(pNombre, pEspecie, pPeso);
    }
        public alimento : string = "carnes y vegetales";
    // get & set
    public getAlimento() {
        return this.alimento;
    }
    public setAlimento(pAlimento): void {
        this.alimento = pAlimento;
    };
}