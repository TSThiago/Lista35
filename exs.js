// Ex 1:
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Lutador_Nome, _Lutador_Vida, _Lutador_Ataque;
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
var Lutador = /** @class */ (function () {
    function Lutador(nome, vida, ataque) {
        _Lutador_Nome.set(this, void 0);
        _Lutador_Vida.set(this, void 0);
        _Lutador_Ataque.set(this, void 0);
        __classPrivateFieldSet(this, _Lutador_Nome, nome, "f");
        __classPrivateFieldSet(this, _Lutador_Vida, vida, "f");
        __classPrivateFieldSet(this, _Lutador_Ataque, ataque, "f");
    }
    Lutador.prototype.setNome = function (nome) {
        __classPrivateFieldSet(this, _Lutador_Nome, nome, "f");
    };
    Lutador.prototype.getNome = function () {
        return __classPrivateFieldGet(this, _Lutador_Nome, "f");
    };
    Lutador.prototype.setVida = function (vida) {
        __classPrivateFieldSet(this, _Lutador_Vida, vida, "f");
    };
    Lutador.prototype.getVida = function () {
        return __classPrivateFieldGet(this, _Lutador_Vida, "f");
    };
    Lutador.prototype.setAtaque = function (ataque) {
        __classPrivateFieldSet(this, _Lutador_Ataque, ataque, "f");
    };
    Lutador.prototype.getAtaque = function () {
        return __classPrivateFieldGet(this, _Lutador_Ataque, "f");
    };
    return Lutador;
}());
_Lutador_Nome = new WeakMap(), _Lutador_Vida = new WeakMap(), _Lutador_Ataque = new WeakMap();
var Fighter1 = new Lutador("Luiz", 10, 5);
var Fighter2 = new Lutador("Anderson", 15, 10);
RetornarVencedor(Fighter1, Fighter2, Fighter2);
function RetornarVencedor(lutador1, lutador2, atacaPrimeiro) {
    if (lutador1 == atacaPrimeiro) {
        while (lutador1.getVida() > 0 || lutador2.getVida() > 0) {
            lutador2.setVida(Math.round(lutador2.getVida()) - Math.round(lutador1.getAtaque()));
            console.log(lutador1.getNome() + " ataca " + lutador2.getNome() + "; " + lutador2.getNome() + " agora tem " + lutador2.getVida() + " de vida.");
            if (lutador2.getVida() <= 0) {
                console.log(lutador1.getNome() + " ganhou!");
                return;
            }
            lutador1.setVida(Math.round(lutador1.getVida()) - Math.round(lutador2.getAtaque()));
            console.log(lutador2.getNome() + " ataca " + lutador1.getNome() + "; " + lutador1.getNome() + " agora tem " + lutador1.getVida() + " de vida.");
            if (lutador1.getVida() <= 0) {
                console.log(lutador2.getNome() + " ganhou!");
                return;
            }
        }
    }
    else if (lutador2 == atacaPrimeiro) {
        while (lutador1.getVida() > 0 || lutador2.getVida() > 0) {
            lutador1.setVida(Math.round(lutador1.getVida()) - Math.round(lutador2.getAtaque()));
            console.log(lutador2.getNome() + " ataca " + lutador1.getNome() + "; " + lutador1.getNome() + " agora tem " + lutador1.getVida() + " de vida.");
            if (lutador1.getVida() <= 0) {
                console.log(lutador2.getNome() + " ganhou!");
                return;
            }
            lutador2.setVida(Math.round(lutador2.getVida()) - Math.round(lutador1.getAtaque()));
            console.log(lutador1.getNome() + " ataca " + lutador2.getNome() + "; " + lutador2.getNome() + " agora tem " + lutador2.getVida() + " de vida.");
            if (lutador2.getVida() <= 0) {
                console.log(lutador1.getNome() + " ganhou!");
                return;
            }
        }
    }
}
