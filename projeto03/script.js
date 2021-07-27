document.querySelector('.busca').addEventListener('submit', async (event)=>{
    // Previne o procedimento padrão de envio de formulário
    event.preventDefault();

    // Pegar o que digitou
    let input = document.querySelector('#searchInput').value;

    // Verificação de digitação do input
    if(input !== ''){
        showWarning('Carregando...')

        // Consumindo uma API ===================== Encode -> converte a string, para a leitura da aplicação
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid=068e827c7176e65733dd704ef24b0363&units=metric&lang=pt_br`;

        //Guarda os resultados da API
        let results = await fetch(url);
        let json = await results.json(); // transforma os resultados em json

        // Verifica se cidade foi digitado do jeito certo e retorna os dados
        if(json.cod === 200){
            showInfo({
                name: json.name,
                country: json.sys.country,
                temp: json.main.temp,
                tempIcon: json.weather[0].icon,
                windSpeed: json.wind.speed,
                windAngle: json.wind.deg
            });
        } else {
            showWarning('Não encontramos esta localização')
        }
    } 
});

// Função que irá mostrar as informações
function showInfo(json){
    showWarning('');

    document.querySelector('.resultado').style.display = 'block';

    document.querySelector('.titulo').innerHTML = `${json.name}, ${json.country}`
    document.querySelector('.tempInfo').innerHTML = `${json.temp}<sup>°C</sup>`
    document.querySelector('.ventoInfo').innerHTML = `${json.windSpeed}km/h`

    // Desenho
    document.querySelector('.temp img').setAttribute('src',`http://openweathermap.org/img/wn/${json.tempIcon}@2x.png`);
}

// Função que mostra ou remove algum aviso
function showWarning(msg){
    document.querySelector('.aviso').innerHTML = msg;
}