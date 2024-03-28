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
        console.log(`${valor} milhas creditadas para o passageiro ${this.nome}, total: ${this.cartaoMilha.getTotalMilhas}`);
    }

    public consumoMilha(valor: number): void {
        const retorno: boolean = this.cartaoMilha.consumirMilhas(valor);

        if (retorno) { 
            console.log(`${valor} milhas consumidas do passageiro ${this.nome}, total: ${this.cartaoMilha.getTotalMilhas}`);
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