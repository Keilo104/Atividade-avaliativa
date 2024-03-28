import { Passageiro } from "./Passageiro.js";
import { Reserva } from "./Reserva.js";
import { Time } from "./Time.js";

export class Voo {
    private tempo: Time;
    private milhas: number;

    constructor(tempo: Time, milhas: number) {
        this.tempo = tempo;
        this.milhas = milhas;
    }

    public getTempo(): Time {
        return this.tempo;
    }

    public getMilhas(): number {
        return this.milhas;
    }

    public fazerReserva(data: Date, passageiro: Passageiro): Reserva {
        const reserva = Reserva.reservar(data, passageiro, this);

        return reserva;
    }
}