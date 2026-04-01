/**
 * CONFIGURAÇÕES E ESTADO GLOBAL
 */
const VELOCIDADE_DIGITACAO = 30; 
const DELAY_ALTERNATIVAS = 3000; 

let jogoIniciado = false;
let indiceAtual = 0;
let alguemBateu = false;
let jogadorAtivo = null;
let intervaloDigitacao; 
let timeoutAlternativas; 
let perguntaInterrompida = false;
let cronometroInterval;
let tempoRestante = 30;
let nomeJ1 = "Jogador 1";
let nomeJ2 = "Jogador 2";

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
 * FLUXO PRINCIPAL
 */

function iniciarJogo() {
    nomeJ1 = dom.nameInput1.value || "Jogador 1";
    nomeJ2 = dom.nameInput2.value || "Jogador 2";

    document.querySelector("#player1 .player-name").textContent = nomeJ1 + " (A)";
    document.querySelector("#player2 .player-name").textContent = nomeJ2 + " (L)";

    dom.telaInicial.classList.add("fade-out");
    setTimeout(() => {
        dom.telaInicial.style.display = "none";
        jogoIniciado = true;
        carregarPergunta(); 
    }, 500);
}

function carregarPergunta() {
    // Remove o botão de próxima fixo se ele existir de uma rodada anterior
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
                if (!perguntaInterrompida) {
                    exibirOpcoes(p.alternativas);
                }
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

function resetarCronometro() {
    clearInterval(cronometroInterval);
    tempoRestante = 30;
    document.getElementById("global-timer").textContent = tempoRestante;
    
    cronometroInterval = setInterval(() => {
        tempoRestante--;
        document.getElementById("global-timer").textContent = tempoRestante;
        
        if (tempoRestante <= 0) {
            clearInterval(cronometroInterval);
            proximaPergunta();
        }
    }, 1000);
}

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
        btn.className = "option-btn";
        btn.innerHTML = `
            <div class="diamond-box"><span>${letras[i]}</span></div>
            <span class="btn-text">${alt}</span>
        `;
        btn.onclick = () => validarResposta(i);
        btn.style.animationDelay = `${i * 0.1}s`;
        btn.classList.add("fade-in-element");
        dom.optionsContainer.appendChild(btn);
    });
}

/**
 * LÓGICA DO BUZZER
 */

window.addEventListener("keydown", (e) => {
    if (!jogoIniciado || alguemBateu) return; 
    const tecla = e.key.toUpperCase();
    if (tecla === "A") ativarBuzzer(1);
    if (tecla === "L") ativarBuzzer(2);
});

function ativarBuzzer(numJogador) {
    alguemBateu = true;
    jogadorAtivo = numJogador;
    clearInterval(cronometroInterval); // Para o tempo
    
    const nomeAtivo = (numJogador === 1) ? nomeJ1 : nomeJ2;
    dom.respondingNow.textContent = `${nomeAtivo} RESPONDENDO...`;
    dom.respondingNow.classList.remove("hidden");
    dom.respondingNow.className = (numJogador === 1) ? "text-p1" : "text-p2";
    
    dom.msgBuzzer.textContent = ""; 

    const textoAtual = dom.questionTitle.textContent;
    const textoCompleto = perguntas[indiceAtual].questao;

    // Se bater antes das alternativas ou durante a digitação
    if (dom.optionsContainer.innerHTML === "" || textoAtual.length < textoCompleto.length) {
        perguntaInterrompida = true;
        clearInterval(intervaloDigitacao);
        clearTimeout(timeoutAlternativas);
        
        dom.questionTitle.textContent = textoCompleto;
        exibirBotoesApresentador(); 
    } 

    dom.optionsContainer.classList.remove("locked");
    dom.overlay.classList.remove("hidden");
    
    const cor = numJogador === 1 ? "var(--player1-color)" : "var(--player2-color)";
    dom.questionCard.style.boxShadow = `0 0 30px ${cor}`;
}

function exibirBotoesApresentador() {
    dom.optionsContainer.innerHTML = "";
    
    const btnCerto = document.createElement("button");
    btnCerto.className = "option-btn fade-in-element";
    btnCerto.innerHTML = `<span class="btn-text">✅ CORRETO</span>`;
    btnCerto.style.borderColor = "#00ff00";
    btnCerto.onclick = () => validarResposta(true);

    const btnErrado = document.createElement("button");
    btnErrado.className = "option-btn fade-in-element";
    btnErrado.innerHTML = `<span class="btn-text">❌ ERRADO</span>`;
    btnErrado.style.borderColor = "#ff0000";
    btnErrado.onclick = () => validarResposta(false);

    dom.optionsContainer.appendChild(btnCerto);
    dom.optionsContainer.appendChild(btnErrado);
}

/**
 * VALIDAÇÃO E FEEDBACK
 */

function validarResposta(escolha) {
    if (jogadorAtivo === null) return;
    clearInterval(cronometroInterval);

    const correta = perguntas[indiceAtual].correta;
    let acertou = false;
    let indiceEscolhido = null;

    if (typeof escolha === 'boolean') {
        acertou = escolha;
    } else {
        acertou = (escolha === correta);
        indiceEscolhido = escolha;
    }

    pontos[jogadorAtivo] += acertou ? 100 : -50;
    atualizarPlacar();

    mostrarFeedbackRespostas(acertou, indiceEscolhido);
}

function mostrarFeedbackRespostas(acertou, indiceEscolhido) {
    const overlayAtivo = acertou ? dom.correctOverlay : dom.wrongOverlay;
    dom.overlay.classList.add("hidden");
    overlayAtivo.classList.remove("hidden");

    setTimeout(() => {
        overlayAtivo.classList.add("hidden");
        revelarRespostaNoCard(indiceEscolhido);
    }, 1500); 
}

function revelarRespostaNoCard(indiceEscolhido) {
    const p = perguntas[indiceAtual];
    const botoes = dom.optionsContainer.querySelectorAll(".option-btn");

    botoes.forEach((btn, i) => {
        btn.onclick = null;
        btn.style.cursor = "default";

        // Pinta a correta de verde
        if (i === p.correta) {
            btn.classList.add("btn-correct");
        } 
        // Pinta a escolhida de vermelho se estiver errada
        else if (indiceEscolhido !== null && i === indiceEscolhido) {
            btn.classList.add("btn-wrong-selected");
        } 
        else {
            btn.classList.add("btn-neutral");
        }
    });

    // Criação do botão "Próxima" no canto esquerdo da tela
    const container = document.createElement("div");
    container.className = "next-btn-container";
    
    const btnNext = document.createElement("button");
    btnNext.id = "btn-next-step";
    btnNext.innerHTML = "Próxima Pergunta ➔";
    btnNext.onclick = () => proximaPergunta();

    container.appendChild(btnNext);
    document.body.appendChild(container); // Anexa ao body para o position: fixed funcionar corretamente
    
    dom.respondingNow.textContent = "Resultado da Rodada";
}

function atualizarPlacar() {
    dom.scoreP1.textContent = pontos[1].toString().padStart(3, '0');
    dom.scoreP2.textContent = pontos[2].toString().padStart(3, '0');
}

function proximaPergunta() {
    const btnContainer = document.querySelector(".next-btn-container");
    if (btnContainer) btnContainer.remove();

    indiceAtual++;
    if (indiceAtual < perguntas.length) {
        carregarPergunta();
    } else {
        finalizarJogo();
    }
}

function finalizarJogo() {
    clearInterval(cronometroInterval);
    let msg = pontos[1] === pontos[2] ? "EMPATE!" : (pontos[1] > pontos[2] ? "VITÓRIA: " + nomeJ1 : "VITÓRIA: " + nomeJ2);
    dom.questionTitle.textContent = msg;
    dom.questionImage.style.display = "none";
    dom.optionsContainer.innerHTML = `<button onclick="location.reload()" class="option-btn fade-in-element" style="grid-column: span 2; text-align: center; justify-content: center;">REINICIAR JOGO</button>`;
}