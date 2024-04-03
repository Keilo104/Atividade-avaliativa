export class CompanhiaAerea {
    nome;
    sigla;
    aeroportoArray = new Array();
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
    addAeroporto(aeroporto) {
        this.aeroportoArray.push(aeroporto);
    }
}
