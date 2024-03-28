import { Passageiro } from "./Passageiro.js";
import { Time } from "./Time.js";
import { Voo } from "./Voo.js";

export class Embarque {
    private portaoEmbarque: number;
    private data: Date;
    private tempo: Time;

    private voo: Voo;

    constructor(portaoEmbarque: number, tempo: Time, voo: Voo) {
        this.portaoEmbarque = portaoEmbarque;
        this.tempo = tempo;
        this.voo = voo;

        this.data = this.voo.getData();
    }

    public iniciarCheckIn(): void {
        console.log(`Check-in no portão ${this.portaoEmbarque} foi iniciado.`);
    }

    public pararCheckIn(): void {
        console.log(`Check-in no portão ${this.portaoEmbarque} foi finalizado.`);
    }

    public atrasarVoo(): void {
        console.log(`O voo programado para ${this.data.toLocaleDateString()} está atrasado.`);
    }

    public finalizarVoo(): void {
        console.log(`O voo para a data ${this.data.toLocaleDateString()} foi finalizado.`);
    }

    public embarcarPassageiro(passageiro: Passageiro): void {
        console.log(`${passageiro.getNome()} está embarcando no voo.`);
    }

    public getPortaoEmbarque(): number {
        return this.portaoEmbarque;
    }

    public getData(): Date {
        return this.data;
    }

    public getTempo(): Time {
        return this.tempo;
    }
}