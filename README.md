

# 🎮 Game Show Interativo

Um simulador de **Game Show de perguntas e respostas** desenvolvido com tecnologias web modernas. O projeto foca numa experiência de utilizador dinâmica, inspirada em interfaces de jogos de luta e transmissões de E-Sports, com suporte para dois jogadores locais.

---

## 🚀 Funcionalidades

* **Duelo em Tempo Real:** Sistema de "buzzer" para capturar quem carrega na tecla primeiro.
* **Interface Dinâmica:** HUD estilo jogo de luta com barras de pontuação coloridas e cronómetro central.
* **Feedback Visual de Impacto:** Animações de "CORRETO" e "ERRADO" com efeitos neon e movimento elástico.
* **Personalização:** Tela inicial que permite configurar os nomes dos jogadores antes de iniciar a partida.
* **Design Responsivo:** Adaptado para ocupar a totalidade do ecrã (Full Screen) com estética Pop Art.

---

## 🎨 Design & Estética

O projeto utiliza uma combinação única de estilos:
* **Tipografia:** Uso da fonte *Cyberform* para um toque futurista e *GameBattles* para legibilidade de placar.
* **Cores:** Paleta de alto contraste baseada em Azul Neon (`#00d4ff`) e Rosa/Vermelho (`#ff0055`).
* **Fundo:** Arte estilo Pop Art com raios de sol, mantendo a energia alta durante o jogo.

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Descrição |
| :--- | :--- |
| **HTML5** | Estrutura semântica dos elementos e containers do jogo. |
| **CSS3** | Estilização avançada, filtros de borda (`text-stroke`), animações e Flexbox/Grid. |
| **JavaScript (ES6+)** | Lógica do temporizador, gestão de pontuação, validação de respostas e manipulação do DOM. |

---

## 📂 Estrutura de Pastas

```text
/show-do-andrezao
│
├── /css
│   └── style.css          # Estilização completa e animações
├── /js
│   └── script.js         # Lógica do jogo e eventos
├── /fonts                # Fontes personalizadas (Cyberform, GameBattles)
├── /img                  # Backgrounds e assets visuais
└── index.html            # Estrutura principal
```

---

## ⌨️ Comandos do Jogo

O sistema de resposta rápida é ativado pelas seguintes teclas:

* **Jogador 1:** Tecla `A`
* **Jogador 2:** Tecla `L`
* **Navegação:** Rato ou atalhos configurados para selecionar as alternativas.

---

## 🔧 Como Executar

1.  Faz o download ou clona este repositório.
2.  Certifica-te de que as fontes estão na pasta `/fonts` para o carregamento correto.
3.  Abre o ficheiro `index.html` em qualquer navegador moderno.
4.  Para uma experiência imersiva, pressiona `F11` para colocar o navegador em ecrã inteiro.

---

## 📝 Licença

Este projeto foi desenvolvido para fins educativos e de entretenimento. Sente-te à vontade para o modificar e adaptar para os teus próprios eventos de perguntas e respostas!

---

> **Pro-Tip:** Podes ajustar o tempo de exibição das mensagens de erro ou acerto no ficheiro `script.js` alterando o valor do `setTimeout` para tornar o jogo mais rápido ou mais dramático.