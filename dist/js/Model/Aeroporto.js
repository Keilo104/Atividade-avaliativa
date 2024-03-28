export class Aeroporto {
    sigla;
    nome;
    pais;
    taxa;
    companhiaAerea;
    constructor(sigla, nome, pais, taxa, companhiaAerea) {
        this.sigla = sigla;
        this.nome = nome;
        this.pais = pais;
        this.taxa = taxa;
        this.companhiaAerea = companhiaAerea;
        companhiaAerea.addAeroporto(this);
    }
    getSigla() {
        return this.sigla;
    }
    getNome() {
        return this.nome;
    }
    getPais() {
        return this.pais;
    }
    getTaxa() {
        return this.taxa;
    }
    getCompanhiaAerea() {
        return this.companhiaAerea;
    }
}
