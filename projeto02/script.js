//1- Selecionar o que será manipulado
let digitalElement = document.querySelector('.digital');
let sElement = document.querySelector('.p_s');
let mElement = document.querySelector('.p_m');
let hElement = document.querySelector('.p_h');

//2- timer que rode de segundo em segundo
function updateClock(){
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    //3- Relogio Digital 
    digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`

    //6 - Cálculo de grau / segundos
    let sDeg = ((360 / 60)*second) - 90; // Rotação do CSS é diferente, por isso o -90, que é a diferença.
    let mDeg = ((360 / 60) * minute) - 90;
    let hDeg = ((360 / 12) * hour) -90;

    // 5 -Relógio Analógico
    sElement.style.transform = `rotate(${sDeg}deg)`
    mElement.style.transform = `rotate(${mDeg}deg)`
    hElement.style.transform = `rotate(${hDeg}deg)`
}

//4 - função que acrescenta o zero no relógio digital
function fixZero(time){
  return time < 10 ? `0${time}`: time
}

setInterval(updateClock, 1000);

// Não terá mais delei na hora de atualizar a tela
updateClock();