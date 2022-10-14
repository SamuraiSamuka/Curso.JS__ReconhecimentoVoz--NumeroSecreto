import { numeroSecreto } from './sortearNumero.js';
import {verificaSeChuteEValido} from './Validações.js'
const elementoChute = document.getElementById('chute')

// Reconhecimento de voz
window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';
recognition.start();

recognition.addEventListener('result', onSpeak)

console.log(numeroSecreto)
function onSpeak(e) {
    let chute = e.results[0][0].transcript.replace("−", "-").replace(".", "").replace("Menos ", "-").replace("Um", '1').replace('Sem', '100');
    let sobreChute = verificaSeChuteEValido(chute)
    exibeChuteNaTela(chute, sobreChute)
}


function exibeChuteNaTela(chute, sobreChute) {
    if(sobreChute === 1) {
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O número secreto é ${numeroSecreto}</h3>
            <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `
    } else if (sobreChute === 0) {
        document.body.innerHTML = `
            <h2>Gamer Over</h2>
            <h3>Fim de jogo</h3>
            <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `
    } else {
        elementoChute.innerHTML = `
        <div>Você disse:</div>
        <span class="box">${chute}</span>
        <div>${sobreChute}</div>
    `
    }
}

recognition.addEventListener('end', () => recognition.start())