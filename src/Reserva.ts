export class Reserva {
    private data: Date;

    constructor(data: Date) {
        this.data = data;
    }

    public reservar(): void {
        console.log("Voo reservado para a data " + this.data.toLocaleDateString());
    }

    public pagar(): void {
        console.log("Voo pago");
    }

    public cancelar(): void {
        console.log("Voo cancelado");
    }

    public alterar(dataNova: Date): void {
        this.data = dataNova;
        console.log("Voo alterado para " + this.data.toLocaleDateString());
    }

    public getData(): Date {
        return this.data;
    }
}