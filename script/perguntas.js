const bancoDePerguntas = {
    // --- Tecnologia e Programação ---
    "TI_1": [
        { questao: "No JavaScript, qual palavra-chave é usada para declarar uma variável que não pode ser reatribuída?", alternativas: ["var", "let", "const", "static"], correta: 2 },
        { questao: "Qual linguagem de programação é famosa pelo seu logotipo de uma xícara de café?", alternativas: ["Python", "C#", "Java", "PHP"], correta: 2 },
        { questao: "Em programação, o que significa a sigla API?", alternativas: ["Advanced Program Integration", "Application Programming Interface", "Automated Protocol Input", "Array Process Instance"], correta: 1 },
        { questao: "Qual tag HTML é usada para inserir uma imagem?", alternativas: ["<picture>", "<img>", "<src>", "<figure>"], correta: 1 },
        { questao: "No CSS, qual valor da propriedade 'display' esconde um elemento totalmente?", alternativas: ["hidden", "invisible", "none", "block"], correta: 2 }
    ],

    "TI_2": [
        { questao: "No JavaScript, como comentamos múltiplas linhas?", alternativas: ["//", "#", "/* */", ""], correta: 2 },
        { questao: "Qual é o nome do sistema de arquivos padrão do Windows?", alternativas: ["FAT32", "NTFS", "APFS", "EXT4"], correta: 1 },
        { questao: "Qual protocolo é utilizado para transferir dados de forma segura na web?", alternativas: ["HTTP", "HTTPS", "FTP", "SSH"], correta: 1 },
        { questao: "Qual tipo de dado assume apenas os valores verdadeiros ou falso?", alternativas: ["String", "Integer", "Float", "Boolean"], correta: 3 },
        { questao: "Qual a linguagem é o padrão para consultas em bancos de dados relacionais?", alternativas: ["SQL", "NoSQL", "Python", "JSON"], correta: 0 }
    ],

    "TI_3": [
        { questao: "Qual componente do computador é considerado o 'cérebro' do sistema, responsável por processar dados?", alternativas: ["Memória RAM", "Disco Rígido", "CPU", "Placa de Vídeo"], correta: 2 },
        { questao: "O que significa a sigla 'URL' na navegação de internet?", alternativas: ["Universal Resource Locator", "User Remote Link", "Unified Radio Line", "Unique Reset Log"], correta: 0 },
        { questao: "Qual dessas memórias é volátil, ou seja, perde os dados quando o computador é desligado?", alternativas: ["SSD", "Pen Drive", "HD Externo", "Memória RAM"], correta: 3 },
        { questao: "Quem é considerado o criador do sistema operacional Linux?", alternativas: ["Bill Gates", "Linus Torvalds", "Steve Jobs", "Mark Zuckerberg"], correta: 1 },
        { questao: "Qual é a função principal de um 'Firewall' em uma rede?", alternativas: ["Aumentar a velocidade", "Filtrar o tráfego e proteger", "Limpar arquivos inúteis", "Armazenar senhas"], correta: 1 }
    ],

    "TI_4": [
        { questao: "Qual linguagem de programação é a base para o desenvolvimento nativo de aplicativos Android?", alternativas: ["Swift", "Kotlin", "PHP", "C#"], correta: 1 },
        { questao: "O que significa 'Open Source'?", alternativas: ["Código fechado", "Software pago", "Código aberto para todos", "Software de uso único"], correta: 2 },
        { questao: "Qual empresa é a desenvolvedora do sistema operacional Windows?", alternativas: ["Apple", "Google", "Microsoft", "IBM"], correta: 2 },
        { questao: "Qual símbolo é usado no Python para iniciar um comentário de uma linha?", alternativas: ["//", "/*", "--", "#"], correta: 3 },
        { questao: "Em qual linguagem de marcação definimos a estrutura e o conteúdo de uma página web?", alternativas: ["CSS", "HTML", "Java", "Python"], correta: 1 }
    ],

    "TI_5": [
        { questao: "Como é chamado o crime cibernético de enganar pessoas para obter senhas e dados bancários?", alternativas: ["Phishing", "Spam", "Debugging", "Overclock"], correta: 0 },
        { questao: "Qual é a principal função de um servidor DNS?", alternativas: ["Bloquear vírus", "Traduzir nomes de domínios em IPs", "Resfriar o processador", "Criar artes gráficas"], correta: 1 },
        { questao: "Qual dessas siglas representa uma rede sem fio de curto alcance para troca de dados entre dispositivos?", alternativas: ["HTTP", "USB", "Bluetooth", "SATA"], correta: 2 },
        { questao: "No desenvolvimento de software, o que significa a sigla 'UI'?", alternativas: ["User Information", "User Interface", "Universal Input", "Under Inspection"], correta: 1 },
        { questao: "Qual tecnologia é usada para 'minerar' e registrar transações de criptomoedas como o Bitcoin?", alternativas: ["Cloud Computing", "Blockchain", "Big Data", "Deep Learning"], correta: 1 }
    ],

    // --- Mundo Digital e Internet ---
    "DIGITAL_1": [
        { questao: "Qual destas redes sociais foi comprada por Elon Musk e renomeada para 'X'?", alternativas: ["Facebook", "Instagram", "Twitter", "Reddit"], correta: 2 },
        { questao: "Qual é o nome da inteligência artificial da Microsoft?", alternativas: ["Siri", "Alexa", "Cortana", "Copilot"], correta: 3 },
        { questao: "Qual rede social é focada em conexões profissionais e currículos?", alternativas: ["Instagram", "LinkedIn", "Threads", "BeReal"], correta: 1 },
        { questao: "Qual o nome da assistente virtual da Apple?", alternativas: ["Alexa", "Siri", "Cortana", "Bixby"], correta: 1 },
        { questao: "Qual é o nome da principal criptomoeda do mercado mundial?", alternativas: ["Ethereum", "Dogecoin", "Bitcoin", "Litecoin"], correta: 2 }
    ],

    "DIGITAL_2": [
        { questao: "Qual foi a primeira ferramenta de busca na internet?", alternativas: ["Google", "Yahoo", "Archie", "Bing"], correta: 2 },
        { questao: "Qual é o nome da inteligência artificial da Microsoft?", alternativas: ["Siri", "Alexa", "Cortana", "Copilot"], correta: 3 },
        { questao: "Qual rede social é focada em conexões profissionais e currículos?", alternativas: ["Instagram", "LinkedIn", "Threads", "BeReal"], correta: 1 },
        { questao: "Qual o nome da assistente virtual da Apple?", alternativas: ["Alexa", "Siri", "Cortana", "Bixby"], correta: 1 },
        { questao: "Qual é o nome da principal criptomoeda do mercado mundial?", alternativas: ["Ethereum", "Dogecoin", "Bitcoin", "Litecoin"], correta: 2 }
    ],

    // --- Filmes e Séries ---
    "FILMES_1": [
        { questao: "Quem é o diretor do filme 'Oppenheimer' (2023)?", alternativas: ["Steven Spielberg", "Christopher Nolan", "Quentin Tarantino", "Martin Scorsese"], correta: 1 },
        { questao: "Qual destes super-heróis faz parte dos Vingadores originais nos quadrinhos?", alternativas: ["Homem-Aranha", "Homem-Formiga", "Pantera Negra", "Doutor Estranho"], correta: 1 },
        { questao: "Quem interpretou o Coringa no filme 'Batman: O Cavaleiro das Trevas'?", alternativas: ["Joaquin Phoenix", "Jared Leto", "Heath Ledger", "Jack Nicholson"], correta: 2 },
        { questao: "Qual o nome do martelo do Thor?", alternativas: ["Mjolnir", "Stormbreaker", "Gungnir", "Leviathan"], correta: 0 },
        { questao: "Quem é o vilão principal da franquia 'Star Wars'?", alternativas: ["Darth Vader", "Voldemort", "Thanos", "Sauron"], correta: 0 }
    ],

    "FILMES_2": [
        { questao: "Na série Breaking Bad, qual o nome do protagonista?", alternativas: ["Heisenberg", "Jesse Pinkman", "Walter White", "Hector Salamanca"], correta: 2 },
        { questao: "Em qual série de TV aparece a personagem 'Eleven'?", alternativas: ["Stranger Things", "Dark", "The Boys", "Black Mirror"], correta: 0 },
        { questao: "Qual é o nome do robô protagonista do filme da Disney/Pixar de 2008?", alternativas: ["R2-D2", "WALL-E", "Baymax", "Bumblebee"], correta: 1 },
        { questao: "Qual o principal herói da Marvel que utiliza um escudo como arma?", alternativas: ["Hulk", "Capitão America", "Homem-aranha", "Thor"], correta: 1 },
        { questao: "Qual destes filmes venceu o Oscar de Melhor Filme em 2024?", alternativas: ["Barbie", "Oppenheimer", "Pobres Criaturas", "Anatomia de uma Queda"], correta: 1 }
    ],

    // --- Games ---
    "GAMES_1": [
        { questao: "Em qual jogo existe o personagem Kratos?", alternativas: ["Fallout 4", "Hogwarts Legacy", "Grand Theft Auto", "God of War"], correta: 3 },
        { questao: "Qual é o nome do protagonista da franquia de jogos 'The Legend of Zelda'?", alternativas: ["Zelda", "Ganon", "Link", "Sheik"], correta: 2 },
        { questao: "Qual é o bloco mais comum e básico no mundo de Minecraft?", alternativas: ["Diamante", "Terra", "Pedra", "Areia"], correta: 1 },
        { questao: "Qual o nome do encanador italiano que é a mascote da Nintendo?", alternativas: ["Luigi", "Wario", "Mario", "Yoshi"], correta: 2 },
        { questao: "No jogo Pac-Man, qual é o alimento que permite ao jogador comer os fantasmas?", alternativas: ["Cereja", "Pastilha de Poder", "Morango", "Banana"], correta: 1 }
    ],

    "GAMES_2": [
        { questao: "Qual jogo de Battle Royale permite construir estruturas e seus eventos ao vivo e colaborações com marcas", alternativas: ["Free Fire", "Fortnite", "PUBG", "Apex Legends"], correta: 1 },
        { questao: "No Street Fighter, como se chama a bola de energia lançada por Ryu?", alternativas: ["Hadouken", "Shoryuken", "Fatality", "Tiger Robocop"], correta: 0 },
        { questao: "Qual jogo consiste em lançar pássaros com um estilingue para destruir porcos?", alternativas: ["Candy Crush", "Subway Surfers", "Angry Birds", "Pou"], correta: 2 },
        { questao: "Em qual franquia de terror os jogadores enfrentam a corporação Umbrella?", alternativas: ["Silent Hill", "Resident Evil", "The Last of Us", "Outlast"], correta: 1 },
        { questao: "No Mario Kart, qual item persegue automaticamente o primeiro colocado?", alternativas: ["Casco Verde", "Banana", "Casco Azul", "Estrela"], correta: 2 }

    ],

    // --- Geografia ---
    "GEOGRAFIA_1": [
        { questao: "Qual é o país que possui a maior área territorial do mundo?", alternativas: ["Canadá", "China", "EUA", "Rússia"], correta: 3 },
        { questao: "Qual é o país mais populoso do mundo?", alternativas: ["Estados Unidos", "China", "Índia", "Indonésia"], correta: 2 },
        { questao: "Qual é o maior oceano do planeta Terra?", alternativas: ["Atlântico", "Índico", "Ártico", "Pacífico"], correta: 3 },
        { questao: "Em qual país se localiza a Grande Muralha?", alternativas: ["Japão", "Índia", "China", "Coreia do Sul"], correta: 2 },
        { questao: "Em qual continente fica o Deserto do Saara?", alternativas: ["Ásia", "América do Sul", "África", "Oceania"], correta: 2 }
    ],

    "GEOGRAFIA_2": [
        { questao: "Qual é a capital da França?", alternativas: ["Londres", "Berlim", "Roma", "Paris"], correta: 3 },
        { questao: "Qual o maior deserto do mundo?", alternativas: ["Deserto do Saara", "Deserto da Antártida", "Deserto de Gobi", "Deserto do Atacama"], correta: 1 },
        { questao: "Qual municipio cearense conhecido como 'A cidade dos três climas'?", alternativas: ["Itapipoca", "Umari", "Juazeiro do Norte", "Fortaleza"], correta: 0 },
        { questao: "Em que país está localizada 'La Rinconada', a cidade habitada mais alta do mundo?", alternativas: ["Peru", "Bolivia", "Colômbia", "Chile"], correta: 0 },
        { questao: "Qual é o menor país do mundo em termos de área territorial?", alternativas: ["Mónaco", "Malta", "Vaticano", "San Marino"], correta: 2 }
    ],

    // --- Ciências e Natureza ---
    "CIENCIAS_1": [
        { questao: "Qual é o maior mamífero do mundo?", alternativas: ["Elefante", "Tubarão-Baleia", "Baleia Azul", "Girafa"], correta: 2 },
        { questao: "Qual gás é essencial para a respiração humana?", alternativas: ["Nitrogênio", "Hidrogênio", "Oxigênio", "Dióxido de Carbono"], correta: 2 },
        { questao: "Qual planeta é conhecido como o 'Planeta Vermelho'?", alternativas: ["Júpiter", "Marte", "Vênus", "Saturno"], correta: 1 },
        { questao: "Quantos planetas existem no nosso Sistema Solar?", alternativas: ["7", "8", "9", "10"], correta: 1 },
        { questao: "Qual é o maior animal terrestre?", alternativas: ["Elefante Africano", "Girafa", "Hipopótamo", "Rinoceronte"], correta: 0 }
    ],

    "CIENCIAS_2": [
        { questao: "Quantos elementos químicos existem na Tabela Periódica atualmente?", alternativas: ["118", "112", "120", "115"], correta: 0 },
        { questao: "Qual elemento químico tem o símbolo 'O' na Tabela Periódica?", alternativas: ["Ouro", "Oxigênio", "Ozônio", "Osmio"], correta: 1 },
        { questao: "Por qual camada atmosférica são transmitidas as ondas de rádio e televisão?", alternativas: ["Troposfera", "Estratosfera", "Mesosfera", "Ionosfera"], correta: 3 },
        { questao: "Qual é o planeta do sistema solar conhecido como o 'Planeta Vermelho'?", alternativas: ["Vénus", "Júpiter", "Marte", "Saturno"], correta: 2 },
        { questao: "Qual é o osso mais longo do corpo humano?", alternativas: ["Fémur", "Tíbia", "Úmero", "Rádio"], correta: 0 }
    ],

    // --- Conhecimentos Gerais e Cultura ---
    "GERAL_1": [
        { questao: "Em que ano o homem pisou na Lua pela primeira vez?", alternativas: ["1965", "1969", "1972", "1958"], correta: 1 },
        { questao: "Quem pintou a famosa obra 'Mona Lisa'?", alternativas: ["Vincent van Gogh", "Pablo Picasso", "Claude Monet", "Leonardo da Vinci"], correta: 3 },
        { questao: "Quem escreveu 'Dom Casmurro'?", alternativas: ["Machado de Assis", "Monteiro Lobato", "Clarice Lispector", "Jorge Amado"], correta: 0 },
        { questao: "Em qual país surgiram os Jogos Olímpicos?", alternativas: ["Itália", "Grécia", "Egito", "França"], correta: 1 },
        { questao: "Quem é o autor da saga 'Harry Potter'?", alternativas: ["J.R.R. Tolkien", "George R.R. Martin", "C.S. Lewis", "J.K. Rowling"], correta: 3 }
    ],

    "GERAL_2": [
        { questao: "Qual é o valor aproximado da constante Pi (π)?", alternativas: ["3.14", "2.14", "3.41", "4.13"], correta: 0 },
        { questao: "Quantos segundos existem em uma hora?", alternativas: ["600", "3600", "1200", "2400"], correta: 1 },
        { questao: "Qual é a cor resultante da mistura de azul e amarelo?", alternativas: ["Verde", "Roxo", "Laranja", "Marrom"], correta: 0 },
        { questao: "Qual é a moeda oficial do Japão?", alternativas: ["Yuan", "Won", "Iene", "Dólar"], correta: 2 },
        { questao: "Qual artista é conhecida como a 'Rainha do Pop'?", alternativas: ["Britney Spears", "Lady Gaga", "Beyoncé", "Madonna"], correta: 3 }
    ],

    "GERAL_3": [
        { questao: "Quem é conhecido como o 'Rei do Rock'?", alternativas: ["Elvis Presley", "Freddie Mercury", "Mick Jagger", "John Lennon"], correta: 0 },
        { questao: "Qual o nome do desenho animado em que um garoto ganha poderes através de um dispositivo alienígena?", alternativas: ["Timmy Turner", "Shaun", "Ben 10", "Juniper Lee"], correta: 2 },
        { questao: "Como é popularmente conhecida a permissão médica para deixar um hospital, após a internação?", alternativas: ["Consulta", "Alta", "Atestado", "Acompanhamento"], correta: 1 },
        { questao: "O termo popular 'Cangote' é usado para se referir a qual parte do corpo humano?", alternativas: ["Cabelo", "Mãos", "Pernas", "Pescoço"], correta: 3 }
    ],

    "ESPORTE_1": [
        { questao: "No meio futebolístico, quem passa a torcer para o time adversário é conhecido como vira o quê?", alternativas: ["Vira-lata", "Vira-carta", "Vira-casaca", "Vira-folha"], correta: 2 },
        { questao: "No basquete, qual o lance é executado após uma falta e vale apenas 1 ponto?", alternativas: ["Arremesso", "Lance Livre", "Bandeja", "Enterrada"], correta: 1 },
        { questao: "Quantos jogadores de cada lado entram em campo numa partida oficial de futebol?", alternativas: ["10", "12", "11", "9"], correta: 2 },
        { questao: "Qual é o estilo de natação onde o nadador fica de costas para o fundo da piscina?", alternativas: ["Crawl", "Borboleta", "Peito", "Costas"], correta: 3 },
        { questao: "Nas Olimpíadas, qual é a distância exata de uma maratona?", alternativas: ["42,195 km", "40 km", "45 km", "38,5 km"], correta: 0 }
    ]
};