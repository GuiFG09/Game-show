/**
 * 1. CONFIGURAÇÕES E ESTADO GLOBAL
 */
const VELOCIDADE_DIGITACAO = 30; 
const DELAY_ALTERNATIVAS = 3000; 

let musicaMenu, musicaBG;
let bloqueioAudioMenu = false;
let jogoIniciado = false;
let indiceAtual = 0;
let alguemBateu = false;
let jogadorAtivo = null;
let intervaloDigitacao, timeoutAlternativas, cronometroInterval;
let perguntaInterrompida = false;
let tempoRestante = 30;
let nomeJ1 = "Jogador 1", nomeJ2 = "Jogador 2";

const playlistPerguntas = [
    "sounds/bg/bg-music2.mp3",
    "sounds/bg/bg-music3.mp3",
    "sounds/bg/bg-music4.mp3",
    "sounds/bg/bg-music.mp3",
    "sounds/bg/bg-music5.mp3"
];

function prepararMusicaPergunta() {
    const audioElement = document.getElementById("bg-music");
    const sorteada = playlistPerguntas[Math.floor(Math.random() * playlistPerguntas.length)];
    
    audioElement.src = sorteada;
    audioElement.volume = 0.4;
    
    musicaBG = audioElement; 
}

const pontos = { 1: 0, 2: 0 };

const dom = {
    overlay: document.getElementById("buzzer-overlay"),
    msgBuzzer: document.getElementById("buzzer-msg"),
    questionTitle: document.getElementById("question-title"),
    questionImage: document.getElementById("question-image"),
    optionsContainer: document.getElementById("options-container"),
    questionCard: document.querySelector(".question-card"),
    scoreP1: document.querySelector("#player1 .score"),
    scoreP2: document.querySelector("#player2 .score"),
    telaInicial: document.getElementById("start-screen"),
    respondingNow: document.getElementById("responding-now"),
    nameInput1: document.getElementById("name-p1"),
    nameInput2: document.getElementById("name-p2"),
    correctOverlay: document.getElementById("correct-overlay"),
    wrongOverlay: document.getElementById("wrong-overlay"),
};

/**
 * 2. INICIALIZAÇÃO E EVENTOS GLOBAIS
 */
window.onload = () => {
    musicaMenu = document.getElementById("menu-music");
    if (musicaMenu) {
        musicaMenu.volume = 0.5;
        musicaMenu.play().catch(() => console.log("Aguardando interação para tocar música do menu"));
    }

    if (typeof perguntas === 'undefined' || perguntas === null) {
        perguntas = bancoDePerguntas["CONJUNTO 1"]; 
    }
    carregarMenuSets();
};

document.addEventListener('click', () => {
    if (!jogoIniciado && !bloqueioAudioMenu && musicaMenu && musicaMenu.paused) {
        musicaMenu.play().catch(e => console.log("Menu áudio aguardando..."));
    }
}, { once: true });


window.addEventListener("keydown", (e) => {
    if (e.key === " " || e.code === "Space") {
        e.preventDefault(); 
        return; 
    }

    if (!jogoIniciado || alguemBateu) return; 
    const tecla = e.key.toUpperCase();
    if (tecla === "A") ativarBuzzer(1);
    if (tecla === "L") ativarBuzzer(2);
});

/**
 * 3. GERENCIAMENTO DE INTERFACE (MENUS E PLACAR)
 */
function toggleMenu() {
    document.getElementById("menu-content").classList.toggle("hidden");
}

function carregarMenuSets() {
    const container = document.getElementById("set-buttons");
    container.innerHTML = "";

    Object.keys(bancoDePerguntas).forEach(tema => {
        const btn = document.createElement("button");
        btn.className = "set-btn";
        btn.textContent = tema;
        
        if (perguntas === bancoDePerguntas[tema]) btn.classList.add("active");

        btn.onclick = () => {
            perguntas = bancoDePerguntas[tema];
            indiceAtual = 0;
            carregarMenuSets();
            console.log("Tema trocado para: " + tema);
        };
        container.appendChild(btn);
    });
}

function atualizarPlacar() {
    dom.scoreP1.textContent = pontos[1].toString().padStart(3, '0');
    dom.scoreP2.textContent = pontos[2].toString().padStart(3, '0');
}

/**
 * 4. LÓGICA DE ÁUDIO
 */
function tocarMusica() {
    musicaBG = document.getElementById("bg-music");
    if (musicaBG) {
        musicaBG.volume = 0.4;
        musicaBG.playbackRate = 1.0;
        musicaBG.play().catch(e => console.log("Áudio bloqueado ou não encontrado:", e));
    }
}

/**
 * 5. FLUXO DO JOGO E PERGUNTAS
 */
function iniciarJogo() {
    const menuMusic = document.getElementById("menu-music");
    
    // Aplicação da correção de áudio
    if (menuMusic) {
        menuMusic.muted = true; 
        menuMusic.pause();
        menuMusic.currentTime = 0;
    }

    setTimeout(() => {
        prepararMusicaPergunta();
        if (musicaBG) {
            musicaBG.muted = false;
            musicaBG.play().catch(e => console.log("Erro ao iniciar áudio:", e));
        }
        
        // Mantendo o restante da sua lógica original intacta
        if (!perguntas || perguntas.length === 0) {
            alert("Por favor, selecione um conjunto de perguntas no menu antes de começar!");
            bloqueioAudioMenu = false; 
            return;
        }

        nomeJ1 = dom.nameInput1.value || "Jogador 1";
        nomeJ2 = dom.nameInput2.value || "Jogador 2";

        document.querySelector("#player1 .player-name").textContent = nomeJ1 + " (A)";
        document.querySelector("#player2 .player-name").textContent = nomeJ2 + " (L)";

        dom.telaInicial.classList.add("fade-out");

        setTimeout(() => {
            dom.telaInicial.style.display = "none";
            const gameWrapper = document.querySelector(".game-wrapper");
            if (gameWrapper) gameWrapper.classList.remove("hidden");

            jogoIniciado = true;
            carregarPergunta(); 
        }, 500);
    }, 100); 
}

function carregarPergunta() {
    dom.optionsContainer.classList.remove("modo-apresentador");
    const btnAntigo = document.querySelector(".next-btn-container");
    if (btnAntigo) btnAntigo.remove();

    alguemBateu = false;
    jogadorAtivo = null;
    perguntaInterrompida = false;
    clearTimeout(timeoutAlternativas);
    clearInterval(intervaloDigitacao);
    
    dom.overlay.classList.add("hidden");
    dom.optionsContainer.classList.add("locked");
    dom.questionCard.style.boxShadow = "none";
    dom.optionsContainer.innerHTML = ""; 
    dom.respondingNow.classList.add("hidden");
    dom.respondingNow.textContent = "";

    const p = perguntas[indiceAtual];
    
    efeitoDigitar(p.questao, () => {
        if (!perguntaInterrompida) {
            timeoutAlternativas = setTimeout(() => {
                if (!perguntaInterrompida) exibirOpcoes(p.alternativas);
            }, DELAY_ALTERNATIVAS);
        }
    });

    if (p.imagem) {
        dom.questionImage.src = p.imagem;
        dom.questionImage.style.display = "block";
    } else {
        dom.questionImage.style.display = "none";
    }
    
    resetarCronometro();
}

function proximaPergunta() {
    const btnContainer = document.querySelector(".next-btn-container");
    if (btnContainer) btnContainer.remove();

    dom.questionCard.classList.add("slide-out");

    setTimeout(() => {
        indiceAtual++;
        
        if (indiceAtual < perguntas.length) {
            dom.questionCard.classList.remove("slide-out");
            
            carregarPergunta(); 
            
            dom.questionCard.classList.add("slide-in");
            
            setTimeout(() => {
                dom.questionCard.classList.remove("slide-in");
            }, 500);
            
        } else {
            finalizarJogo();
        }
    }, 500);
}

/**
 * 6. SISTEMA DE TEMPO (CRONÔMETRO E PITCH)
 */
function resetarCronometro() {
    clearInterval(cronometroInterval);
    tempoRestante = 30;
    
    const timerElement = document.getElementById("global-timer");
    const timerBox = timerElement.parentElement;
    const crt = document.querySelector(".crt-overlay");
    
    timerElement.textContent = tempoRestante;

    // Reseta estados visuais de perigo
    timerBox.classList.remove("timer-danger");
    if (crt) crt.classList.remove("crt-danger");

    if (musicaBG) {
        musicaBG.playbackRate = 1.0;
        musicaBG.preservesPitch = false;
        musicaBG.volume = 0.4; // Garante que o volume volte ao normal no reset
    }

    cronometroInterval = setInterval(() => {
        tempoRestante--;
        timerElement.textContent = tempoRestante;

        if (tempoRestante <= 5 && tempoRestante > 0) {
            timerBox.classList.add("timer-danger");
            if (crt) crt.classList.add("crt-danger");
        }

        if (tempoRestante <= 10 && tempoRestante > 0 && musicaBG) {
            musicaBG.playbackRate = 0.7 + (tempoRestante / 10) * 0.3;
        }

        if (tempoRestante <= 0) {
            clearInterval(cronometroInterval);
            
            timerBox.classList.remove("timer-danger");
            if (crt) crt.classList.remove("crt-danger");

            if (musicaBG) {
                musicaBG.playbackRate = 0.5;
                musicaBG.volume = 0.05; // 
            }
            
            tratarTempoEsgotado();
        }
    }, 1000);
}

function tratarTempoEsgotado() {
    clearInterval(cronometroInterval);
    const somErro = document.getElementById("sound-wrong");

    if (musicaBG) musicaBG.volume = 0.05;

    setTimeout(() => {
        if (jogadorAtivo !== null) {
            pontos[jogadorAtivo] -= 50;
            atualizarPlacar();
        }

        const timeoutOverlay = document.getElementById("timeout-overlay");
        dom.overlay.classList.add("hidden"); 
        timeoutOverlay.classList.remove("hidden");

        somErro.currentTime = 0;
        somErro.play();

        setTimeout(() => {
            timeoutOverlay.classList.add("hidden");
            revelarRespostaNoCard(null); 
            if (musicaBG && jogoIniciado) musicaBG.volume = 0.4;
        }, 4000);
    }, 2000); 
}

/**
 * 7. SISTEMA DO BUZZER E APRESENTADOR
 */
function ativarBuzzer(numJogador) {
    alguemBateu = true;
    jogadorAtivo = numJogador;
    
    const textoAtual = dom.questionTitle.textContent;
    const textoCompleto = perguntas[indiceAtual].questao;

    if (dom.optionsContainer.innerHTML === "" || textoAtual.length < textoCompleto.length) {
        perguntaInterrompida = true; 
        clearInterval(intervaloDigitacao);
        clearTimeout(timeoutAlternativas);
        dom.questionTitle.textContent = textoCompleto;
        exibirBotoesApresentador(); 
    } else {
        perguntaInterrompida = false;
    }
    
    const nomeAtivo = (numJogador === 1) ? nomeJ1 : nomeJ2;
    const classeCor = (numJogador === 1) ? "text-p1" : "text-p2";

    dom.respondingNow.innerHTML = `<span class="${classeCor}">${nomeAtivo}</span> RESPONDENDO...`;
    dom.respondingNow.style.color = "#ffffff";
    dom.respondingNow.classList.remove("hidden");
    
    dom.msgBuzzer.textContent = ""; 
    dom.optionsContainer.classList.remove("locked");
    dom.overlay.classList.remove("hidden");
    
    const cor = numJogador === 1 ? "var(--player1-color)" : "var(--player2-color)";
    dom.questionCard.style.boxShadow = `0 0 30px ${cor}`;

    dom.questionCard.classList.add("shake-animation");
    setTimeout(() => {
        dom.questionCard.classList.remove("shake-animation");
    }, 400);
}

function exibirBotoesApresentador() {
    dom.optionsContainer.innerHTML = "";
    dom.optionsContainer.classList.add("modo-apresentador");
    dom.questionCard.style.boxShadow = "none";
    
    const btnCerto = document.createElement("button");
    btnCerto.className = "option-btn fade-in-element";
    btnCerto.style.opacity = "1";
    btnCerto.innerHTML = `<span class="btn-text">✅ CORRETO</span>`;
    btnCerto.onclick = () => validarResposta(true);

    const btnErrado = document.createElement("button");
    btnErrado.className = "option-btn fade-in-element";
    btnErrado.style.opacity = "1";
    btnErrado.innerHTML = `<span class="btn-text">❌ ERRADO</span>`;
    btnErrado.onclick = () => validarResposta(false);

    dom.optionsContainer.appendChild(btnCerto);
    dom.optionsContainer.appendChild(btnErrado);
}

/**
 * 8. VALIDAÇÃO, FEEDBACK E REVELAÇÃO
 */
 function validarResposta(escolha) {
    if (jogadorAtivo === null) return;
    clearInterval(cronometroInterval);

    const p = perguntas[indiceAtual];
    const corretaIndex = p.correta;
    const textoCorreto = p.alternativas[corretaIndex];

    let acertou = (typeof escolha === 'boolean') ? escolha : (escolha === corretaIndex);
    let indiceEscolhido = (typeof escolha === 'number') ? escolha : null;

    const jogadorQueRespondeu = jogadorAtivo;
    jogadorAtivo = null; 

    if (acertou) {
        const ganho = perguntaInterrompida ? 100 : 50;
        pontos[jogadorQueRespondeu] += ganho;
    } else {
        pontos[jogadorQueRespondeu] -= 50;
    }

    if (perguntaInterrompida) {
        dom.respondingNow.style.display = "block";
        dom.respondingNow.innerHTML = `RESPOSTA CORRETA: <span style="color: #00ff00; text-shadow: 0 0 10px #00ff00;">${textoCorreto}</span>`;
    }

    atualizarPlacar();
    mostrarFeedbackRespostas(acertou, indiceEscolhido);
    
    if (document.activeElement) {
        document.activeElement.blur();
    }
}

function mostrarFeedbackRespostas(acertou, indiceEscolhido) {
    const overlayAtivo = acertou ? dom.correctOverlay : dom.wrongOverlay;
    const somAcerto = document.getElementById("sound-correct");
    const somErro = document.getElementById("sound-wrong");
    const somEfeito = acertou ? somAcerto : somErro;

    dom.overlay.classList.add("hidden");
    overlayAtivo.classList.remove("hidden");

    if (musicaBG) musicaBG.volume = 0.05;

    somEfeito.currentTime = 0;
    somEfeito.play().catch(e => console.log("Erro som efeito:", e));

    if (acertou) {
        const corConfeti = jogadorAtivo === 1 ? '#00d4ff' : '#ff0055';
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 },
            colors: [corConfeti, '#ffffff'],
            zIndex: 10001
        });
    }

    setTimeout(() => {
        overlayAtivo.classList.add("hidden");
        revelarRespostaNoCard(indiceEscolhido);
        if (musicaBG && jogoIniciado) musicaBG.volume = 0.4;
    }, 4000);
}

function revelarRespostaNoCard(indiceEscolhido) {
    const p = perguntas[indiceAtual];
    const botoes = dom.optionsContainer.querySelectorAll(".option-btn");

    botoes.forEach((btn, i) => {
        btn.onclick = null;
        btn.style.cursor = "default";
        if (i === p.correta) {
            btn.classList.add("btn-correct");
        } else if (indiceEscolhido !== null && i === indiceEscolhido) {
            btn.classList.add("btn-wrong-selected");
        } else {
            btn.classList.add("btn-neutral");
        }
    });

    const textoCorreto = p.alternativas[p.correta];
    dom.respondingNow.innerHTML = `RESPOSTA CORRETA: <span style="color: #00ff00; text-shadow: 0 0 10px #00ff00;">${textoCorreto}</span>`;
    dom.respondingNow.classList.remove("hidden");

    const container = document.createElement("div");
    container.className = "next-btn-container";
    
    const btnNext = document.createElement("button");
    btnNext.id = "btn-next-step";

    if (indiceAtual === perguntas.length - 1) {
        btnNext.innerHTML = "Mostrar Resultados ➔";
    } else {
        btnNext.innerHTML = "Próxima Pergunta ➔";
    }

    btnNext.onclick = () => proximaPergunta();

    container.appendChild(btnNext);
    document.body.appendChild(container);
}

/**
 * 9. EFEITOS VISUAIS E FINALIZAÇÃO
 */
function efeitoDigitar(texto, callback) {
    dom.questionTitle.textContent = "";
    let i = 0;
    intervaloDigitacao = setInterval(() => {
        dom.questionTitle.textContent += texto.charAt(i);
        i++;
        if (i >= texto.length) {
            clearInterval(intervaloDigitacao);
            if (callback) callback(); 
        }
    }, VELOCIDADE_DIGITACAO);
}

function exibirOpcoes(alternativas) {
    dom.optionsContainer.innerHTML = ""; 
    const letras = ["A", "B", "C", "D"];

    alternativas.forEach((alt, i) => {
        const btn = document.createElement("button");
        btn.className = "option-btn"; // Reset de classe aqui
        btn.innerHTML = `<div class="diamond-box"><span>${letras[i]}</span></div><span class="btn-text">${alt}</span>`;
        btn.onclick = () => validarResposta(i);
        btn.style.animationDelay = `${i * 0.1}s`;
        btn.classList.add("fade-in-element");
        dom.optionsContainer.appendChild(btn);
    });
}

function finalizarJogo() {
    clearInterval(cronometroInterval);
    if (musicaBG) {
        musicaBG.pause();
        musicaBG.currentTime = 0;
    }

    const somVitoria = document.getElementById("sound-victory");
    if (somVitoria) {
        somVitoria.volume = 0.8;
        somVitoria.currentTime = 0;
        somVitoria.play().catch(e => console.log("Erro som vitória:", e));
    }

    const overlayVitoria = document.getElementById("winner-overlay");
    const txtNome = document.getElementById("winner-name");
    const txtPontos = document.getElementById("winner-score");
    
    let vencedor = "", pontosVencedor = 0, classeCor = "";

    

    if (pontos[1] > pontos[2]) {
        vencedor = nomeJ1; pontosVencedor = pontos[1]; classeCor = "win-p1";
        document.querySelector(".winner-card").style.borderColor = "#ffcc00";
        document.querySelector(".winner-card").style.boxShadow = "0 0 80px rgba(255, 204, 0, 0.4)";
    } else if (pontos[2] > pontos[1]) {
        vencedor = nomeJ2; pontosVencedor = pontos[2]; classeCor = "win-p2";
        document.querySelector(".winner-card").style.borderColor = "#ffffff";
        document.querySelector(".winner-card").style.boxShadow = "0 0 80px rgba(255, 255, 255, 0.4)";
    } else {
        vencedor = "EMPATE"; pontosVencedor = pontos[1]; classeCor = "";
    }

    txtNome.textContent = vencedor;
    txtNome.className = classeCor; 
    txtPontos.textContent = `PONTUAÇÃO FINAL: ${pontosVencedor}`;
    overlayVitoria.classList.remove("hidden");

    const duration = 5 * 1000, animationEnd = Date.now() + duration;
    const interval = setInterval(function() {
        if (Date.now() > animationEnd) return clearInterval(interval);
        const corBase = classeCor === "win-p1" ? '#00d4ff' : '#ff0055';
        const coresVitoria = [corBase, '#ffcc00', '#ffff00', '#ffffff'];
        const confConfig = { particleCount: 5, spread: 55, colors: coresVitoria, zIndex: 10001 };
        confetti({ ...confConfig, angle: 60, origin: { x: 0 } });
        confetti({ ...confConfig, angle: 120, origin: { x: 1 } });
    }, 150);
}