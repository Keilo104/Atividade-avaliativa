import { Reserva } from "./Reserva.js";
export class Voo {
    tempo;
    milhas;
    constructor(tempo, milhas) {
        this.tempo = tempo;
        this.milhas = milhas;
    }
    getTempo() {
        return this.tempo;
    }
    getMilhas() {
        return this.milhas;
    }
    fazerReserva(data, passageiro) {
        const reserva = Reserva.reservar(data, passageiro, this);
        return reserva;
    }
}
