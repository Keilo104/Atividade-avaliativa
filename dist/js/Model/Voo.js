import { Embarque } from "./Embarque.js";
import { Reserva } from "./Reserva.js";
export class Voo {
    tempo;
    milhas;
    data;
    aeroportoOrigem;
    aeroportoDestino;
    embarque = null;
    constructor(tempo, milhas, data, aeroportoOrigem, aeroportoDestino) {
        this.tempo = tempo;
        this.milhas = milhas;
        this.data = data;
        this.aeroportoOrigem = aeroportoOrigem;
        this.aeroportoDestino = aeroportoDestino;
    }
    getTempo() {
        return this.tempo;
    }
    getMilhas() {
        return this.milhas;
    }
    getAeroportoOrigem() {
        return this.aeroportoOrigem;
    }
    getAeroportoDestino() {
        return this.aeroportoDestino;
    }
    getData() {
        return this.data;
    }
    getEmbarque() {
        return this.embarque;
    }
    gerarEmbarque(portaoEmbarque, tempoVoo) {
        if (this.embarque == null) {
            const embarque = new Embarque(portaoEmbarque, tempoVoo, this);
            this.embarque = embarque;
        }
        else {
            console.log(`Este voo já tem um embarque.`);
        }
        return this.embarque;
    }
    fazerReserva(passageiro) {
        const reserva = Reserva.reservar(this.data, passageiro, this);
        return reserva;
    }
}
