import { ContaMilha } from "./ContaMilha.js";
import { Embarque } from "./Embarque.js";
import { Passageiro } from "./Passageiro.js";
import { Reserva } from "./Reserva.js";
import { Voo } from "./Voo.js";
const contaMilhas01 = new ContaMilha("1234567890", 15000, 1);
const contaMilhas02 = new ContaMilha("1234567890", 15000, 1);
const contaMilhas03 = new ContaMilha("1234567890", 15000, 1);
const passageiro1 = new Passageiro("Dan Ferri", "D130575", contaMilhas01, "Ativo");
const passageiro2 = new Passageiro("João", "J01020304", contaMilhas02, "Ativo");
const passageiro3 = new Passageiro("Tonyzito", "T09080706", contaMilhas03, "Ativo");
console.log(passageiro1);
console.log(passageiro2);
console.log(passageiro3);
const dataVoo = new Date(2024, 4, 20);
console.log(dataVoo);
const reservaPassageiro1 = new Reserva(dataVoo);
passageiro1.fazerReserva(reservaPassageiro1);
reservaPassageiro1.reservar();
reservaPassageiro1.pagar();
passageiro1.creditoMilha(500);
const voo1 = new Voo(1, 500); //não soube lidar com o tipo Time, substitui por number pra testar -> precisa arrumar
const embarquePassageiro1 = new Embarque(13, dataVoo, 4); //não soube lidar com o tipo Time, substitui por number pra testar -> precisa arrumar
embarquePassageiro1.iniciarCheckIn();
embarquePassageiro1.atrasarVoo();
embarquePassageiro1.embarcarPassageiro(passageiro1);
