let numeroAleatorio = Math.floor(Math.random() * 100) +1;

let palpites = document.querySelector('.palpites');
let ultimoResultado = document.querySelector('.ultimoResultado');
let baixoOuAlto = document.querySelector('.baixoOuAlto');

let envioPalpite = document.querySelector('.envioPalpite');
let campoPalpite = document.querySelector('.campoPalpite');

let contagemPalpites = 1;
let botaoReinicio;
campoPalpite.focus();

function conferirPalpite() {
    let palpiteUsuario = Number(campoPalpite.value);
    if(contagemPalpites === 1){
        palpites.textContent = 'Palpites anteriores: ';
    }
    palpites.textContent += palpiteUsuario + ', ';

    if(palpiteUsuario === numeroAleatorio){
        ultimoResultado.textContent = 'Parabéns, você acertou!';
        baixoOuAlto.textContent = '';
        configFimDeJogo();
    }else if(contagemPalpites === 10) {
        ultimoResultado.textContent = 'Fim de Jogo!';
        baixoOuAlto.textContent = '';
        configFimDeJogo();
    }else{
        ultimoResultado.textContent = 'Errado';
        if(palpiteUsuario < numeroAleatorio) {
            baixoOuAlto.textContent = 'Seu palpite esta muito baixo';
        }else if(palpiteUsuario > numeroAleatorio){
            baixoOuAlto.textContent = 'Seu palpite esta muito alto'
        }
    }
    contagemPalpites++;
    campoPalpite.Valeu = '';
    campoPalpite.focus();
}

envioPalpite.addEventListener('click', conferirPalpite);



function configFimDeJogo() {
    campoPalpite.disabled = true;
    envioPalpite.disabled = true;
    botaoReinicio = document.createElement('button');
    botaoReinicio.textContent = 'iniciar novo jogo';
    document.body.appendChild(botaoReinicio);
    botaoReinicio.addEventListener('click', reiniciarJogo);
}


function reiniciarJogo(){
    contagemPalpites = 1;

    let reinicarParas = document.querySelectorAll('.reultadoParas p');
    for (let i=0; i< reinicarParas.length ; i++) {
        reiniciarParas[i].textContent = '';
    }

    botaoReinicio.parentNode.removeChild(botaoReinicio);

    campoPalpite.disabled = false;
    envioPalpite.disabled = false;
    campoPalpite.value = '';
    campoPalpite.focus();

    numeroAleatorio = Math.floor(Math.random() *100) +1;
}

