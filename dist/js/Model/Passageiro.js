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
        console.log(`${valor} milhas creditadas para o passageiro ${this.nome}, total: ${this.cartaoMilha.getTotalMilhas}`);
    }
    consumoMilha(valor) {
        const retorno = this.cartaoMilha.consumirMilhas(valor);
        if (retorno) {
            console.log(`${valor} milhas consumidas do passageiro ${this.nome}, total: ${this.cartaoMilha.getTotalMilhas}`);
        }
        else {
            console.log("Não há milhas suficientes para o consumo.");
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
