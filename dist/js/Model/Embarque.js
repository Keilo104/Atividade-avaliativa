export class Embarque {
    portaoEmbarque;
    data;
    tempo;
    voo;
    constructor(portaoEmbarque, tempo, voo) {
        this.portaoEmbarque = portaoEmbarque;
        this.tempo = tempo;
        this.voo = voo;
        this.data = this.voo.getData();
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
