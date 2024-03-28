export class Aeroporto {
    private sigla: string;
    private nome: string;
    private pais: string;
    private taxa: number;

    constructor(sigla: string, nome: string, pais: string, taxa: number) {
        this.sigla = sigla;
        this.nome = nome;
        this.pais = pais;
        this.taxa = taxa;
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
}
