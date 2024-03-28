import { Passageiro } from "./Passageiro";
import { Reserva } from "./Reserva";

export class Voo {
    private tempo: number;
    private milhas: number;

    constructor(tempo: number, milhas: number) {
        this.tempo = tempo;
        this.milhas = milhas;
    }

    public getTempo(): number {
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