
let segundos = document.querySelector(".segundos");
let minutos = document.querySelector(".minutos");

let tempoSegundos = 0;
let tempoMinutos = 0;
let intervalos = 0;

function iniciar() {

    let temporisador = setInterval(function () {
        console.log("luisinho viado")

        tempoSegundos++

        if (tempoSegundos >= 10) {

            segundos.textContent = `${tempoSegundos}`

        }

        if (tempoSegundos >= 60) {
            tempoSegundos = 0;
            tempoMinutos++
            segundos.textContent = `${tempoSegundos}`
            minutos.textContent = `0${tempoMinutos}:`
        }
        if (tempoMinutos >= 10) {
            minutos.textContent = `${tempoMinutos}:`
        }

        if (tempoSegundos < 10) {
            segundos.textContent = `0${tempoSegundos}`
        }

        

    }, 1000)

    intervalos = temporisador;
}

function parar() {

    clearInterval(intervalos)
}

function zerar(){
    clearInterval(intervalos)
    tempoSegundos = 0;
    tempoMinutos = 0;
    segundos.textContent = `0${tempoSegundos}`
    minutos.textContent = `0${tempoMinutos}:`

}