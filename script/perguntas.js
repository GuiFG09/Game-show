const bancoDePerguntas = {
    "1": [ // TEMA: ti e programação
        { questao: "No JavaScript, qual palavra-chave é usada para declarar uma variável que não pode ser reatribuída?", alternativas: ["var", "let", "const", "static"], correta: 2 },
        { questao: "Qual linguagem de programação é famosa pelo seu logotipo de uma xícara de café?", alternativas: ["Python", "C#", "Java", "PHP"], correta: 2 },
        { questao: "Em programação, o que significa a sigla API?", alternativas: ["Advanced Program Integration", "Application Programming Interface", "Automated Protocol Input", "Array Process Instance"], correta: 1 },
        { questao: "Qual tag HTML é usada para inserir uma imagem?", alternativas: ["<picture>", "<img>", "<src>", "<figure>"], correta: 1 },
        { questao: "No CSS, qual valor da propriedade 'display' esconde um elemento totalmente?", alternativas: ["hidden", "invisible", "none", "block"], correta: 2 }
    ],
    "2": [ // geek e cinema
        { questao: "Quem é o diretor do filme 'Oppenheimer' (2023)?", alternativas: ["Steven Spielberg", "Christopher Nolan", "Quentin Tarantino", "Martin Scorsese"], correta: 1 },
        { questao: "Qual destes super-heróis faz parte dos Vingadores originais nos quadrinhos?", alternativas: ["Homem-Aranha", "Homem-Formiga", "Pantera Negra", "Doutor Estranho"], correta: 1 },
        { questao: "Quem interpretou o Coringa no filme 'Batman: O Cavaleiro das Trevas'?", alternativas: ["Joaquin Phoenix", "Jared Leto", "Heath Ledger", "Jack Nicholson"], correta: 2 },
        { questao: "Qual o nome do martelo do Thor?", alternativas: ["Mjolnir", "Stormbreaker", "Gungnir", "Leviathan"], correta: 0 },
        { questao: "Quem é o vilão principal da franquia 'Star Wars'?", alternativas: ["Darth Vader", "Voldemort", "Thanos", "Sauron"], correta: 0 }
    ],
    "3": [ // séries e tv
        { questao: "Na série Breaking Bad, qual o nome do protagonista?", alternativas: ["Heisenberg", "Jesse Pinkman", "Walter White", "Hector Salamanca"], correta: 2 },
        { questao: "Em qual série de TV aparece a personagem 'Eleven'?", alternativas: ["Stranger Things", "Dark", "The Boys", "Black Mirror"], correta: 0 },
        { questao: "Qual o nome do desenho animado em que um garoto ganha poderes através de um dispositivo alienígena?", alternativas: ["Timmy Turner", "Shaun", "Ben 10", "Juniper Lee"], correta: 2 },
        { questao: "Qual é o nome do robô protagonista do filme da Disney/Pixar de 2008?", alternativas: ["R2-D2", "WALL-E", "Baymax", "Bumblebee"], correta: 1 },
        { questao: "Qual artista é conhecido como a 'Rainha do Pop'?", alternativas: ["Britney Spears", "Lady Gaga", "Beyoncé", "Madonna"], correta: 3 }
    ],
    "4": [ // digital e internet
        { questao: "Qual destas redes sociais foi comprada por Elon Musk e renomeada para 'X'?", alternativas: ["Facebook", "Instagram", "Twitter", "Reddit"], correta: 2 },
        { questao: "Qual é o nome da inteligência artificial da Microsoft?", alternativas: ["Siri", "Alexa", "Cortana", "Copilot"], correta: 3 },
        { questao: "Qual rede social é focada em conexões profissionais e currículos?", alternativas: ["Instagram", "LinkedIn", "Threads", "BeReal"], correta: 1 },
        { questao: "Qual o nome da assistente virtual da Apple?", alternativas: ["Alexa", "Siri", "Cortana", "Bixby"], correta: 1 },
        { questao: "Qual é o nome da principal criptomoeda do mercado mundial?", alternativas: ["Ethereum", "Dogecoin", "Bitcoin", "Litecoin"], correta: 2 }
    ],
    "5": [ // geografia mundial
        { questao: "Qual é o país que possui a maior área territorial do mundo?", alternativas: ["Canadá", "China", "EUA", "Rússia"], correta: 3 },
        { questao: "Qual é o país mais populoso do mundo?", alternativas: ["Estados Unidos", "China", "Índia", "Indonésia"], correta: 2 },
        { questao: "Qual é o maior oceano do planeta Terra?", alternativas: ["Atlântico", "Índico", "Ártico", "Pacífico"], correta: 3 },
        { questao: "Em qual país se localiza a Grande Muralha?", alternativas: ["Japão", "Índia", "China", "Coreia do Sul"], correta: 2 },
        { questao: "Em qual continente fica o Deserto do Saara?", alternativas: ["Ásia", "América do Sul", "África", "Oceania"], correta: 2 }
    ],
    "6": [ // ciências e natureza
        { questao: "Qual é o maior mamífero do mundo?", alternativas: ["Elefante", "Tubarão-Baleia", "Baleia Azul", "Girafa"], correta: 2 },
        { questao: "Qual gás é essencial para a respiração humana?", alternativas: ["Nitrogênio", "Hidrogênio", "Oxigênio", "Dióxido de Carbono"], correta: 2 },
        { questao: "Qual planeta é conhecido como o 'Planeta Vermelho'?", alternativas: ["Júpiter", "Marte", "Vênus", "Saturno"], correta: 1 },
        { questao: "Quantos elementos químicos existem na Tabela Periódica atualmente?", alternativas: ["118", "112", "120", "115"], correta: 0 },
        { questao: "Qual o maior deserto do mundo?", alternativas: ["Deserto do Saara", "Deserto da Antártida", "Deserto de Gobi", "Deserto do Atacama"], correta: 1 }
    ],
    "7": [ // games e entretenimento
        { questao: "Em qual jogo existe o personagem Kratos?", alternativas: ["Fallout 4", "Hogwarts Legacy", "Grand Theft Auto", "God of War"], correta: 3 },
        { questao: "Qual é o nome do protagonista da franquia de jogos 'The Legend of Zelda'?", alternativas: ["Zelda", "Ganon", "Link", "Sheik"], correta: 2 },
        { questao: "Qual o principal herói da Marvel que utiliza um escudo como arma?", alternativas: ["Hulk", "Capitão America", "Homem-aranha", "Thor"], correta: 1 },
        { questao: "Qual destes filmes venceu o Oscar de Melhor Filme em 2024?", alternativas: ["Barbie", "Oppenheimer", "Pobres Criaturas", "Anatomia de uma Queda"], correta: 1 },
        { questao: "Qual é o maior animal terrestre?", alternativas: ["Elefante Africano", "Girafa", "Hipopótamo", "Rinoceronte"], correta: 0 }
    ],
    "8": [ // história e cultura
        { questao: "Em que ano o homem pisou na Lua pela primeira vez?", alternativas: ["1965", "1969", "1972", "1958"], correta: 1 },
        { questao: "Quem pintou a famosa obra 'Mona Lisa'?", alternativas: ["Vincent van Gogh", "Pablo Picasso", "Claude Monet", "Leonardo da Vinci"], correta: 3 },
        { questao: "Quem escreveu 'Dom Casmurro'?", alternativas: ["Machado de Assis", "Monteiro Lobato", "Clarice Lispector", "Jorge Amado"], correta: 0 },
        { questao: "Em qual país surgiram os Jogos Olímpicos?", alternativas: ["Itália", "Grécia", "Egito", "França"], correta: 1 },
        { questao: "Quem é o autor da saga 'Harry Potter'?", alternativas: ["J.R.R. Tolkien", "George R.R. Martin", "C.S. Lewis", "J.K. Rowling"], correta: 3 }
    ],
    "9": [ // conhecimentos gerais
        { questao: "Qual é a capital da França?", alternativas: ["Londres", "Berlim", "Roma", "Paris"], correta: 3 },
        { questao: "Quantos planetas existem no nosso Sistema Solar?", alternativas: ["7", "8", "9", "10"], correta: 1 },
        { questao: "Qual é o valor aproximado da constante Pi (π)?", alternativas: ["3.14", "2.14", "3.41", "4.13"], correta: 0 },
        { questao: "Quantos segundos existem em uma hora?", alternativas: ["600", "3600", "1200", "2400"], correta: 1 },
        { questao: "Qual é a cor resultante da mistura de azul e amarelo?", alternativas: ["Verde", "Roxo", "Laranja", "Marrom"], correta: 0 }
    ],
    "10": [ // sistemas e hardware
        { questao: "Qual é o nome do sistema de arquivos padrão do Windows?", alternativas: ["FAT32", "NTFS", "APFS", "EXT4"], correta: 1 },
        { questao: "Qual elemento químico tem o símbolo 'O' na Tabela Periódica?", alternativas: ["Ouro", "Oxigênio", "Ozônio", "Osmio"], correta: 1 },
        { questao: "Qual é a moeda oficial do Japão?", alternativas: ["Yuan", "Won", "Iene", "Dólar"], correta: 2 },
        { questao: "No JavaScript, como comentamos múltiplas linhas?", alternativas: ["//", "#", "/* */", ""], correta: 2 },
        { questao: "Quem é conhecido como o 'Rei do Rock'?", alternativas: ["Elvis Presley", "Freddie Mercury", "Mick Jagger", "John Lennon"], correta: 0 }
    ]
};

let perguntas = bancoDePerguntas["1"];