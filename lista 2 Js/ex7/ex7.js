/*Crie uma tabela no console com todos os dados de venda de cada produto. */
let lista = []
let listaCQuente = []
let listaSuco = []
let listaMisto = []
let listaRefri = []
let caixa = 0
let despesa = 0
let comando
function calculaSaldo(caixa,despesa)
{
    return ("R$" + (caixa-despesa))
}
while(comando!=0)
{
    comando=prompt("Escolha a opção desejada\n1 - Comprar cachorro quente\n2 - Comprar Suco\n3 - Comprar Misto Quente\n4 - Comprar refrigerante\n6 - Lista de preços\n7 - Lista de produtos vendidos\n8 - Caixa\n9 - Extratos individuais\n10 - Calcular saldo do dia\n0 - Sair")
    if(comando==1)
    {
        let dados = {};//produto, quantidade, valor, despesa
        let quantidade = prompt("Insira a quantidade de cachorro quente a ser comprado")
        dados.produto="Cachorro quente"
        dados.quantidade=quantidade
        dados.despesa=quantidade*4.5
        dados.valor=0.0
        despesa = despesa + dados.despesa
        while(quantidade>=2)
        {
            dados.valor = dados.valor + 15.00
            quantidade = quantidade-2
        }
        if(quantidade>0)
            dados.valor = dados.valor + 8.0
        caixa = caixa + dados.valor
        listaCQuente.push(dados)
        console.table(listaCQuente)
    }
    else if(comando==2)
    {
        let dados = {};//produto, quantidade, valor, despesa
        let quantidade = prompt("Insira a quantidade de suco a ser comprado.")
        dados.produto="Suco"
        dados.quantidade=quantidade
        dados.despesa =quantidade*2.5
        dados.valor=0.0
        despesa= despesa + dados.despesa
        
        while(quantidade>=2)
        {
            dados.valor = dados.valor + 8.00
            quantidade = quantidade - 2
        }
        if(quantidade>0)
        {
            dados.valor = dados.valor + 4.5
        }
        caixa = caixa + dados.valor
        listaSuco.push(dados)
        console.table(listaSuco)
    }
    else if(comando==3)
    {
        let dados = {};//produto, quantidade, valor, despesa
        let quantidade = prompt("Insira a quantidade de misto quente a ser comprado.")
        dados.produto="Misto quente"
        dados.quantidade=quantidade
        dados.despesa=quantidade*3.5
        dados.valor=0.0
        despesa = despesa + dados.despes
        while(quantidade>=2)
        {
            dados.valor = dados.valor + 10.00
            quantidade = quantidade - 2
        }
        if(quantidade>0)
        {
            dados.valor = dados.valor + 6
        }
        caixa = caixa + dados.valor
        listaMisto.push(dados)
        console.table(listaMisto)
    }
    else if(comando==4)
    {   
        let dados = {};//produto, quantidade, valor, despesa
        let quantidade = prompt("Insira a quantidade de refrigerante a ser comprado.")
        dados.produto="Refrigerante"
        dados.quantidade=quantidade
        dados.despesa=quantidade*3
        dados.valor=0.0
        despesa = despesa + dados.despesa
        while(quantidade>=2)
        {
            dados.valor = dados.valor + 9.00
            quantidade = quantidade - 2
        }
        if(quantidade>0)
        {
            dados.valor = dados.valor + 5
        }
        caixa = caixa + dados.valor
        listaRefri.push(dados)
        console.table(listaRefri)
    }
    else if(comando==6)
    {
        alert("Cachorro quente - R$8.00 => 2 por R$15.00\nSuco - R$4.50 => 2 por R$8.00\nMisto Quente - R$6.00 => 2 por R$10.00\nRefrigerante - R$5.00 => 2 por R$9.00")
    }
    else if(comando==7)
    {
        console.table(listaCQuente)
        console.table(listaSuco)
        console.table(listaMisto)
        console.table(listaRefri)
    }
    else if(comando==8)
    {
        alert("R$" + caixa)
    }
    else if(comando==9)
    {
        let entrada
        while(entrada!=5)
        {
            entrada = prompt("Insira o produto a ser checado o extrato\n1 - Cachorro quente\n 2 - Suco\n3 - Misto Quente\n4 - Refrigerante\n5 - Sair")
            if(entrada==1)
            {
                alert(listaCQuente)
            }
            else if(entrada == 2)
            {
                alert(listaSuco)
            }
            else if(entrada == 3)
            {
                alert(listaMisto)
            }
            else if(entrada == 4)
            {
                alert(listaRefri)
            }
        }
    }
    else if(comando==10)
    {
        alert(calculaSaldo(Number(caixa), Number(despesa)))
    }
    else if(comando==0)
    {
        alert("Até")
        lista = listaCQuente + "\n" + listaSuco + "\n" + listaMisto + "\n" + listaRefri
        console.table(listaCQuente)
        console.table(listaSuco)
        console.table(listaMisto)
        console.table(listaRefri)
    }
}