import { ContaMilha } from "./ContaMilha.js";
import { Reserva } from "./Reserva.js";

export class Passageiro {
    private nome: string;
    private cc: string;
    private cartaoMilha: ContaMilha;
    private status: string;
    private reserva: Reserva | null = null;

    constructor(nome: string, cc: string, cartaoMilha: ContaMilha, status: string) {
        this.nome = nome;
        this.cc = cc;
        this.cartaoMilha = cartaoMilha;
        this.status = status;
    }

    public creditoMilha(reserva: Reserva): void {
        this.cartaoMilha.creditarMilhas(reserva.getMilhas());
        console.log(`${reserva.getMilhas()} milhas creditadas para o passageiro ${this.nome}, total: ${this.cartaoMilha.getTotalMilhas()}`);
    }

    public consumoMilha(reserva: Reserva): void {
        const retorno: boolean = this.cartaoMilha.consumirMilhas(reserva.getMilhas());

        if (retorno) { 
            console.log(`${reserva.getMilhas()} milhas consumidas do passageiro ${this.nome}, total: ${this.cartaoMilha.getTotalMilhas()}`);
        } else {
            console.log(`Não há milhas suficientes para o consumo.`);
        }
    }

    public getNome(): string {
        return this.nome;
    }

    public getCC(): string {
        return this.cc;
    }

    public getCartaoMilha(): ContaMilha {
        return this.cartaoMilha;
    }

    public getStatus(): string {
        return this.status;
    }

    public getReserva(): Reserva | null {
        return this.reserva;
    }
}