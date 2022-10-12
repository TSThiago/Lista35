// Ex 1:
// console.log(QuebrarChocolate(3,2))
// function QuebrarChocolate(n: number, m: number): number {
//     let contador: number = 0
//     if (n == 0 || m == 0) {
//         return -1
//     } else {
//         while (n >= 1 && m >= 1) {
//             n = n - 1
//             m = m - 1
//             contador++
//         }
//         return contador
//     }
// }
// Ex 2:
console.log(TrocarLetras("CODigo"));
function TrocarLetras(palavra) {
    console.log(palavra);
    var arrayMinusculo = palavra.match(/[a-z]/g);
    var arrayMaiusculo = palavra.match(/[A-Z]/g);
    if (arrayMaiusculo.length > arrayMinusculo.length) {
        return palavra.toUpperCase();
    }
    else {
        return palavra.toLowerCase();
    }
}
