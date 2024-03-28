export class Embarque {
    portaoEmbarque;
    data;
    tempo;
    constructor(portaoEmbarque, data, tempo) {
        this.portaoEmbarque = portaoEmbarque;
        this.data = data;
        this.tempo = tempo;
    }
    iniciarCheckIn() {
        console.log(`Check-in no portão ${this.portaoEmbarque} foi iniciado.`);
    }
    pararCheckIn() {
        console.log(`Check-in no portão ${this.portaoEmbarque} foi finalizado.`);
    }
    atrasarVoo() {
        console.log(`O voo programado para ${this.data.toLocaleDateString()} está atrasado.`);
    }
    finalizarVoo() {
        console.log(`O voo para a data ${this.data.toLocaleDateString()} foi finalizado.`);
    }
    embarcarPassageiro(passageiro) {
        console.log(`${passageiro.getNome()} está embarcando no voo.`);
    }
    getPortaoEmbarque() {
        return this.portaoEmbarque;
    }
    getData() {
        return this.data;
    }
    getTempo() {
        return this.tempo;
    }
}
