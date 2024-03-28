export class CompanhiaAerea {
    nome;
    sigla;
    constructor(nome, sigla) {
        this.nome = nome;
        this.sigla = sigla;
    }
    getNome() {
        return this.nome;
    }
    getSigla() {
        return this.sigla;
    }
}
