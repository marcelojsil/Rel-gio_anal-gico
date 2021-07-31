let digitalElement = document.querySelector('.digital');
let sElement = document.querySelector('.p_s');
let mElement = document.querySelector('.p_m');
let hElement = document.querySelector('.p_h');

function updateClock() { //atualiza a função relógio
    let now = new Date(); //Atualiza para a hora do agora
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds(); 

    digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`;
    
    //ponteiro do segundo
    let sDeg = ((360 / 60) * second) - 90; //calculo do movimento dos segundos

    sElement.style.transform = `rotate(${sDeg}deg)`; //faz o ponteiro rotacionar no eixo


    //ponteiro do minutos
    let mDeg = ((360 / 60) * minute) - 90; //calculo do movimento dos minutos

    mElement.style.transform = `rotate(${mDeg}deg)`; 

    //ponteiro da hora
    let hDeg = ((360 / 12) * hour) - 90; //calculo do movimento das horas

    hElement.style.transform = `rotate(${hDeg}deg)`; //faz o ponteiro rotacionar no eixo
}

function fixZero(time) {
    return time < 10 ? `0${time}`: time; //deixar as informações sempre com 2 dígitos
}

setInterval(updateClock, 1000); //Modifica conforme intervalo de 1s