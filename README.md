

# 🎮 Game Show

Um simulador de **Game Show de perguntas e respostas** de alta intensidade, desenvolvido com estética retro-futurista. O projeto foca numa experiência de duelo real entre dois jogadores, unindo a nostalgia dos arcades com mecânicas modernas de interrupção e áudio dinâmico.

## 🚀 Funcionalidades

* **Duelo de Velocidade:** Sistema de "buzzer" ultra-rápido para capturar quem pressiona a tecla primeiro.
* **Modo Apresentador:** Mecânica exclusiva de interrupção que permite responder antes das alternativas, valendo pontuação dobrada (**100 pontos**).
* **Áudio Dinâmico:** Trilha sonora que altera o *pitch* (velocidade) conforme o tempo acaba e sistema de *ducking* para realçar efeitos sonoros.
* **Feedback Visual de Impacto:** Animações elásticas de "CORRETO" e "ERRADO", efeitos de trepidação de card e cronômetro de perigo.
* **Imersão CRT:** Overlay de linhas de varredura (Scanlines) para simular monitores de tubo antigos.

## 🎨 Design & Estética

O projeto utiliza uma combinação visual agressiva e nostálgica:
* **Tipografia:** Uso da fonte **Cyberform** para títulos tecnológicos e **VCR OSD Mono** para a sensação de terminal antigo.
* **Cores:** Alto contraste baseado em **Azul Neon (#00d4ff)** para o Jogador 1 e **Rosa Neon (#ff0055)** para o Jogador 2.
* **Efeitos:** Glassmorphism (desfoque de fundo), sombras de neon e transições de *slide* lateral entre perguntas.

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Descrição |
| :--- | :--- |
| **HTML5** | Estrutura semântica, containers de áudio e integração com Canvas. |
| **CSS3** | Animações complexas (`keyframes`), variáveis nativas, Flexbox/Grid e filtros CRT. |
| **JavaScript (ES6+)** | Motor de lógica, gestão de estados, manipulação de áudio e eventos de teclado. |
| **Canvas Confetti** | Biblioteca externa para celebrações de vitória com partículas personalizadas. |

## 📂 Estrutura de Pastas

```text
/gameshow
│
├── /style
│   └── style.css         # Estilização cyberpunk e animações
├── /script
│   ├── script.js        # Motor principal e lógica de áudio
│   └── perguntas.js     # Banco de dados com 10 sets de questões
├── /fonts               # Fontes personalizadas (VCR OSD, Cyberform)
├── /sounds              # SFX e Trilhas sonoras (MP3)
├── /img                 # Backgrounds e imagens das perguntas
└── index.html           # Estrutura principal do jogo
```

## ⌨️ Comandos do Jogo

O sistema de resposta rápida é ativado pelas seguintes teclas:
* **Jogador 1:** Tecla **A**
* **Jogador 2:** Tecla **L**

## 🔧 Como Executar

1.  Faz o download ou clona este repositório.
2.  Certifica-te de que os arquivos de áudio estão na pasta `/sounds` para a imersão completa.
3.  Abre o ficheiro `index.html` em qualquer navegador moderno.
4.  Para uma experiência de Game Show real, pressiona **F11** para jogar em ecrã inteiro.

## 📝 Licença

Este projeto foi desenvolvido para fins educativos e entretenimento competitivo. Sente-te à vontade para modificar os sets de perguntas no ficheiro `perguntas.js` e criar as tuas próprias categorias temáticas!

**Pro-Tip:** Podes ajustar a dificuldade alterando as constantes `VELOCIDADE_DIGITACAO` ou `DELAY_ALTERNATIVAS` no topo do ficheiro `script.js` para tornar o duelo ainda mais frenético.