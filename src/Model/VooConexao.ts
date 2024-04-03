import { Aeroporto } from "./Aeroporto.js";
import { Time } from "./Time.js";
import { Voo } from "./Voo.js";

export class VooConexao extends Voo {
    private conexaoArray: Array<string> = new Array<string>();

    constructor(tempo: Time, milhas: number, data: Date, aeroportoOrigem: Aeroporto, aeroportoDestino: Aeroporto, ...conexoes: string[]) {
        super(tempo, milhas, data, aeroportoOrigem, aeroportoDestino);

        for(let i: number = 0; i < conexoes.length; i++) {
            this.conexaoArray.push(conexoes[i]);
        }
    }

    public addConexao(conexao: string) {
        this.conexaoArray.push(conexao);
    }
}