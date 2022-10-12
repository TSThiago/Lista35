# Lista 35

1. Faça uma função que receba dois parâmetros do tipo número que representa o
tamanho de uma barra de chocolate n X m, o objetivo dessa função é quebrar a
barra de chocolate em pedaços 1x1 e retornar o número mínimo de quebras
necessárias, se algum dos parâmetros de entrada for 0 você deve retornar -1.
Ex.:
Entrada - Saída
2,1 - 1
3,2 - 5

2. Faça uma função que receba uma string como parâmetro, essa string pode conter
letras maiúsculas ou minúsculas. A função deve retornar a string apenas com letras
minúsculas ou maiúsculas de acordo com a seguinte regra: fazer o mínimo de
alterações possíveis, se a contagem de minúsculas e maiúsculas for igual deve
retornar apenas minúsculas.
Ex.:
Entrada - Saída
“coDigo” - “codigo”
“CODiGo” - “CODIGO”
“CODigo” - “codigo”

3. Crie uma função que retorne o nome do vencedor em uma luta entre dois lutadores.
Cada lutador ataca o adversário no seu próprio turno, quem derrubar o outro
primeiro vence, um jogador é derrubado quando sua vida for <= 0.
Cada lutador é um objeto de uma classe Lutador, portanto você deve criá-lo com as
seguintes propriedades: Nome: string, Vida: number, Ataque: number.
Tanto vida como ataque devem ser valores inteiros maiores que 0 e a função além
dos dois lutadores deve receber um terceiro parâmetro com o nome de quem vai
começar atacando.
DeclararVencedor(new Lutador(“Fulano”, 10, 2), new Lutador (“Ciclano”, 7, 3),
“Ciclano)
Cliclano ataca Fulano; Fulano agora tem 7 de vida.
Fulano ataca Cliclano; Ciclano agora tem 5 de vida.
Cliclano ataca Fulano; Fulano agora tem 4 de vida.
Fulano ataca Cliclano; Ciclano agora tem 3 de vida.
Cliclano ataca Fulano; Fulano agora tem 1 de vida.
Fulano ataca Cliclano; Ciclano agora tem 1 de vida.
Cliclano ataca Fulano; Fulano agora tem -2 de vida e caiu. Ciclano ganhou!