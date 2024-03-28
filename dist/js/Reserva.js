export class Reserva {
    data;
    constructor(data) {
        this.data = data;
    }
    reservar() {
        console.log("Voo reservado para a data " + this.data.toLocaleDateString());
    }
    pagar() {
        console.log("Voo pago");
    }
    cancelar() {
        console.log("Voo cancelado");
    }
    alterar(dataNova) {
        this.data = dataNova;
        console.log("Voo alterado para " + this.data.toLocaleDateString());
    }
    getData() {
        return this.data;
    }
}
