export class Mamifero {
    protected nombre: string;
    protected especie: string;
    protected peso: number;

    constructor(pNombre: string, pEspecie: string, pPeso: number) {
        this.nombre = pNombre;
        this.especie = pEspecie;
        this.peso = pPeso;
    }

    // get & set

    public getNombre() {
        return this.nombre;
    }
    public setNombre(pNombre: string): void {
        this.nombre = pNombre;
    }
    public getEspecie() {
        return this.especie;
    }
    public setEspecie(pEspecie: string): void {
        this.especie = pEspecie;
    }
    public getPeso() {
        return this.peso;
    }
    public setPeso(pPeso: number): void {
        this.peso = pPeso;
    }
}
