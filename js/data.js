/* ============================================================
   CONSCIÊNCIA NEGRA — ARQUIVO DE DADOS
   ------------------------------------------------------------
   ESTE É O ÚNICO ARQUIVO QUE VOCÊ PRECISA EDITAR.

   · CONFIG  -> informações do site e da pessoa central (Zumbi).
   · PESSOAS -> a lista de pesquisas. Cada objeto = 1 card + 1 página.

   Para adicionar a pesquisa de um aluno, copie um objeto inteiro,
   cole no fim da lista, troque os valores e pronto.

   REGRAS DE OURO
   1. "slug" precisa ser único, sem acento, sem espaço (use hífen).
   2. Deixe "foto" vazio ("") para usar o placeholder bonito com
      as iniciais. Para usar foto: salve o arquivo em /pessoas/
      e escreva "pessoas/nome-do-arquivo.jpg".
   3. Não invente fatos, datas ou frases. Tudo precisa ter fonte.
   4. "galeria" e "video" são opcionais: deixe [] e null.
============================================================ */

window.CONFIG = {
  siteNome: "Consciência Negra",
  subtitulo: "40 histórias de resistência",
  escola: "Nome da Escola",
  turma: "3º Ano B",
  professor: "Prof. Nome do Professor",
  ano: "2026",

  // Quantas pesquisas o projeto deve ter no total (só para o contador)
  totalPrevisto: 40,

  // Coloque false quando todas as pesquisas reais estiverem no site
  mostrarAvisoExemplo: true,

  central: {
    nome: "Zumbi dos Palmares",
    anos: "1655 — 1695",
    local: "Serra da Barriga, Alagoas",
    eyebrow: "20 DE NOVEMBRO · DIA NACIONAL DE ZUMBI E DA CONSCIÊNCIA NEGRA",
    manifesto:
      "A liberdade não se pede: ela se constrói todos os dias, com memória, organização e coragem.",
    // Deixe "" para o placeholder artístico. Ou use "pessoas/zumbi.jpg"
    foto: "",
    fotoAlt: "Retrato de Zumbi dos Palmares",
    fotoCredito: "",

    legado: {
      titulo: "O que Zumbi fez contra o racismo",
      intro:
        "Zumbi não foi só um líder militar. Ele transformou um território livre em prova viva de que a população negra podia viver com dignidade, autonomia e cultura própria — e pagou com a vida por isso.",

      feitos: [
        {
          verbo: "Recusou a rendição",
          ano: "1678",
          texto:
            "Quando o líder Ganga Zumba aceitou um acordo de paz com os portugueses, Zumbi se opôs e liderou a ala que não aceitava voltar a ser propriedade de ninguém. Assumiu a liderança do quilombo e manteve a resistência por mais de uma década."
        },
        {
          verbo: "Manteve Palmares livre",
          ano: "1678 — 1694",
          texto:
            "Sob seu comando, o Quilombo dos Palmares — uma rede de povoados na Serra da Barriga — seguiu organizando plantio, artesanato, comércio e defesa. Foi uma das maiores e mais duradouras comunidades livres de africanos e afrodescendentes das Américas."
        },
        {
          verbo: "Virou símbolo",
          ano: "1695 — hoje",
          texto:
            "Zumbi foi morto em 20 de novembro de 1695 e sua cabeça foi exposta publicamente como prova de que o quilombo havia sido derrotado. A tentativa fracassou: ele se tornou o maior símbolo da resistência negra no Brasil e dá nome ao Dia Nacional da Consciência Negra."
        }
      ],

      citacao: {
        texto:
          "Zumbi é o símbolo da resistência negra no Brasil. Sua luta continua cada vez que dizemos não ao racismo.",
        autor: "— texto do projeto"
      },

      linhaDoTempo: [
        { ano: "1655", texto: "Nascimento na Serra da Barriga, região do atual estado de Alagoas." },
        { ano: "1678", texto: "Ganga Zumba assina acordo de paz com os portugueses. Zumbi rejeita e lidera a resistência." },
        { ano: "1694", texto: "Ataque de Domingos Jorge Velho destrói a principal povoação do quilombo, a Cerca do Macaco." },
        { ano: "1695", texto: "Zumbi é morto em 20 de novembro. Sua cabeça é exposta em Recife." },
        { ano: "1978", texto: "O Movimento Negro Unificado adota o 20 de novembro como Dia da Consciência Negra." },
        { ano: "2023", texto: "O 20 de novembro passa a ser feriado nacional (Lei nº 14.759/2023)." }
      ],

      impacto: [
        {
          numero: "100",
          label: "anos de resistência",
          texto: "O Quilombo dos Palmares resistiu por quase um século aos ataques coloniais."
        },
        {
          numero: "20/11",
          label: "feriado nacional",
          texto: "A data da morte de Zumbi é o Dia Nacional de Zumbi e da Consciência Negra."
        },
        {
          numero: "1978",
          label: "marco do movimento",
          texto: "O Movimento Negro Unificado adota o 20 de novembro como Dia da Consciência Negra."
        }
      ]
    }
  }
};

/* ------------------------------------------------------------
   PESQUISAS DE EXEMPLO
   Troque aluno, textos e fontes pelas pesquisas reais da turma.
   Os 18 registros abaixo existem só para mostrar o formato.
------------------------------------------------------------ */
window.PESSOAS = [
  {
    slug: "zumbi-dos-palmares",
    nome: "Zumbi dos Palmares",
    nascimento: 1655,
    morte: 1695,
    local: "Serra da Barriga, Alagoas",
    categorias: ["Resistência"],
    resumoCard: "Líder do Quilombo dos Palmares, símbolo máximo da resistência negra.",
    resumo:
      "Zumbi liderou o Quilombo dos Palmares, a maior comunidade de africanos e afrodescendentes livres das Américas. Sua recusa em aceitar a escravidão transformou o 20 de novembro no Dia Nacional da Consciência Negra.",
    foto: "",
    fotoAlt: "Representação de Zumbi dos Palmares",
    fotoCredito: "",
    secoes: [
      { titulo: "Quem foi", texto: "Nascido na Serra da Barriga por volta de 1655, Zumbi foi capturado ainda criança e entregue a um padre, que o batizou como Francisco. Aos 15 anos voltou para o quilombo e, anos depois, assumiu a liderança de Palmares." },
      { titulo: "Por que importa hoje", texto: "Zumbi morreu em 20 de novembro de 1695, mas a data virou o Dia Nacional da Consciência Negra. Sua história é usada até hoje para falar de liberdade, organização comunitária e resistência ao racismo." }
    ],
    galeria: [],
    video: null,
    fontes: [
      { titulo: "Zumbi dos Palmares", veiculo: "Fundação Cultural Palmares", url: "https://www.gov.br/palmares/", acesso: "2026-11-07" },
      { titulo: "Quilombo dos Palmares", veiculo: "Brasil Escola", url: "https://brasilescola.uol.com.br/", acesso: "2026-11-07" }
    ],
    aluno: { nomes: "Juan, Eduardo", turma: "3º B" },
    tempoLeitura: 2
  },

  {
    slug: "dandara",
    nome: "Dandara",
    nascimento: null,
    morte: 1694,
    local: "Quilombo dos Palmares",
    categorias: ["Resistência"],
    resumoCard: "Guerreira quilombola, lutou ao lado de Zumbi pela liberdade de Palmares.",
    resumo:
      "Dandara é lembrada pela tradição oral como uma das principais lideranças de Palmares. Especialista em capoeira e estratégia de combate, participou da defesa do quilombo até sua morte.",
    foto: "",
    fotoAlt: "Representação de Dandara dos Palmares",
    fotoCredito: "",
    secoes: [
      { titulo: "Quem foi", texto: "Não existem registros escritos sobre o nascimento de Dandara. Sua história chegou até nós pela tradição oral dos quilombolas, que a descrevem como companheira de Zumbi e líder militar de Palmares." },
      { titulo: "O que representa", texto: "Dandara é hoje um símbolo da mulher negra na luta por liberdade. Seu nome batiza ruas, escolas e coletivos, e ela aparece ao lado de Zumbi como referência de resistência feminina." }
    ],
    galeria: [],
    video: null,
    fontes: [
      { titulo: "Dandara dos Palmares", veiculo: "Fundação Cultural Palmares", url: "https://www.gov.br/palmares/", acesso: "2026-11-07" }
    ],
    aluno: { nomes: "Fellype", turma: "3º B" },
    tempoLeitura: 2
  },

  {
    slug: "luis-gama",
    nome: "Luís Gama",
    nascimento: 1830,
    morte: 1882,
    local: "Salvador, Bahia",
    categorias: ["Abolicionismo", "Direito", "Literatura"],
    resumoCard: "Advogado autodidata que libertou centenas de pessoas escravizadas.",
    resumo:
      "Vendido como escravizado pelo próprio pai aos 10 anos, Luís Gama conquistou a própria liberdade, estudou sozinho e usou o direito para libertar centenas de pessoas. Foi um dos maiores abolicionistas do Brasil.",
    foto: "",
    fotoAlt: "Retrato de Luís Gama",
    fotoCredito: "",
    secoes: [
      { titulo: "Quem foi", texto: "Nascido em Salvador em 1830, Luís Gonzaga Pinto da Gama foi vendido pelo pai como escravizado ainda criança. Alfabetizou-se já adulto, tornou-se advogado autodidata e dedicou a vida a libertar pessoas escravizadas por meio de processos judiciais." },
      { titulo: "Por que importa hoje", texto: "Gama mostrou que o direito pode ser ferramenta de libertação. É patrono de uma cadeira na Academia Paulista de Letras e nome de avenidas, escolas e coletivos jurídicos antirracistas." }
    ],
    galeria: [],
    video: null,
    fontes: [
      { titulo: "Luís Gama", veiculo: "Enciclopédia Brasileira", url: "https://brasilescola.uol.com.br/", acesso: "2026-11-07" }
    ],
    aluno: { nomes: "Nicolas", turma: "3º B" },
    tempoLeitura: 2
  },

  {
    slug: "carolina-maria-de-jesus",
    nome: "Carolina Maria de Jesus",
    nascimento: 1914,
    morte: 1977,
    local: "Sacramento, Minas Gerais",
    categorias: ["Literatura"],
    resumoCard: "Catadora de papel que escreveu o diário mais famoso da favela brasileira.",
    resumo:
      "Moradora da favela do Canindé, em São Paulo, Carolina escrevia em cadernos encontrados no lixo. Seu livro Quarto de Despejo (1960) virou fenômeno mundial e denunciou a fome e o racismo estrutural.",
    foto: "",
    fotoAlt: "Retrato de Carolina Maria de Jesus",
    fotoCredito: "",
    secoes: [
      { titulo: "Quem foi", texto: "Carolina Maria de Jesus nasceu em Minas Gerais em 1914 e foi para São Paulo na juventude. Trabalhava como catadora de papel e registrava o cotidiano da favela em diários. Quarto de Despejo foi traduzido para dezenas de idiomas." },
      { titulo: "Por que importa hoje", texto: "Carolina inaugurou uma literatura feita por quem vive a pobreza, sem intermediários. Hoje ela é referência para a literatura marginal e para o debate sobre quem tem direito a narrar a própria vida." }
    ],
    galeria: [],
    video: null,
    fontes: [
      { titulo: "Carolina Maria de Jesus", veiculo: "Brasil Escola", url: "https://brasilescola.uol.com.br/", acesso: "2026-11-07" }
    ],
    aluno: { nomes: "Ana, Beatriz", turma: "3º B" },
    tempoLeitura: 3
  },

  {
    slug: "abdias-do-nascimento",
    nome: "Abdias do Nascimento",
    nascimento: 1914,
    morte: 2011,
    local: "Franca, São Paulo",
    categorias: ["Ativismo", "Artes", "Política"],
    resumoCard: "Criou o Teatro Experimental do Negro e formulou o quilombismo.",
    resumo:
      "Abdias do Nascimento foi ator, poeta, professor e político. Em 1944 fundou o Teatro Experimental do Negro, colocando pessoas negras no palco, e depois formulou o conceito de quilombismo.",
    foto: "",
    fotoAlt: "Retrato de Abdias do Nascimento",
    fotoCredito: "",
    secoes: [
      { titulo: "Quem foi", texto: "Nascido em Franca em 1914, Abdias foi dramaturgo, pintor e ativista. O Teatro Experimental do Negro (1944) formava atores negros e encenava peças sobre a experiência afro-brasileira, algo inédito no país." },
      { titulo: "Por que importa hoje", texto: "Abdias foi deputado federal e senador, levando o debate racial para o Estado. Sua obra sobre quilombismo inspira até hoje movimentos negros e políticas de reparação." }
    ],
    galeria: [],
    video: null,
    fontes: [
      { titulo: "Abdias do Nascimento", veiculo: "Fundação Cultural Palmares", url: "https://www.gov.br/palmares/", acesso: "2026-11-07" }
    ],
    aluno: { nomes: "Davi", turma: "3º B" },
    tempoLeitura: 3
  },

  {
    slug: "lelia-gonzalez",
    nome: "Lélia Gonzalez",
    nascimento: 1935,
    morte: 1994,
    local: "Belo Horizonte, Minas Gerais",
    categorias: ["Ativismo", "Ciência"],
    resumoCard: "Filósofa e antropóloga que cunhou o conceito de amefricanidade.",
    resumo:
      "Lélia Gonzalez foi uma das maiores intelectuais negras do Brasil. Co-fundadora do Movimento Negro Unificado, pensou a relação entre racismo, gênero e classe e criou o conceito de amefricanidade.",
    foto: "",
    fotoAlt: "Retrato de Lélia Gonzalez",
    fotoCredito: "",
    secoes: [
      { titulo: "Quem foi", texto: "Professora e antropóloga, Lélia Gonzalez ajudou a fundar o Movimento Negro Unificado em 1978. Escreveu sobre o lugar da mulher negra na sociedade brasileira e sobre como o racismo se articula com o sexismo." },
      { titulo: "Por que importa hoje", texto: "Conceitos como amefricanidade e o debate sobre interseccionalidade no Brasil têm base no pensamento de Lélia. Ela é leitura obrigatória em cursos de ciências sociais." }
    ],
    galeria: [],
    video: null,
    fontes: [
      { titulo: "Lélia Gonzalez", veiculo: "Geledés", url: "https://www.geledes.org.br/", acesso: "2026-11-07" }
    ],
    aluno: { nomes: "Clara", turma: "3º B" },
    tempoLeitura: 3
  },

  {
    slug: "djamila-ribeiro",
    nome: "Djamila Ribeiro",
    nascimento: 1980,
    morte: null,
    local: "Santos, São Paulo",
    categorias: ["Ativismo", "Literatura", "Ciência"],
    resumoCard: "Filosofa que popularizou o conceito de lugar de fala no Brasil.",
    resumo:
      "Djamila Ribeiro é filósofa, escritora e ativista. Com o livro O que é lugar de fala? (2017), levou um debate acadêmico para milhões de leitores e se tornou uma das principais vozes antirracistas do país.",
    foto: "",
    fotoAlt: "Retrato de Djamila Ribeiro",
    fotoCredito: "",
    secoes: [
      { titulo: "Quem foi", texto: "Nascida em Santos em 1980, Djamila é mestre em filosofia política e foi secretária municipal de Direitos Humanos de São Paulo. Escreveu O que é lugar de fala?, Pequeno manual antirracista e outros livros." },
      { titulo: "Por que importa hoje", texto: "Sua escrita acessível aproximou a filosofia da vida cotidiana e deu vocabulário para jovens negros entenderem e nomearem o racismo no dia a dia." }
    ],
    galeria: [],
    video: null,
    fontes: [
      { titulo: "Djamila Ribeiro", veiculo: "Companhia das Letras", url: "https://www.companhiadasletras.com.br/", acesso: "2026-11-07" }
    ],
    aluno: { nomes: "Eduardo", turma: "3º B" },
    tempoLeitura: 2
  },

  {
    slug: "conceicao-evaristo",
    nome: "Conceição Evaristo",
    nascimento: 1946,
    morte: null,
    local: "Belo Horizonte, Minas Gerais",
    categorias: ["Literatura"],
    resumoCard: "Criou o conceito de escrevivência e é voz central da literatura negra.",
    resumo:
      "Conceição Evaristo é poeta e romancista. Autora de Ponciá Vicêncio e Olhos d'Água, criou o conceito de escrevivência: escrever a partir da própria experiência de mulher negra.",
    foto: "",
    fotoAlt: "Retrato de Conceição Evaristo",
    fotoCredito: "",
    secoes: [
      { titulo: "Quem foi", texto: "Nascida em Belo Horizonte em 1946, Conceição trabalhou como empregada doméstica antes de se formar em Letras. É autora de romances, contos e poemas traduzidos para vários países." },
      { titulo: "Por que importa hoje", texto: "A escrevivência virou chave de leitura para pensar literatura e racismo. Conceição mostra que a experiência de vida é conhecimento, não apenas inspiração." }
    ],
    galeria: [],
    video: null,
    fontes: [
      { titulo: "Conceição Evaristo", veiculo: "Enciclopédia Itaú Cultural", url: "https://enciclopedia.itaucultural.org.br/", acesso: "2026-11-07" }
    ],
    aluno: { nomes: "Gabriel", turma: "3º B" },
    tempoLeitura: 2
  },

  {
    slug: "pixinguinha",
    nome: "Pixinguinha",
    nascimento: 1897,
    morte: 1973,
    local: "Rio de Janeiro",
    categorias: ["Música"],
    resumoCard: "Mestre do choro, compôs Carinhoso e modernizou a música brasileira.",
    resumo:
      "Alfredo da Rocha Vianna Filho, o Pixinguinha, levou o choro para o mundo. Compositor de Carinhoso e Um a Zero, é um dos fundadores da música popular brasileira moderna.",
    foto: "",
    fotoAlt: "Retrato de Pixinguinha",
    fotoCredito: "",
    secoes: [
      { titulo: "Quem foi", texto: "Pixinguinha nasceu no Rio de Janeiro em 1897 e cresceu em uma família de músicos. Com o grupo Oito Batutas viajou para a Europa e gravou clássicos que até hoje definem o choro." },
      { titulo: "Por que importa hoje", texto: "Sua obra é base do repertório instrumental brasileiro. Pixinguinha mostrou que a música negra e popular podia ser erudita, sofisticada e universal." }
    ],
    galeria: [],
    video: null,
    fontes: [
      { titulo: "Pixinguinha", veiculo: "Enciclopédia Itaú Cultural", url: "https://enciclopedia.itaucultural.org.br/", acesso: "2026-11-07" }
    ],
    aluno: { nomes: "Helena", turma: "3º B" },
    tempoLeitura: 2
  },

  {
    slug: "elza-soares",
    nome: "Elza Soares",
    nascimento: 1930,
    morte: 2022,
    local: "Rio de Janeiro",
    categorias: ["Música"],
    resumoCard: "A voz que transformou o samba em denúncia e reinvenção.",
    resumo:
      "Elza Soares cantou por sete décadas e nunca se acomodou. De A Mulher do Fim do Mundo (2015) a clássicos do samba, usou a voz para falar de racismo, violência e resistência.",
    foto: "",
    fotoAlt: "Retrato de Elza Soares",
    fotoCredito: "",
    secoes: [
      { titulo: "Quem foi", texto: "Nascida no Rio em 1930, Elza veio de família pobre e começou a cantar ainda jovem. Construiu uma carreira marcada por reinvenções e por letras que confrontavam o machismo e o racismo." },
      { titulo: "Por que importa hoje", texto: "Elza é referência de artista que não separa arte de posicionamento. Seu álbum de 2015 é considerado um marco da música brasileira contemporânea." }
    ],
    galeria: [],
    video: null,
    fontes: [
      { titulo: "Elza Soares", veiculo: "Enciclopédia Itaú Cultural", url: "https://enciclopedia.itaucultural.org.br/", acesso: "2026-11-07" }
    ],
    aluno: { nomes: "Isabela", turma: "3º B" },
    tempoLeitura: 2
  },

  {
    slug: "emicida",
    nome: "Emicida",
    nascimento: 1985,
    morte: null,
    local: "São Paulo",
    categorias: ["Música"],
    resumoCard: "Rapper que uniu rap, samba e memória negra em AmarElo.",
    resumo:
      "Leandro Roque de Oliveira, o Emicida, cresceu na zona norte de São Paulo e se tornou um dos maiores nomes do rap nacional. AmarElo (2019) virou filme e show histórico no Theatro Municipal.",
    foto: "",
    fotoAlt: "Retrato de Emicida",
    fotoCredito: "",
    secoes: [
      { titulo: "Quem foi", texto: "Emicida começou nas batalhas de rap da periferia paulistana e fundou o selo Laboratório Fantasma. Suas letras misturam denúncia social, cultura negra e referências à música brasileira." },
      { titulo: "Por que importa hoje", texto: "Ele mostrou que o rap pode ocupar teatro, cinema e escola. AmarElo discutiu racismo e memória para milhões de pessoas." }
    ],
    galeria: [],
    video: null,
    fontes: [
      { titulo: "Emicida", veiculo: "Laboratório Fantasma", url: "https://www.laboratoriofantasma.com/", acesso: "2026-11-07" }
    ],
    aluno: { nomes: "João", turma: "3º B" },
    tempoLeitura: 2
  },

  {
    slug: "milton-santos",
    nome: "Milton Santos",
    nascimento: 1926,
    morte: 2001,
    local: "Brotas de Macaúbas, Bahia",
    categorias: ["Ciência"],
    resumoCard: "Geógrafo brasileiro premiado no mundo por pensar o espaço e a desigualdade.",
    resumo:
      "Milton Santos foi um dos maiores geógrafos do mundo. Negro, nordestino e perseguido na ditadura, criou conceitos que explicam como o espaço urbano produz desigualdade.",
    foto: "",
    fotoAlt: "Retrato de Milton Santos",
    fotoCredito: "",
    secoes: [
      { titulo: "Quem foi", texto: "Nascido na Bahia em 1926, Milton Santos lecionou em universidades do Brasil e do exterior. Foi preso durante a ditadura militar e viveu exilado por anos." },
      { titulo: "Por que importa hoje", texto: "Recebeu o Prêmio Vautrin Lud, considerado o Nobel da geografia. Suas ideias ajudam a entender periferias, mobilidade e desigualdade nas cidades." }
    ],
    galeria: [],
    video: null,
    fontes: [
      { titulo: "Milton Santos", veiculo: "Brasil Escola", url: "https://brasilescola.uol.com.br/", acesso: "2026-11-07" }
    ],
    aluno: { nomes: "Lucas", turma: "3º B" },
    tempoLeitura: 3
  },

  {
    slug: "marielle-franco",
    nome: "Marielle Franco",
    nascimento: 1979,
    morte: 2018,
    local: "Rio de Janeiro",
    categorias: ["Política", "Ativismo"],
    resumoCard: "Vereadora do Rio que denunciou a violência policial e foi assassinada em 2018.",
    resumo:
      "Socióloga e vereadora, Marielle Franco defendia direitos humanos, feminismo e a população negra e favelada. Seu assassinato em março de 2018 virou símbolo mundial de luta por justiça.",
    foto: "",
    fotoAlt: "Retrato de Marielle Franco",
    fotoCredito: "",
    secoes: [
      { titulo: "Quem foi", texto: "Criada na Maré, Marielle se formou em sociologia e foi eleita vereadora no Rio em 2016. Presidiu a Comissão de Defesa dos Direitos da Mulher e denunciava abusos policiais." },
      { titulo: "Por que importa hoje", texto: "Sua morte em 14 de março de 2018 gerou protestos no mundo inteiro. Marielle se tornou símbolo da luta contra a violência de Estado e o racismo." }
    ],
    galeria: [],
    video: null,
    fontes: [
      { titulo: "Marielle Franco", veiculo: "Geledés", url: "https://www.geledes.org.br/", acesso: "2026-11-07" }
    ],
    aluno: { nomes: "Marina", turma: "3º B" },
    tempoLeitura: 3
  },

  {
    slug: "pele",
    nome: "Pelé",
    nascimento: 1940,
    morte: 2022,
    local: "Três Corações, Minas Gerais",
    categorias: ["Esporte"],
    resumoCard: "O maior jogador de futebol de todos os tempos e ícone negro do Brasil.",
    resumo:
      "Edson Arantes do Nascimento venceu três Copas do Mundo e se tornou o atleta mais conhecido do planeta. Sua trajetória também expôs o racismo que atravessa o esporte brasileiro.",
    foto: "",
    fotoAlt: "Retrato de Pelé",
    fotoCredito: "",
    secoes: [
      { titulo: "Quem foi", texto: "Nascido em Três Corações em 1940, Pelé estreou no Santos e na Seleção ainda adolescente. Marcou mais de mil gols e conquistou as Copas de 1958, 1962 e 1970." },
      { titulo: "Por que importa hoje", texto: "Pelé levou o Brasil ao mundo, mas também sofreu racismo dentro e fora de campo. Sua história mostra que o talento negro sempre teve que provar o dobro." }
    ],
    galeria: [],
    video: null,
    fontes: [
      { titulo: "Pelé", veiculo: "Museu do Futebol", url: "https://museudofutebol.org.br/", acesso: "2026-11-07" }
    ],
    aluno: { nomes: "Pedro", turma: "3º B" },
    tempoLeitura: 2
  },

  {
    slug: "machado-de-assis",
    nome: "Machado de Assis",
    nascimento: 1839,
    morte: 1908,
    local: "Rio de Janeiro",
    categorias: ["Literatura"],
    resumoCard: "Fundador da Academia Brasileira de Letras e maior escritor do país.",
    resumo:
      "Joaquim Maria Machado de Assis, neto de pessoas escravizadas, escreveu Dom Casmurro e Memórias Póstumas de Brás Cubas. É o escritor mais importante da literatura brasileira.",
    foto: "",
    fotoAlt: "Retrato de Machado de Assis",
    fotoCredito: "",
    secoes: [
      { titulo: "Quem foi", texto: "Nascido no Rio em 1839, Machado teve origem humilde e pouca educação formal. Tornou-se funcionário público, cronista e romancista, e foi o primeiro presidente da Academia Brasileira de Letras." },
      { titulo: "Por que importa hoje", texto: "Sua obra é estudada no mundo inteiro. Discutir a negritude de Machado é reconhecer a contribuição negra para a cultura brasileira, muitas vezes apagada." }
    ],
    galeria: [],
    video: null,
    fontes: [
      { titulo: "Machado de Assis", veiculo: "Academia Brasileira de Letras", url: "https://www.academia.org.br/", acesso: "2026-11-07" }
    ],
    aluno: { nomes: "Rafael", turma: "3º B" },
    tempoLeitura: 3
  },

  {
    slug: "mae-menininha-do-gantois",
    nome: "Mãe Menininha do Gantois",
    nascimento: 1894,
    morte: 1986,
    local: "Salvador, Bahia",
    categorias: ["Religião"],
    resumoCard: "Ialorixá respeitada que defendeu o Candomblé e a liberdade religiosa.",
    resumo:
      "Mãe Menininha do Gantois foi uma das maiores autoridades do Candomblé brasileiro. Sob sua liderança, o terreiro do Gantois se tornou referência nacional de resistência religiosa negra.",
    foto: "",
    fotoAlt: "Retrato de Mãe Menininha do Gantois",
    fotoCredito: "",
    secoes: [
      { titulo: "Quem foi", texto: "Escolhida ialorixá ainda jovem, Menininha liderou o Ilê Axé Iyá Nassô Oká, o Gantois, em Salvador, por mais de 50 anos. Era procurada por artistas, intelectuais e políticos." },
      { titulo: "Por que importa hoje", texto: "Ela enfrentou a perseguição às religiões de matriz africana e ajudou a torná-las patrimônio cultural. Sua trajetória é central para entender a liberdade religiosa no Brasil." }
    ],
    galeria: [],
    video: null,
    fontes: [
      { titulo: "Mãe Menininha do Gantois", veiculo: "Fundação Cultural Palmares", url: "https://www.gov.br/palmares/", acesso: "2026-11-07" }
    ],
    aluno: { nomes: "Sofia", turma: "3º B" },
    tempoLeitura: 2
  },

  {
    slug: "daiane-dos-santos",
    nome: "Daiane dos Santos",
    nascimento: 1983,
    morte: null,
    local: "Porto Alegre, Rio Grande do Sul",
    categorias: ["Esporte"],
    resumoCard: "Primeira ginasta brasileira campeã mundial, criadora do salto Dos Santos.",
    resumo:
      "Daiane dos Santos foi a primeira brasileira a conquistar um ouro em Campeonato Mundial de Ginástica Artística (2003). Seu salto no solo entrou para o código oficial da modalidade.",
    foto: "",
    fotoAlt: "Retrato de Daiane dos Santos",
    fotoCredito: "",
    secoes: [
      { titulo: "Quem foi", texto: "Nascida em Porto Alegre em 1983, Daiane começou na ginástica ainda criança. Em 2003 se tornou campeã mundial no solo, feito inédito para o Brasil." },
      { titulo: "Por que importa hoje", texto: "O movimento Dos Santos é reconhecido internacionalmente. Daiane abriu caminho para atletas negras na ginástica, esporte historicamente branco no Brasil." }
    ],
    galeria: [],
    video: null,
    fontes: [
      { titulo: "Daiane dos Santos", veiculo: "Comitê Olímpico do Brasil", url: "https://www.cob.org.br/", acesso: "2026-11-07" }
    ],
    aluno: { nomes: "Thiago", turma: "3º B" },
    tempoLeitura: 2
  },

  {
    slug: "kabengele-munanga",
    nome: "Kabengele Munanga",
    nascimento: 1942,
    morte: null,
    local: "República Democrática do Congo / Brasil",
    categorias: ["Ciência", "Ativismo"],
    resumoCard: "Antropólogo que ajudou a desmontar o mito da democracia racial brasileira.",
    resumo:
      "Nascido no Congo e radicado no Brasil, Kabengele Munanga é um dos maiores estudiosos de racismo e identidade negra. Sua obra desmonta a ideia de que o Brasil seria uma democracia racial.",
    foto: "",
    fotoAlt: "Retrato de Kabengele Munanga",
    fotoCredito: "",
    secoes: [
      { titulo: "Quem foi", texto: "Munanga chegou ao Brasil na década de 1970 e se tornou professor da USP. Pesquisa a construção da identidade negra e a ideologia do branqueamento na sociedade brasileira." },
      { titulo: "Por que importa hoje", texto: "Suas ideias sustentam o debate sobre cotas, racismo estrutural e políticas de reparação. Ele mostra que o racismo brasileiro é estrutural, não individual." }
    ],
    galeria: [],
    video: null,
    fontes: [
      { titulo: "Kabengele Munanga", veiculo: "USP", url: "https://www.usp.br/", acesso: "2026-11-07" }
    ],
    aluno: { nomes: "Vitória", turma: "3º B" },
    tempoLeitura: 3
  }
];
