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
console.log(calcularProdutoMatriz(A_26, B_26))