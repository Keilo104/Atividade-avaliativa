import { Passageiro } from "./Passageiro.js";
import { Voo } from "./Voo.js";

export class Reserva {
    private data: Date;
    private milhas: number;

    private passageiro: Passageiro;
    private voo: Voo;

    private constructor(data: Date, passageiro: Passageiro, voo: Voo) {
        this.data = data;

        this.passageiro = passageiro;
        this.voo = voo;

        this.milhas = voo.getMilhas();
    }

    public static reservar(data: Date, passageiro: Passageiro, voo: Voo): Reserva {
        const reserva: Reserva = new Reserva(data, passageiro, voo);

        console.log(`Voo reservado para a data ${reserva.data.toLocaleDateString()}`);

        return reserva;
    }

    public pagar(): void {
        console.log(`Voo pago, ${this.passageiro.getNome()} ganhou milhas.`);
        this.passageiro.creditoMilha(this);
    }

    public cancelar(): void {
        console.log(`Voo cancelado, ${this.passageiro.getNome()} perdeu milhas.`);
        this.passageiro.consumoMilha(this);
    }

    public alterar(dataNova: Date): void {
        this.data = dataNova;
        console.log(`Voo alterado para ${this.data.toLocaleDateString()}`);
    }

    public getData(): Date {
        return this.data;
    }

    public getMilhas(): number {
        return this.milhas;
    }
}