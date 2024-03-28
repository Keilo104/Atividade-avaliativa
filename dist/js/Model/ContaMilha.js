export class ContaMilha {
    numero;
    totalMilhas;
    statusMilhas;
    constructor(numero, totalMilhas, statusMilhas) {
        this.numero = numero;
        this.totalMilhas = totalMilhas;
        this.statusMilhas = statusMilhas;
    }
    creditarMilhas(valor) {
        this.totalMilhas += valor;
    }
    consumirMilhas(valor) {
        if (this.totalMilhas >= valor) {
            this.totalMilhas -= valor;
            return true;
        }
        return false;
    }
    getNumero() {
        return this.numero;
    }
    getTotalMilhas() {
        return this.totalMilhas;
    }
    getStatusMilhas() {
        return this.statusMilhas;
    }
}
