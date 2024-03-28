import { CompanhiaAerea } from "./CompanhiaAerea";

export class Aeroporto {
    private sigla: string;
    private nome: string;
    private pais: string;
    private taxa: number;

    private companhiaAerea: CompanhiaAerea;

    constructor(sigla: string, nome: string, pais: string, taxa: number, companhiaAerea: CompanhiaAerea) {
        this.sigla = sigla;
        this.nome = nome;
        this.pais = pais;
        this.taxa = taxa;

        this.companhiaAerea = companhiaAerea;
        companhiaAerea.addAeroporto(this);
    }

    public getSigla(): string {
        return this.sigla;
    }

    public getNome(): string {
        return this.nome;
    }

    public getPais(): string {
        return this.pais;
    }

    public getTaxa(): number {
        return this.taxa;
    }

    public getCompanhiaAerea(): CompanhiaAerea {
        return this.companhiaAerea;
    }
}
