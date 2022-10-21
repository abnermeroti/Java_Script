/*Desenvolva uma maneira de obter um extrato individual de quantos itens foram vendidos.*/
let lista = []
let listaCQ = []
let listaMQ = []
let listaRefri = []
let caixa = 0
let comando = 0
let despesa = 0
function calculaSaldo( caixa, despesa){
    return("R$" + (caixa - despesa))
}
while(comando != 10){
    comando = prompt("Escolha uma opcao: \n1 - cachorro quente \n3 - comprar misto quente \n4 - comprar refri \n5 - lista de precos \n6 - Lista de produtos vendidos \n7 - Caixa \n8 - saldo do dia \n9 - extrato dos itens vendidos \n10 - sair do programa")
    if(comando == 1){
        let quantidade = prompt ("insira a quantidade de cachorro quente voce quer comprar")
        despesa = despesa + (quantidade * 4.5)
        lista.push(quantidade + " cachorro quente")
        listaCQ.push(quantidade )
        while(quantidade >= 2){
            caixa = caixa + 15.00
            quantidade = quantidade - 2
        }
        if(quantidade > 0){
            caixa = caixa + 8.0
        }
    }
    else if (comando == 3){
        let quantidade = prompt("insira a quantidade a ser comprado")
        despesa = despesa + (quantidade * 3.5)
        lista.push(quantidade + " misto quente")
        listaMQ.push(quantidade  )
        while(quantidade >= 2){
            caixa = caixa + 10.00
            quantidade = quantidade - 2
        }
        if(quantidade > 0){
            caixa = caixa + 6.00
        }
    }
    else if (comando == 4){
        let quantidade = prompt("insira a quantidade a ser comprado")
        despesa = despesa + (quantidade * 2.9)
        lista.push(quantidade + " Refri")
        listaRefri.push(quantidade )
        while(quantidade >= 2){
            caixa = caixa + 9.00
            quantidade = quantidade - 2
        }
        if(quantidade > 0){
            caixa = caixa + 5.00
        }
    }
    else if(comando == 5){
        alert("cachorro quente: 1 - R$8.00 | 2 - R$15.00")
        alert("Misto quente: 1 - R$6.00 | 2 - R$10.00")
        alert("refri: 1 - R$5.00 | 2 - R$9.00")
    }
    else if(comando == 6){
        alert(lista)
    }
    else if(comando == 7){
        alert("R$"+caixa)
    }
    else if(comando == 8){
        alert(calculaSaldo(Number(caixa), Number(despesa)))
    }
    else if(comando == 9){
        alert("cachorro quente: "+ listaCQ + "\nMisto Quente: " +listaMQ + "\nRefri: "+listaRefri)
    }
    else if(comando == 10){
        alert("ate mais")
    }
}