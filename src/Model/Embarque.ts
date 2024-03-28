import { Passageiro } from "./Passageiro.js";

export class Embarque {
    private portaoEmbarque: number;
    private data: Date;
    private tempo: number;

    constructor(portaoEmbarque: number, data: Date, tempo: number) {
        this.portaoEmbarque = portaoEmbarque;
        this.data = data;
        this.tempo = tempo;
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

    public getTempo(): number {
        return this.tempo;
    }
}