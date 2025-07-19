const scheduleData = [
  {
    date: '21/07/2025',
    day: 'Primeiro Dia do ConCAC – Conectando Saberes',
    events: [
      { time: '9h - 9h30', description: 'Abertura do Evento' },
      { time: '9h30 – 10h', description: 'Apresentação Artística e Cultural: Prática do Choro – Coordenação: Prof. Artur Duvivier Ortenblad | Local: Hall do CAC' },
      { time: '10h – 10h40', description: 'Apresentação Artística e Cultural: Músicas e Danças: uma volta pelo tempo - Coordenação: Profa. Daniele Cruz Barros | Local: Hall do CAC' },
      {
        time: '10h30 – 12h30', description: 'Oficinas:',
        details: [
          'Revista Equívoca: Ensaísmo como entrelugar - Coordenação: Prof. Thiago Soares | Duração: 2hrs | Local: Mini Auditório 1',
          'Fabricação Digital na Moda Sustentável – Coordenação: Prof. Sadi da Silva Seabra Filho |  Duração: 3hrs | Local: Grea3D'
        ]
      },
      { time: 'Intervalo', description: '' },
      {
        time: '14h – 18h', description: 'Exposição Moventemangue_arte: navegação mediada | Coordenação: Profa. Renata Wilner | Local: Hall do CAC'
      },
      {
        time: '14h - 15h30', description: 'Transmissão Ao Vivo do Programa da Rádio Paulo Freire no ConCAC | Local: Hall do CAC',
        details: [
          'Entrevistas:',
          '- Profa. Maria da Conceição dos Reis - Pró-reitora de Extensão da UFPE',
          '- Prof.Fabiano Diniz (ou representante da equipe do CIAPA): projeto de regularização fundiária –  Departamento de Arquitetura',
          '- Profa. Maria Acserald: projeto de criação em dança (“Abraço de urso”) – Curso de Dança/Departamento de Artes',
          '- Profa. Karla Patriota: projeto de Consultoria Publicitária para Instituições sem fins lucrativos – Departamento de Comunicação Social',
          '- Prof.Sadi Seabra Filho: projeto Jiu-Jitsu para Todos: Defesa Pessoal, Arte e Empoderamento – Departamento de Expressão Gráfica',
          'Apresentações durante o programa da Rádio Paulo Freire no ConCAC',
          'Literatura/Teatro:',
          '- Prof. Hélio Pajeú: projeto Restos de Felicidade (Interpretação Teatral/Literária) – Departamento de Ciência da Informação',
          'Música:',
          '- Prof. Artur Duvivier Ortenblad (MUSICAC, música no CAC): apresentação de dois duos – Departamento de Música'
        ]
      },
      {
        time: '15h30 – 18h30', description: 'Oficinas (Inscrições até o dia 20/07):',
        details: [
          'Jiu-Jitsu para Todos: Defesa Pessoal, Arte e Empoderamento – Coordenação: Prof. Sadi da Silva Seabra Filho | Local: Sala de Dança',
          'Revela e Cria! A Arte do Carimbo e da Estamparia – Coordenação: Profa. Marina Giovana Sales Pereira | Duração: 3hrs | Local: Sala 02/DCI',
          'Produção de Têxtil Sustentável – Coordenação: Profa. Thyana Farias Galvão | Duração: 3hrs | Local: Lab. Pranchetas/Depto. Expressão Gráfica',
          'Encadernação: brochura – Coordenação: Profa. Thais Helen do Nascimento Santos | Duração: 2hrs | Local: Sala 01/DCI',
          'Impressão 3D: Do Modelo Digital ao Objeto Físico – Coordenação: Prof. Sadi da Silva Seabra Filho | Duração: 3hrs | Local: Grea3D',
          'Comunicação e Artes: encontro do Jornalismo com a Escrita Criativa – Coordenação: Profa. Raldianny Pereira Dos Santos | Local: Sala MDU',
          'Invente você: oficina de fotoperformance | Coordenação: Profa. Renata Wilner | Duração: 2hrs | Local: Sala do Conselho do CAC'
        ]
      },
      { time: '17h – 18h', description: 'Intervenção Artística e Cultural: Abraço de Urso | Coordenação: Profa. Maria Acselrad – Local: Anfiteatro do CAC' }
    ]
  },
  {
    date: '22/07/2025',
    day: 'Segundo Dia do ConCAC',
    events: [
      {
        time: '9h - 12h', description: 'Apresentação na Modalidade Oral: Ações de Extensão do CAC',
        details: [
          'Local: Mini Auditório 2',
          'Eixo 1: Artes, Saberes e Comunidades',
          '9h – 9h15: Projeto arquitetônico, urbanístico e paisagístico para apreça de apoio à horta comunitária do Conjunto Habitacional Ruy Frazão (Recife/PE) – Coordenação: Prof. Fábio Ferreira Lins Mosaner',
          '9h15 – 9h30: Colóquio A espinha dorsal do espanto: celebrando a literatura e a arte de Braulio Tavares – Coordenação: Prof. André de Sena Wanderley',
          'Eixo 2: Comunicação, Informação, Cultura e Sociedade',
          '9h30 – 9h45: Expressões idiomáticas em Libras: um estudo semiológico-enunciativo – Coordenação: Profa. Ana Cláudia Barbosa de Lima Barros',
          '9h45 – 10h: Encontros de Estágios do Curso Letras Libras: Compartilhar experiências - Coordenação: Profa. Ana Cláudia Barbosa de Lima Barros',
          '10h – 10h15: Revitalizando saberes e práticas: a biblioteca escolar como prestadora de serviços de apoio à aprendizagem – Coordenação: Prof. Erinaldo Dias Valério',
          '10h15 – 10h30: I Seminário Pernambucano Sobre Fundamentos da Ciência da Informação: explorando as Bases Teóricas e Práticas - Coordenação: Prof. Erinaldo Dias Valério',
          '10h30 – 10h45: Administração, ciência e cultura em ação: gestão arquivística dos documentos da diretoria do Centro de Artes e Comunicação da Universidade Federal de Pernambuco - Coordenação: Profa. Thais Helen do Nascimento Santos',
          '10h45 – 11h: 9ª Semana Nacional de Arquivos na Universidade Federal de Pernambuco - Coordenação: Profa. Thais Helen do Nascimento Santos',
          '11h – 11h15: Desinformação, genocídio e guerra - Coordenação: Profa. Celly de Brito Lima',
          '11h:15 – 11h30: O mercado profissional do Gestor da Informação: um estudo sobre as possibilidades de atuação II - Coordenação: Prof. Antonio de Souza Silva Júnior',
          '11h:30 – 11h45: BiblioArte 2024 - IRADO 2.0 - Coordenação: Prof. Diego Andres Salcedo ',
          '11h:45 – 12h: Podcast InteraGI – Mediando informação de qualidade entre a universidade e mundo - Coordenação: Prof. Alexander Willian Azevedo',
          'Local: Hall do CAC',
          'Eixo 2: Comunicação, Informação, Cultura e Sociedade',
          '9h – 9h15: Repositório digital da memória indígena do Nordeste - Coordenação: Prof. Alexander Willian Azevedo',
          '9h15 – 9h30: Consultoria Publicitária para Instituições sem fins lucrativos – Coordenação: Profa. Karla Regina Macena Pereira Patriota',
          '9h30 – 9h45: Motim: Festival de Comunicação e Cultura – Coordenação: Profa. Carolina Dantas de Figueiredo',
          '9h45 – 10h: MUSICAC na rádio e escuta aqui | Coordenação: Prof. Artur Duvivier Ortenblad ',
          '10h – 10h15: Alvo Certo: Desenvolvimento de competências tecnológicas e atitudinais em jovens em situação de vulnerabilidade - Coordenação: Prof. Natanael Vitor Sobral',
          '10h15 – 10h30: Cartografando o Frevo: a construção da “identidade frevística” em agentes culturais da Região Metropolitana do Recife - Coordenação: Profa. Ana Paula Campos Lima',
          'Eixo 3 – Linguagens, Mídias e Tecnologias',
          '10h30 – 10h45: Produção fonográfica e audiovisual Musicac UFPE 2025 | Coordenação: Prof. Fabio Wanderley Janhan Sousa',
          '10h45 – 11h: GREA3D CULTURAL: laboratório de tecnologia digital para manutenção de acervo, exposições e promoção de formação no Centro Cultural Benfica - Coordenação: Profa. Auta Luciana Laurentino',
          '11h – 11h15: GREA3D MÓVEL - Unidade Itinerante de Tecnologia do Grupo de Experimentação em Artefatos 3D: Promovendo o Acesso à Informação Digital e Escolas Públicas de Pernambuco – Coordenação: Profa. Auta Luciana Laurentino',
          '11h15 – 11h30: Práticas de gravação ao vivo de grupos regionais | Coordenação: Prof. Fabio Wanderley Janhan Sousa',
          'Eixo 4: Memória, Patrimônio e Identidades',
          '11h30 – 11h45: Revitalização de Línguas Ciganas em Pernambuco: questões e perspectivas - Coordenação: Profa. Maria Luisa Freitas',
          'Eixo 5: Processos Criativos, Formação e Mediação Cultural',
          '11h45 – 12h: UFPE: espaço de vida e memórias - a experiência de uma exposição virtual e outras ações de extensão da disciplina eletiva Escrita Criativa - Coordenação: Profa. Raldianny Pereira Dos Santos',
          '9h - 12h: Apresentação Modalidade Oral: Sala do Conselho do CAC',
          'fEEEio Lab rOda - Políticas do Olhar – Coordenação: Profa. Oriana Duarte'
        ]
      },
      { time: 'Intervalo', description: '' },
      { time: '14h - 17h', description: 'Oficinas:',
        details: ['Trabalha, estuda e cuida: desafios enfrentados pelas mães-estudantes na UFPE - Coordenação: Profa. Maria Collier de Mendonça | Local: Laboratório de Inovação Midiática']},
      {
        time: '14h - 15h30', description: 'Exposição: Quando a Linha do Trem Cruza a Linha da Vida – Local: Hall do CAC |  Coordenação: Profa. Izabella Galera '
      },
      {
        time: '14h - 15h30', description: 'Apresentação/Intervenção Artística e Cultural: Restos de Felicidades | Coordenação: Prof. Hélio Márcio Pajeú | Teatro Evaldo Coutinho'
      },
      {
        time: '15h30 – 16h30', description: 'Apresentação/Intervenção Artística e Cultural: A Física dos Invisíveis - apresentação de filme do projeto do Cine Interação, realizado através de edital da Supercult - Prof. Camilo Soares | Local: a definir'
      },
      {
        time: '16h – 18h', description: 'Oficinas:',
        details: [,
          'Onde bate seu coração?: Oficina de Modelagem com Corrugados | Coordenação: Profa. Joana D\'Arc de Sousa Lima | Duração: 3hrs | Local: Sala MDU'
        ]
      },
      { time: '18h - 19h', description: 'Encerramento com Apresentação Musical da Banda PsicoFrevo, do projeto: Produção fonográfica de artistas emergentes | Coordenação: Fábio Wanderley Janhan Sousa | Local: Hall do CAC' }
    ]
  }
];



