/*20.	Faça um algoritmo que calcule e mostre a área de um losango. Sabe-se que: A = (diagonal_maior * diagonal_menor)/2; */

const DiagonalMaior = parseFloat(prompt("Digite a Diagonal Maior"));
const DiagonalMenor = parseFloat(prompt("Digite a Diagonal Menor"));

const area = ((DiagonalMaior * DiagonalMenor) / 2);

console.log("A area vai ser de: " + area);