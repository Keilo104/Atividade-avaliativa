import { Aeroporto } from "./Model/Aeroporto.js";
import { CompanhiaAerea } from "./Model/CompanhiaAerea.js";
import { ContaMilha } from "./Model/ContaMilha.js";
import { Passageiro } from "./Model/Passageiro.js";
import { Reserva } from "./Model/Reserva.js";
import { Time } from "./Model/Time.js";
import { Voo } from "./Model/Voo.js";
import { VooConexao } from "./Model/VooConexao.js";

const contaMilhas01: ContaMilha = new ContaMilha("1234567890", 15000, 1);
const passageiro1: Passageiro = new Passageiro("Dan Ferri", "D130575", contaMilhas01, "Ativo");
// console.log(passageiro1);

const contaMilhas02: ContaMilha = new ContaMilha("1234567890", 15000, 1);
const passageiro2: Passageiro = new Passageiro("João", "J01020304", contaMilhas02, "Ativo");
// console.log(passageiro2);

const contaMilhas03: ContaMilha = new ContaMilha("1234567890", 15000, 1);
const passageiro3: Passageiro = new Passageiro("Tonyzito", "T09080706", contaMilhas03, "Ativo");
// console.log(passageiro3);

const companhiaAerea1: CompanhiaAerea = new CompanhiaAerea("Azul", "001");
const aeroporto1: Aeroporto = new Aeroporto("001", "aeroporto muito legal", "Brazil", 30, companhiaAerea1);

const companhiaAerea2: CompanhiaAerea = new CompanhiaAerea("Tam", "002");
const aeroporto2: Aeroporto = new Aeroporto("002", "segundo melhor aeroporto", "França", 15000, companhiaAerea2);

const dataVoo1: Date = new Date(2024, 4, 20);
const tempoVoo1: Time = new Time(1, 0, 0);
// console.log(dataVoo);

const voo1 = new Voo(tempoVoo1, 500, dataVoo1, aeroporto1, aeroporto2);

const reservaPassageiro1: Reserva = voo1.fazerReserva(passageiro1);

// reservaPassageiro1.reservar();
reservaPassageiro1.pagar();

const tempoEmbarque = new Time(4, 0, 0);
const embarquePassageiro1 = voo1.gerarEmbarque(13, tempoEmbarque);
embarquePassageiro1.iniciarCheckIn();
embarquePassageiro1.atrasarVoo();
embarquePassageiro1.embarcarPassageiro(passageiro1);

const dataVoo2: Date = new Date(2024, 4, 20);
const tempoVoo2: Time = new Time(1, 0, 0);
const vooConexao1 = new VooConexao(tempoVoo2, 1500, dataVoo2, aeroporto2, aeroporto1, "Paris", "Guarulhos", "Campinas");

// vooConexao1.addConexao("Paris");
// vooConexao1.addConexao("Guarulhos");
// vooConexao1.addConexao("Campinas");

// console.log(vooConexao1);
