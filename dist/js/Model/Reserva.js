export class Reserva {
    data;
    milhas;
    passageiro;
    voo;
    constructor(data, passageiro, voo) {
        this.data = data;
        this.passageiro = passageiro;
        this.voo = voo;
        this.milhas = voo.getMilhas();
    }
    static reservar(data, passageiro, voo) {
        const reserva = new Reserva(data, passageiro, voo);
        console.log(`Voo reservado para a data ${reserva.data.toLocaleDateString()}`);
        return reserva;
    }
    pagar() {
        console.log(`Voo pago, ${this.passageiro.getNome()} ganhou milhas.`);
        this.passageiro.creditoMilha(this);
    }
    cancelar() {
        console.log(`Voo cancelado, ${this.passageiro.getNome()} perdeu milhas.`);
        this.passageiro.consumoMilha(this);
    }
    alterar(dataNova) {
        this.data = dataNova;
        console.log(`Voo alterado para ${this.data.toLocaleDateString()}`);
    }
    getData() {
        return this.data;
    }
    getMilhas() {
        return this.milhas;
    }
}
