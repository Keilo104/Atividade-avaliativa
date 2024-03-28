export class CompanhiaAerea {
    private nome: string;
    private sigla: string;

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
}