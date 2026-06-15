const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

// Lógica de alternância das abas
for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {
        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }
        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}

// Configuração dos cronômetros
const tempoOBJETIVO1 = new Date("2027-06-30T00:00:00");
const tempoOBJETIVO2 = new Date("2030-12-30T00:00:00");
const tempoOBJETIVO3 = new Date("2040-12-30T00:00:00");

// Nome da lista padronizado para "tempos"
const tempos = [tempoOBJETIVO1, tempoOBJETIVO2, tempoOBJETIVO3];

function atualizaCronometro() {
    for (let i = 0; i < tempos.length; i++) {
        let tempoAtual = new Date();
        let tempoFinal = tempos[i] - tempoAtual;

        // Se o tempo acabou, força tudo a ficar em zero
        if (tempoFinal <= 0) {
            document.getElementById(`dias${i}`).textContent = "0";
            document.getElementById(`horas${i}`).textContent = "0";
            document.getElementById(`min${i}`).textContent = "0";
            document.getElementById(`seg${i}`).textContent = "0";
            continue; // Pula para a próxima meta da lista
        }

        let segundos = Math.floor(tempoFinal / 1000);
        let minutos = Math.floor(segundos / 60);
        let horas = Math.floor(minutos / 60);
        let dias = Math.floor(horas / 24);

        segundos %= 60;
        minutos %= 60;
        horas %= 24;

        // Injeta os valores calculados diretamente no HTML correspondente
        document.getElementById(`dias${i}`).textContent = dias;
        document.getElementById(`horas${i}`).textContent = horas;
        document.getElementById(`min${i}`).textContent = minutos;
        document.getElementById(`seg${i}`).textContent = segundos;
    }
}

function comecaCronometro() {
    atualizaCronometro();
    setInterval(atualizaCronometro, 1000);
}

comecaCronometro();
