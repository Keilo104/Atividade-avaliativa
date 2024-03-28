import { ContaMilha } from "./Model/ContaMilha.js";
import { Embarque } from "./Model/Embarque.js";
import { Passageiro } from "./Model/Passageiro.js";
import { Reserva } from "./Model/Reserva.js";
import { Voo } from "./Model/Voo.js";

const contaMilhas01: ContaMilha = new ContaMilha("1234567890", 15000, 1);
const passageiro1: Passageiro = new Passageiro("Dan Ferri", "D130575", contaMilhas01, "Ativo");
console.log(passageiro1);

const contaMilhas02: ContaMilha = new ContaMilha("1234567890", 15000, 1);
const passageiro2: Passageiro = new Passageiro("João", "J01020304", contaMilhas02, "Ativo");
console.log(passageiro2);

const contaMilhas03: ContaMilha = new ContaMilha("1234567890", 15000, 1);
const passageiro3: Passageiro = new Passageiro("Tonyzito", "T09080706", contaMilhas03, "Ativo");
console.log(passageiro3);

const dataVoo: Date = new Date(2024, 4, 20);
console.log(dataVoo);

// const tempoVoo: Date = new Date(); 
const voo1 = new Voo(1, 500); //não soube lidar com o tipo Time, substitui por number pra testar -> precisa arrumar

const reservaPassageiro1: Reserva = voo1.fazerReserva(dataVoo, passageiro1);

// reservaPassageiro1.reservar();
reservaPassageiro1.pagar();
passageiro1.creditoMilha(500);

const embarquePassageiro1 = new Embarque(13, dataVoo, 4); //não soube lidar com o tipo Time, substitui por number pra testar -> precisa arrumar
embarquePassageiro1.iniciarCheckIn();
embarquePassageiro1.atrasarVoo();
embarquePassageiro1.embarcarPassageiro(passageiro1);
