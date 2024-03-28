export class Aeroporto {
    sigla;
    nome;
    pais;
    taxa;
    constructor(sigla, nome, pais, taxa) {
        this.sigla = sigla;
        this.nome = nome;
        this.pais = pais;
        this.taxa = taxa;
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
}
