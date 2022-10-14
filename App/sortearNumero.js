const menorValor = 1
const maiorValor = 100
const campoMenorValor = document.querySelector('#menor-valor')
const campoMaiorValor = document.querySelector('#maior-valor')
campoMaiorValor.innerText = maiorValor
campoMenorValor.innerText = menorValor

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * maiorValor + 1)
}

const numeroSecreto = gerarNumeroAleatorio()

export {numeroSecreto, menorValor, maiorValor}