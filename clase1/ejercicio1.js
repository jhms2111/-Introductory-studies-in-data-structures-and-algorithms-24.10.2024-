const jogadores = [
    {titulares:['Mbappe','Vini Jr','Rodrygo']},
    {reservas:['Marco','Fernandes','Oscar']}
 ]
const titulares = jogadores[0].titulares;
const reservas = jogadores[1].reservas;

const todosJogadores = titulares.concat(reservas)

console.log(todosJogadores)

const numeros = [
    {definicao: 'pares', num:[2,4,6,8]},
    {definicao: 'impares', num:[1,3,5,7]},
]

function numPares(numeros, buscarNumerosPares){
    const numeroPar = numeros.find(n => n.definicao === buscarNumerosPares)
    return numeroPar ? numeroPar.num:[];
}

function numImpar(numeros, buscarNumerosImpares){
    const numeroImpar = numeros.find(n => n.definicao === buscarNumerosImpares)
    return numeroImpar ? numeroImpar.num:[];
}

console.log(numPares(numeros, 'pares'))
console.log(numImpar(numeros,'impares'))


function juntarNumero(){
    const pares = numPares(numeros,'pares')
    const impares = numImpar(numeros,'impares')
    const juntarNumero = pares.concat(impares)
    return juntarNumero
}


console.log(juntarNumero())