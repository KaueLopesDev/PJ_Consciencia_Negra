/* ============================================================
   CONSCIÊNCIA NEGRA — ARQUIVO DE DADOS
   ------------------------------------------------------------
   ESTE É O ÚNICO ARQUIVO QUE VOCÊ PRECISA EDITAR.

   · CONFIG  -> informações do site e da pessoa central (Zumbi).
   · PESSOAS -> a lista de pesquisas. Cada objeto = 1 card + 1 página.

   REGRAS DE OURO
   1. "slug" precisa ser único, sem acento, sem espaço (use hífen).
   2. "foto" recebe o caminho local em pessoas/. Deixe "" só quando
      não existir imagem livre (caso de Kabengele Munanga).
   3. Não invente fatos, datas ou frases. Tudo precisa ter fonte.
   4. "galeria" e "video" são opcionais: deixe [] e null.
   5. A atribuição de aluno é fechada (atribuicao-alunos.json).
      Não crie, troque ou complete nomes. Campo vazio = card sem aluno.
============================================================ */

window.CONFIG = {
  siteNome: "Consciência Negra",
  subtitulo: "40 histórias de resistência",
  escola: "",
  turma: "3º Ano - 3004",
  professor: "",
  ano: "2026",

  central: {
    nome: "Zumbi dos Palmares",
    anos: "1655 — 1695",
    local: "Serra da Barriga, Alagoas",
    eyebrow: "20 DE NOVEMBRO · DIA NACIONAL DE ZUMBI E DA CONSCIÊNCIA NEGRA",
    manifesto:
      "Zumbi liderou o Quilombo dos Palmares, a maior comunidade de africanos e afrodescendentes livres das Américas. Sua recusa em aceitar a escravidão transformou o 20 de novembro no Dia Nacional da Consciência Negra.",
    foto: "pessoas/zumbi-dos-palmares.jpg",
    fotoAlt: "Pintura de Zumbi dos Palmares",
    fotoCredito: "Pintura de Antônio Parreiras · Domínio público · via Wikimedia Commons",

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
   AS 40 PESQUISAS
   Ordem oficial: 18 pesquisas originais + 22 novas histórias.
   Aluno(a): nomes exatos da tabela atribuicao-alunos.json.
------------------------------------------------------------ */
window.PESSOAS = [
  {
    slug: "zumbi-dos-palmares",
    fotoPos: "50% 25%",
    nome: "Zumbi dos Palmares",
    nascimento: 1655,
    morte: 1695,
    local: "Serra da Barriga, Alagoas",
    categorias: ["Resistência"],
    resumoCard: "Líder do Quilombo dos Palmares, símbolo máximo da resistência negra.",
    resumo:
      "Zumbi liderou o Quilombo dos Palmares, a maior comunidade de africanos e afrodescendentes livres das Américas. Sua recusa em aceitar a escravidão transformou o 20 de novembro no Dia Nacional da Consciência Negra.",
    foto: "pessoas/zumbi-dos-palmares.jpg",
    fotoAlt: "Pintura de Zumbi dos Palmares",
    fotoCredito: "Pintura de Antônio Parreiras · Domínio público · via Wikimedia Commons",
    secoes: [
      { titulo: "Quem foi", texto: "Nascido na Serra da Barriga por volta de 1655, Zumbi foi capturado ainda criança e entregue a um padre, que o batizou como Francisco. Aos 15 anos voltou para o quilombo e, anos depois, assumiu a liderança de Palmares." },
      { titulo: "Por que importa hoje", texto: "Zumbi morreu em 20 de novembro de 1695, mas a data virou o Dia Nacional da Consciência Negra. Sua história é usada até hoje para falar de liberdade, organização comunitária e resistência ao racismo." }
    ],
    galeria: [],
    video: null,
    fontes: [
      { titulo: "Zumbi dos Palmares", veiculo: "Fundação Cultural Palmares", url: "https://www.gov.br/palmares/pt-br", acesso: "2026-11-10" },
      { titulo: "Zumbi dos Palmares", veiculo: "Enciclopédia Itaú Cultural", url: "https://enciclopedia.itaucultural.org.br/", acesso: "2026-11-10" }
    ],
    aluno: { nomes: "Kauê", turma: "3º B" },
    tempoLeitura: 2
  },

  {
    slug: "dandara",
    fotoPos: "50% 50%",
    nome: "Dandara",
    nascimento: null,
    morte: 1694,
    local: "Quilombo dos Palmares",
    categorias: ["Resistência"],
    resumoCard: "Guerreira quilombola, lutou ao lado de Zumbi pela liberdade de Palmares.",
    resumo:
      "Dandara é lembrada pela tradição oral como uma das principais lideranças de Palmares. Especialista em capoeira e estratégia de combate, participou da defesa do quilombo até sua morte.",
    foto: "pessoas/dandara.jpg",
    fotoAlt: "Representação artística de Dandara dos Palmares",
    fotoCredito: "Ilustração de EPTrilhas · CC BY 4.0 · via Wikimedia Commons",
    secoes: [
      { titulo: "Quem foi", texto: "Não existem registros escritos sobre o nascimento de Dandara. Sua história chegou até nós pela tradição oral dos quilombolas, que a descrevem como companheira de Zumbi e líder militar de Palmares." },
      { titulo: "Por que importa hoje", texto: "Dandara é hoje um símbolo da mulher negra na luta por liberdade. Seu nome batiza ruas, escolas e coletivos, e ela aparece ao lado de Zumbi como referência de resistência feminina." }
    ],
    galeria: [],
    video: null,
    fontes: [
      { titulo: "Dandara dos Palmares", veiculo: "Fundação Cultural Palmares", url: "https://www.gov.br/palmares/pt-br", acesso: "2026-11-10" },
      { titulo: "Dandara", veiculo: "Geledés", url: "https://www.geledes.org.br/", acesso: "2026-11-10" }
    ],
    aluno: { nomes: "Vitória", turma: "3º B" },
    tempoLeitura: 2
  },

  {
    slug: "luis-gama",
    fotoPos: "50% 20%",
    nome: "Luís Gama",
    nascimento: 1830,
    morte: 1882,
    local: "Salvador, Bahia",
    categorias: ["Abolicionismo", "Direito", "Literatura"],
    resumoCard: "Advogado autodidata que libertou centenas de pessoas escravizadas.",
    resumo:
      "Vendido como escravizado pelo próprio pai aos 10 anos, Luís Gama conquistou a própria liberdade, estudou sozinho e usou o direito para libertar centenas de pessoas. Foi um dos maiores abolicionistas do Brasil.",
    foto: "pessoas/luis-gama.jpg",
    fotoAlt: "Retrato de Luís Gama",
    fotoCredito: "Autor desconhecido · Domínio público · via Wikimedia Commons",
    secoes: [
      { titulo: "Quem foi", texto: "Nascido em Salvador em 1830, Luís Gonzaga Pinto da Gama foi vendido pelo pai como escravizado ainda criança. Alfabetizou-se já adulto, tornou-se advogado autodidata e dedicou a vida a libertar pessoas escravizadas por meio de processos judiciais." },
      { titulo: "Por que importa hoje", texto: "Gama mostrou que o direito pode ser ferramenta de libertação. É patrono de uma cadeira na Academia Paulista de Letras e nome de avenidas, escolas e coletivos jurídicos antirracistas." }
    ],
    galeria: [],
    video: null,
    fontes: [
      { titulo: "Luís Gama", veiculo: "Enciclopédia Itaú Cultural", url: "https://enciclopedia.itaucultural.org.br/", acesso: "2026-11-10" },
      { titulo: "Luís Gama", veiculo: "Geledés", url: "https://www.geledes.org.br/", acesso: "2026-11-10" }
    ],
    aluno: { nomes: "Kaylane", turma: "3º B" },
    tempoLeitura: 3
  },

  {
    slug: "carolina-maria-de-jesus",
    fotoPos: "55% 40%",
    nome: "Carolina Maria de Jesus",
    nascimento: 1914,
    morte: 1977,
    local: "Sacramento, Minas Gerais",
    categorias: ["Literatura"],
    resumoCard: "Catadora de papel que escreveu o diário mais famoso da favela brasileira.",
    resumo:
      "Moradora da favela do Canindé, em São Paulo, Carolina escrevia em cadernos encontrados no lixo. Seu livro Quarto de Despejo (1960) virou fenômeno mundial e denunciou a fome e o racismo estrutural.",
    foto: "pessoas/carolina-maria-de-jesus.jpg",
    fotoAlt: "Retrato de Carolina Maria de Jesus",
    fotoCredito: "Autor desconhecido · Domínio público · via Wikimedia Commons",
    secoes: [
      { titulo: "Quem foi", texto: "Carolina Maria de Jesus nasceu em Minas Gerais em 1914 e foi para São Paulo na juventude. Trabalhava como catadora de papel e registrava o cotidiano da favela em diários. Quarto de Despejo foi traduzido para dezenas de idiomas." },
      { titulo: "Por que importa hoje", texto: "Carolina inaugurou uma literatura feita por quem vive a pobreza, sem intermediários. Hoje ela é referência para a literatura marginal e para o debate sobre quem tem direito a narrar a própria vida." }
    ],
    galeria: [],
    video: null,
    fontes: [
      { titulo: "Carolina Maria de Jesus", veiculo: "Enciclopédia Itaú Cultural", url: "https://enciclopedia.itaucultural.org.br/", acesso: "2026-11-10" },
      { titulo: "Carolina Maria de Jesus", veiculo: "Geledés", url: "https://www.geledes.org.br/", acesso: "2026-11-10" }
    ],
    aluno: { nomes: "Fellype", turma: "3º B" },
    tempoLeitura: 3
  },

  {
    slug: "abdias-do-nascimento",
    fotoPos: "50% 30%",
    nome: "Abdias do Nascimento",
    nascimento: 1914,
    morte: 2011,
    local: "Franca, São Paulo",
    categorias: ["Ativismo", "Artes", "Política"],
    resumoCard: "Criou o Teatro Experimental do Negro e formulou o quilombismo.",
    resumo:
      "Abdias do Nascimento foi ator, poeta, professor e político. Em 1944 fundou o Teatro Experimental do Negro, colocando pessoas negras no palco, e depois formulou o conceito de quilombismo.",
    foto: "pessoas/abdias-do-nascimento.jpg",
    fotoAlt: "Retrato de Abdias do Nascimento",
    fotoCredito: "Ricardo Stuckert/PR · CC BY 3.0 BR · via Wikimedia Commons",
    secoes: [
      { titulo: "Quem foi", texto: "Nascido em Franca em 1914, Abdias foi dramaturgo, pintor e ativista. O Teatro Experimental do Negro (1944) formava atores negros e encenava peças sobre a experiência afro-brasileira, algo inédito no país." },
      { titulo: "Por que importa hoje", texto: "Abdias foi deputado federal e senador, levando o debate racial para o Estado. Sua obra sobre quilombismo inspira até hoje movimentos negros e políticas de reparação." }
    ],
    galeria: [],
    video: null,
    fontes: [
      { titulo: "Abdias do Nascimento", veiculo: "Enciclopédia Itaú Cultural", url: "https://enciclopedia.itaucultural.org.br/", acesso: "2026-11-10" },
      { titulo: "Abdias do Nascimento", veiculo: "Fundação Cultural Palmares", url: "https://www.gov.br/palmares/pt-br", acesso: "2026-11-10" }
    ],
    aluno: { nomes: "Luiz Felipe", turma: "3º B" },
    tempoLeitura: 3
  },

  {
    slug: "lelia-gonzalez",
    fotoPos: "41% 40%",
    nome: "Lélia Gonzalez",
    nascimento: 1935,
    morte: 1994,
    local: "Belo Horizonte, Minas Gerais",
    categorias: ["Ativismo", "Ciência"],
    resumoCard: "Filósofa e antropóloga que cunhou o conceito de amefricanidade.",
    resumo:
      "Lélia Gonzalez foi uma das maiores intelectuais negras do Brasil. Co-fundadora do Movimento Negro Unificado, pensou a relação entre racismo, gênero e classe e criou o conceito de amefricanidade.",
    foto: "pessoas/lelia-gonzalez.jpg",
    fotoAlt: "Retrato de Lélia Gonzalez",
    fotoCredito: "Cezar Loureiro · Domínio público · via Wikimedia Commons",
    secoes: [
      { titulo: "Quem foi", texto: "Professora e antropóloga, Lélia Gonzalez ajudou a fundar o Movimento Negro Unificado em 1978. Escreveu sobre o lugar da mulher negra na sociedade brasileira e sobre como o racismo se articula com o sexismo." },
      { titulo: "Por que importa hoje", texto: "Conceitos como amefricanidade e o debate sobre interseccionalidade no Brasil têm base no pensamento de Lélia. Ela é leitura obrigatória em cursos de ciências sociais." }
    ],
    galeria: [],
    video: null,
    fontes: [
      { titulo: "Lélia Gonzalez", veiculo: "Geledés", url: "https://www.geledes.org.br/", acesso: "2026-11-10" },
      { titulo: "Lélia Gonzalez", veiculo: "Enciclopédia Itaú Cultural", url: "https://enciclopedia.itaucultural.org.br/", acesso: "2026-11-10" }
    ],
    aluno: { nomes: "Nick F.", turma: "3º B" },
    tempoLeitura: 3
  },

  {
    slug: "djamila-ribeiro",
    fotoPos: "50% 45%",
    nome: "Djamila Ribeiro",
    nascimento: 1980,
    morte: null,
    local: "Santos, São Paulo",
    categorias: ["Ativismo", "Literatura", "Ciência"],
    resumoCard: "Filósofa que popularizou o conceito de lugar de fala no Brasil.",
    resumo:
      "Djamila Ribeiro é filósofa, escritora e ativista. Com o livro O que é lugar de fala? (2017), levou um debate acadêmico para milhões de leitores e se tornou uma das principais vozes antirracistas do país.",
    foto: "pessoas/djamila-ribeiro.jpg",
    fotoAlt: "Retrato de Djamila Ribeiro",
    fotoCredito: "Agência PT · CC BY 3.0 · via Wikimedia Commons",
    secoes: [
      { titulo: "Quem foi", texto: "Nascida em Santos em 1980, Djamila é mestre em filosofia política e foi secretária municipal de Direitos Humanos de São Paulo. Escreveu O que é lugar de fala?, Pequeno manual antirracista e outros livros." },
      { titulo: "Por que importa hoje", texto: "Sua escrita acessível aproximou a filosofia da vida cotidiana e deu vocabulário para jovens negros entenderem e nomearem o racismo no dia a dia." }
    ],
    galeria: [],
    video: null,
    fontes: [
      { titulo: "Djamila Ribeiro", veiculo: "Companhia das Letras", url: "https://www.companhiadasletras.com.br/", acesso: "2026-11-10" },
      { titulo: "Djamila Ribeiro", veiculo: "Geledés", url: "https://www.geledes.org.br/", acesso: "2026-11-10" }
    ],
    aluno: { nomes: "Isaac", turma: "3º B" },
    tempoLeitura: 2
  },

  {
    slug: "conceicao-evaristo",
    fotoPos: "50% 20%",
    nome: "Conceição Evaristo",
    nascimento: 1946,
    morte: null,
    local: "Belo Horizonte, Minas Gerais",
    categorias: ["Literatura"],
    resumoCard: "Criou o conceito de escrevivência e é voz central da literatura negra.",
    resumo:
      "Conceição Evaristo é poeta e romancista. Autora de Ponciá Vicêncio e Olhos d'Água, criou o conceito de escrevivência: escrever a partir da própria experiência de mulher negra.",
    foto: "pessoas/conceicao-evaristo.jpg",
    fotoAlt: "Retrato de Conceição Evaristo",
    fotoCredito: "Lula Oficial · CC BY-SA 2.0 · via Wikimedia Commons",
    secoes: [
      { titulo: "Quem foi", texto: "Nascida em Belo Horizonte em 1946, Conceição trabalhou como empregada doméstica antes de se formar em Letras. É autora de romances, contos e poemas traduzidos para vários países." },
      { titulo: "Por que importa hoje", texto: "A escrevivência virou chave de leitura para pensar literatura e racismo. Conceição mostra que a experiência de vida é conhecimento, não apenas inspiração." }
    ],
    galeria: [],
    video: null,
    fontes: [
      { titulo: "Conceição Evaristo", veiculo: "Enciclopédia Itaú Cultural", url: "https://enciclopedia.itaucultural.org.br/", acesso: "2026-11-10" },
      { titulo: "Conceição Evaristo", veiculo: "Geledés", url: "https://www.geledes.org.br/", acesso: "2026-11-10" }
    ],
    aluno: { nomes: "Caetana", turma: "3º B" },
    tempoLeitura: 2,
    semHeroFoto: true
  },

  {
    slug: "pixinguinha",
    fotoPos: "50% 25%",
    nome: "Pixinguinha",
    nascimento: 1897,
    morte: 1973,
    local: "Rio de Janeiro",
    categorias: ["Música"],
    resumoCard: "Mestre do choro, compôs Carinhoso e modernizou a música brasileira.",
    resumo:
      "Alfredo da Rocha Vianna Filho, o Pixinguinha, levou o choro para o mundo. Compositor de Carinhoso e Um a Zero, é um dos fundadores da música popular brasileira moderna.",
    foto: "pessoas/pixinguinha.jpg",
    fotoAlt: "Retrato de Pixinguinha",
    fotoCredito: "Autor desconhecido · Domínio público · via Wikimedia Commons",
    secoes: [
      { titulo: "Quem foi", texto: "Pixinguinha nasceu no Rio de Janeiro em 1897 e cresceu em uma família de músicos. Com o grupo Oito Batutas viajou para a Europa e gravou clássicos que até hoje definem o choro." },
      { titulo: "Por que importa hoje", texto: "Sua obra é base do repertório instrumental brasileiro. Pixinguinha mostrou que a música negra e popular podia ser erudita, sofisticada e universal." }
    ],
    galeria: [],
    video: null,
    fontes: [
      { titulo: "Pixinguinha", veiculo: "Enciclopédia Itaú Cultural", url: "https://enciclopedia.itaucultural.org.br/", acesso: "2026-11-10" },
      { titulo: "Pixinguinha", veiculo: "Fundação Cultural Palmares", url: "https://www.gov.br/palmares/pt-br", acesso: "2026-11-10" }
    ],
    aluno: { nomes: "Nicolas", turma: "3º B" },
    tempoLeitura: 2
  },

  {
    slug: "elza-soares",
    fotoPos: "50% 35%",
    nome: "Elza Soares",
    nascimento: 1930,
    morte: 2022,
    local: "Rio de Janeiro",
    categorias: ["Música"],
    resumoCard: "A voz que transformou o samba em denúncia e reinvenção.",
    resumo:
      "Elza Soares cantou por sete décadas e nunca se acomodou. De A Mulher do Fim do Mundo (2015) a clássicos do samba, usou a voz para falar de racismo, violência e resistência.",
    foto: "pessoas/elza-soares.jpg",
    fotoAlt: "Retrato de Elza Soares",
    fotoCredito: "Autor desconhecido · Domínio público · via Wikimedia Commons",
    secoes: [
      { titulo: "Quem foi", texto: "Nascida no Rio em 1930, Elza veio de família pobre e começou a cantar ainda jovem. Construiu uma carreira marcada por reinvenções e por letras que confrontavam o machismo e o racismo." },
      { titulo: "Por que importa hoje", texto: "Elza é referência de artista que não separa arte de posicionamento. Seu álbum de 2015 é considerado um marco da música brasileira contemporânea." }
    ],
    galeria: [],
    video: null,
    fontes: [
      { titulo: "Elza Soares", veiculo: "Enciclopédia Itaú Cultural", url: "https://enciclopedia.itaucultural.org.br/", acesso: "2026-11-10" },
      { titulo: "Elza Soares", veiculo: "Geledés", url: "https://www.geledes.org.br/", acesso: "2026-11-10" }
    ],
    aluno: { nomes: "Victhor Arthur", turma: "3º B" },
    tempoLeitura: 2
  },

  {
    slug: "emicida",
    fotoPos: "50% 35%",
    nome: "Emicida",
    nascimento: 1985,
    morte: null,
    local: "São Paulo",
    categorias: ["Música"],
    resumoCard: "Rapper que uniu rap, samba e memória negra em AmarElo.",
    resumo:
      "Leandro Roque de Oliveira, o Emicida, cresceu na zona norte de São Paulo e se tornou um dos maiores nomes do rap nacional. AmarElo (2019) virou filme e show histórico no Theatro Municipal.",
    foto: "pessoas/emicida.jpg",
    fotoAlt: "Retrato de Emicida",
    fotoCredito: "Bruno Figueiredo / Área de Serviço · CC BY-SA 2.0 · via Wikimedia Commons",
    secoes: [
      { titulo: "Quem foi", texto: "Emicida começou nas batalhas de rap da periferia paulistana e fundou o selo Laboratório Fantasma. Suas letras misturam denúncia social, cultura negra e referências à música brasileira." },
      { titulo: "Por que importa hoje", texto: "Ele mostrou que o rap pode ocupar teatro, cinema e escola. AmarElo discutiu racismo e memória para milhões de pessoas." }
    ],
    galeria: [],
    video: null,
    fontes: [
      { titulo: "Emicida", veiculo: "Laboratório Fantasma", url: "https://www.laboratoriofantasma.com/", acesso: "2026-11-10" },
      { titulo: "Emicida", veiculo: "Enciclopédia Itaú Cultural", url: "https://enciclopedia.itaucultural.org.br/", acesso: "2026-11-10" }
    ],
    aluno: { nomes: "Rayane Teixeira", turma: "3º B" },
    tempoLeitura: 2
  },

  {
    slug: "milton-santos",
    fotoPos: "50% 35%",
    nome: "Milton Santos",
    nascimento: 1926,
    morte: 2001,
    local: "Brotas de Macaúbas, Bahia",
    categorias: ["Ciência"],
    resumoCard: "Geógrafo brasileiro premiado no mundo por pensar o espaço e a desigualdade.",
    resumo:
      "Milton Santos foi um dos maiores geógrafos do mundo. Negro, nordestino e perseguido na ditadura, criou conceitos que explicam como o espaço urbano produz desigualdade.",
    foto: "pessoas/milton-santos.jpg",
    fotoAlt: "Retrato de Milton Santos",
    fotoCredito: "TV Brasil · CC BY 3.0 BR · via Wikimedia Commons",
    secoes: [
      { titulo: "Quem foi", texto: "Nascido na Bahia em 1926, Milton Santos lecionou em universidades do Brasil e do exterior. Foi preso durante a ditadura militar e viveu exilado por anos." },
      { titulo: "Por que importa hoje", texto: "Recebeu o Prêmio Vautrin Lud, considerado o Nobel da geografia. Suas ideias ajudam a entender periferias, mobilidade e desigualdade nas cidades." }
    ],
    galeria: [],
    video: null,
    fontes: [
      { titulo: "Milton Santos", veiculo: "Enciclopédia Itaú Cultural", url: "https://enciclopedia.itaucultural.org.br/", acesso: "2026-11-10" },
      { titulo: "Milton Santos", veiculo: "Geledés", url: "https://www.geledes.org.br/", acesso: "2026-11-10" }
    ],
    aluno: { nomes: "", turma: "3º B" },
    tempoLeitura: 3
  },

  {
    slug: "marielle-franco",
    fotoPos: "50% 20%",
    nome: "Marielle Franco",
    nascimento: 1979,
    morte: 2018,
    local: "Rio de Janeiro",
    categorias: ["Política", "Ativismo"],
    resumoCard: "Vereadora do Rio que denunciou a violência policial e foi assassinada em 2018.",
    resumo:
      "Socióloga e vereadora, Marielle Franco defendia direitos humanos, feminismo e a população negra e favelada. Seu assassinato em março de 2018 virou símbolo mundial de luta por justiça.",
    foto: "pessoas/marielle-franco.jpg",
    fotoAlt: "Retrato de Marielle Franco",
    fotoCredito: "Mídia Ninja · CC BY-SA 2.0 · via Wikimedia Commons",
    secoes: [
      { titulo: "Quem foi", texto: "Criada na Maré, Marielle se formou em sociologia e foi eleita vereadora no Rio em 2016. Presidiu a Comissão de Defesa dos Direitos da Mulher e denunciava abusos policiais." },
      { titulo: "Por que importa hoje", texto: "Sua morte em 14 de março de 2018 gerou protestos no mundo inteiro. Marielle se tornou símbolo da luta contra a violência de Estado e o racismo." }
    ],
    galeria: [],
    video: null,
    fontes: [
      { titulo: "Marielle Franco", veiculo: "Geledés", url: "https://www.geledes.org.br/", acesso: "2026-11-10" },
      { titulo: "Marielle Franco", veiculo: "Fundação Cultural Palmares", url: "https://www.gov.br/palmares/pt-br", acesso: "2026-11-10" }
    ],
    aluno: { nomes: "Eduardo", turma: "3º B" },
    tempoLeitura: 3
  },

  {
    slug: "pele",
    fotoPos: "30% 28%",
    nome: "Pelé",
    nascimento: 1940,
    morte: 2022,
    local: "Três Corações, Minas Gerais",
    categorias: ["Esporte"],
    resumoCard: "O maior jogador de futebol de todos os tempos e ícone negro do Brasil.",
    resumo:
      "Edson Arantes do Nascimento venceu três Copas do Mundo e se tornou o atleta mais conhecido do planeta. Sua trajetória também expôs o racismo que atravessa o esporte brasileiro.",
    foto: "pessoas/pele.jpg",
    fotoAlt: "Retrato de Pelé",
    fotoCredito: "Autor desconhecido · Domínio público · via Wikimedia Commons",
    secoes: [
      { titulo: "Quem foi", texto: "Nascido em Três Corações em 1940, Pelé estreou no Santos e na Seleção ainda adolescente. Marcou mais de mil gols e conquistou as Copas de 1958, 1962 e 1970." },
      { titulo: "Por que importa hoje", texto: "Pelé levou o Brasil ao mundo, mas também sofreu racismo dentro e fora de campo. Sua história mostra que o talento negro sempre teve que provar o dobro." }
    ],
    galeria: [],
    video: null,
    fontes: [
      { titulo: "Pelé", veiculo: "Museu do Futebol", url: "https://museudofutebol.org.br/", acesso: "2026-11-10" },
      { titulo: "Pelé", veiculo: "Comitê Olímpico do Brasil", url: "https://www.cob.org.br/", acesso: "2026-11-10" }
    ],
    aluno: { nomes: "Gustavo", turma: "3º B" },
    tempoLeitura: 2
  },

  {
    slug: "machado-de-assis",
    fotoPos: "50% 30%",
    nome: "Machado de Assis",
    nascimento: 1839,
    morte: 1908,
    local: "Rio de Janeiro",
    categorias: ["Literatura"],
    resumoCard: "Fundador da Academia Brasileira de Letras e maior escritor do país.",
    resumo:
      "Joaquim Maria Machado de Assis, neto de pessoas escravizadas, escreveu Dom Casmurro e Memórias Póstumas de Brás Cubas. É o escritor mais importante da literatura brasileira.",
    foto: "pessoas/machado-de-assis.jpg",
    fotoAlt: "Retrato de Machado de Assis",
    fotoCredito: "Marc Ferrez / Adam Cuerden · Domínio público · via Wikimedia Commons",
    secoes: [
      { titulo: "Quem foi", texto: "Nascido no Rio em 1839, Machado teve origem humilde e pouca educação formal. Tornou-se funcionário público, cronista e romancista, e foi o primeiro presidente da Academia Brasileira de Letras." },
      { titulo: "Por que importa hoje", texto: "Sua obra é estudada no mundo inteiro. Discutir a negritude de Machado é reconhecer a contribuição negra para a cultura brasileira, muitas vezes apagada." }
    ],
    galeria: [],
    video: null,
    fontes: [
      { titulo: "Machado de Assis", veiculo: "Academia Brasileira de Letras", url: "https://www.academia.org.br/", acesso: "2026-11-10" },
      { titulo: "Machado de Assis", veiculo: "Enciclopédia Itaú Cultural", url: "https://enciclopedia.itaucultural.org.br/", acesso: "2026-11-10" }
    ],
    aluno: { nomes: "Rayane", turma: "3º B" },
    tempoLeitura: 3
  },

  {
    slug: "mae-menininha-do-gantois",
    fotoPos: "8% 37%",
    nome: "Mãe Menininha do Gantois",
    nascimento: 1894,
    morte: 1986,
    local: "Salvador, Bahia",
    categorias: ["Religião"],
    resumoCard: "Ialorixá respeitada que defendeu o Candomblé e a liberdade religiosa.",
    resumo:
      "Mãe Menininha do Gantois foi uma das maiores autoridades do Candomblé brasileiro. Sob sua liderança, o terreiro do Gantois se tornou referência nacional de resistência religiosa negra.",
    foto: "pessoas/mae-menininha-do-gantois.jpg",
    fotoAlt: "Retrato de Mãe Menininha do Gantois",
    fotoCredito: "Autor desconhecido · Domínio público · via Wikimedia Commons",
    secoes: [
      { titulo: "Quem foi", texto: "Escolhida ialorixá ainda jovem, Menininha liderou o Ilê Axé Iyá Nassô Oká, o Gantois, em Salvador, por mais de 50 anos. Era procurada por artistas, intelectuais e políticos." },
      { titulo: "Por que importa hoje", texto: "Ela enfrentou a perseguição às religiões de matriz africana e ajudou a torná-las patrimônio cultural. Sua trajetória é central para entender a liberdade religiosa no Brasil." }
    ],
    galeria: [],
    video: null,
    fontes: [
      { titulo: "Mãe Menininha do Gantois", veiculo: "Fundação Cultural Palmares", url: "https://www.gov.br/palmares/pt-br", acesso: "2026-11-10" },
      { titulo: "Mãe Menininha do Gantois", veiculo: "Geledés", url: "https://www.geledes.org.br/", acesso: "2026-11-10" }
    ],
    aluno: { nomes: "Cadu", turma: "3º B" },
    tempoLeitura: 2
  },

  {
    slug: "daiane-dos-santos",
    fotoPos: "50% 30%",
    nome: "Daiane dos Santos",
    nascimento: 1983,
    morte: null,
    local: "Porto Alegre, Rio Grande do Sul",
    categorias: ["Esporte"],
    resumoCard: "Primeira ginasta brasileira campeã mundial, criadora do salto Dos Santos.",
    resumo:
      "Daiane dos Santos foi a primeira brasileira a conquistar um ouro em Campeonato Mundial de Ginástica Artística (2003). Seu salto no solo entrou para o código oficial da modalidade.",
    foto: "pessoas/daiane-dos-santos.jpg",
    fotoAlt: "Retrato de Daiane dos Santos",
    fotoCredito: "Ricardo Stuckert/PR · CC BY 3.0 BR · via Wikimedia Commons",
    secoes: [
      { titulo: "Quem foi", texto: "Nascida em Porto Alegre em 1983, Daiane começou na ginástica ainda criança. Em 2003 se tornou campeã mundial no solo, feito inédito para o Brasil." },
      { titulo: "Por que importa hoje", texto: "O movimento Dos Santos é reconhecido internacionalmente. Daiane abriu caminho para atletas negras na ginástica, esporte historicamente branco no Brasil." }
    ],
    galeria: [],
    video: null,
    fontes: [
      { titulo: "Daiane dos Santos", veiculo: "Comitê Olímpico do Brasil", url: "https://www.cob.org.br/", acesso: "2026-11-10" },
      { titulo: "Daiane dos Santos", veiculo: "Enciclopédia Itaú Cultural", url: "https://enciclopedia.itaucultural.org.br/", acesso: "2026-11-10" }
    ],
    aluno: { nomes: "João Pedro", turma: "3º B" },
    tempoLeitura: 2
  },

  {
    slug: "kabengele-munanga",
    fotoPos: "48% 25%",
    nome: "Kabengele Munanga",
    nascimento: 1942,
    morte: null,
    local: "República Democrática do Congo / Brasil",
    categorias: ["Ciência", "Ativismo"],
    resumoCard: "Antropólogo que ajudou a desmontar o mito da democracia racial brasileira.",
    resumo:
      "Nascido no Congo e radicado no Brasil, Kabengele Munanga é um dos maiores estudiosos de racismo e identidade negra. Sua obra desmonta a ideia de que o Brasil seria uma democracia racial.",
    foto: "pessoas/kabengele-munanga.jpg",
    fotoAlt: "Kabengele Munanga jovem, de terno e óculos, sentado a uma mesa",
    fotoCredito: "Foto do acervo do Museu da Pessoa · CC BY-SA 4.0 · via Wikimedia Commons",
    secoes: [
      { titulo: "Quem foi", texto: "Munanga chegou ao Brasil na década de 1970 e se tornou professor da USP. Pesquisa a construção da identidade negra e a ideologia do branqueamento na sociedade brasileira." },
      { titulo: "Por que importa hoje", texto: "Suas ideias sustentam o debate sobre cotas, racismo estrutural e políticas de reparação. Ele mostra que o racismo brasileiro é estrutural, não individual." }
    ],
    galeria: [],
    video: null,
    fontes: [
      { titulo: "Kabengele Munanga", veiculo: "Enciclopédia Itaú Cultural", url: "https://enciclopedia.itaucultural.org.br/", acesso: "2026-11-10" },
      { titulo: "Kabengele Munanga", veiculo: "Fundação Cultural Palmares", url: "https://www.gov.br/palmares/pt-br", acesso: "2026-11-10" }
    ],
    aluno: { nomes: "Ana", turma: "3º B" },
    tempoLeitura: 3
  },

  /* ============================================================
     AS 22 NOVAS HISTÓRIAS
     ============================================================ */

  {
    slug: "tereza-de-benguela",
    fotoPos: "73% 27%",
    nome: "Tereza de Benguela",
    nascimento: 1700,
    morte: 1770,
    local: "Quilombo do Quariterê, Mato Grosso",
    categorias: ["Resistência"],
    resumoCard: "Rainha do Quilombo do Quariterê, liderou a resistência no Mato Grosso por décadas.",
    resumo:
      "Tereza de Benguela chefiou o Quilombo do Quariterê, no atual Mato Grosso, após a morte do companheiro José Piolho. Sob sua liderança, o quilombo organizou plantio, metalurgia e defesa, resistindo a ataques por mais de vinte anos.",
    foto: "pessoas/tereza-de-benguela.jpg",
    fotoAlt: "Representação artística de Tereza de Benguela",
    fotoCredito: "Ilustração de João Netto CW · CC0 · via Wikimedia Commons",
    secoes: [
      { titulo: "Quem foi", texto: "Tereza de Benguela viveu no século XVIII e se tornou líder do Quilombo do Quariterê, também conhecido como Quilombo do Piolho, na região do rio Guaporé. Segundo relatos coloniais, ela governava com um conselho e coordenava a produção agrícola e a defesa do território." },
      { titulo: "Por que importa hoje", texto: "Tereza é lembrada como símbolo da liderança feminina negra e da resistência quilombola no Centro-Oeste. O dia 25 de julho é o Dia Nacional de Tereza de Benguela e da Mulher Negra." }
    ],
    galeria: [],
    video: null,
    fontes: [
      { titulo: "Tereza de Benguela", veiculo: "Fundação Cultural Palmares", url: "https://www.gov.br/palmares/pt-br", acesso: "2026-11-10" },
      { titulo: "Tereza de Benguela", veiculo: "Geledés", url: "https://www.geledes.org.br/", acesso: "2026-11-10" }
    ],
    aluno: { nomes: "", turma: "3º B" },
    tempoLeitura: 3
  },

  {
    slug: "joao-candido",
    fotoPos: "50% 20%",
    nome: "João Cândido",
    nascimento: 1880,
    morte: 1969,
    local: "Encruzilhada do Sul, Rio Grande do Sul",
    categorias: ["Resistência"],
    resumoCard: "O Almirante Negro liderou a Revolta da Chibata contra os castigos físicos na Marinha.",
    resumo:
      "João Cândido Felisberto comandou, em 1910, a Revolta da Chibata, mobilização de marinheiros contra os castigos corporais impostos pela Marinha brasileira. Conhecido como Almirante Negro, virou símbolo da luta por dignidade e direitos.",
    foto: "pessoas/joao-candido.jpg",
    fotoAlt: "Retrato de João Cândido",
    fotoCredito: "Autor desconhecido · Domínio público · via Wikimedia Commons",
    secoes: [
      { titulo: "Quem foi", texto: "Nascido em Encruzilhada do Sul, no Rio Grande do Sul, em 1880, João Cândido ingressou na Marinha ainda adolescente. Em novembro de 1910 liderou a revolta dos marinheiros no Rio de Janeiro, que exigiam o fim das chibatadas e melhores condições." },
      { titulo: "Por que importa hoje", texto: "A revolta levou ao fim dos castigos físicos na Marinha, mas João Cândido e outros líderes foram perseguidos e presos. Ele segue como referência na luta contra a violência de Estado e o racismo institucional." }
    ],
    galeria: [],
    video: null,
    fontes: [
      { titulo: "João Cândido", veiculo: "Fundação Cultural Palmares", url: "https://www.gov.br/palmares/pt-br", acesso: "2026-11-10" },
      { titulo: "João Cândido", veiculo: "Geledés", url: "https://www.geledes.org.br/", acesso: "2026-11-10" }
    ],
    aluno: { nomes: "Anj", turma: "3º B" },
    tempoLeitura: 3
  },

  {
    slug: "esperanca-garcia",
    fotoPos: "50% 35%",
    nome: "Esperança Garcia",
    nascimento: 1751,
    morte: null,
    local: "Fazenda Algodões, Piauí",
    categorias: ["Resistência", "Direito"],
    resumoCard: "Primeira advogada do Piauí, escreveu em 1770 uma carta denunciando maus-tratos.",
    resumo:
      "Esperança Garcia, mulher negra escravizada no Piauí, escreveu em 1770 uma carta ao governador denunciando os maus-tratos que sofria. O documento é considerado uma das primeiras petições de direitos feitas por uma mulher negra no Brasil.",
    foto: "pessoas/esperanca-garcia.jpg",
    fotoAlt: "Escultura de Esperança Garcia na Praça Mestre Dezinho",
    fotoCredito: "Foto de Moacir Ximenes · CC BY 3.0 BR · via Wikimedia Commons",
    secoes: [
      { titulo: "Quem foi", texto: "Esperança Garcia viveu na Fazenda Algodões, no Piauí, e foi separada do marido e dos filhos. Em 6 de setembro de 1770 escreveu ao governador da capitania pedindo proteção e denunciando os castigos impostos pelo administrador da fazenda." },
      { titulo: "Por que importa hoje", texto: "A carta é reconhecida como um marco da luta por direitos no Brasil e deu a Esperança Garcia o título de primeira advogada do Piauí. Seu documento é usado até hoje para discutir cidadania e memória da escravidão." }
    ],
    galeria: [
      {
        src: "secoes/esperanca-garcia-carta-1770.jpg",
        alt: "Carta escrita por Esperança Garcia em 1770",
        credito: "Carta de Esperança Garcia, 1770 — Esperança Garcia · Domínio público · via Wikimedia Commons"
      }
    ],
    video: null,
    fontes: [
      { titulo: "Esperança Garcia", veiculo: "Fundação Cultural Palmares", url: "https://www.gov.br/palmares/pt-br", acesso: "2026-11-10" },
      { titulo: "Esperança Garcia", veiculo: "Geledés", url: "https://www.geledes.org.br/", acesso: "2026-11-10" }
    ],
    aluno: { nomes: "Luiza", turma: "3º B" },
    tempoLeitura: 3
  },

  {
    slug: "andre-reboucas",
    fotoPos: "50% 35%",
    nome: "André Rebouças",
    nascimento: 1838,
    morte: 1898,
    local: "Cachoeira, Bahia",
    categorias: ["Ciência", "Abolicionismo"],
    resumoCard: "Engenheiro e abolicionista, projetou ferrovias e lutou pela libertação dos escravizados.",
    resumo:
      "André Rebouças foi engenheiro, professor e um dos principais abolicionistas do Brasil. Negro e filho de família livre, participou da campanha abolicionista e pensou projetos de reforma agrária para a população negra.",
    foto: "pessoas/andre-reboucas.jpg",
    fotoAlt: "Retrato de André Rebouças",
    fotoCredito: "Rodolfo Bernardelli · Domínio público · via Wikimedia Commons",
    secoes: [
      { titulo: "Quem foi", texto: "Nascido em Cachoeira, na Bahia, em 1838, André Pinto Rebouças formou-se engenheiro e trabalhou em obras de infraestrutura, como ferrovias. Integrou a Sociedade Brasileira Contra a Escravidão e foi amigo próximo de Machado de Assis e José do Patrocínio." },
      { titulo: "Por que importa hoje", texto: "Além de defender o fim da escravidão, Rebouças propôs distribuição de terras para os libertos, tema central para pensar reparação e desigualdade no Brasil. Sua obra une técnica, ciência e compromisso social." }
    ],
    galeria: [],
    video: null,
    fontes: [
      { titulo: "André Rebouças", veiculo: "Enciclopédia Itaú Cultural", url: "https://enciclopedia.itaucultural.org.br/", acesso: "2026-11-10" },
      { titulo: "André Rebouças", veiculo: "Fundação Cultural Palmares", url: "https://www.gov.br/palmares/pt-br", acesso: "2026-11-10" }
    ],
    aluno: { nomes: "Carlos Mendes", turma: "3º B" },
    tempoLeitura: 3
  },

  {
    slug: "jose-do-patrocinio",
    fotoPos: "50% 30%",
    nome: "José do Patrocínio",
    nascimento: 1853,
    morte: 1905,
    local: "Campos dos Goytacazes, Rio de Janeiro",
    categorias: ["Abolicionismo", "Literatura"],
    resumoCard: "Jornalista e orador abolicionista, usou a imprensa para atacar a escravidão.",
    resumo:
      "José do Patrocínio foi jornalista, escritor e um dos líderes da campanha abolicionista no Rio de Janeiro. Dirigiu o jornal A Cidade do Rio e usou a palavra para pressionar o fim da escravidão.",
    foto: "pessoas/jose-do-patrocinio.jpg",
    fotoAlt: "Retrato de José do Patrocínio",
    fotoCredito: "Autor desconhecido · Domínio público · via Wikimedia Commons",
    secoes: [
      { titulo: "Quem foi", texto: "Filho de uma mulher negra escravizada e de um padre, José do Patrocínio nasceu em Campos dos Goytacazes em 1853. Formou-se farmacêutico, mas se tornou jornalista e orador famoso nas campanhas abolicionistas." },
      { titulo: "Por que importa hoje", texto: "Patrocínio mostrou o poder da imprensa na luta política e ajudou a transformar a abolição em causa nacional. Seu nome está entre os grandes nomes da literatura e do jornalismo brasileiros." }
    ],
    galeria: [],
    video: null,
    fontes: [
      { titulo: "José do Patrocínio", veiculo: "Enciclopédia Itaú Cultural", url: "https://enciclopedia.itaucultural.org.br/", acesso: "2026-11-10" },
      { titulo: "José do Patrocínio", veiculo: "Fundação Cultural Palmares", url: "https://www.gov.br/palmares/pt-br", acesso: "2026-11-10" }
    ],
    aluno: { nomes: "Ana Carolina", turma: "3º B" },
    tempoLeitura: 3
  },

  {
    slug: "silvio-almeida",
    fotoPos: "58% 30%",
    nome: "Silvio Almeida",
    nascimento: 1976,
    morte: null,
    local: "São Paulo",
    categorias: ["Direito", "Ativismo"],
    resumoCard: "Jurista e professor, formulou uma leitura estrutural do racismo brasileiro.",
    resumo:
      "Silvio Almeida é advogado, filósofo e professor, autor de Racismo Estrutural (2019). Foi ministro dos Direitos Humanos e da Cidadania e é uma das principais vozes no debate sobre racismo e desigualdade no Brasil.",
    foto: "pessoas/silvio-almeida.jpg",
    fotoAlt: "Retrato de Silvio Almeida",
    fotoCredito: "Palácio do Planalto · CC BY 2.0 · via Wikimedia Commons",
    secoes: [
      { titulo: "Quem foi", texto: "Nascido em São Paulo em 1976, Silvio Almeida é formado em Direito e filosofia, com doutorado em direito econômico. Lecionou em universidades e escreveu livros que aproximam o debate racial do direito e da economia." },
      { titulo: "Por que importa hoje", texto: "Sua obra ajudou a popularizar o conceito de racismo estrutural, mostrando que o problema não está só em atitudes individuais, mas nas instituições. É leitura frequente em cursos de direito, educação e políticas públicas." }
    ],
    galeria: [],
    video: null,
    fontes: [
      { titulo: "Silvio Almeida", veiculo: "Geledés", url: "https://www.geledes.org.br/", acesso: "2026-11-10" },
      { titulo: "Ministério dos Direitos Humanos e da Cidadania", veiculo: "Governo Federal", url: "https://www.gov.br/mdh/pt-br", acesso: "2026-11-10" }
    ],
    aluno: { nomes: "", turma: "3º B" },
    tempoLeitura: 3
  },

  {
    slug: "lima-barreto",
    fotoPos: "45% 35%",
    nome: "Lima Barreto",
    nascimento: 1881,
    morte: 1922,
    local: "Rio de Janeiro",
    categorias: ["Literatura"],
    resumoCard: "Escritor que retratou a vida dos pobres e negros no Rio de Janeiro do início do século XX.",
    resumo:
      "Afonso Henriques de Lima Barreto escreveu romances como Triste Fim de Policarpo Quaresma e Clara dos Anjos. Negro e pobre, fez da literatura uma crítica à desigualdade e ao preconceito da Primeira República.",
    foto: "pessoas/lima-barreto.jpg",
    fotoAlt: "Retrato de Lima Barreto",
    fotoCredito: "Autor desconhecido · Domínio público · via Wikimedia Commons",
    secoes: [
      { titulo: "Quem foi", texto: "Nascido no Rio de Janeiro em 1881, Lima Barreto era filho de um tipógrafo e de uma professora. Formou-se engenheiro, mas trabalhou como jornalista e funcionário público, enfrentando racismo e internações por problemas de saúde." },
      { titulo: "Por que importa hoje", texto: "Sua obra denunciou o racismo e a exclusão social muito antes de esses temas virarem pauta acadêmica. Lima Barreto é hoje um dos nomes centrais da literatura brasileira." }
    ],
    galeria: [],
    video: null,
    fontes: [
      { titulo: "Lima Barreto", veiculo: "Enciclopédia Itaú Cultural", url: "https://enciclopedia.itaucultural.org.br/", acesso: "2026-11-10" },
      { titulo: "Lima Barreto", veiculo: "Academia Brasileira de Letras", url: "https://www.academia.org.br/", acesso: "2026-11-10" }
    ],
    aluno: { nomes: "Samuel", turma: "3º B" },
    tempoLeitura: 3
  },

  {
    slug: "cruz-e-sousa",
    fotoPos: "35% 30%",
    nome: "Cruz e Sousa",
    nascimento: 1861,
    morte: 1898,
    local: "Desterro, Santa Catarina",
    categorias: ["Literatura"],
    resumoCard: "Poeta simbolista, chamado de Cisne Negro, enfrentou o racismo nos círculos literários.",
    resumo:
      "João da Cruz e Sousa foi o principal poeta do simbolismo no Brasil. Negro e filho de pessoas escravizadas, escreveu obras como Broquéis e Missal, marcadas por musicalidade e imagens intensas.",
    foto: "pessoas/cruz-e-sousa.jpg",
    fotoAlt: "Retrato de Cruz e Sousa",
    fotoCredito: "Autor desconhecido · Domínio público · via Wikimedia Commons",
    secoes: [
      { titulo: "Quem foi", texto: "Nascido em Desterro, atual Florianópolis, em 1861, Cruz e Sousa foi educado por protetores e se tornou professor e jornalista. Publicou Broquéis em 1893, obra que inaugurou o simbolismo brasileiro." },
      { titulo: "Por que importa hoje", texto: "O poeta enfrentou o racismo mesmo entre intelectuais abolicionistas e morreu pobre, aos 36 anos. Hoje é reconhecido como um dos maiores nomes da poesia brasileira e símbolo da presença negra na literatura." }
    ],
    galeria: [],
    video: null,
    fontes: [
      { titulo: "Cruz e Sousa", veiculo: "Enciclopédia Itaú Cultural", url: "https://enciclopedia.itaucultural.org.br/", acesso: "2026-11-10" },
      { titulo: "Cruz e Sousa", veiculo: "Academia Brasileira de Letras", url: "https://www.academia.org.br/", acesso: "2026-11-10" }
    ],
    aluno: { nomes: "Juan", turma: "3º B" },
    tempoLeitura: 3
  },

  {
    slug: "maria-firmina-dos-reis",
    fotoPos: "50% 30%",
    nome: "Maria Firmina dos Reis",
    nascimento: 1822,
    morte: 1917,
    local: "São Luís, Maranhão",
    categorias: ["Literatura", "Abolicionismo"],
    resumoCard: "Primeira romancista negra do Brasil, autora de Úrsula (1859).",
    resumo:
      "Maria Firmina dos Reis publicou Úrsula em 1859, considerado o primeiro romance de uma mulher negra no Brasil. A obra denuncia a escravidão e dá voz a personagens africanos.",
    foto: "pessoas/maria-firmina-dos-reis.jpg",
    fotoAlt: "Representação artística de Maria Firmina dos Reis",
    fotoCredito: "Reconstrução de Ramsessantos · CC BY-SA 4.0 · via Wikimedia Commons",
    secoes: [
      { titulo: "Quem foi", texto: "Nascida em São Luís, no Maranhão, em 1822, Maria Firmina foi professora, escritora e abolicionista. Publicou Úrsula, além de contos, poemas e o hino da abolição no Maranhão." },
      { titulo: "Por que importa hoje", texto: "Sua literatura antecipou o que hoje chamamos de literatura negra e afro-brasileira. Maria Firmina é referência para pensar autoria feminina negra e a luta abolicionista no Brasil." }
    ],
    galeria: [],
    video: null,
    fontes: [
      { titulo: "Maria Firmina dos Reis", veiculo: "Enciclopédia Itaú Cultural", url: "https://enciclopedia.itaucultural.org.br/", acesso: "2026-11-10" },
      { titulo: "Maria Firmina dos Reis", veiculo: "Fundação Cultural Palmares", url: "https://www.gov.br/palmares/pt-br", acesso: "2026-11-10" }
    ],
    aluno: { nomes: "Anna Júlia", turma: "3º B" },
    tempoLeitura: 3,
    semHeroFoto: true
  },

  {
    slug: "grande-otelo",
    fotoPos: "50% 20%",
    nome: "Grande Otelo",
    nascimento: 1915,
    morte: 1993,
    local: "Uberlândia, Minas Gerais",
    categorias: ["Artes"],
    resumoCard: "Ator e comediante, um dos maiores nomes do cinema e do teatro brasileiros.",
    resumo:
      "Grande Otelo, nome artístico de Sebastião Bernardes de Souza Prata, atuou em mais de cem filmes e marcou a história do cinema brasileiro. Trabalhou com diretores como Orson Welles e foi pioneiro negro no audiovisual.",
    foto: "pessoas/grande-otelo.jpg",
    fotoAlt: "Retrato de Grande Otelo",
    fotoCredito: "Autor desconhecido · Domínio público · via Wikimedia Commons",
    secoes: [
      { titulo: "Quem foi", texto: "Nascido em Uberlândia, Minas Gerais, em 1915, Grande Otelo começou nos palcos ainda jovem e se destacou no rádio, no teatro e no cinema. Participou das chanchadas e construiu uma carreira marcada por humor e crítica social." },
      { titulo: "Por que importa hoje", texto: "Ele abriu caminhos para atores negros no cinema e na TV, mesmo enfrentando racismo na indústria. Sua obra é parte fundamental da memória cultural brasileira." }
    ],
    galeria: [],
    video: null,
    fontes: [
      { titulo: "Grande Otelo", veiculo: "Enciclopédia Itaú Cultural", url: "https://enciclopedia.itaucultural.org.br/", acesso: "2026-11-10" },
      { titulo: "Grande Otelo", veiculo: "Geledés", url: "https://www.geledes.org.br/", acesso: "2026-11-10" }
    ],
    aluno: { nomes: "Pablo", turma: "3º B" },
    tempoLeitura: 3
  },

  {
    slug: "ruth-de-souza",
    fotoPos: "50% 20%",
    nome: "Ruth de Souza",
    nascimento: 1921,
    morte: 2019,
    local: "Rio de Janeiro",
    categorias: ["Artes"],
    resumoCard: "Primeira atriz negra a se destacar no teatro e na televisão brasileiros.",
    resumo:
      "Ruth de Souza foi uma das primeiras atrizes negras a ganhar destaque no teatro, no cinema e na televisão do Brasil. Atuou em peças como O Imperador Jones e em novelas e filmes que marcaram época.",
    foto: "pessoas/ruth-de-souza.jpg",
    fotoAlt: "Retrato de Ruth de Souza",
    fotoCredito: "Autor desconhecido · Domínio público · via Wikimedia Commons",
    secoes: [
      { titulo: "Quem foi", texto: "Nascida no Rio de Janeiro em 1921, Ruth de Souza começou no Teatro Experimental do Negro, fundado por Abdias do Nascimento. Tornou-se a primeira atriz negra a atuar no Theatro Municipal do Rio e a ser indicada a um prêmio internacional." },
      { titulo: "Por que importa hoje", texto: "Ruth abriu espaço para gerações de atrizes negras e denunciou o racismo nos palcos e nas telas. Sua trajetória é referência para pensar representação e diversidade nas artes." }
    ],
    galeria: [],
    video: null,
    fontes: [
      { titulo: "Ruth de Souza", veiculo: "Enciclopédia Itaú Cultural", url: "https://enciclopedia.itaucultural.org.br/", acesso: "2026-11-10" },
      { titulo: "Ruth de Souza", veiculo: "Geledés", url: "https://www.geledes.org.br/", acesso: "2026-11-10" }
    ],
    aluno: { nomes: "Pyetro", turma: "3º B" },
    tempoLeitura: 3
  },

  {
    slug: "aleijadinho",
    fotoPos: "50% 30%",
    nome: "Aleijadinho",
    nascimento: 1738,
    morte: 1814,
    local: "Vila Rica, Minas Gerais",
    categorias: ["Artes"],
    resumoCard: "Escultor e arquiteto barroco, autor dos Profetas de Congonhas.",
    resumo:
      "Antônio Francisco Lisboa, o Aleijadinho, foi o principal artista do barroco mineiro. Suas esculturas e igrejas, como os Profetas de Congonhas, estão entre as obras mais importantes da arte colonial brasileira.",
    foto: "pessoas/aleijadinho.jpg",
    fotoAlt: "Representação artística de Aleijadinho (retrato póstumo imaginado)",
    fotoCredito: "Euclásio Ventura · Representação póstuma · Domínio público · via Wikimedia Commons",
    secoes: [
      { titulo: "Quem foi", texto: "Nascido em Vila Rica, atual Ouro Preto, em 1738, Aleijadinho era filho de um arquiteto português e de uma mulher negra escravizada. Trabalhou em igrejas e santuários de Minas Gerais, mesmo após perder parte dos movimentos das mãos por uma doença." },
      { titulo: "Por que importa hoje", texto: "Sua obra é patrimônio da humanidade e prova que a arte negra esteve no centro da formação cultural brasileira. O reconhecimento de Aleijadinho ajuda a combater o apagamento da contribuição negra." }
    ],
    galeria: [],
    video: null,
    fontes: [
      { titulo: "Aleijadinho", veiculo: "Enciclopédia Itaú Cultural", url: "https://enciclopedia.itaucultural.org.br/", acesso: "2026-11-10" },
      { titulo: "Aleijadinho", veiculo: "Museu Afro Brasil", url: "https://museuafrobrasil.org.br/", acesso: "2026-11-10" }
    ],
    aluno: { nomes: "", turma: "3º B" },
    tempoLeitura: 3
  },

  {
    slug: "cartola",
    fotoPos: "50% 25%",
    nome: "Cartola",
    nascimento: 1908,
    morte: 1980,
    local: "Rio de Janeiro",
    categorias: ["Música"],
    resumoCard: "Compositor e sambista, fundador da Mangueira e autor de clássicos do samba.",
    resumo:
      "Angenor de Oliveira, o Cartola, foi um dos fundadores da escola de samba Estação Primeira de Mangueira. Compôs clássicos como As Rosas Não Falam e O Mundo é um Moinho.",
    foto: "pessoas/cartola.jpg",
    fotoAlt: "Retrato de Cartola",
    fotoCredito: "José Vasco · Domínio público · via Wikimedia Commons",
    secoes: [
      { titulo: "Quem foi", texto: "Nascido no Rio de Janeiro em 1908, Cartola cresceu no Morro da Mangueira e trabalhou como pedreiro antes de se dedicar ao samba. Teve uma vida difícil, mas voltou a compor e gravar já maduro." },
      { titulo: "Por que importa hoje", texto: "Cartola deu ao samba uma poesia sofisticada e ajudou a transformar a Mangueira em símbolo cultural. Sua obra mostra a força da música negra e popular brasileira." }
    ],
    galeria: [],
    video: null,
    fontes: [
      { titulo: "Cartola", veiculo: "Enciclopédia Itaú Cultural", url: "https://enciclopedia.itaucultural.org.br/", acesso: "2026-11-10" },
      { titulo: "Cartola", veiculo: "Fundação Cultural Palmares", url: "https://www.gov.br/palmares/pt-br", acesso: "2026-11-10" }
    ],
    aluno: { nomes: "Pedro Henrique", turma: "3º B" },
    tempoLeitura: 3
  },

  {
    slug: "clementina-de-jesus",
    fotoPos: "37% 28%",
    nome: "Clementina de Jesus",
    nascimento: 1901,
    morte: 1987,
    local: "Valença, Rio de Janeiro",
    categorias: ["Música", "Religião"],
    resumoCard: "Cantora que levou o samba de raiz e a herança afro-brasileira para o palco.",
    resumo:
      "Clementina de Jesus foi cantora e empregada doméstica até os 63 anos, quando iniciou a carreira artística. Ficou conhecida como Rainha Quelé e gravou sambas, jongos e cantos de origem africana.",
    foto: "pessoas/clementina-de-jesus.jpg",
    fotoAlt: "Retrato de Clementina de Jesus",
    fotoCredito: "Autor desconhecido · Domínio público · via Wikimedia Commons",
    secoes: [
      { titulo: "Quem foi", texto: "Nascida em Valença, no Rio de Janeiro, em 1901, Clementina cresceu em uma família de músicos e trabalhou como doméstica por décadas. Seu talento foi descoberto em rodas de samba e ela passou a se apresentar profissionalmente nos anos 1960." },
      { titulo: "Por que importa hoje", texto: "Clementina ajudou a preservar e divulgar a herança musical afro-brasileira, muitas vezes invisibilizada. Sua voz é referência para o samba e para a cultura de matriz africana no Brasil." }
    ],
    galeria: [],
    video: null,
    fontes: [
      { titulo: "Clementina de Jesus", veiculo: "Enciclopédia Itaú Cultural", url: "https://enciclopedia.itaucultural.org.br/", acesso: "2026-11-10" },
      { titulo: "Clementina de Jesus", veiculo: "Geledés", url: "https://www.geledes.org.br/", acesso: "2026-11-10" }
    ],
    aluno: { nomes: "Caique", turma: "3º B" },
    tempoLeitura: 3
  },

  {
    slug: "gilberto-gil",
    fotoPos: "50% 30%",
    nome: "Gilberto Gil",
    nascimento: 1942,
    morte: null,
    local: "Salvador, Bahia",
    categorias: ["Música", "Política"],
    resumoCard: "Músico e compositor baiano, ícone da Tropicália e defensor da cultura.",
    resumo:
      "Gilberto Gil é cantor, compositor e instrumentista, um dos criadores do movimento tropicalista. Foi ministro da Cultura e é reconhecido internacionalmente por sua obra e atuação política.",
    foto: "pessoas/gilberto-gil.jpg",
    fotoAlt: "Retrato de Gilberto Gil",
    fotoCredito: "Ricardo Stuckert/PR · CC BY-SA 4.0 · via Wikimedia Commons",
    secoes: [
      { titulo: "Quem foi", texto: "Nascido em Salvador em 1942, Gil começou na bossa nova e participou da Tropicália ao lado de Caetano Veloso. Durante a ditadura, foi preso e exilado, voltando ao Brasil para seguir uma carreira de sucesso." },
      { titulo: "Por que importa hoje", texto: "Sua obra mistura ritmos brasileiros, africanos e internacionais e discute identidade e liberdade. Gil também usou a política cultural para ampliar o acesso à arte no país." }
    ],
    galeria: [],
    video: null,
    fontes: [
      { titulo: "Gilberto Gil", veiculo: "Enciclopédia Itaú Cultural", url: "https://enciclopedia.itaucultural.org.br/", acesso: "2026-11-10" },
      { titulo: "Gilberto Gil", veiculo: "Fundação Cultural Palmares", url: "https://www.gov.br/palmares/pt-br", acesso: "2026-11-10" }
    ],
    aluno: { nomes: "Guilherme Veloso", turma: "3º B" },
    tempoLeitura: 3
  },

  {
    slug: "sueli-carneiro",
    fotoPos: "50% 25%",
    nome: "Sueli Carneiro",
    nascimento: 1950,
    morte: null,
    local: "São Paulo",
    categorias: ["Ativismo", "Ciência"],
    resumoCard: "Filósofa e ativista, fundadora do Geledés e referência do feminismo negro.",
    resumo:
      "Sueli Carneiro é filósofa, escritora e ativista, fundadora do Geledés — Instituto da Mulher Negra. Sua obra articula racismo, gênero e direitos humanos e é central para o feminismo negro brasileiro.",
    foto: "pessoas/sueli-carneiro.jpg",
    fotoAlt: "Retrato de Sueli Carneiro",
    fotoCredito: "Andre Seiti · CC BY-SA 4.0 · via Wikimedia Commons",
    secoes: [
      { titulo: "Quem foi", texto: "Nascida em São Paulo em 1950, Sueli Carneiro fez doutorado em educação e participou da fundação do Geledés em 1988. Também integrou o Conselho Nacional dos Direitos da Mulher e o movimento negro." },
      { titulo: "Por que importa hoje", texto: "Ela ajudou a colocar a mulher negra no centro do debate sobre racismo e gênero no Brasil. Sua produção intelectual e sua atuação institucional influenciam políticas públicas até hoje." }
    ],
    galeria: [],
    video: null,
    fontes: [
      { titulo: "Sueli Carneiro", veiculo: "Geledés", url: "https://www.geledes.org.br/", acesso: "2026-11-10" },
      { titulo: "Sueli Carneiro", veiculo: "Enciclopédia Itaú Cultural", url: "https://enciclopedia.itaucultural.org.br/", acesso: "2026-11-10" }
    ],
    aluno: { nomes: "Manu", turma: "3º B" },
    tempoLeitura: 3
  },

  {
    slug: "petronilha-beatriz",
    fotoPos: "23% 24%",
    nome: "Petronilha Beatriz Gonçalves e Silva",
    nascimento: 1942,
    morte: null,
    local: "São Carlos, São Paulo",
    categorias: ["Ciência", "Educação"],
    resumoCard: "Professora e pesquisadora, relatora das diretrizes para a educação das relações étnico-raciais.",
    resumo:
      "Petronilha Beatriz Gonçalves e Silva é professora e pesquisadora da UFSCar, com atuação na formação de professores e na educação das relações étnico-raciais. Foi relatora do parecer que orienta o ensino de história e cultura afro-brasileira nas escolas.",
    foto: "pessoas/petronilha-beatriz.jpg",
    fotoAlt: "Retrato de Petronilha Beatriz Gonçalves e Silva",
    fotoCredito: "Ricardosdag · CC BY-SA 4.0 · via Wikimedia Commons",
    secoes: [
      { titulo: "Quem foi", texto: "Nascida em 1942, Petronilha construiu carreira na educação e se tornou professora titular da Universidade Federal de São Carlos. Integrou o Conselho Nacional de Educação e participou da formulação das diretrizes que regulamentam a Lei 10.639/2003." },
      { titulo: "Por que importa hoje", texto: "Seu trabalho ajudou a transformar a lei em prática pedagógica, orientando escolas a ensinar história e cultura afro-brasileira e africana. É referência para a educação antirracista no Brasil." }
    ],
    galeria: [],
    video: null,
    fontes: [
      { titulo: "Petronilha Beatriz Gonçalves e Silva", veiculo: "Universidade Federal de São Carlos", url: "https://www.ufscar.br/", acesso: "2026-11-10" },
      { titulo: "Petronilha Beatriz Gonçalves e Silva", veiculo: "Geledés", url: "https://www.geledes.org.br/", acesso: "2026-11-10" }
    ],
    aluno: { nomes: "Kal-el", turma: "3º B" },
    tempoLeitura: 3
  },

  {
    slug: "mae-stella-de-oxossi",
    fotoPos: "50% 20%",
    nome: "Mãe Stella de Oxóssi",
    nascimento: 1925,
    morte: 2018,
    local: "Salvador, Bahia",
    categorias: ["Religião", "Literatura"],
    resumoCard: "Ialorixá e escritora, liderou o Ilê Axé Opô Afonjá e defendeu o Candomblé.",
    resumo:
      "Mãe Stella de Oxóssi foi ialorixá do Ilê Axé Opô Afonjá, em Salvador, e uma das maiores vozes de defesa das religiões de matriz africana. Também escreveu livros e foi imortal da Academia de Letras da Bahia.",
    foto: "pessoas/mae-stella-de-oxossi.jpg",
    fotoAlt: "Retrato de Mãe Stella de Oxóssi",
    fotoCredito: "Antônio Milena/ABr · CC BY 3.0 BR · via Wikimedia Commons",
    secoes: [
      { titulo: "Quem foi", texto: "Nascida em Salvador em 1925, Odé Kayode assumiu a liderança do terreiro do Axé Opô Afonjá em 1976. Lutou contra a intolerância religiosa e defendeu o Candomblé como patrimônio cultural." },
      { titulo: "Por que importa hoje", texto: "Sua atuação ajudou a garantir liberdade religiosa e reconhecimento às religiões de matriz africana. Mãe Stella é símbolo da resistência e da intelectualidade negra na Bahia." }
    ],
    galeria: [],
    video: null,
    fontes: [
      { titulo: "Mãe Stella de Oxóssi", veiculo: "Fundação Cultural Palmares", url: "https://www.gov.br/palmares/pt-br", acesso: "2026-11-10" },
      { titulo: "Mãe Stella de Oxóssi", veiculo: "Enciclopédia Itaú Cultural", url: "https://enciclopedia.itaucultural.org.br/", acesso: "2026-11-10" }
    ],
    aluno: { nomes: "Ana França", turma: "3º B" },
    tempoLeitura: 3
  },

  {
    slug: "antonieta-de-barros",
    fotoPos: "50% 35%",
    nome: "Antonieta de Barros",
    nascimento: 1901,
    morte: 1952,
    local: "Florianópolis, Santa Catarina",
    categorias: ["Política", "Educação"],
    resumoCard: "Primeira mulher negra eleita deputada no Brasil, defensora da educação.",
    resumo:
      "Antonieta de Barros foi professora, jornalista e a primeira mulher negra a se eleger deputada no Brasil, em Santa Catarina. Lutou pela educação pública e pelos direitos das mulheres e da população negra.",
    foto: "pessoas/antonieta-de-barros.jpg",
    fotoAlt: "Retrato de Antonieta de Barros",
    fotoCredito: "Instituto Histórico e Geográfico de Santa Catarina · CC BY-SA 4.0 · via Wikimedia Commons",
    secoes: [
      { titulo: "Quem foi", texto: "Nascida em Florianópolis em 1901, Antonieta de Barros fundou jornais e lecionou por toda a vida. Em 1934 se elegeu deputada estadual, defendendo o acesso à escola e a valorização do magistério." },
      { titulo: "Por que importa hoje", texto: "Ela abriu caminho para a participação política de mulheres negras no Brasil e fez da educação sua principal bandeira. Seu nome é lembrado como símbolo de representatividade e compromisso público." }
    ],
    galeria: [],
    video: null,
    fontes: [
      { titulo: "Antonieta de Barros", veiculo: "Enciclopédia Itaú Cultural", url: "https://enciclopedia.itaucultural.org.br/", acesso: "2026-11-10" },
      { titulo: "Antonieta de Barros", veiculo: "Geledés", url: "https://www.geledes.org.br/", acesso: "2026-11-10" }
    ],
    aluno: { nomes: "Guilherme Santos", turma: "3º B" },
    tempoLeitura: 3
  },

  {
    slug: "adhemar-ferreira-da-silva",
    fotoPos: "50% 15%",
    nome: "Adhemar Ferreira da Silva",
    nascimento: 1927,
    morte: 2001,
    local: "São Paulo",
    categorias: ["Esporte"],
    resumoCard: "Atleta do salto triplo, bicampeão olímpico e ícone do esporte negro.",
    resumo:
      "Adhemar Ferreira da Silva foi bicampeão olímpico no salto triplo, em Helsinque 1952 e Melbourne 1956. Foi o primeiro brasileiro a quebrar um recorde mundial e a conquistar dois ouros olímpicos.",
    foto: "pessoas/adhemar-ferreira-da-silva.jpg",
    fotoAlt: "Retrato de Adhemar Ferreira da Silva",
    fotoCredito: "Autor desconhecido · Domínio público · via Wikimedia Commons",
    secoes: [
      { titulo: "Quem foi", texto: "Nascido em São Paulo em 1927, Adhemar era filho de um ferroviário e começou no atletismo já adulto. Também foi escultor e participou do filme Orfeu Negro, vencedor da Palma de Ouro em Cannes." },
      { titulo: "Por que importa hoje", texto: "Ele mostrou a força do esporte negro brasileiro e inspirou gerações de atletas. Sua trajetória é lembrada como exemplo de disciplina, arte e superação." }
    ],
    galeria: [],
    video: null,
    fontes: [
      { titulo: "Adhemar Ferreira da Silva", veiculo: "Comitê Olímpico do Brasil", url: "https://www.cob.org.br/", acesso: "2026-11-10" },
      { titulo: "Adhemar Ferreira da Silva", veiculo: "Enciclopédia Itaú Cultural", url: "https://enciclopedia.itaucultural.org.br/", acesso: "2026-11-10" }
    ],
    aluno: { nomes: "Thayná", turma: "3º B" },
    tempoLeitura: 3
  },

  {
    slug: "rebeca-andrade",
    fotoPos: "50% 25%",
    nome: "Rebeca Andrade",
    nascimento: 1999,
    morte: null,
    local: "Guarulhos, São Paulo",
    categorias: ["Esporte"],
    resumoCard: "Ginasta, maior medalhista olímpica da história do Brasil.",
    resumo:
      "Rebeca Andrade é ginasta e a maior medalhista olímpica brasileira, com ouros, pratas e bronzes em Tóquio 2020 e Paris 2024. Também foi campeã mundial e referencia a ginástica artística nacional.",
    foto: "pessoas/rebeca-andrade.jpg",
    fotoAlt: "Retrato de Rebeca Andrade",
    fotoCredito: "Sarah Ladot · CC BY-SA 4.0 · via Wikimedia Commons",
    secoes: [
      { titulo: "Quem foi", texto: "Nascida em Guarulhos em 1999, Rebeca começou na ginástica ainda criança e superou várias lesões graves. Em 2021 conquistou a prata no individual geral e o ouro no salto em Tóquio." },
      { titulo: "Por que importa hoje", texto: "Rebeca quebrou barreiras na ginástica, esporte com pouca presença negra no Brasil, e se tornou inspiração para crianças atletas. Sua trajetória mostra o resultado de políticas de base e investimento no esporte." }
    ],
    galeria: [],
    video: null,
    fontes: [
      { titulo: "Rebeca Andrade", veiculo: "Comitê Olímpico do Brasil", url: "https://www.cob.org.br/", acesso: "2026-11-10" },
      { titulo: "Rebeca Andrade", veiculo: "Enciclopédia Itaú Cultural", url: "https://enciclopedia.itaucultural.org.br/", acesso: "2026-11-10" }
    ],
    aluno: { nomes: "Clara", turma: "3º B" },
    tempoLeitura: 3
  },

  {
    slug: "formiga",
    fotoPos: "50% 30%",
    nome: "Formiga",
    nascimento: 1978,
    morte: null,
    local: "Salvador, Bahia",
    categorias: ["Esporte"],
    resumoCard: "Futebolista, recordista de participações em Copas do Mundo pelo Brasil.",
    resumo:
      "Miraildes Maciel Mota, a Formiga, é a única jogadora a disputar sete Copas do Mundo de futebol feminino. Integrou a seleção brasileira por mais de duas décadas e conquistou títulos com o time.",
    foto: "pessoas/formiga.jpg",
    fotoAlt: "Retrato de Formiga",
    fotoCredito: "TV Brasil · CC BY 3.0 · via Wikimedia Commons",
    secoes: [
      { titulo: "Quem foi", texto: "Nascida em Salvador em 1978, Formiga começou no futebol de várzea e se profissionalizou ainda jovem. Jogou em clubes do Brasil, dos Estados Unidos e da Europa, e disputou as Olimpíadas de 1996 a 2020." },
      { titulo: "Por que importa hoje", texto: "Ela é símbolo da luta pela valorização do futebol feminino no Brasil, ainda hoje marcado por diferenças de investimento e visibilidade. Sua longevidade na seleção mostra a força das mulheres negras no esporte." }
    ],
    galeria: [],
    video: null,
    fontes: [
      { titulo: "Formiga", veiculo: "Comitê Olímpico do Brasil", url: "https://www.cob.org.br/", acesso: "2026-11-10" },
      { titulo: "Formiga", veiculo: "Museu do Futebol", url: "https://museudofutebol.org.br/", acesso: "2026-11-10" }
    ],
    aluno: { nomes: "Rebecca", turma: "3º B" },
    tempoLeitura: 3
  }
];
