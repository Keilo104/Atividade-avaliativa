export class ContaMilha {
    private numero: string;
    private totalMilhas: number;
    private statusMilhas: number;

    constructor(numero: string, totalMilhas: number, statusMilhas: number) {
        this.numero = numero;
        this.totalMilhas = totalMilhas;
        this.statusMilhas = statusMilhas;
    }

    public creditarMilhas(valor: number): void {
        this.totalMilhas += valor;
    }

    public consumirMilhas(valor: number): void {
        if (this.totalMilhas >= valor) {
            this.totalMilhas -= valor;
        } else {
            console.log("Não há milhas suficientes para o consumo.");
        }
    }

    public getNumero(): string {
        return this.numero;
    }

    public getTotalMilhas(): number {
        return this.totalMilhas;
    }

    public getStatusMilhas(): number {
        return this.statusMilhas;
    }
}