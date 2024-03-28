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

    public consumirMilhas(valor: number): boolean {
        if (this.totalMilhas >= valor) {
            this.totalMilhas -= valor;
            return true;
        }
        
        return false;
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