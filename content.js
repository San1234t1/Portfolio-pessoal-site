/**
 * CONTEÚDO EDITÁVEL DO PORTFÓLIO
 * Edite os textos entre aspas. Mantenha as chaves e a pontuação.
 * O guia README.md contém exemplos de títulos e imagens.
 */

// 1. Nome, ano do rodapé e títulos dos projetos.
// 2. Imagens: preencha src com "images/minha-foto.jpg"; vazio mantém o espaço reservado.
const siteContent = {
  "name": "Sant",
  "copyrightYear": 2026,
  "projects": [
    {
      "title": "Tandem",
      "descriptionKey": "desc1",
      "imageKey": "project1"
    },
    {
      "title": "Forge",
      "descriptionKey": "desc2",
      "imageKey": "project2"
    },
    {
      "title": "Forma",
      "descriptionKey": "desc3",
      "imageKey": "project3"
    }
  ],
  "images": {
    "portrait": {
      "src": "",
      "alt": "Retrato de Sant"
    },
    "workspace": {
      "src": "",
      "alt": "Meu espaço de trabalho"
    },
    "project1": {
      "src": "",
      "alt": "Capa do projeto Tandem"
    },
    "project2": {
      "src": "",
      "alt": "Capa do projeto Forge"
    },
    "project3": {
      "src": "",
      "alt": "Capa do projeto Forma"
    },
    "experiment1": {
      "src": "",
      "alt": "Estudo visual"
    },
    "experiment2": {
      "src": "",
      "alt": "Experimento de interface"
    },
    "experiment3": {
      "src": "",
      "alt": "Ideias em movimento"
    }
  }
};

// 3. Textos por idioma: pt-BR = português, en = inglês, es = espanhol.
// As chaves correspondem aos atributos data-t do index.html.
const translations = {
  "pt-BR": {
    "home": "✦ Início",
    "about": "♟ Sobre",
    "work": "▦ Projetos",
    "play": "◆ Laboratório",
    "contact": "♥ Contato",
    "made": "Feito com intenção",
    "details": "Os detalhes importam",
    "nameIntro": "Oi, meu nome é",
    "role": "Product Designer",
    "available": "Aberto a novas ideias e bons desafios",
    "location": "Brasil, BR",
    "headline": "Design que simplifica. Experiências que ficam.",
    "talk": "Vamos conversar",
    "portfolio": "Portfólio criativo / um trabalho em constante evolução",
    "aboutNote": "um pouco sobre mim ↓",
    "portrait": "Sua foto aqui",
    "me": "esse sou eu :)",
    "workspace": "Foto do seu espaço",
    "corner": "meu cantinho criativo",
    "whatsup": "Prazer, eu!",
    "bio": "Sou uma pessoa de design que se empolga com a ideia de tornar o complicado simples. Gosto dos pequenos detalhes, das boas perguntas e de criar experiências que deixam o dia de alguém mais fácil. ✨",
    "skill1": "Design de interação",
    "skill2": "Prototipagem",
    "skill3": "Pesquisa com usuários",
    "skill4": "Motion design",
    "selected": "Projetos selecionados",
    "tab1": "✦ Projeto 01",
    "tab2": "✦ Projeto 02",
    "tab3": "✦ Projeto 03",
    "category1": "● Conceito / Produto digital",
    "category2": "● Conceito / Experiência web",
    "category3": "● Conceito / Identidade & digital",
    "desc1": "Uma ideia para transformar contas compartilhadas em uma experiência mais simples e humana.",
    "desc2": "Um conceito de onboarding que aproxima pessoas, ferramentas e primeiras descobertas.",
    "desc3": "Um estudo visual sobre marcas flexíveis e experiências digitais cheias de personalidade.",
    "view": "Explorar projeto ↗",
    "cover": "Imagem do projeto",
    "imageHint": "Espaço reservado · adicione sua imagem",
    "demo": "Projetos e textos ilustrativos — personalize com seu trabalho.",
    "offscript": "ideias fora do roteiro ✳",
    "playTitle": "Um espaço para experimentar.",
    "experiment1": "Estudo visual",
    "experiment2": "Experimento de interface",
    "experiment3": "Ideias em movimento",
    "next": "O próximo projeto começa com um oi",
    "contactTitle": "Vamos criar algo legal?",
    "contactText": "Boas ideias ficam melhores quando compartilhadas.",
    "email": "Adicione seu e-mail de contato aqui",
    "footer": "feito de ideias, café e detalhes.",
    "back": "Voltar ao topo ↑",
    "caseStudy": "Projeto conceitual / modelo de apresentação",
    "casePlaceholder": "Espaço para imagens e processo do projeto",
    "caseNote": "Conte sua história aqui: contexto, desafio, processo e resultado."
  },
  "en": {
    "home": "✦ Home",
    "about": "♟ About",
    "work": "▦ Projects",
    "play": "◆ Playground",
    "contact": "♥ Contact",
    "made": "Made with intention",
    "details": "Sweat the details",
    "nameIntro": "Hi, my name is",
    "role": "Product Designer",
    "available": "Open to new ideas and good challenges",
    "location": "Brazil, BR",
    "headline": "Design that simplifies. Experiences that stay.",
    "talk": "Let’s talk",
    "portfolio": "Creative portfolio / always a work in progress",
    "aboutNote": "a little about me ↓",
    "portrait": "Your photo here",
    "me": "that’s me :)",
    "workspace": "Your workspace photo",
    "corner": "my creative corner",
    "whatsup": "Nice to meet you!",
    "bio": "I’m a design person who gets excited about making complicated things feel simple. I care about the little details, asking good questions, and creating experiences that make someone’s day a little easier. ✨",
    "skill1": "Interaction design",
    "skill2": "Prototyping",
    "skill3": "User research",
    "skill4": "Motion design",
    "selected": "Selected projects",
    "tab1": "✦ Project 01",
    "tab2": "✦ Project 02",
    "tab3": "✦ Project 03",
    "category1": "● Concept / Digital product",
    "category2": "● Concept / Web experience",
    "category3": "● Concept / Identity & digital",
    "desc1": "An idea to make shared expenses a simpler, more human experience.",
    "desc2": "An onboarding concept that connects people, tools, and first discoveries.",
    "desc3": "A visual exploration of flexible brands and digital experiences full of personality.",
    "view": "Explore project ↗",
    "cover": "Project image",
    "imageHint": "Reserved space · add your image",
    "demo": "Illustrative projects and copy — personalize with your work.",
    "offscript": "ideas off the script ✳",
    "playTitle": "A little room to experiment.",
    "experiment1": "Visual study",
    "experiment2": "Interface experiment",
    "experiment3": "Ideas in motion",
    "next": "The next project starts with hello",
    "contactTitle": "Let’s make something good.",
    "contactText": "Good ideas get better when we share them.",
    "email": "Add your contact email here",
    "footer": "made of ideas, coffee, and details.",
    "back": "Back to top ↑",
    "caseStudy": "Concept project / presentation template",
    "casePlaceholder": "Space for project images and process",
    "caseNote": "Tell your story here: context, challenge, process, and outcome."
  },
  "es": {
    "home": "✦ Inicio",
    "about": "♟ Sobre mí",
    "work": "▦ Proyectos",
    "play": "◆ Laboratorio",
    "contact": "♥ Contacto",
    "made": "Hecho con intención",
    "details": "Los detalles importan",
    "nameIntro": "Hola, me llamo",
    "role": "Diseñador de producto",
    "available": "Abierto a nuevas ideas y buenos desafíos",
    "location": "Brasil, BR",
    "headline": "Diseño que simplifica. Experiencias que perduran.",
    "talk": "Hablemos",
    "portfolio": "Portafolio creativo / un trabajo en constante evolución",
    "aboutNote": "un poco sobre mí ↓",
    "portrait": "Tu foto aquí",
    "me": "ese soy yo :)",
    "workspace": "Foto de tu espacio",
    "corner": "mi rincón creativo",
    "whatsup": "¡Mucho gusto!",
    "bio": "Soy una persona de diseño a la que le entusiasma hacer sencillo lo complicado. Me importan los pequeños detalles, las buenas preguntas y crear experiencias que hagan el día de alguien un poco más fácil. ✨",
    "skill1": "Diseño de interacción",
    "skill2": "Prototipado",
    "skill3": "Investigación de usuarios",
    "skill4": "Diseño de movimiento",
    "selected": "Proyectos seleccionados",
    "tab1": "✦ Proyecto 01",
    "tab2": "✦ Proyecto 02",
    "tab3": "✦ Proyecto 03",
    "category1": "● Concepto / Producto digital",
    "category2": "● Concepto / Experiencia web",
    "category3": "● Concepto / Identidad y digital",
    "desc1": "Una idea para convertir los gastos compartidos en una experiencia más sencilla y humana.",
    "desc2": "Un concepto de onboarding que conecta personas, herramientas y primeros descubrimientos.",
    "desc3": "Un estudio visual sobre marcas flexibles y experiencias digitales llenas de personalidad.",
    "view": "Explorar proyecto ↗",
    "cover": "Imagen del proyecto",
    "imageHint": "Espacio reservado · añade tu imagen",
    "demo": "Proyectos y textos ilustrativos — personalízalos con tu trabajo.",
    "offscript": "ideas fuera del guion ✳",
    "playTitle": "Un espacio para experimentar.",
    "experiment1": "Estudio visual",
    "experiment2": "Experimento de interfaz",
    "experiment3": "Ideas en movimiento",
    "next": "El próximo proyecto empieza con un hola",
    "contactTitle": "¿Creamos algo genial?",
    "contactText": "Las buenas ideas mejoran cuando las compartimos.",
    "email": "Añade tu correo de contacto aquí",
    "footer": "hecho de ideas, café y detalles.",
    "back": "Volver arriba ↑",
    "caseStudy": "Proyecto conceptual / plantilla de presentación",
    "casePlaceholder": "Espacio para imágenes y proceso del proyecto",
    "caseNote": "Cuenta tu historia aquí: contexto, desafío, proceso y resultado."
  }
};
