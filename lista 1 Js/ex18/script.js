/*18.	Faça um algoritmo que calcule e mostre a área de um trapézio. Sabe-se que: A = (base maior + base menor)* altura)/2 ;*/

const baseMaior = parseFloat(prompt("Digite a base maior"));
const baseMenor = parseFloat(prompt("Digite a base menor"));
const altura = parseFloat(prompt("Digite a altura"));

const area = (((baseMaior + baseMenor) * altura) / 2);

console.log("A area é de: " + area);

