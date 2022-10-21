/*Você é o dono da cantina e deseja iniciar a venda de cachorro quentes.
Um cachorro quente custa R$8,00. Se comprar dois, fica R$15,00 (oportunidade de ouro).
Faça um algoritmo que receba um pedido nesta cantina;
Você deve adicionar uma lista de produtos que já foram vendidos;
Você deve criar um controle de caixa, para ver quanto entrou de dinheiro;*/
let lista = []
let caixa = 0
let comando =  0
while(comando != 4){
    comando = prompt("Escolha a opcao desejada: \n1 - comprar cachorro quente\n2 - Lista de produtos vendidos\n3 - controle de caixa \n4 - sair do programa")

    if(comando == 1){
        let quantidade = prompt ("insira a quantidade de cachorro quente voce quer comprar")
        lista.push(quantidade + " cachorro quente")
        while(quantidade >= 2){
            caixa = caixa + 15.00
            quantidade = quantidade - 2
        }
        if(quantidade > 0){
            caixa = caixa + 8.0
        }
    }
    else if(comando == 2){
        alert(lista)
    }
    else if(comando == 3){
        alert(caixa)
    }
    else if(comando == 4){
        alert("ate logo")
    }
    else{
        alert("voce digitou um comando errado, tente novamente")
    }
}