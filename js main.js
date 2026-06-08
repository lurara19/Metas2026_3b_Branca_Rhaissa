const botoes =document.querySelectorAll(".botao");
const texto =document .querySelectorAll(".aba-conteudo");

for (let i= 0; i<botoes.length; i++){
    botoes[i].onclik = function (){
        for ( let j=0; j <botoes.length;j++){
            botoes(j).classlist.remove("ativo");
            texto(j).classlist.remove("ativo");
        }
         botoes(i).classlist.add("ativo");
         texto(i).classlist.add("ativo");
    }
}

const contadores = document.querySelectorAll(".contador");
const tempoOBJETIVO1 = new Date("2027-06-30T00:00:00");
const tempoOBJETIVO2 = new Date("2030-12-30T00:00:00");
const tempoOBJETIVO3 = new Date("2040-12-30T00:00:00");

const tempo = [tempoOBJETIVO1,tempoOBJETIVO2, tempoOBJETIVO3];

function calculaTempo(tempoObjetivo) {
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;
    let segundos = Math.floor(tempoFinal / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);

    segundos %= 60;
    minutos %= 60;
    horas %= 24;
    if (tempoFinal > 0){
        return dias + " dias " + horas + " horas " + minutos + " minutos " + segundos + " segundos";
    } else {
        return "Prazo Finalizado";
    }
}

function atualizaCronometro(){

    for (let i = 0; i < tempos.length; i++){

        let tempoAtual = new Date();
        let tempoFinal = tempos[i] - tempoAtual;

        let segundos = Math.floor(tempoFinal / 1000);
        let minutos = Math.floor(segundos / 60);
        let horas = Math.floor(minutos / 60);
        let dias = Math.floor(horas / 24);

        segundos %= 60;
        minutos %= 60;
        horas %= 24;

        if (tempoFinal > 0){
            document.getElementById(`dias${i}`).textContent = dias;
            document.getElementById(`horas${i}`).textContent = horas;
            document.getElementById(`min${i}`).textContent = minutos;
            document.getElementById(`seg${i}`).textContent = segundos;
        } else {
            document.getElementById(`dias${i}`).textContent = "0";
            document.getElementById(`horas${i}`).textContent = "0";
            document.getElementById(`min${i}`).textContent = "0";
            document.getElementById(`seg${i}`).textContent = "0";
        }
    }
}

function comecaCronometro(){
    atualizaCronometro();
    setInterval(atualizaCronometro,1000);
}

comecaCronometro();