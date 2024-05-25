const prompt = require('prompt-sync')();

/*
1. Escreva um programa para calcular a redução do tempo de vida de um fumante.
Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou.
Considere que um fumante perde 10 min de vida a cada cigarro. Calcule quantos dias de
vida um fumante perderá e exiba o total em dias.
*/

let vidaPerdida = (maços, anos) => {
    let totalCigarros_1 = (maços * (anos * 365))
    let tempoPerdido_1 = parseFloat(((totalCigarros_1 * 10) / 60) / 24)

    return tempoPerdido_1.toFixed(2)
}

let cigarrosFumados_1 = parseFloat(prompt("Quantos maços de cigarro você fuma por dia?: "))
let anosFumando_1 = parseInt(prompt("Há quantos anos você fuma?: "))

console.log(vidaPerdida(cigarrosFumados_1, anosFumando_1)+" Dias perdidos");


/*
2. Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 80 Km/h, 
exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba o valor da multa, 
cobrando R$ 5,00 por cada Km acima da velocidade permitida.
*/

let velocidade_2 = prompt("Qual a velocidade do carro?: ")
if(velocidade_2 > 80){
    let acimaLimite_2 = velocidade_2 - 80
    let multa_2 = parseFloat(5 * acimaLimite_2)
    console.log("Você foi multado!\nValor da Multa: R$"+multa_2)
}

/*
3. Faça um algoritmo que pergunte a distância que um passageiro deseja percorrer em
Km. Calcule o preço da passagem, cobrando R$ 0.50 por Km para viagens até 200 Km e
R$ 0.45 para viagens mais longas.
*/
let distancia_3 = prompt("Qual distancia deseja percorrer?: ")
let valorPassagem_3

if(distancia_3 <= 200 && distancia_3 > 0){
    valorPassagem_3 = parseFloat(distancia_3 * 0.5)
}else if(distancia_3 > 200){
    valorPassagem_3 = parseFloat(distancia_3 * 0.45)
}else{
    console.log("Valor informado deve ser maior que 0!")
}
console.log("Valor da passagem: R$"+valorPassagem_3)

/*
4. Crie um programa que leia o tamanho de três segmentos de reta. Analise seus
comprimentos e diga se é possível formar um triângulo com essas retas.
Matematicamente, para três segmentos formarem um triângulo, o comprimento de cada
lado deve ser menor que a soma dos outros dois.
*/
let verificarTriangulo = (a, b, c) => {
    let triangulo_4 = false
    if((a + b) > c && (a + c) > b && (b + c) > a)
        triangulo_4 = true
    return triangulo_4
}

let ladoA_4 = parseFloat(prompt("Digite o tamanho do lado A: "))
let ladoB_4 = parseFloat(prompt("Digite o tamanho do lado A: "))
let ladoC_4 = parseFloat(prompt("Digite o tamanho do lado A: "))

if(verificarTriangulo(ladoA_4, ladoB_4, ladoC_4))
    console.log("É possivel criar um triangulo com as medidas fornecidas")

/*
5. Crie um jogo de JoKenPo (Pedra-Papel-Tesoura).
*/
let empate_5 = false
let joKenPo = (player1, player2) => {
    if(player1 == player2)
        empate_5 = true
    else{
        empate_5 = false
        if(player1 == 1){
            if(player2 == 2)
                return "Jogador 2 Ganhou!"
            else
                return "Jogador 1 Ganhou!"
        }else if(player1 == 2){
            if(player2 == 1)
                return "Jogador 1 Ganhou!"
            else
                return "Jogador 2 Ganhou!"
        }else if(player1 == 3){
            if(player2 == 1)
                return "Jogador 2 Ganhou!"
            else
                return "Jogador 1 Ganhou!"
        }
    }
    return null
}
let coop_5
do{ 
    if(empate_5 == false){
        console.log("Digite 1 para jogar contra a máquina\nDigite 2 para jogar Coop")
        coop_5 = prompt()
        if(coop_5 == 1){
            console.log("\nMáquina está jogando como Jogador 2!")
        }
    }
    console.log("\nEscolha sua jogada: \n1 - Pedra \n2 - Papel \n3 - Tesoura")
    let p1_5 = prompt()
    let p2_5
    if (coop_5 == 2){
        console.log("\nEscoha sua jogada, jogador 2: \n1 - Pedra \n2 - Papel \n3 - Tesoura")
        p2_5 = prompt()
    }else{
        p2_5 = Math.floor((Math.random() * 3) + 1)
        switch(p2_5){
            case 1:
                console.log("\nA máquina escolheu Pedra")
                break
            case 2:
                console.log("\nA máquina escolheu Papel")
                break
            case 3: 
                console.log("\nA máquina escolheu Tesoura")
                break
        }       
    }
    let resultado_5 = joKenPo(p1_5, p2_5)
    if(empate_5)
        console.log("Empatou\n")
    else
        console.log("\n"+resultado_5)
}while(empate_5)

/*
6. Crie um jogo onde o computador vai sortear um número entre 1 e 5. O jogador vai
tentar descobrir qual foi o valor sorteado.
*/
let guess_6
let anwser_6
do{
    guess_6 = prompt("Digite sua tentativa: ")
    anwser_6 = Math.floor(Math.random() * 5 + 1)
    
    console.log("\nTentativa: "+guess_6)
    console.log("Numero Sorteado: "+anwser_6)
    if(guess_6 == anwser_6)
        console.log("\nVocê Acertou!")
    else{
        console.log("\nVocê Errou =(\n")
        console.log("Digite 1 para tentar novamente")
        let tentarNovamente_6 = prompt()
        if(tentarNovamente_6 != 1)
            guess_6 = anwser_6
    }      
}while(guess_6 != anwser_6)

/*
7. Uma empresa de aluguel de carros precisa cobrar pelos seus serviços. O aluguel de um
carro popular custa R$ 90,00 por dia e um carro de luxo custa R$ 150,00. Além disso, o
cliente paga por Km percorrido. Faça um programa que leia o tipo de carro alugado
(popular ou luxo), quantos dias de aluguel e quantos Km foram percorridos. No final,
mostre o preço a ser pago de acordo com os dados a seguir:
Carros populares
- Até 100 Km percorridos: R$ 0,20 por Km
- Acima de 100 Km percorridos: R$ 0,10 por Km
Carros de luxo
- Até 200 Km percorridos: R$ 0,30 por Km
- Acima de 200 Km percorridos: R$ 0,25 por Km
*/
let aluguelCarroPopular = (kilometros) =>{
    if(kilometros > 100)
        return kilometros * 0.10
    else
        return kilometros * 0.20
}
let aluguelCarroDeLuxo = (kilometros) =>{
    if(kilometros > 200)
        return kilometros * 0.25
    else
        return kilometros * 0.30
}

console.log("Qual foi o carro alugado?\n1 - Carro Popular\n2 - Carro de Luxo")
let carroAlugado_7
while(carroAlugado_7 != 1 && carroAlugado_7 != 2){
    carroAlugado_7 = prompt()
    if(carroAlugado_7 != 1 && carroAlugado_7 != 2)
        console.log("\nOpção invalida, digite novamente")
}
console.log("Por quantos dias o carro foi alugado?")
let dias_7 = 0
while(dias_7 <= 0 || isNaN(dias_7)){
    dias_7 = parseInt(prompt()) 
    if(dias_7 <= 0 || isNaN(dias_7))
        console.log("\nOpção invalida, digite novamente")
}
console.log("Quantos kilometros foram percorridos?")
let km_7 = -1
while(km_7 < 0 || isNaN(km_7)){
    km_7 = parseInt(prompt())
    if(km_7 < 0 || isNaN(km_7))
        console.log("\nOpção invalida, digite novamente")
}
let valorCobrado_7
if(carroAlugado_7 == 1) // Carro Popular
    valorCobrado_7 = parseFloat((90 * dias_7) + aluguelCarroPopular(km_7))
else
    valorCobrado_7 = parseFloat((150 * dias_7) + aluguelCarroDeLuxo(km_7))

console.log("Valor a Ser cobrado do cliente: R$"+valorCobrado_7.toFixed(2))

/*
8. Um programa de vida saudável quer dar pontos por atividades físicas realizadas que
podem ser trocados por dinheiro. Cada hora de atividade física no mês vale pontos. O
sistema funciona assim:
- até 10 h de atividade no mês: ganha 2 pontos por hora
- de 10 h até 20 h de atividade no mês: ganha 5 pontos por hora
- acima de 20 h de atividade no mês: ganha 10 pontos por hora
- A cada ponto ganho, o cliente fatura R$ 0,05 (5 centavos)
Faça um programa que leia quantas horas de atividade uma pessoa teve por mês.
Calcule e mostre quantos pontos ela teve e quanto dinheiro ela conseguiu ganhar.
*/
let calculaPontos_8 = (horas) => {
    if(horas <= 10)
        return horas * 2
    else if(horas > 10 && horas <= 20)
        return horas * 5
    else
        return horas * 10
}
let horasExercitadas_8 = parseInt(prompt("Digite quantas horas você se exercitou no mês: "))
while(isNaN(horasExercitadas_8) || horasExercitadas_8 < 0){
    console.log("Opção invalida, digite novamente")
    horasExercitadas_8 = parseInt(prompt())
}
let pontos_8 = calculaPontos_8(horasExercitadas_8)
console.log("\nVocê conseguiu "+pontos_8+" pontos")
console.log("Você faturou R$"+pontos_8*0.05+"! Parabéns")

/*
9. Desenvolva um aplicativo que leia o salário e o sexo de vários funcionários. No final,
mostre o total de salário pago aos homens e o total pago às mulheres. O programa vai
perguntar ao usuário se ele quer continuar ou não sempre que ler os dados de um
funcionário.
*/
let continuar_9 = 1
let totalHomens_9 = 0
let totalMulheres_9 = 0
while(continuar_9 == 1){
    let salarioFuncionario_9 = parseFloat(prompt("Digite o salario do(a) Funcionario(a): "))
    while(isNaN(salarioFuncionario_9)){
        console.log("Opção invalida, digite novamente")
        salarioFuncionario_9 = parseFloat(prompt())
    }
    console.log("Digite o sexo do(a) Funcionario(a) \n1 - Homem\n2 - Mulher")
    let sexoFuncionario_9 = prompt()
    while(sexoFuncionario_9 != 1 && sexoFuncionario_9 != 2){
        console.log("Opção invalida, digite novamente")
        sexoFuncionario_9 = prompt()
    }
    if(sexoFuncionario_9 == 1)
        totalHomens_9 += salarioFuncionario_9
    else
        totalMulheres_9 += salarioFuncionario_9
    continuar_9 = prompt("Digite 1 caso queira continuar: ")

}
console.log("\nSalario total das Mulheres: R$"+totalMulheres_9.toFixed(2))
console.log("Salario total dos Homens: R$"+totalHomens_9.toFixed(2))

/*
10. Crie um programa usando a estrutura “faça enquanto” que leia vários números. A
cada laço, pergunte se o usuário quer continuar ou não. No final, mostre na tela:
a) O somatório entre todos os valores;
b) Qual foi o menor valor digitado;
c) A média entre todos os valores;
d) Quantos valores são pares.
*/
let continuar_10 = 1
let numeros_10 = []
let soma_10 = 0
let cont_10 = 0
let menor_10
do{
    let numeroDigitado_10 = parseInt(prompt("Digite um numero: "))
    while(isNaN(numeroDigitado_10)){
        console.log("Opção invalida, digite novamente")
        numeroDigitado_10 = parseInt(prompt())
    }
    numeros_10.push(numeroDigitado_10)
    soma_10 += numeroDigitado_10
    continuar_10 = prompt("Digite 1 caso queria continuar ")
}while(continuar_10 == 1)

menor_10 = numeros_10[0]

numeros_10.forEach((number_10) => {
    if(number_10 % 2 == 0)
        cont_10++
    if(menor_10 > number_10)
        menor_10 = number_10
})

console.log("\nA somatoria dos valores é: "+soma_10) // a
console.log("O menor valor digitado foi: "+menor_10) // b
console.log("A media dos valores é: "+(soma_10 / numeros_10.length).toFixed(2)) // c
console.log("Foram digitos "+cont_10+" valores pares") // d

/*
11. Desenvolva um programa que leia o primeiro termo e a razão de uma PA (Progressão
Aritmética), mostrando na tela os 10 primeiros elementos da PA e a soma entre todos os
valores da sequência.
*/
let termo_11 = parseFloat(prompt("Digite o primeiro termo da PA: ")) // 5
let razaoPa_11 = parseFloat(prompt("Digite a razão da PA: ")) // 2
let pa_11 = [termo_11]
let cont_11 = 1
while(cont_11 < 10){
    pa_11.push(pa_11[cont_11 -1] + razaoPa_11)
    cont_11++
}
console.log()
for(let value in pa_11){
    console.log("Valor "+(parseInt(value)+1)+": "+pa_11[value])
}

let soma_11 = (pa_11[0] + pa_11[9]) * 10 / 2
console.log("\nA soma dos valores é: "+soma_11)

/*
12. Faça um programa que mostre os 10 primeiros elementos da Sequência de Fibonacci.
Ex.: 1, 1, 2, 3, 5, 8, 13, 21.
*/
let sequenciaFibonacci = []
let cont_12 = 1
while(cont_12 <= 10){
    if(cont_12 > 2)
        sequenciaFibonacci[cont_12 -1] = sequenciaFibonacci[cont_12 -2] + sequenciaFibonacci[cont_12 -3]
    else
        sequenciaFibonacci[cont_12 -1] = 1
    cont_12++
}
for(let value in sequenciaFibonacci){
    console.log(`Elemento ${parseInt(value)+1}: ${sequenciaFibonacci[value]}`)
}

/*
13. Crie um programa que preencha automaticamente (usando lógica, não apenas
atribuindo diretamente) um vetor numérico com 15 posições com os primeiros elementos
da sequência de Fibonacci.
*/
let funcaoSequenciaFibonacci = (tamanhoSequencia) =>{
    let sequencia_13 = []
    for(let cont_12 = 0; cont_12 < tamanhoSequencia; cont_12++){
        if(cont_12 >= 2){
            sequencia_13[cont_12] = sequencia_13[cont_12-1] + sequencia_13[cont_12-2]
        }else
            sequencia_13[cont_12] = 1
    }
    return sequencia_13
}
let vetorNumerico_13 = funcaoSequenciaFibonacci(15)
console.log(vetorNumerico_13)

/*
14. Faça um programa que leia 7 nomes de pessoas e guarde-os em um vetor. No final,
mostre uma listagem com todos os nomes informados, na ordem inversa daquela em
que eles foram informados.
*/
let pessoas_14 = []
for(let cont_14 = 0; cont_14 < 7; cont_14++){
    pessoas_14[cont_14] = prompt("Digite o nome da pessoa numero "+(cont_14+1)+": ")
}
console.log(pessoas_14.reverse())

/*
15. Desenvolva um programa que leia 10 números inteiros e guarde-os em um vetor. No
final, mostre quais são os números pares que foram digitados e em que posições eles
estão armazenados.
*/
let numeros_15 = []
for(let cont_15 = 0; cont_15 < 10; cont_15++){
    numeros_15[cont_15] = parseInt(prompt(`Digite o ${cont_15+1}° numero: `))
    while(isNaN(numeros_15[cont_15])){
        console.log("\nNumero invalido, digite novamente")
        numeros_15[cont_15] = parseInt(prompt())
    }
}
console.log("\nNumeros Pares\n")
numeros_15.forEach((element_15, index_15) => {
    if(element_15 % 2 == 0){
        console.log(`Numero ${element_15} se encontra na posição ${index_15}`)
    }
});

/*
16. Crie uma lógica que preencha um vetor de 20 posições com números aleatórios
(entre 0 e 99) gerados pelo computador. Logo em seguida, mostre os números gerados e
depois coloque o vetor em ordem crescente, mostrando no final os valores ordenados.
*/
let numeros_16 = []
for(let cont_16 = 0; cont_16 < 20; cont_16++){
    numeros_16[cont_16] = Math.floor(Math.random() * 100)
}
numeros_16.forEach((element_16, index_16) => {
    console.log(`Numero na posição ${index_16}: ${element_16}`)
})
numeros_16.sort((a, b) => {
    return a - b
})
console.log("\nOrdenando informações em ordem crescente...\n")
numeros_16.forEach((element_16, index_16) => {
    console.log(`Numero na posição ${index_16}: ${element_16}`)
})

/*
17. Crie um programa que leia o nome e a idade de 9 pessoas e guarde esses valores em
dois vetores, em posições relacionadas. No final, mostre uma listagem contendo apenas
os dados das pessoas menores de idade.
*/
let ages_17 = []
let names_17 = []
for(let cont_17 = 0; cont_17 < 9; cont_17++){
    names_17[cont_17] = prompt("Digite o nome: ")
    let idade_17 = parseInt(prompt("Digite a idade: "))
    while(isNaN(idade_17) || idade_17 <= 0){
        console.log("Idade invalida, digite novamente")
        idade_17 = parseInt(prompt())
    }
    ages_17[cont_17] = idade_17
}
console.log("\nMenores de idade: \n")
for(let value in ages_17){
    if(ages_17[value] < 18)
        console.log(`Nome: ${names_17[value]}, Idade: ${ages_17[value]}`)
}

/*
18. Crie um registro com o nome do funcionário, cargo e salário. Leia este registro para
um funcionário e ao final escreva o conteúdo do registro.
*/
let FuncionarioExemplo_18 = {
    nome: "",
    cargo: "",
    salario: 0
}
let funcionario1_18 = FuncionarioExemplo_18
for(let value in funcionario1_18){
    funcionario1_18[value] = prompt(`Digite o ${value} do funcionario: `)
}
console.log("\nInformações do Funcionario\n")
for(let value in funcionario1_18){
    console.log(`${value}: ${funcionario1_18[value]}`)
}

/*
19. Escrever um programa para ler 5 horários. Validar cada horário fornecendo através de
repetição. Escrever cada um deles no formato HH.MM.SS.
*/
let horarios_19 = [{}]

let validaHorario_19 = (h, m, s) => {
    if(isNaN(h) || isNaN(m) || isNaN(s) || h <= 0 || m < 0 || s < 0 || h > 24 || m > 59 || s > 59)
        return false
    return true
}
for(let cont_19 = 0; cont_19 < 5; cont_19++){
    let horarioValido_19 = false
    while(!horarioValido_19){
        let hours_19 = parseInt(prompt(`Digite as horas do horário numero ${parseInt(cont_19)+1}: `))
        let minutes_19 = parseInt(prompt(`Digite os minutos do horário numero ${parseInt(cont_19)+1}: `))
        let seconds_19 = parseInt(prompt(`Digite os segundos do horário numero ${parseInt(cont_19)+1}: `))
        if(validaHorario_19(hours_19, minutes_19, seconds_19)){
            horarioValido_19 = true
            horarios_19[cont_19] = {
                hours: hours_19,
                minutes: minutes_19,
                seconds: seconds_19
            }
        }else  
            console.log("\nHorario invalido, digite novamente\n")     
    }
}
console.log()
horarios_19.forEach((element_19, index_19) => {
    let ajustaHorario = `${String(element_19.hours).padStart(2, '0')}.${String(element_19.minutes).padStart(2, '0')}.${String(element_19.seconds).padStart(2, '0')}`
    console.log(`Horario numero ${parseInt(index_19)+1}: ${ajustaHorario}`)
});

/*
20. Uma indústria faz a folha mensal de pagamentos de seus 80 empregados baseada
no seguinte: existe uma tabela com os dados de cada funcionalidade: matrícula, nome e
salário bruto. Escreva um programa que leia e processe a tabela e emita (escreva na
tela), cada funcionário, seu contracheque, cujo formato é dado a seguir:
Matrícula:
Nome:
Salário bruto:
Dedução INSS:
Salário líquido:
(Dicas: desconto de 12%, salário líquido é a diferença entre salário bruto e a redução do
INSS).
*/
let funcionario_20 = [{
    matricula: 105777,
    nome: "Vinícius Gabriel Johann",
    salarioBruto: 1000
}, 
{
    matricula: 101444,
    nome: "Jose da Silva Pereira",
    salarioBruto: 12042
}]
let informacoesFuncionario_20 = (funcionario_20 =>{
    let deducaoINSS = parseFloat(funcionario_20.salarioBruto * 0.12)
    let salarioLiquido = parseFloat(funcionario_20.salarioBruto - deducaoINSS)
    console.log(`Matrícula: ${funcionario_20.matricula}\nNome: ${funcionario_20.nome}\nSalário bruto: ${parseFloat(funcionario_20.salarioBruto).toFixed(2)}\nDedução INSS: ${parseFloat(deducaoINSS).toFixed(2)}\nSalário líquido: ${parseFloat(salarioLiquido).toFixed(2)}`)
})
informacoesFuncionario_20(funcionario_20[0])

/*
21. Faça uma função que recebe, por parâmetro, a altura (alt) e o sexo de uma pessoa e
retorna o seu peso ideal. Para homens, calcular o peso ideal usando a fórmula: peso ideal
= 72.7 x alt - 58 e, para mulheres, peso ideal = 62.1 x alt - 44.7.
*/
let pesoIdeal_21 = (alt, sexo) => {
    if(sexo === "Mulher")
        return parseFloat(62.10 * alt - 44.70).toFixed(2)
    if(sexo === "Homem")
        return parseFloat(72.70 * alt - 58).toFixed(2)
    return null
}
console.log("Seu peso ideal é: "+pesoIdeal_21(1.80, "Homem"))

/*
22. A prefeitura de uma cidade fez uma pesquisa entre os seus habitantes, coletando
dados sobre o salário e número de filhos. Faça uma função que leia esses dados para um
número não determinado de pessoas e retorne a média de salário da população, a
média do número de filhos, o maior salário e o percentual de pessoas com salário até R$
350,00.
*/
let habitantes_22 = [{
    nome: "Vini",
    salario: 1000,
    filhos: 3
}, {
    nome: "Jose",
    salario: 2000,
    filhos: 2
}, {
    nome: "Maria",
    salario: 349,
    filhos: 5
}]

let mediaSalarioHabitantes_22 = (habitantes) => {
    let maiorSalario = habitantes[0].salario
    let somaFilhos = 0
    let somaSalarios = 0
    let qtdHabitantes = 0
    let qtdHabitantes_350 = 0
    habitantes.forEach(element => {
        if(element.salario > maiorSalario)
            maiorSalario = element.salario
        somaFilhos += element.filhos
        somaSalarios += element.salario
        qtdHabitantes++
        if(element.salario < 350)
            qtdHabitantes_350++
    });
    return {
        mediaSalarios: parseFloat(somaSalarios / qtdHabitantes).toFixed(2),
        mediaFilhos: parseFloat(somaFilhos / qtdHabitantes).toFixed(2),
        maiorSalario: maiorSalario,
        percentual350: parseFloat((qtdHabitantes_350 / qtdHabitantes) * 100).toFixed(2)+"%"
    }
}
console.log(mediaSalarioHabitantes_22(habitantes_22))

/*
23. Criar e imprimir a matriz identidade MI[1..7,1..7] em que todos os elementos da
diagonal principal são iguais a 1 e os demais são nulos.
*/
let matriz_23 = []

for(let linha = 0; linha < 7; linha++){
    matriz_23[linha] = []
    for(let coluna = 0; coluna < 7; coluna++){
        if(coluna === linha)
            matriz_23[linha][coluna] = 1
        else
            matriz_23[linha][coluna] = 0
    }
}
console.log(matriz_23)

/*
24. Dada uma matriz M[1..6,1..8], criar um vetor C que contenha, em cada posição, a
quantidade de elementos negativos da linha correspondente de M.
*/
let M_24 = [
    [-2, 8, 4, -9, 5, -1, 3, -6],
    [7, 9, -10, -5, 0, -3, -8, 2],
    [1, -7, 6, -4, 10, -2, -3, 8],
    [9, -1, -10, -3, 2, -9, 6, 7],
    [-6, 4, -8, 5, 10, 2, 3, -5],
    [8, -9, 7, 3, 6, 1, -4, -10]
];
let C_24 = []

for(let linha = 0; linha < 6; linha++){
    let cont = 0
    for(let coluna = 0; coluna < 8; coluna++){
        if(M_24[linha][coluna] < 0)
            cont++ 
    }
    C_24[linha] = cont
}
console.log(C_24)

/*
25. Faça um algoritmo que leia uma matriz de 15 X 20 de números reais e mostre a soma
de cada coluna separadamente.
*/

let M_25 = [
    [3, -4, 2, 8, -1, 5, -6, 7, -3, 9, -2, 6, -8, 4, -5, 1, 10, -9, -7, 0],
    [9, -5, 1, 0, -10, 2, -3, 7, 6, -8, -6, 4, -2, -1, 3, 8, -7, 5, -9, 10],
    [-2, 5, -4, 3, 6, -1, -7, 8, 10, -10, 7, 0, 2, -3, 1, -8, 4, -9, 9, -6],
    [7, -8, -1, 6, 2, -9, 5, -4, 0, 3, 1, -3, 9, -2, -10, 8, -5, -7, 4, 10],
    [-3, 6, 10, -5, 4, 0, -7, -9, 8, -6, 1, -10, 3, -4, 9, -8, 2, 5, 7, -1],
    [8, -7, 2, -6, 5, -10, 3, 9, -4, 1, 0, -5, 7, -1, 4, -3, 6, -9, -8, 10],
    [4, -1, 3, 5, 9, -6, -4, 0, -7, 10, -2, 8, -5, 7, -9, -8, 2, -3, -10, 1],
    [0, 9, 7, -3, -8, -4, 5, -2, 8, -5, 1, -1, 6, -7, 10, -10, 3, 2, 4, -6],
    [2, 6, -9, -5, 8, -7, 10, 1, -3, 4, 7, -10, 0, -6, -8, 3, -4, 5, -2, 9],
    [-6, -10, 8, -9, 7, -2, 4, 3, -1, 5, -8, 9, -4, -7, 6, -3, 0, -5, 1, 2],
    [-8, 0, -6, 2, 3, -5, 9, 4, -2, -10, 1, -7, 5, 6, -4, 10, -9, 7, -1, 8],
    [10, -3, -2, 1, 6, -8, 0, 5, -4, 7, 9, -9, 2, 3, -1, -7, -6, -10, 8, 4],
    [6, -9, 4, 7, -4, 1, -8, -10, 3, 2, 5, -2, 8, -6, 0, -5, -1, -7, 9, 10],
    [-5, 2, -7, -4, 10, 9, 1, -6, 3, -1, 8, -3, -10, 0, -9, 4, -8, -2, 6, 5],
    [1, -6, 5, -8, -3, 10, 6, -9, -2, 8, -4, 7, -1, -5, 2, 0, 9, 3, -10, 4]
];

let somaColunas_25 = (matriz) => {
    let totalColunas = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    for(let linhas = 0; linhas < matriz.length; linhas++){
        for(let colunas = 0; colunas < matriz[linhas].length; colunas++){
            totalColunas[colunas] += matriz[linhas][colunas]
        }
    }
    return totalColunas
}
somaColunas_25(M_25).forEach((element, index) => {
    console.log(`Soma dos valores da coluna ${parseInt(index)+1}: ${element}`)
});

/*
26. Dadas duas matrizes numéricas A[1..3,1..5] e B[1..3,1..5], calcular a matriz produto
P[1..3,1..5].
*/
let A_26 = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15]
];
let B_26 = [
    [-1, -2, -3, -4, -5],
    [-6, -7, -8, -9, -10],
    [-11, -12, -13, -14, -15]
];

let calcularProdutoMatriz = (A, B) => {
    let matrizProduto = []
    for(let linhas = 0; linhas < 3; linhas++){
        matrizProduto[linhas] = []
        for(let colunas = 0; colunas < 5; colunas++){
            matrizProduto[linhas][colunas] = (A[linhas][colunas] * B[linhas][colunas])
        }
    }
    return matrizProduto
}
console.log("Raiz matriz P: "+calcularProdutoMatriz(A_26, B_26))

/*
27. Elaborar um algoritmo que leia uma matriz M(6,6) e um valor A. Após a leitura,
multiplicar a matriz M pelo valor A e colocar os valores da matriz multiplicados por A em
um vetor V(36). Escrever o vetor V no final.
*/
const M_27 = [
    [1, 2, 3, 4, 5, 6],
    [7, 8, 9, 10, 11, 12],
    [13, 14, 15, 16, 17, 18],
    [19, 20, 21, 22, 23, 24],
    [25, 26, 27, 28, 29, 30],
    [31, 32, 33, 34, 35, 36]
  ];

let multiplicaMatriz_27 = (matriz, multiplicador) => {
    let matrizResultado_27 = []
    let cont_27 = 0
    for(let linhas = 0; linhas < matriz.length; linhas++){
        matriz[linhas].forEach(element => {
            matrizResultado_27[cont_27] = parseFloat(element * multiplicador)
            cont_27++
        });
    }
    return matrizResultado_27
}
console.log(multiplicaMatriz_27(M_27, 15))

/*
28. Fazer um algoritmo para receber uma matriz 10 x 10 e devolver o resultado pedido no
item:
a) a soma dos elementos acima da diagonal principal;
b) a soma dos elementos abaixo da diagonal principal;
*/
const M_28 = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
    [31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
    [41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [51, 52, 53, 54, 55, 56, 57, 58, 59, 60],
    [61, 62, 63, 64, 65, 66, 67, 68, 69, 70],
    [71, 72, 73, 74, 75, 76, 77, 78, 79, 80],
    [81, 82, 83, 84, 85, 86, 87, 88, 89, 90],
    [91, 92, 93, 94, 95, 96, 97, 98, 99, 100]
  ];

let algoritmo_28 = (matriz) => {
    let somaAcima_28 = 0
    let somaAbaixo_28 = 0
    for(let linhas = 0; linhas < matriz.length; linhas++){
        matriz[linhas].forEach((element, index) => {
                if(index == (linhas+1))
                    somaAcima_28 += element
                if(index == (linhas-1))
                    somaAbaixo_28 += element
        });
    }
    console.log("A soma dos elementos acima da diagonal principal é: "+somaAcima_28)
    console.log("A soma dos elementos abaixo da diagonal principal é: "+somaAbaixo_28)
}
algoritmo_28(M_28)

/*
29. Escreva um algoritmo que leia uma matriz M(5,5) e calcule as somas:
a) da linha 4 de M;
b) da coluna 2 de M;
c) da diagonal principal;
d) todos os elementos da matriz M.
Escrever essas somas e a matriz.
*/
const M_29 = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25]
  ];

let algoritmo_29 = (matriz) => {
    let somaLinha4_29 = 0
    let somaColuna2_29 = 0
    let somaDiagonalPrincipal_29 = 0
    let somaTotal_29 = 0

    for(let linhas = 0; linhas < matriz.length; linhas++){
        for(let colunas = 0; colunas < matriz[linhas].length; colunas++){
            if(linhas == 4){
                somaLinha4_29 += matriz[linhas][colunas]
            }
            if(colunas == 2){
                somaColuna2_29 += matriz[linhas][colunas]
            }
            if(linhas == colunas){
                somaDiagonalPrincipal_29 += matriz[linhas][colunas]
            }
            somaTotal_29 += matriz[linhas][colunas]
        }
    }
    console.log("O total da linha 4 é: "+somaLinha4_29)
    console.log("O total da coluna 2 é: "+somaColuna2_29)
    console.log("O total da Diagonal Principal é: "+somaDiagonalPrincipal_29)
    console.log("O total da matriz é: "+somaTotal_29)
}
algoritmo_29(M_29)

/*
30. Escrever um algoritmo que lê uma matriz M(5,5) e cria 2 vetores SL(5) e SC(5) que
contenham, respectivamente, as somas das linhas e das colunas de M. Escrever a matriz
e os vetores criados.
*/
const M_30 = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25]
  ];

let algoritmo_30 = (matriz) => {
    let somaLinhas = [0, 0, 0, 0, 0]
    let somaColunas = [0, 0, 0, 0, 0]

    for(let linhas = 0; linhas < matriz.length; linhas++){
        for(let colunas = 0; colunas < matriz[linhas].length; colunas++){
            somaLinhas[colunas] += matriz[linhas][colunas]
            somaColunas[linhas] += matriz[linhas][colunas]
        }
    }
    console.log("Matriz inserida")
    console.log(matriz)
    console.log("Soma das Linhas: "+somaLinhas)
    console.log("Soma das Colunas: "+somaColunas)
}
algoritmo_30(M_30)

/*
31. Escreva um algoritmo que leia um número inteiro A e uma matriz V 30 x 30 de inteiros.
Conte quantos valores iguais a A estão na matriz. Crie, a seguir, uma matriz X contendo
todos os elementos de V diferentes de A. Mostre os resultados.
*/
let M_31 = [
    [7, 2, 4, 7, 3, 3, 8, 2, 8, 3, 5, 4, 2, 8, 6, 4, 8, 3, 1, 4, 7, 5, 1, 5, 5, 7, 6, 5, 7, 8],
    [4, 7, 8, 3, 6, 3, 7, 4, 4, 8, 4, 1, 2, 6, 2, 4, 6, 8, 5, 5, 1, 3, 3, 7, 6, 6, 3, 5, 8, 6],
    [2, 1, 3, 7, 1, 2, 8, 6, 6, 7, 5, 8, 7, 5, 7, 4, 5, 1, 7, 6, 4, 8, 2, 2, 5, 5, 1, 2, 3, 7],
    [3, 7, 3, 8, 7, 8, 4, 8, 3, 8, 5, 3, 2, 7, 3, 8, 3, 5, 7, 1, 8, 5, 5, 6, 1, 6, 3, 1, 8, 3],
    [2, 7, 3, 7, 5, 2, 2, 1, 5, 1, 4, 8, 4, 4, 8, 2, 4, 2, 3, 7, 5, 8, 3, 7, 8, 7, 4, 7, 5, 5],
    [7, 7, 6, 5, 7, 3, 4, 7, 3, 4, 7, 3, 8, 1, 6, 5, 4, 1, 5, 8, 6, 1, 1, 3, 8, 3, 1, 1, 4, 4],
    [2, 8, 6, 5, 8, 6, 7, 7, 3, 5, 8, 7, 3, 8, 3, 8, 1, 2, 7, 5, 7, 7, 5, 3, 7, 4, 7, 2, 1, 2],
    [7, 4, 1, 6, 1, 4, 7, 7, 8, 4, 3, 7, 3, 7, 5, 6, 3, 3, 4, 2, 6, 4, 8, 2, 4, 6, 5, 2, 7, 7],
    [3, 5, 5, 6, 5, 4, 2, 6, 4, 6, 2, 8, 5, 6, 4, 8, 8, 1, 8, 2, 3, 7, 8, 2, 5, 2, 2, 1, 1, 2],
    [7, 8, 4, 7, 1, 2, 8, 4, 8, 7, 2, 3, 1, 1, 1, 6, 2, 4, 6, 2, 4, 5, 4, 3, 3, 3, 3, 4, 1, 6],
    [2, 4, 6, 7, 6, 7, 3, 7, 6, 2, 2, 7, 5, 2, 8, 1, 6, 1, 5, 3, 2, 7, 2, 5, 1, 1, 7, 5, 4, 6],
    [3, 8, 6, 1, 6, 1, 4, 1, 6, 5, 6, 4, 1, 6, 2, 2, 1, 6, 8, 8, 1, 4, 2, 6, 4, 5, 7, 3, 2, 6],
    [2, 7, 4, 7, 4, 8, 1, 6, 4, 2, 2, 3, 2, 8, 4, 6, 8, 6, 1, 4, 1, 6, 1, 4, 6, 1, 8, 8, 1, 5],
    [6, 2, 3, 3, 8, 1, 5, 7, 2, 2, 7, 3, 1, 3, 2, 7, 3, 8, 6, 3, 7, 8, 5, 6, 6, 6, 8, 2, 7, 5],
    [4, 2, 5, 5, 5, 1, 7, 5, 7, 1, 7, 7, 1, 8, 6, 1, 7, 1, 2, 1, 3, 1, 6, 7, 2, 6, 3, 8, 3, 5],
    [7, 4, 7, 3, 4, 2, 1, 7, 6, 7, 2, 8, 1, 7, 7, 6, 1, 2, 7, 7, 7, 2, 1, 2, 6, 6, 3, 6, 2, 1],
    [8, 4, 2, 6, 7, 1, 4, 7, 3, 5, 3, 3, 7, 1, 1, 1, 8, 4, 2, 5, 4, 7, 8, 6, 5, 2, 3, 6, 6, 6],
    [1, 1, 7, 4, 5, 4, 6, 1, 6, 1, 5, 1, 2, 5, 6, 6, 5, 3, 2, 1, 6, 3, 7, 1, 6, 6, 2, 1, 3, 2],
    [4, 5, 7, 1, 5, 6, 7, 6, 1, 5, 4, 6, 1, 6, 4, 5, 5, 3, 6, 8, 6, 4, 7, 7, 7, 5, 8, 1, 3, 7],
    [1, 2, 5, 4, 3, 4, 3, 6, 3, 2, 3, 6, 1, 8, 4, 5, 7, 5, 2, 6, 4, 2, 5, 1, 5, 2, 6, 6, 3, 8],
    [7, 4, 6, 6, 1, 1, 3, 4, 2, 4, 1, 5, 8, 1, 6, 6, 3, 6, 6, 3, 7, 3, 7, 1, 2, 2, 4, 8, 2, 2],
    [8, 3, 8, 1, 8, 4, 8, 5, 3, 8, 3, 4, 3, 2, 6, 6, 2, 6, 6, 2, 8, 5, 2, 7, 2, 8, 8, 3, 2, 8],
    [2, 5, 5, 4, 6, 1, 5, 2, 6, 8, 2, 5, 8, 1, 8, 2, 5, 4, 5, 6, 6, 7, 3, 6, 3, 5, 8, 1, 2, 7],
    [5, 7, 3, 1, 2, 3, 2, 2, 1, 2, 5, 5, 4, 3, 5, 7, 2, 4, 4, 7, 5, 1, 6, 7, 7, 6, 2, 2, 5, 5],
    [8, 8, 2, 7, 6, 5, 8, 7, 2, 8, 6, 5, 4, 2, 1, 5, 3, 2, 4, 4, 2, 1, 5, 5, 1, 3, 7, 3, 1, 2],
    [5, 4, 4, 3, 1, 2, 8, 1, 7, 4, 4, 4, 3, 2, 2, 2, 3, 6, 8, 6, 5, 2, 3, 5, 2, 4, 1, 8, 5, 5],
    [7, 1, 8, 7, 4, 3, 8, 7, 2, 8, 3, 8, 5, 7, 7, 8, 6, 3, 3, 5, 4, 2, 2, 4, 6, 5, 4, 2, 3, 3],
    [3, 8, 6, 8, 3, 4, 2, 6, 3, 1, 3, 3, 8, 3, 6, 2, 6, 8, 3, 1, 3, 2, 3, 5, 7, 5, 2, 2, 6, 6],
    [4, 6, 6, 7, 5, 2, 6, 7, 4, 6, 4, 3, 2, 5, 8, 6, 2, 3, 5, 2, 4, 5, 2, 5, 4, 3, 8, 4, 4, 7],
    [3, 4, 6, 8, 8, 5, 3, 1, 4, 8, 5, 6, 6, 5, 3, 1, 5, 5, 5, 6, 8, 5, 1, 3, 8, 1, 6, 1, 8, 8]
]

let algoritmo_31 = (matriz, inteiro) => {
    let qtdInteirosIguais = 0
    let matrizSemInteiro = []
    for(let linhas = 0; linhas < matriz.length; linhas++){
        matriz[linhas].forEach((element, index) => {
            if(element == inteiro)
                qtdInteirosIguais++
            else{
                matrizSemInteiro.push(element)
            }
        });
    }
    console.log("Quantidade de "+inteiro+" na matriz é: "+qtdInteirosIguais)
    console.log("Nova matriz sem o "+inteiro)
    console.log(matrizSemInteiro)
}
algoritmo_31(M_31, 8)

/*
32. Escrever um algoritmo que lê uma matriz M(12,13) e divida todos os 13 elementos de
cada uma das 12 linhas de M pelo maior elemento em módulo daquela linha. Escrever a
matriz lida e a modificada.
*/
let M_32 = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
    [14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26],
    [27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39],
    [40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52],
    [53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65],
    [66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78],
    [79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91],
    [92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104],
    [105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117],
    [118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130],
    [131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143],
    [144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156]
  ]

let algoritmo_32 = (matriz) => {
    let maior = matriz[0][0]
    let matrizModificada = []
    for(let linhas = 0; linhas < matriz.length; linhas++){
        matrizModificada[linhas] = []
        for(let coluna = 0; coluna < matriz[1].length; coluna++){
            if(matriz[linhas][coluna] > maior)
                maior = matriz[linhas][coluna]
        }
        for(let coluna = 0; coluna < matriz[linhas].length; coluna++){
            matrizModificada[linhas][coluna] = parseFloat(matriz[linhas][coluna] / maior).toFixed(2)
        }
    }
    console.log("Matriz informada")
    console.log(matriz)
    console.log("Matriz modificada")
    console.log(matrizModificada)
}
algoritmo_32(M_32)

/*
33. Faça um algoritmo que leia uma matriz 3 x 3 e após a leitura, multiplique os
elementos da diagonal principal com a média dos elementos da diagonal secundária.
*/
const M_33 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
let algoritmo_33 = (matriz) => {
    let totalSecundaria = 0
    let diagonalPrincipal = []
    let diagonalSecundaria = []
    let PrincipalMultiplicada = []
    for(let linha = 0; linha < matriz.length; linha++){
        matriz[linha].forEach((element, index) => {
            if(linha === index){
                diagonalPrincipal.push(element)
            }
        });
    }
    for(let i = 0; i < matriz.length; i++){
        diagonalSecundaria[i] = matriz[i][matriz.length -i -1]
    }
    for(let i = 0; i < diagonalSecundaria.length; i++){
        totalSecundaria += diagonalSecundaria[i]
    }
    for(let i = 0; i < diagonalPrincipal.length; i++){
        PrincipalMultiplicada[i] = parseFloat(diagonalPrincipal[i] / (totalSecundaria / diagonalSecundaria.length)).toFixed(2)
    }
    return PrincipalMultiplicada
}
console.log(algoritmo_33(M_33))

/*
34. Faça um algoritmo que leia uma matriz 50 x 50 de números reais. A seguir, multiplique
cada linha pelo elemento da diagonal principal daquela linha. Mostre a matriz após as
multiplicações.
*/
const M_34 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];

let algoritmo_34 = (matriz) => {
    let diagonalPrincipal = []
    let matrizMultiplicada = []
    for(let linha = 0; linha < matriz.length; linha++){
        matrizMultiplicada[linha] = []
        for(let coluna = 0; coluna < matriz[linha].length; coluna++){
            if(coluna === linha){
                diagonalPrincipal[linha] = matriz[linha][coluna]
            }
        }
        for(let coluna = 0; coluna < matriz[linha].length; coluna++){
            matrizMultiplicada[linha][coluna] = parseInt(matriz[linha][coluna] * diagonalPrincipal[linha])
        }
    }
    return matrizMultiplicada
}
console.log(algoritmo_34(M_34)) // Testado com uma matriz de 3x3, porque a de 50x50 ia ficar enorme

/*
35. Elaborar um algoritmo que leia um conjunto de 30 valores e os coloca em 2 vetores
conforme forem pares ou ímpares. O tamanho do vetor é de 5 posições. Se algum vetor
estiver cheio, escrevê-lo. Terminada a leitura, escrever o conteúdo dos dois vetores. Cada
vetor pode ser preenchido quantas vezes forem necessárias.
*/
let M_35 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]

let algoritmo_35 = (array) => {
    let arrayPares = []
    let ImprimirPar = false
    let arrayImpares = []
    let ImprimirImpar = false

    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 === 0){
            ImprimirPar = true
            arrayPares.push(array[i])
        }else{
            ImprimirImpar = true
            arrayImpares.push(array[i])
        }
        if(arrayPares.length === 5){
            console.log("Pares: "+arrayPares)
            arrayPares = []
            ImprimirPar = false
        }
        if(arrayImpares.length === 5){
            console.log("Impares: "+arrayImpares)
            arrayImpares = []
            ImprimirImpar = false
        }
    }
    if(ImprimirPar)
        console.log("Pares: "+arrayPares)
    if(ImprimirImpar)
        console.log("Impares: "+arrayImpares)
}
algoritmo_35(M_35)

/*
36. Escreva um algoritmo que leia um vetor de 13 elementos inteiros, que é o Gabarito de
um teste da loteria esportiva. Leia, a seguir, para cada um dos 100 apostadores, o número
do seu cartão e um vetor de Respostas de 13 posições. Verifique para cada apostador o
número de acertos, comparando o vetor de Gabarito com o vetor de Respostas. Escreva
o número do apostador e o número de acertos. Se o apostador tiver 13 acertos, mostrar a
mensagem "Parabéns, tu foi o GANHADOR".
*/
let gabarito_36 = [1, 3, 5, 6, 9, 10, 12, 19, 23, 25, 28, 29, 32]

let verificaAcertos_36 = (gabarito, respostas) => {
    let acertos = 0;
    for (let i = 0; i < gabarito.length; i++) {
        if (gabarito.includes(respostas[i]))
            acertos++;
    }
    return acertos;
}


let algoritmo_36 = (gabarito) => {
    for(let i = 1; i <= 100; i++){
        let apostas = []
        for(let x = 0; x < 13; x++){
            apostas[x] = Math.floor((Math.random() * 50) + 1)
        }
        console.log(`Apostador numero ${i}, \nSuas apostas: ${apostas}\nGabarito: ${gabarito}\nVocê conseguiu ${(verificaAcertos_36(gabarito, apostas))} acertos\n`)
        if(verificaAcertos_36(gabarito, apostas) === 13)
            console.log("Parabéns, tu foi o GANHADOR\n")
    }
}

algoritmo_36(gabarito_36)