function configurarVideo(id) {
    const video = document.getElementById(id); // pega um elemento pelo ID
    video.oncontextmenu = () => false; // para desativar as opções de download e salvar
    const btPlay = document.querySelector(`[wm-play=${id}]`);
    document.querySelector(`[wm-play=${id}]`).onclick = function () {
        midiaPlay(btPlay, video);
    };

    document.querySelector(`[wm-inicio=${id}]`).onclick = function () {
        video.currentTime = 0;
    }
    document.querySelector(`[wm-avancar=${id}]`).onclick = function () {
        video.currentTime += 10;
    }
    document.querySelector(`[wm-voltar=${id}]`).onclick = function () {
        video.currentTime -= 10;
    }

    document.querySelector(`[wm-fullscreen=${id}]`).onclick = function () {
        video.requestFullscreen();
    }

    setInterval(() => { // função temporizadora que vai executar de tempo em tempo
        const percentual = (video.currentTime / video.duration) * 100;
        const valorDiv = document.querySelector(`[wm-progresso=${id}] > div`);
        valorDiv.style.width = `${percentual}%`; //Altera a parra
        valorDiv.innerHTML = `${percentual.toFixed(0)}%`; //Altera o texto
    }, 500);


}

function midiaPlay(botao, video) {
    if (botao.innerHTML == "Play") {
        video.play();
        botao.innerHTML = "Pause";
    } else {
        video.pause();
        botao.innerHTML = "Play";
    }
}

configurarVideo("meuVideo");