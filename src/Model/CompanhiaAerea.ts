import { Aeroporto } from "./Aeroporto.js";

export class CompanhiaAerea {
    private nome: string;
    private sigla: string;

    private aeroportoArray: Array<Aeroporto> = new Array<Aeroporto>();

    constructor(nome: string, sigla: string) {
        this.nome = nome;
        this.sigla = sigla;
    }

    public getNome(): string {
        return this.nome;
    }

    public getSigla(): string {
        return this.sigla;
    }

    public addAeroporto(aeroporto: Aeroporto): void {
        this.aeroportoArray.push(aeroporto);
    }
}