import { ContaMilha } from "./ContaMilha";
import { Reserva } from "./Reserva";

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

    public creditoMilha(valor: number): void {
        this.cartaoMilha.creditarMilhas(valor);
        console.log("Milhas creditadas para o passageiro " + this.nome);
    }

    public consumoMilha(valor: number): void {
        this.cartaoMilha.consumirMilhas(valor);
        console.log("Milhas consumidas pelo passageiro " + this.nome);
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

    public fazerReserva(reserva: Reserva): void {
        this.reserva = reserva;
        this.reserva.reservar();
        console.log(`Reserva feita no nome de ${this.nome}`);
    }
}