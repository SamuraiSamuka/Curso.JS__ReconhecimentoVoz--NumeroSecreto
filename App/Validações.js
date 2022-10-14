import {maiorValor, menorValor, numeroSecreto}  from "./sortearNumero.js"

function verificaSeChuteEValido(chute) {
    const numero = Number.parseInt(chute);

    if (chuteForInvalido(numero)) {
        return `Valor inválido: O valor precisa ser um número`
    } else if (numeroForaDoIntervaloPermitido(numero)) {
        return `Valor inválido: Fale um número entre ${menorValor} e ${maiorValor}`
    } else {
        return verificaSeChuteAcertou(numero)
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroForaDoIntervaloPermitido(numero) {
    return numero > maiorValor || numero < menorValor
}

function verificaSeChuteAcertou (chute) {
    if (chute === numeroSecreto) {
        return 1
    } else if (chute > numeroSecreto) {
        return "O número secreto é menor."
    } else if (chute < numeroSecreto) {
        return "O número secreto é maior."
    }
}

export {verificaSeChuteEValido, verificaSeChuteAcertou}