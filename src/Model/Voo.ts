import { Aeroporto } from "./Aeroporto.js";
import { Embarque } from "./Embarque.js";
import { Passageiro } from "./Passageiro.js";
import { Reserva } from "./Reserva.js";
import { Time } from "./Time.js";

export class Voo {
    private tempo: Time;
    private milhas: number;
    private data: Date;

    private aeroportoOrigem: Aeroporto;
    private aeroportoDestino: Aeroporto;
    private embarque: Embarque | null = null;

    constructor(tempo: Time, milhas: number, data: Date, aeroportoOrigem: Aeroporto, aeroportoDestino: Aeroporto) {
        this.tempo = tempo;
        this.milhas = milhas;
        this.data = data;

        this.aeroportoOrigem = aeroportoOrigem;
        this.aeroportoDestino = aeroportoDestino;
    }

    public getTempo(): Time {
        return this.tempo;
    }

    public getMilhas(): number {
        return this.milhas;
    }

    public getAeroportoOrigem(): Aeroporto {
        return this.aeroportoOrigem;
    }
    
    public getAeroportoDestino(): Aeroporto {
        return this.aeroportoDestino;
    }

    public getData(): Date {
        return this.data;
    }

    public getEmbarque(): Embarque | null {
        return this.embarque;
    }

    public gerarEmbarque(portaoEmbarque: number, tempoVoo: Time): Embarque {
        if(this.embarque == null) {
            const embarque: Embarque = new Embarque(portaoEmbarque, tempoVoo, this);
            this.embarque = embarque;
        } else {
            console.log(`Este voo já tem um embarque.`);
        }

        return this.embarque;
    }

    public fazerReserva(passageiro: Passageiro): Reserva {
        const reserva = Reserva.reservar(this.data, passageiro, this);

        return reserva;
    }
}