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

    "TI_6": [
        { questao: "Qual dessas unidades de medida representa a maior quantidade de dados?", alternativas: ["Gigabyte", "Terabyte", "Petabyte", "Megabyte"], correta: 2 },
        { questao: "Qual comando do Git é usado para enviar as alterações locais para um repositório remoto?", alternativas: ["git pull", "git commit", "git push", "git add"], correta: 2 },
        { questao: "Qual linguagem é amplamente utilizada para Ciência de Dados e Inteligência Artificial?", alternativas: ["Ruby", "Python", "Swift", "C++"], correta: 1 },
        { questao: "Qual o nome do pequeno arquivo de texto que sites salvam no navegador para lembrar do usuário?", alternativas: ["Script", "Cache", "Cookie", "History"], correta: 2 },
        { questao: "Qual tecnologia é usada para carregar páginas web de forma assíncrona sem recarregar a tela?", alternativas: ["JSON", "AJAX", "XML", "Java"], correta: 1 },
    ],

    "TI_7": [
        { questao: "O que significa a sigla 'SaaS' no mercado de tecnologia?", alternativas: ["Software as a Service", "System as a Solution", "Security as a Server", "Storage as a System"], correta: 0 },
        { questao: "Qual é o nome do navegador de internet desenvolvido pela Google?", alternativas: ["Safari", "Edge", "Firefox", "Chrome"], correta: 3 },
        { questao: "Em bancos de dados, o que significa a sigla 'CRUD'?", alternativas: ["Create, Read, Update, Delete", "Copy, Run, Undo, Deploy", "Cancel, Repair, Upload, Data", "Control, Refresh, Use, Debug"], correta: 0 },
        { questao: "Qual o nome da tecnologia que permite pagar contas aproximando o celular da maquininha?", alternativas: ["Bluetooth", "NFC", "Wi-Fi", "GPS"], correta: 1 },
        { questao: "Como é chamada a versão de teste de um software que vem antes do lançamento oficial?", alternativas: ["Alpha", "Beta", "Final", "Patch"], correta: 1 }
    ],

    "TI_8": [
        { questao: "O que é um 'Bug' na área de programação?", alternativas: ["Um vírus potente", "Um erro ou falha no código", "Um componente de hardware", "Um tipo de hacker"], correta: 1 },
        { questao: "Qual é o principal objetivo de um ataque de 'Ransomware'?", alternativas: ["Apagar arquivos", "Sequestrar dados e cobrar resgate", "Aumentar a velocidade", "Espionar a câmera"], correta: 1 },
        { questao: "O que significa a sigla 'SSD', o sucessor do HD tradicional?", alternativas: ["Super Speed Drive", "Solid State Drive", "System Storage Data", "Safe Simple Disk"], correta: 1 },
        { questao: "Qual é a principal função de um banco de dados NoSQL?", alternativas: ["Armazenar apenas textos", "Lidar com dados não estruturados e escalabilidade", "Substituir o uso de HTML", "Executar comandos diretamente no processador"], correta: 1 },
        { questao: "O que caracteriza a tecnologia 'Docker' no ambiente de desenvolvimento?", alternativas: ["A criação de containers para isolar aplicações", "Um novo tipo de monitor de vídeo", "Uma linguagem de estilização de fontes", "O aumento físico da memória RAM"], correta: 0 }
    ],

    "TI_9": [
        { questao: "O que significa a sigla 'IDE' na programação?", alternativas: ["Integrated Development Environment", "Internal Data Engine", "Interface Design Element", "Input Device Error"], correta: 0 },
        { questao: "Qual é a função do comando 'CTRL + Z' na maioria dos softwares?", alternativas: ["Copiar", "Colar", "Desfazer", "Recortar"], correta: 2 },
        { questao: "Qual o nome do robô mascote do sistema operacional Android?", alternativas: ["Bugdroid", "R2-D2", "Apple Bot", "Dash"], correta: 0 },
        { questao: "Qual dessas redes é considerada a 'vovó' da internet atual?", alternativas: ["Deep Web", "Arpanet", "Intranet", "Ethernet"], correta: 1 },
        { questao: "No CSS, qual unidade de medida é relativa ao tamanho da fonte do elemento pai?", alternativas: ["px", "em", "cm", "pt"], correta: 1 }
    ],

    "TI_10": [
        { questao: "Qual tecnologia permite a conexão sem fio de periféricos como fones e mouses?", alternativas: ["Ethernet", "VGA", "Bluetooth", "HDMI"], correta: 2 },
        { questao: "Qual é o nome do fundador da Microsoft?", alternativas: ["Steve Jobs", "Mark Zuckerberg", "Bill Gates", "Jeff Bezos"], correta: 2 },
        { questao: "O que significa a sigla 'VPN'?", alternativas: ["Virtual Private Network", "Variable Protocol Node", "Visual Path Name", "Verified Public Number"], correta: 0 },
        { questao: "Qual símbolo é usado em JavaScript para verificar se dois valores são estritamente iguais?", alternativas: ["=", "==", "===", "!="], correta: 2 },
        { questao: "Qual destes termos define o conjunto de componentes físicos de um computador?", alternativas: ["Software", "Firmware", "Hardware", "Middleware"], correta: 2 }
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
    "FILMES_E_SERIES 1": [
        { questao: "Quem é o diretor do filme 'Oppenheimer' (2023)?", alternativas: ["Steven Spielberg", "Christopher Nolan", "Quentin Tarantino", "Martin Scorsese"], correta: 1 },
        { questao: "Qual super-herói do universo Marvel tem o poder de mudar o seu própio tamanho?", alternativas: ["Homem-Aranha", "Homem-Formiga", "Pantera Negra", "Doutor Estranho"], correta: 1 },
        { questao: "Quem interpretou o Coringa no filme 'Batman: O Cavaleiro das Trevas'?", alternativas: ["Joaquin Phoenix", "Jared Leto", "Heath Ledger", "Jack Nicholson"], correta: 2 },
        { questao: "Qual o nome do martelo do Thor?", alternativas: ["Mjolnir", "Stormbreaker", "Gungnir", "Leviathan"], correta: 0 },
        { questao: "Quem é o vilão principal da franquia 'Star Wars'?", alternativas: ["Darth Vader", "Voldemort", "Thanos", "Sauron"], correta: 0 }
    ],

    "FILMES_E_SERIES 2": [
        { questao: "Na série Breaking Bad, qual o nome do protagonista?", alternativas: ["Heisenberg", "Jesse Pinkman", "Walter White", "Hector Salamanca"], correta: 2 },
        { questao: "Em qual série de TV aparece a personagem 'Eleven'?", alternativas: ["Stranger Things", "Dark", "The Boys", "Black Mirror"], correta: 0 },
        { questao: "Qual é o nome do robô protagonista do filme da Disney/Pixar de 2008?", alternativas: ["R2-D2", "WALL-E", "Baymax", "Bumblebee"], correta: 1 },
        { questao: "Qual o principal herói da Marvel que utiliza um escudo como arma?", alternativas: ["Hulk", "Capitão America", "Homem-aranha", "Thor"], correta: 1 },
        { questao: "Qual destes filmes venceu o Oscar de Melhor Filme em 2024?", alternativas: ["Barbie", "Oppenheimer", "Pobres Criaturas", "Anatomia de uma Queda"], correta: 1 }
    ],

    "FILMES_E_SERIES_3": [
        { questao: "Qual é o nome do reino fictício onde se passa a maior parte da história de 'Game of Thrones'?", alternativas: ["Nárnia", "Westeros", "Hogwarts", "Terra Média"], correta: 1 },
        { questao: "No filme 'Titanic', qual é o nome da pedra preciosa que a personagem Rose usa no colar?", alternativas: ["Coração do Oceano", "Estrela da Manhã", "Diamante de Sangue", "Rubi Real"], correta: 0 },
        { questao: "Qual ator interpreta o personagem 'Jack Sparrow' na franquia Piratas do Caribe?", alternativas: ["Brad Pitt", "Tom Cruise", "Johnny Depp", "Will Smith"], correta: 2 },
        { questao: "Em 'Toy Story', qual é o nome do menino que é o dono dos brinquedos Woody e Buzz?", alternativas: ["Andy", "Sid", "Billy", "Danny"], correta: 0 },
        { questao: "Na série 'La Casa de Papel', qual é o codinome do líder do assalto à Casa da Moeda?", alternativas: ["Berlim", "Professor", "Tóquio", "Rio"], correta: 1 }
    ],

    "FILMES_E_SERIES_4": [
        { questao: "Qual é a cor da pílula que Neo escolhe tomar no filme 'Matrix' para descobrir a verdade?", alternativas: ["Azul", "Verde", "Amarela", "Vermelha"], correta: 3 },
        { questao: "Na série 'The Walking Dead', qual é a arma icônica utilizada pelo personagem Rick Grimes?", alternativas: ["Besta", "Revolver Colt Python", "Katana", "Bastão de Beisebol"], correta: 1 },
        { questao: "Qual filme de animação da Disney conta a história de uma família de super-heróis?", alternativas: ["Os Incríveis", "Frozen", "Moana", "Enrolados"], correta: 0 },
        { questao: "Quem é a personagem principal da série 'Wandinha' (Wednesday) da Netflix?", alternativas: ["Enid Sinclair", "Morticia Addams", "Wandinha Addams", "Lydia Deetz"], correta: 2 },
        { questao: "No universo de Harry Potter, qual animal representa a casa Grifinória?", alternativas: ["Cobra", "Coruja", "Texugo", "Leão"], correta: 3 }
    ],

    "FILMES_E_SERIES_5": [
        { questao: "No seriado 'Chaves', qual é o nome do personagem que sempre chega na vila para cobrar o aluguel?", alternativas: ["Seu Madruga", "Quico", "Seu Barriga", "Professor Girafales"], correta: 2 },
        { questao: "Qual é o nome do ogro verde que vive em um pântano e tem um burro como melhor amigo?", alternativas: ["Shrek", "Hulk", "Grinch", "Sulley"], correta: 0 },
        { questao: "Na franquia 'Vingadores', qual vilão estala os dedos para apagar metade da vida no universo?", alternativas: ["Loki", "Ultron", "Kang", "Thanos"], correta: 3 },
        { questao: "Qual é o nome do feitiço que Hermione corrige a pronúncia de Rony no primeiro filme?", alternativas: ["Levicorpus", "Wingardium Leviosa", "Expecto Patronum", "Vingardium Leviosa"], correta: 1 },
        { questao: "Na série 'Stranger Things', qual é o nome da dimensão paralela e sombria?", alternativas: ["Mundo Invertido", "Limbo", "Vazio", "Multiverso"], correta: 0 }
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
        { questao: "Qual jogo de Battle Royale ficou famoso pelo seu modo de construção e colaborações?", alternativas: ["Free Fire", "Fortnite", "PUBG", "Apex Legends"], correta: 1 },
        { questao: "No Street Fighter, como se chama a bola de energia lançada por Ryu?", alternativas: ["Hadouken", "Shoryuken", "Fatality", "Tiger Robocop"], correta: 0 },
        { questao: "Qual jogo consiste em lançar pássaros com um estilingue para destruir porcos?", alternativas: ["Candy Crush", "Subway Surfers", "Angry Birds", "Pou"], correta: 2 },
        { questao: "Em qual franquia de terror os jogadores enfrentam a corporação Umbrella?", alternativas: ["Silent Hill", "Resident Evil", "The Last of Us", "Outlast"], correta: 1 },
        { questao: "No Mario Kart, qual item persegue automaticamente o primeiro colocado?", alternativas: ["Casco Verde", "Banana", "Casco Azul", "Estrela"], correta: 2 }

    ],
        "GAMES_3": [
        { questao: "Qual é o nome da cidade fictícia onde se passa a maior parte do jogo 'GTA V'?", alternativas: ["Liberty City", "Vice City", "Los Santos", "San Fierro"], correta: 2 },
        { questao: "Em 'The Last of Us', qual o nome da jovem que Joel deve escoltar?", alternativas: ["Tess", "Abby", "Sarah", "Ellie"], correta: 3 },
        { questao: "Qual franquia de jogos apresenta a frase: 'Finish Him!'?", alternativas: ["Street Fighter", "Mortal Kombat", "Tekken", "Killer Instinct"], correta: 1 },
        { questao: "No clássico 'Mortal Kombat', qual personagem possui o poder de gelo?", alternativas: ["Scorpion", "Sub-Zero", "Raiden", "Reptile"], correta: 1 },
        { questao: "Qual é o objetivo principal do jogo 'Tetris'?", alternativas: ["Matar inimigos", "Empilhar blocos e completar linhas", "Explorar cavernas", "Vencer uma corrida"], correta: 1 }
    ],

    "GAMES_4": [
        { questao: "Qual console de videogame é o mais vendido de todos os tempos?", alternativas: ["Wii", "PlayStation 2", "Xbox 360", "Nintendo Switch"], correta: 1 },
        { questao: "Quem é o vilão principal da franquia Super Mario?", alternativas: ["Wario", "Bowser", "Waluigi", "Donkey Kong"], correta: 1 },
        { questao: "Em 'Red Dead Redemption 2', qual o nome do protagonista controlado na maior parte da história?", alternativas: ["John Marston", "Dutch van der Linde", "Arthur Morgan", "Micah Bell"], correta: 2 },
        { questao: "No jogo 'The Sims', qual é o nome da língua fictícia falada pelos personagens?", alternativas: ["Simlish", "Simian", "Simtalk", "Simianese"], correta: 0 },
        { questao: "Qual empresa criou o jogo 'Sonic the Hedgehog'?", alternativas: ["Nintendo", "Sony", "Sega", "Capcom"], correta: 2 }
    ],

    "GAMES_5": [
        { questao: "Qual o nome da protagonista da série de jogos 'Tomb Raider'?", alternativas: ["Lara Croft", "Jill Valentine", "Samus Aran", "Bayonetta"], correta: 0 },
        { questao: "No 'Minecraft', qual criatura explode quando chega perto do jogador?", alternativas: ["Zumbi", "Enderman", "Creeper", "Esqueleto"], correta: 2 },
        { questao: "Qual é a principal ferramenta de 'Steve' no jogo Minecraft?", alternativas: ["Pá", "Machado", "Picareta", "Enxada"], correta: 2 },
        { questao: "Em qual ano foi lançado o primeiro console PlayStation?", alternativas: ["1990", "1994", "1998", "2000"], correta: 1 },
        { questao: "Qual jogo é conhecido pelo seu altíssimo nível de dificuldade e a frase 'You Died'?", alternativas: ["Dark Souls", "Skyrim", "The Witcher 3", "Elden Ring"], correta: 0 }
    ],

    "GAMES_6": [
        { questao: "Qual o nome da princesa que o Mario sempre tenta resgatar?", alternativas: ["Daisy", "Zelda", "Rosalina", "Peach"], correta: 3 },
        { questao: "Qual o nome do serviço de assinatura de jogos da Microsoft?", alternativas: ["PS Plus", "Game Pass", "Nintendo Online", "EA Play"], correta: 1 },
        { questao: "No jogo 'Counter-Strike', qual o objetivo dos terroristas?", alternativas: ["Resgatar reféns", "Plantar a bomba", "Correr no circuito", "Capturar a bandeira"], correta: 1 },
        { questao: "Qual é o nome da desenvolvedora de 'The Witcher' e 'Cyberpunk 2077'?", alternativas: ["Ubisoft", "Rockstar Games", "CD Projekt Red", "Bethesda"], correta: 2 },
        { questao: "Qual o nome do modo de jogo em Minecraft onde você fica imortal e não toma dano?", alternativas: ["Hardcore", "Sobrevivência", "Criativo", "Aventura"], correta: 2 }
    ],

    "GAMES_7": [
        { questao: "Qual é o nome do caçador de tesouros da franquia 'Uncharted'?", alternativas: ["Nathan Drake", "Joel Miller", "Arthur Morgan", "John Marston"], correta: 0 },
        { questao: "Qual é a principal cor do personagem Mega Man?", alternativas: ["Vermelho", "Verde", "Amarelo", "Azul"], correta: 3 },
        { questao: "Em qual console foi lançado originalmente o jogo 'GoldenEye 007'?", alternativas: ["Super Nintendo", "PlayStation 1", "Nintendo 64", "Sega Saturn"], correta: 2 },
        { questao: "No jogo 'Among Us', qual o objetivo do Impostor?", alternativas: ["Fazer tarefas", "Consertar a nave", "Eliminar a tripulação", "Votar nos amigos"], correta: 2 },
        { questao: "Qual o nome do dragão roxo mascote da PlayStation?", alternativas: ["Crash", "Spyro", "Sonic", "Rayman"], correta: 1 }
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
        { questao: "O termo popular 'Cangote' é usado para se referir a qual parte do corpo humano?", alternativas: ["Cabelo", "Mãos", "Pernas", "Pescoço"], correta: 3 },
        { questao: "Quantos anos durou a 'Guerra dos Cem Anos'?", alternativas: ["100 anos", "116 anos", "99 anos", "105 anos"], correta: 1 }
    ],

    "GERAL_4": [
        { questao: "Qual é o maior osso do corpo humano?", alternativas: ["Costela", "Fêmur", "Crânio", "Tíbia"], correta: 1 },
        { questao: "Qual dessas cores NÃO faz parte das cores do arco-íris?", alternativas: ["Anil", "Violeta", "Rosa", "Laranja"], correta: 2 },
        { questao: "Qual é o nome do processo em que as plantas transformam luz em energia?", alternativas: ["Respiração", "Combustão", "Transpiração", "Fotossíntese"], correta: 3 },
        { questao: "Qual é a montanha mais alta do mundo acima do nível do mar?", alternativas: ["K2", "Monte Everest", "Monte Fuji", "Pico da Neblina"], correta: 1 },
        { questao: "Qual é o planeta mais próximo do Sol?", alternativas: ["Vênus", "Terra", "Marte", "Mercúrio"], correta: 3 }
    ],

    "GERAL_5": [
        { questao: "Qual o nome da peça do xadrez que pode se mover em 'L'?", alternativas: ["Bispo", "Torre", "Cavalo", "Peão"], correta: 2 },
        { questao: "Qual é o oceano que banha toda a costa do Brasil?", alternativas: ["Oceano Pacífico", "Oceano Índico", "Oceano Ártico", "Oceano Atlântico"], correta: 3 },
        { questao: "Quem foi o inventor da lâmpada elétrica?", alternativas: ["Thomas Edison", "Nikola Tesla", "Albert Einstein", "Graham Bell"], correta: 0 },
        { questao: "Qual é o metal cujo símbolo químico é 'Au'?", alternativas: ["Prata", "Cobre", "Ouro", "Alumínio"], correta: 2 },
        { questao: "Em qual país o esporte 'Cricket' é o mais popular?", alternativas: ["Japão", "Paraguai", "Índia", "Polônia"], correta: 2 },
    ],

    "GERAL_6": [
        { questao: "Qual o nome do mascote da marca de alimentos frigorificos 'Sadia'?", alternativas: ["Assolino", "Dollynho", "Lek Trek", "Sam"], correta: 2 },
        { questao: "Qual é o único mamifero que consegue voar verdadeiramente?", alternativas: ["Morcego", "Esquilo-voador", "Papagaio", "Galinha"], correta: 0 },
        { questao: "Em qual país nasceu a rede de fast-food McDonald's?", alternativas: ["Canadá", "Reino Unido", "Alemanha", "Estados Unidos"], correta: 3 },
        { questao: "Quem foi a primeira mulher a ganhar um Prémio Nobel?", alternativas: ["Marie Curie", "Madre Teresa", "Anne Frank", "Malala Yousafzai"], correta: 0 },
        { questao: "Qual é a capital do Japão?", alternativas: ["Seul", "Pequim", "Banguecoque", "Tóquio"], correta: 3 }
    ],

    "GERAL_7": [
        { questao: "Quantos corações tem um polvo?", alternativas: ["Um", "Dois", "Três", "Quatro"], correta: 2 },
        { questao: "Qual é a língua mais falada no mundo (por falantes nativos)?", alternativas: ["Inglês", "Espanhol", "Chinês Mandarim", "Hindi"], correta: 2 },
        { questao: "Qual é o nome da linha imaginária que divide a Terra em Hemisfério Norte e Sul?", alternativas: ["Trópico de Capricórnio", "Meridiano de Greenwich", "Linha do Equador", "Círculo Polar Ártico"], correta: 2 },
        { questao: "Quem escreveu a peça 'Romeu e Julieta'?", alternativas: ["William Shakespeare", "Machado de Assis", "Oscar Wilde", "Dante Alighieri"], correta: 0 },
        { questao: "Qual destes países é o berço da invenção do avião, segundo a história brasileira?", alternativas: ["Estados Unidos", "França", "Brasil", "Inglaterra"], correta: 2 }
    ],

    "GERAL_8": [
        { questao: "Qual é o monumento famoso de Paris que foi construído para a Exposição Universal de 1889?", alternativas: ["Arco do Triunfo", "Catedral de Notre-Dame", "Torre Eiffel", "Museu do Louvre"], correta: 2 },
        { questao: "Qual é o ingrediente principal da culinária japonesa usado para fazer o Sushi?", alternativas: ["Trigo", "Arroz", "Milho", "Cevada"], correta: 1 },
        { questao: "Em qual país surgiu a tradição de decorar árvores de Natal?", alternativas: ["Brasil", "Alemanha", "Estados Unidos", "França"], correta: 1 },
        { questao: "Qual é a principal matéria-prima usada na fabricação do vidro?", alternativas: ["Argila", "Areia", "Petróleo", "Madeira"], correta: 1 },
        { questao: "Qual é o nome do explorador que liderou a primeira expedição a dar a volta ao mundo?", alternativas: ["Cristóvão Colombo", "Vasco da Gama", "Fernão de Magalhães", "Marco Polo"], correta: 2 }
    ],

    "GERAL_9": [
        { questao: "Qual fruta é conhecida por ser o símbolo da cidade de Nova York (The Big Apple)?", alternativas: ["Pêra", "Laranja", "Maçã", "Cereja"], correta: 2 },
        { questao: "Qual é o nome da técnica japonesa de dobrar papel para criar figuras?", alternativas: ["Ikebana", "Sudoku", "Origami", "Bonsai"], correta: 2 },
        { questao: "Qual destes órgãos do corpo humano é responsável por filtrar o sangue e produzir urina?", alternativas: ["Fígado", "Pâncreas", "Rins", "Pulmões"], correta: 2 },
        { questao: "Quem foi o líder sul-africano que lutou contra o Apartheid e recebeu o Nobel da Paz?", alternativas: ["Martin Luther King", "Nelson Mandela", "Desmond Tutu", "Kofi Annan"], correta: 1 },
        { questao: "Quantos anos tem um século?", alternativas: ["10 anos", "50 anos", "100 anos", "1000 anos"], correta: 2 }
    ],

    "GERAL_10": [
        { questao: "Qual é o nome da embarcação famosa que afundou em sua viagem inaugural em 1912?", alternativas: ["Britannic", "Olympic", "Titanic", "Lusitania"], correta: 2 },
        { questao: "Qual é a cor da caixa-preta de um avião (usada para gravar dados de voo)?", alternativas: ["Preta", "Laranja", "Vermelha", "Branca"], correta: 1 },
        { questao: "Em qual continente se localiza o Grand Canyon?", alternativas: ["Ásia", "América do Norte", "África", "Europa"], correta: 1 },
        { questao: "Qual é a substância mais dura encontrada na natureza?", alternativas: ["Ouro", "Ferro", "Diamante", "Grafite"], correta: 2 },
        { questao: "Qual o nome do satélite natural da Terra?", alternativas: ["Sol", "Lua", "Marte", "Estrela Dalva"], correta: 1 }
    ],

    "GERAL_11": [
        { questao: "Qual é a capital da Argentina?", alternativas: ["Santiago", "Montevidéu", "Buenos Aires", "Assunção"], correta: 2 },
        { questao: "Quem foi o primeiro presidente do Brasil?", alternativas: ["Getúlio Vargas", "Deodoro da Fonseca", "Dom Pedro II", "Juscelino Kubitschek"], correta: 1 },
        { questao: "Qual é o país conhecido como a 'Terra do Sol Nascente'?", alternativas: ["China", "Japão", "Coreia do Sul", "Tailândia"], correta: 1 },
        { questao: "Qual é o animal que simboliza o símbolo da paz?", alternativas: ["Águia", "Pomba", "Leão", "Beija-flor"], correta: 1 },
        { questao: "Em qual país fica a Torre de Pisa?", alternativas: ["França", "Itália", "Espanha", "Grécia"], correta: 1 }
    ],

    "GERAL_12": [
        { questao: "Qual o maior país da América do Sul?", alternativas: ["Argentina", "Chile", "Brasil", "Colômbia"], correta: 2 },
        { questao: "Qual é a principal língua falada na Austrália?", alternativas: ["Espanhol", "Francês", "Inglês", "Alemão"], correta: 2 },
        { questao: "Qual navegador descobriu o Brasil em 1500?", alternativas: ["Cristóvão Colombo", "Vasco da Gama", "Pedro Álvares Cabral", "Américo Vespúcio"], correta: 2 },
        { questao: "Qual o nome da maior floresta tropical do mundo?", alternativas: ["Mata Atlântica", "Floresta Amazônica", "Taiga", "Savana"], correta: 1 },
        { questao: "Como é chamado o estilo de música pop originário da Coreia do Sul?", alternativas: ["C-Pop", "J-Pop", "K-Pop", "Z-Pop"], correta: 2 },    
    ],

    "GERAL_13": [
        { questao: "Qual é a principal matéria-prima do papel?", alternativas: ["Petróleo", "Madeira", "Areia", "Plástico"], correta: 1 },
        { questao: "Em qual continente fica o Egito?", alternativas: ["Ásia", "África", "Europa", "América"], correta: 1 },
        { questao: "Quantas cores tem o arco-íris?", alternativas: ["5", "6", "7", "8"], correta: 2 },
        { questao: "Qual é o maior animal do mundo?", alternativas: ["Elefante", "Baleia Azul", "Tubarão-Baleia", "Girafa"], correta: 1 },
        { questao: "Quem pintou a Capela Sistina?", alternativas: ["Leonardo da Vinci", "Donatello", "Michelangelo", "Rafael"], correta: 2 }
    ],

    "GERAL_14": [
        { questao: "Qual é o principal gás que compõe a nossa atmosfera?", alternativas: ["Oxigênio", "Nitrogênio", "Gás Carbônico", "Hélio"], correta: 1 },
        { questao: "Qual é o nome da premiação máxima do cinema mundial?", alternativas: ["Grammy", "Oscar", "Emmy", "Tony"], correta: 1 },        
        { questao: "Em qual oceano fica a Ilha de Páscoa?", alternativas: ["Atlântico", "Pacífico", "Índico", "Glacial Ártico"], correta: 1 },
        { questao: "Quantas pernas tem uma aranha?", alternativas: ["6", "8", "10", "12"], correta: 1 },
        { questao: "Qual é o processo pelo qual as lagartas se transformam em borboletas?", alternativas: ["Fotossíntese", "Metamorfose", "Fusão", "Digestão"], correta: 1 },
    ],

    "GERAL_15": [
        { questao: "Como é chamado o prato típico brasileiro feito à base de feijão preto e carnes de porco?", alternativas: ["Vatapá", "Feijoada", "Acarajé", "Pamonha"], correta: 1 },
        { questao: "Qual é a moeda usada nos Estados Unidos?", alternativas: ["Euro", "Real", "Libra", "Dólar"], correta: 3 },
        { questao: "Quantos anos vive, em média, uma tartaruga gigante?", alternativas: ["20 anos", "50 anos", "Mais de 100 anos", "10 anos"], correta: 2 },
        { questao: "Qual é a capital da Alemanha?", alternativas: ["Munique", "Berlim", "Hamburgo", "Frankfurt"], correta: 1 },
        { questao: "Qual destas redes sociais é famosa pelos vídeos curtos e pelas 'dancinhas'?", alternativas: ["Facebook", "LinkedIn", "TikTok", "Pinterest"], correta: 2 },
    ],

    "ESPORTE_1": [
        { questao: "No meio futebolístico, quem passa a torcer para o time adversário é conhecido como vira o quê?", alternativas: ["Vira-lata", "Vira-carta", "Vira-casaca", "Vira-folha"], correta: 2 },
        { questao: "No basquete, qual o lance é executado após uma falta e vale apenas 1 ponto?", alternativas: ["Arremesso", "Lance Livre", "Bandeja", "Enterrada"], correta: 1 },
        { questao: "Quantos jogadores de cada lado entram em campo numa partida oficial de futebol?", alternativas: ["10", "12", "11", "9"], correta: 2 },
        { questao: "Qual é o estilo de natação onde o nadador fica de costas para o fundo da piscina?", alternativas: ["Crawl", "Borboleta", "Peito", "Costas"], correta: 3 },
        { questao: "Nas Olimpíadas, qual é a distância exata de uma maratona?", alternativas: ["42,195 km", "40 km", "45 km", "38,5 km"], correta: 0 }
    ],

    "ESPORTE_2": [
        { questao: "No vôlei, qual é o nome do jogador especialista em defesa que usa uma camisa de cor diferente?", alternativas: ["Levantador", "Líbero", "Defensor", "Central"], correta: 1 },
        { questao: "Qual é o nome do esporte que utiliza uma peteca e uma raquete?", alternativas: ["Tênis de Mesa", "Badminton", "Squash", "Padel"], correta: 1 },
        { questao: "Quantos tempos (quarters) tem uma partida de futebol americano (NFL)?", alternativas: ["2", "3", "4", "5"], correta: 2 },
        { questao: "No boxe masculino, em qual categoria ficam os lutadores com peso entre 52-53kg?", alternativas: ["Peso Galo", "Peso Mosca", "Peso Pena", "Peso Leve"], correta: 0 },
        { questao: "Qual tecnica é usada no tênis para separar os pés e ter melhor tempo de reação?", alternativas: ["Uso do tronco", "Smash", "Split Step", "Saque"], correta: 2 }
    ],

    "MUSICA_1": [
        { questao: "Qual banda britânica lançou o icônico álbum 'The Dark Side of the Moon'' em 1973?", alternativas: ["The Beatles", "The Rolling Stones", "Pink Floyd", "Led Zeppelin"], correta: 2 },
        { questao: " Quem é conhecida como a 'Rainha do Pop'?", alternativas: ["Whitney Houston", "Madonna", "Beyoncé", "Lady Gaga"], correta: 1 },
        { questao: "Qual destes instrumentos NÃO é da família dos metais?", alternativas: ["Trompete", "Trombone", "Tuba", "Violino"], correta: 3 },
        { questao: "Quem compôs a famosa 'Quinta Sinfonia'?", alternativas: ["Mozart", "Bach", "Beethoven", "Vivaldi"], correta: 2 },
        { questao: "Qual cantor é conhecido como o 'Rei do Pop'?", alternativas: ["Elvis Presley", "Prince", "Michael Jackson", "Stevie Wonder"], correta: 2 }
    ],

    "MUSICA_2": [
        { questao: "Qual cantor é conhecido mundialmente como o 'Rei do Reggae'?", alternativas: ["Mick Jagger", "Bob Marley", "Jimmy Cliff", "Peter Tosh"], correta: 1 },
        { questao: "Qual banda de rock é famosa pela música 'Bohemian Rhapsody'?", alternativas: ["The Who", "Led Zeppelin", "Queen", "AC/DC"], correta: 2 },
        { questao: "Quantas cordas tem um violino padrão?", alternativas: ["3", "4", "5", "6"], correta: 1 },
        { questao: "Qual cantora detém o recorde de maior número de prêmios Grammy na história?", alternativas: ["Taylor Swift", "Adele", "Beyoncé", "Lady Gaga"], correta: 2 },
        { questao: "Qual destes artistas é famoso por usar uma maquiagem de raio no rosto na capa do álbum 'Aladdin Sane'?", alternativas: ["David Bowie", "Freddie Mercury", "Elton John", "Prince"], correta: 0 }
    ]

};

const novosConjuntos = {
    // --- Games (Continuação) ---


    // --- Conhecimentos Gerais (Continuação) ---


    "GERAL_16": [
        { questao: "Quem inventou o telefone?", alternativas: ["Thomas Edison", "Alexander Graham Bell", "Santos Dumont", "Albert Einstein"], correta: 1 },
        { questao: "Qual é a capital da Espanha?", alternativas: ["Barcelona", "Sevilha", "Madri", "Valência"], correta: 2 },
        { questao: "Qual é o esporte mais popular no Brasil?", alternativas: ["Vôlei", "Futebol", "Basquete", "Tênis"], correta: 1 },
    ]
};