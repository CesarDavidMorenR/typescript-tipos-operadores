import "./style.css";

// Definición de variables con tipos
const costoTotalCena: number = 120;
const costoBebidasIncluidas: number = 18;
const numeroDeAmigos: number = 6;

// Calcular el costo total de la cena sin las bebidas
const costoCenaSinBebidas: number = costoTotalCena - costoBebidasIncluidas;

// Calcular el costo que debe pagar cada comensal
const costoPorComensal: number = costoCenaSinBebidas / numeroDeAmigos;

console.log(
  `El costo total de la cena sin las bebidas es de ${costoCenaSinBebidas} €.`
);
console.log(
  `Cada uno de los ${numeroDeAmigos} amigos debe pagar ${costoPorComensal} € para dividir los costos de manera equitativa.`
);
