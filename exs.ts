// Ex 1:

// console.log(QuebrarChocolate(4,2))

// function QuebrarChocolate(n: number, m: number): number {
//     return ((n * m) - 1)
// }

// Ex 2:

// console.log(TrocarLetras("CODigo"))

// function TrocarLetras(palavra : string) : string{
//     console.log(palavra)
//     let arrayMinusculo : string[] = palavra.match(/[a-z]/g)
//     let arrayMaiusculo : string[] = palavra.match(/[A-Z]/g)
//     if(arrayMaiusculo.length > arrayMinusculo.length){
//         return palavra.toUpperCase()
//     }else{
//         return palavra.toLowerCase()
//     }
// }

// Ex 3:

class Lutador {
    #Nome: string
    #Vida: number
    #Ataque: number

    constructor(nome: string, vida: number, ataque: number) {
        this.#Nome = nome
        this.#Vida = vida
        this.#Ataque = ataque
    }
    setNome(nome: string): void {
        this.#Nome = nome
    }
    getNome(): string {
        return this.#Nome
    }

    setVida(vida: number): void {
        this.#Vida = vida
    }
    getVida(): number {
        return this.#Vida
    }

    setAtaque(ataque: number): void {
        this.#Ataque = ataque
    }
    getAtaque(): number {
        return this.#Ataque
    }

}

let Fighter1 = new Lutador("Luiz", 10, 5)
let Fighter2 = new Lutador("Anderson", 15, 10)

RetornarVencedor(Fighter1, Fighter2, Fighter2)

function RetornarVencedor(lutador1: Lutador, lutador2: Lutador, atacaPrimeiro: Lutador): void {
    if (lutador1 == atacaPrimeiro) {
        while (lutador1.getVida() > 0 || lutador2.getVida() > 0) {
            lutador2.setVida(Math.round(lutador2.getVida()) - Math.round(lutador1.getAtaque()))
            console.log(lutador1.getNome() + " ataca " + lutador2.getNome() + "; " + lutador2.getNome() + " agora tem " + lutador2.getVida() + " de vida.")
            if (lutador2.getVida() <= 0) {
                console.log(lutador1.getNome()+ " ganhou!")
                return
            }
            lutador1.setVida(Math.round(lutador1.getVida()) - Math.round(lutador2.getAtaque()))
            console.log(lutador2.getNome() + " ataca " + lutador1.getNome() + "; " + lutador1.getNome() + " agora tem " + lutador1.getVida() + " de vida.")
            if (lutador1.getVida() <= 0) {
                console.log(lutador2.getNome()+ " ganhou!")
                return
            }
        }
    }else if(lutador2 == atacaPrimeiro){
        while (lutador1.getVida() > 0 || lutador2.getVida() > 0) {
            lutador1.setVida(Math.round(lutador1.getVida()) - Math.round(lutador2.getAtaque()))
            console.log(lutador2.getNome() + " ataca " + lutador1.getNome() + "; " + lutador1.getNome() + " agora tem " + lutador1.getVida() + " de vida.")
            if (lutador1.getVida() <= 0) {
                console.log(lutador2.getNome()+ " ganhou!")
                return
            }
            lutador2.setVida(Math.round(lutador2.getVida()) - Math.round(lutador1.getAtaque()))
            console.log(lutador1.getNome() + " ataca " + lutador2.getNome() + "; " + lutador2.getNome() + " agora tem " + lutador2.getVida() + " de vida.")
            if (lutador2.getVida() <= 0) {
                console.log(lutador1.getNome()+ " ganhou!")
                return
            }
        }
    }
}


