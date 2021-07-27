document.body.addEventListener('keyup', (event)=> {
    playSound(event.code.toLowerCase());
});

// Compondo as teclas digitadas
document.querySelector('.composer button').addEventListener('click', () =>{
    let song = document.querySelector('#input').value;

    // Validação 
    if(song !== ''){
        // Tranformando em Array cada tecla digitada na composição
        let songArray = song.split('');
        playComposition(songArray);
    }
})

function playSound(sound){
    // Adiciona o Template String pois completa a tecla digitada.
    let audioElement = document.querySelector(`#s_${sound}`);

    // Procura um div que tem o valor de data-key 
    let keyElement = document.querySelector(`div[data-key="${sound}"]`);

    // Verifica se foi solicidado outra tecla
    if(audioElement){
        audioElement.currentTime = 0; //Tira o atraso do audio
        audioElement.play();
    }

    // Se achou o KeyElement, vai ser adicionando um evento
    if(keyElement){
        keyElement.classList.add('active'); // Adiciona a class 'active' do CSS

        // Adiciona o tempo de atividade da tecla --- Passo dois parâmetros
        setTimeout(()=>{
            keyElement.classList.remove('active'); // o Que será executado
        }, 300) // tempo do término da execução
    }
}

// Função de composição 
function  playComposition(songArray){
    let wait = 0; // tempo de pausa para execução de cada tecla declarada na variável
   
    // loop temporalizado
    for(let songItem of songArray){ 
        setTimeout(() => {
            playSound(`key${songItem}`);// A cada tecla digitada
        }, wait) // Um tempo de execução ao executar

        wait += 250; // agenda o tempo entre o espaço
    
    }
}