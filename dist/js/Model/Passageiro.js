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
    creditoMilha(reserva) {
        this.cartaoMilha.creditarMilhas(reserva.getMilhas());
        console.log(`${reserva.getMilhas()} milhas creditadas para o passageiro ${this.nome}, total: ${this.cartaoMilha.getTotalMilhas()}`);
    }
    consumoMilha(reserva) {
        const retorno = this.cartaoMilha.consumirMilhas(reserva.getMilhas());
        if (retorno) {
            console.log(`${reserva.getMilhas()} milhas consumidas do passageiro ${this.nome}, total: ${this.cartaoMilha.getTotalMilhas()}`);
        }
        else {
            console.log(`Não há milhas suficientes para o consumo.`);
        }
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
}
