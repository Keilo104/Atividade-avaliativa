export class Passageiro {
    nome;
    cc;
    cartaoMilha;
    status;
    reserva = null;
    constructor(nome, cc, cartaoMilha, status) {
        this.nome = nome;
        this.cc = cc;
        this.cartaoMilha = cartaoMilha;
        this.status = status;
    }
    creditoMilha(valor) {
        this.cartaoMilha.creditarMilhas(valor);
        console.log("Milhas creditadas para o passageiro " + this.nome);
    }
    consumoMilha(valor) {
        this.cartaoMilha.consumirMilhas(valor);
        console.log("Milhas consumidas pelo passageiro " + this.nome);
    }
    getNome() {
        return this.nome;
    }
    getCC() {
        return this.cc;
    }
    getCartaoMilha() {
        return this.cartaoMilha;
    }
    getStatus() {
        return this.status;
    }
    getReserva() {
        return this.reserva;
    }
    fazerReserva(reserva) {
        this.reserva = reserva;
        this.reserva.reservar();
        console.log(`Reserva feita no nome de ${this.nome}`);
    }
}
