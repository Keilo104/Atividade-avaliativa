import { Voo } from "./Voo.js";
export class VooConexao extends Voo {
    conexaoArray = new Array();
    constructor(tempo, milhas, data, aeroportoOrigem, aeroportoDestino, ...conexoes) {
        super(tempo, milhas, data, aeroportoOrigem, aeroportoDestino);
        for (let i = 0; i < conexoes.length; i++) {
            this.conexaoArray.push(conexoes[i]);
        }
    }
    addConexao(conexao) {
        this.conexaoArray.push(conexao);
    }
}
