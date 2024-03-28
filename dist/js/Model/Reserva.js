export class Reserva {
    data;
    passageiro;
    voo;
    constructor(data, passageiro, voo) {
        this.data = data;
        this.passageiro = passageiro;
        this.voo = voo;
    }
    static reservar(data, passageiro, voo) {
        const reserva = new Reserva(data, passageiro, voo);
        console.log(`Voo reservado para a data ${reserva.data.toLocaleDateString()}`);
        return reserva;
    }
    pagar() {
        console.log(`Voo pago, ${this.passageiro.getNome()} ganhou milhas.`);
        this.passageiro.creditarMilhas(this.voo.getMilhas());
    }
    cancelar() {
        console.log(`Voo cancelado, ${this.passageiro.getNome()} perdeu milhas.`);
        this.passageiro.consumirMilhas(this.voo.getMilhas());
    }
    alterar(dataNova) {
        this.data = dataNova;
        console.log(`Voo alterado para ${this.data.toLocaleDateString()}`);
    }
    getData() {
        return this.data;
    }
}
