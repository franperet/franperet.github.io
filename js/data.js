const PORTFOLIO = {
  profile: {
    name: "Francisco Peret",
    initials: "FP",
    roles: ["Game Developer", "Gameplay Programmer", "Unity · Unreal · C#"],
    lead: "Estudio desarrollo de videojuegos y programo tanto en Unity con C# como en Unreal con Blueprints. Trabajo en 2D y 3D, también en multijugador.",
    location: "Argentina",
    status: "Abierto a mi primera experiencia profesional",
    email: "francisco.peret99@gmail.com",
    cv: "",
    photo: "",
    links: {
      github: "https://github.com/franperet",
      itch: "https://franpe.itch.io/",
      discord: "https://discord.com/users/846846397257089046",
      linkedin: ""
    }
  },

  card: [
    ["Clase", "Game Developer"],
    ["Especialidad", "Programación y game design"],
    ["Motores", "Unity · Unreal"],
    ["Lenguajes", "C# · Blueprints"]
  ],

  filters: ["Unity", "Unreal Engine", "2D", "3D", "Sin motor", "En desarrollo"],

  projects: [
    {
      title: "Wizards of Ages",
      tagline: "Acción cooperativa local para 2 jugadores: magos que pelean con hechizos en un castillo encantado.",
      context: "Seminario 2026",
      status: "En desarrollo",
      team: "",
      role: "Programación",
      description: "Dos magos recorren un castillo y sus jardines peleando contra enemigos hasta llegar a un jefe final. Cada jugador elige entre cuatro personajes y se juega con teclado y mouse o con joystick. La imagen tiene un estilo retro gracias a una cámara que renderiza a baja resolución.",
      highlights: [
        "Tienda 3D: la cámara viaja hasta las repisas y cada jugador compra con su propio cursor virtual",
        "Cinemática inicial con subtítulos, narrador y opción de saltarla",
        "Selección entre cuatro personajes y tutorial jugable para aprender los controles",
        "Estilo retro con render a baja resolución"
      ],
      tags: ["Unity", "C#", "3D", "Co-op local"],
      color: "#ffb020",
      cover: "assets/img/wizards-of-ages/01.jpg",
      images: [
        "assets/img/wizards-of-ages/01.jpg",
        "assets/img/wizards-of-ages/02.jpg",
        "assets/img/wizards-of-ages/03.jpg",
        "assets/img/wizards-of-ages/04.jpg",
        "assets/img/wizards-of-ages/05.jpg",
        "assets/img/wizards-of-ages/06.jpg",
        "assets/img/wizards-of-ages/07.jpg"
      ],
      video: "assets/video/wizards-of-ages.mp4",
      videoPoster: "assets/video/wizards-of-ages.jpg",
      links: { play: "", code: "" }
    },
    {
      title: "Subject Primate",
      tagline: "Puzzle cooperativo en primera persona para 2 a 4 jugadores en red.",
      context: "Proyecto en equipo",
      status: "En desarrollo",
      team: "Equipo de 2",
      role: "Programación de gameplay y red",
      description: "Dos monos de laboratorio con poderes opuestos tienen que escapar juntos: uno levanta objetos y hasta a su compañero, el otro intercambia posiciones. Se juega en red, en cooperativo de a 2 o en carrera de 2 contra 2.",
      highlights: [
        "Multijugador en red con Photon Fusion 2: crear o buscar partida, elegir personaje y jugar sincronizados",
        "Poderes Grab y Swap pensados para que cada puzzle necesite a los dos jugadores",
        "Nivel armado en tres zonas encadenadas: lobby, laboratorio y nivel 1",
        "Menú principal en 3D, con los personajes en una isla"
      ],
      tags: ["Unity", "Photon Fusion", "3D", "Multijugador"],
      color: "#ff5a5f",
      cover: "assets/img/subject-primate/01.jpg",
      images: [
        "assets/img/subject-primate/01.jpg",
        "assets/img/subject-primate/02.jpg",
        "assets/img/subject-primate/03.jpg",
        "assets/img/subject-primate/04.jpg"
      ],
      video: "assets/video/subject-primate.mp4",
      videoPoster: "assets/video/subject-primate.jpg",
      links: { play: "", code: "" }
    },
    {
      title: "B.A. Noire",
      tagline: "Point & click 2D de detectives por las calles de Buenos Aires.",
      context: "UADE · Primer año",
      status: "Prototipo",
      team: "Equipo de 3",
      role: "Programación",
      description: "El detective Plomo Baretta viaja desde Italia para resolver una investigación privada encargada por un contratista anónimo. Recorre Buenos Aires buscando pistas para acusar al culpable de cada crimen, a lo largo de 3 capítulos.",
      highlights: [
        "Puzzles point & click repartidos en 3 capítulos",
        "Estética en blanco y negro con aire de cine noir",
        "Hecho en equipo para tres materias a la vez: Desarrollo de Juegos en Tiempo Real, Diseño de Interfaces y UX, y Diseño de Videojuegos"
      ],
      tags: ["Unity", "C#", "2D", "Point & click"],
      color: "#9a9a9a",
      cover: "assets/img/ba-noire/04.jpg",
      images: [
        "assets/img/ba-noire/04.jpg",
        "assets/img/ba-noire/02.jpg",
        "assets/img/ba-noire/03.jpg",
        "assets/img/ba-noire/05.jpg",
        "assets/img/ba-noire/06.jpg",
        "assets/img/ba-noire/08.jpg"
      ],
      video: "",
      links: { play: "https://franpe.itch.io/ba-noire", code: "" }
    },
    {
      title: "HandMade AnotherTypicalZombieGame",
      tagline: "Shooter top-down hecho desde cero en C#, sin motor de juego.",
      context: "UADE · Paradigmas de la Programación",
      status: "Publicado",
      team: "Equipo de 2",
      role: "Programación",
      description: "Hay que sobrevivir 5 minutos a una horda de zombies que aparecen cada vez más seguido: si te agarran tres a la vez perdés, y si aguantás hasta que el reloj llega a cero, ganás. Tiene power-ups de munición, disparo rápido y velocidad.",
      highlights: [
        "Sin Unity ni Godot: bucle de juego, colisiones y movimiento de los zombies programados a mano",
        "Sistema de balas con reciclado (object pool) y fábrica de enemigos",
        "HUD, power-ups y premio por precisión: 10 de 10 disparos dan 5 balas extra"
      ],
      tags: ["C#", "SDL", "2D", "Sin motor"],
      color: "#c0392b",
      cover: "assets/img/zombie/01.jpg",
      images: [
        "assets/img/zombie/01.jpg",
        "assets/img/zombie/03.jpg",
        "assets/img/zombie/02.jpg",
        "assets/img/zombie/04.jpg"
      ],
      video: "A6lBYsTU2gI",
      links: { play: "https://franpe.itch.io/handmade-anothertypicalzombiegame", code: "" }
    },
    {
      title: "Lost Between Walls",
      tagline: "Survival horror en primera persona: escapar de un laberinto mientras el hambre, las trampas y lo que vive adentro te persiguen.",
      context: "UADE · Desarrollo Avanzado de Videojuegos",
      status: "Publicado",
      team: "Equipo de 5",
      role: "Programación",
      description: "Prototipo de survival horror y puzzles en 3D. El jugador aparece en un bosque rodeado de paredes gigantes, con la entrada a un laberinto como única salida. Para escapar tiene que manejar el hambre y sobrevivir a las trampas y enemigos que esconde el laberinto.",
      highlights: [
        "Primer proyecto en Unreal Engine 5: el objetivo era aprender el motor desde cero",
        "Supervivencia con barra de hambre, trampas y enemigos dentro del laberinto",
        "Mezcla de exploración, puzzles y terror en primera persona"
      ],
      tags: ["Unreal Engine", "3D", "Primera persona", "Survival horror"],
      color: "#8a7a5c",
      cover: "assets/img/lost-between-walls/02.jpg",
      images: [
        "assets/img/lost-between-walls/02.jpg",
        "assets/img/lost-between-walls/06.jpg",
        "assets/img/lost-between-walls/04.jpg",
        "assets/img/lost-between-walls/01.png",
        "assets/img/lost-between-walls/05.png",
        "assets/img/lost-between-walls/03.png"
      ],
      video: "",
      links: { play: "https://franpe.itch.io/lost-between-walls", code: "" }
    },
    {
      title: "Prisión 1984",
      tagline: "Nivel de escape de una prisión distópica inspirada en «1984», después de un motín.",
      context: "UADE · Level Design II",
      status: "Publicado",
      team: "Individual",
      role: "Level design completo",
      description: "Despertás en tu celda con el agua por la cintura. Mientras estabas bajo sedantes, un motín destrozó la prisión: las cerraduras están rotas, el sistema eléctrico no funciona y el personal huyó. Hay que explorar lo que queda en pie, conseguir las tarjetas de acceso y escapar.",
      highlights: [
        "Narrativa ambiental: no hay diálogos, lo que pasó se descubre recorriendo el nivel",
        "Iluminación, sonido y materiales trabajados para construir la atmósfera",
        "Combina la prisión de la novela de Orwell con la estructura de un mapa de Dead Island"
      ],
      tags: ["Unreal Engine", "3D", "Level design"],
      color: "#a3202a",
      cover: "assets/img/prision-1984/01.jpg",
      images: [
        "assets/img/prision-1984/01.jpg",
        "assets/img/prision-1984/06.jpg",
        "assets/img/prision-1984/02.jpg",
        "assets/img/prision-1984/03.jpg",
        "assets/img/prision-1984/04.jpg",
        "assets/img/prision-1984/05.jpg"
      ],
      video: "",
      links: { play: "https://franpe.itch.io/prision-1984", code: "" }
    },
    {
      title: "HandMade PONG",
      tagline: "Pong clásico programado desde cero en C++, sin motor de juego.",
      context: "UADE · Introducción a la Programación",
      status: "Publicado",
      team: "Individual",
      role: "Desarrollo completo",
      description: "Hay 30 segundos para hacerle más puntos que la máquina. La paleta rival sigue la pelota, así que no te la deja fácil. Fue el primer proyecto de la carrera, en primer año.",
      highlights: [
        "Sin Unity ni Godot: bucle de juego, movimiento de la pelota y rebotes escritos a mano",
        "Colisiones con las paletas, puntaje y temporizador de 30 segundos",
        "IA del rival que sigue la pelota"
      ],
      tags: ["C++", "SDL2", "2D", "Sin motor"],
      color: "#e8e8e8",
      cover: "assets/img/pong/cover.png",
      images: [
        "assets/img/pong/cover.png",
        "assets/img/pong/01.png",
        "assets/img/pong/03.png",
        "assets/img/pong/02.jpg",
        "assets/img/pong/04.jpg"
      ],
      video: "",
      links: { play: "https://franpe.itch.io/handmade-pong", code: "" }
    },
    {
      title: "IA - Collect the Trash",
      tagline: "Sigilo en primera persona: juntar la comida del bosque y llevarla al tacho sin que te atrapen los locales.",
      context: "UADE · Inteligencia Artificial",
      status: "Publicado",
      team: "Individual",
      role: "Desarrollo completo",
      description: "Juego de sigilo en primera persona hecho en Unity para la materia Inteligencia Artificial de segundo año. Hay que recorrer el bosque, juntar la comida que está tirada en el piso y llevarla al tacho de basura del final del camino sin que te atrapen los locales. Los pinos sirven para esconderse: si te agarran, perdés.",
      highlights: [
        "Enemigos con máquina de estados: patrullan, te persiguen cuando te ven y, si te pierden, te buscan unos segundos antes de volver a su ruta",
        "Detección por línea de visión: rango, cono de visión de 90° y raycast contra obstáculos, por eso los árboles sirven de cobertura",
        "Steering behaviors (Seek, Arrive, Flee, Wander y Pursue) y rutas de patrulla con waypoints",
        "Pathfinding con A* y Dijkstra sobre un grafo de nodos, con una cola de prioridad propia"
      ],
      tags: ["Unity", "C#", "3D", "Primera persona", "IA"],
      color: "#5e8f4a",
      cover: "assets/img/collect-the-trash/03.png",
      images: [
        "assets/img/collect-the-trash/03.png",
        "assets/img/collect-the-trash/01.png",
        "assets/img/collect-the-trash/02.png",
        "assets/img/collect-the-trash/04.png",
        "assets/img/collect-the-trash/cover.png"
      ],
      video: "",
      links: { play: "https://franpe.itch.io/ia-collect-the-trash", code: "" }
    },
    {
      title: "Cold As Ice",
      tagline: "Plataformero 3D en tercera persona: un cubito de hielo que se derrite mientras vuelve a casa.",
      context: "UADE · Programación de Sistemas de Juego",
      status: "Prototipo",
      team: "Equipo de 3",
      role: "Programación",
      description: "El jugador es un cubito de hielo que tiene que cruzar la casa hasta la hielera que alguna vez fue su hogar. En el camino salta, se desliza y esquiva obstáculos mientras se derrite por el calor del piso y de los objetos.",
      highlights: [
        "Hecho para aprender patrones de programación aplicados en Unity",
        "El tiempo es el recurso principal: el personaje se derrite con el calor del escenario",
        "Movimiento de plataformas con salto, deslizamiento y obstáculos"
      ],
      tags: ["Unity", "C#", "3D", "Plataformas"],
      color: "#3a8fd6",
      cover: "assets/img/cold-as-ice/01.jpg",
      images: [
        "assets/img/cold-as-ice/01.jpg",
        "assets/img/cold-as-ice/03.jpg",
        "assets/img/cold-as-ice/04.jpg",
        "assets/img/cold-as-ice/02.jpg"
      ],
      video: "Stb_8RPkQbA",
      links: { play: "https://franpe.itch.io/cold-as-ice", code: "" }
    },
    {
      title: "Coeur de Mime",
      tagline: "Plataformero 2D de memoria: un mimo que solo ve el camino gracias a su maquillaje.",
      context: "UADE · Producción de Videojuegos",
      status: "Prototipo",
      team: "Equipo de 5",
      role: "Programación",
      description: "Gastón, un mimo parisino, recorre las calles de París y las catacumbas juntando flores para regalarle un ramo a su amada. Su maquillaje le deja ver paredes y plataformas invisibles, pero el agua se lo borra: ahí el jugador depende de su memoria para recordar el camino.",
      highlights: [
        "Mecánica central de percepción: las plataformas siguen ahí aunque no se vean",
        "Proyecto en equipo con roles divididos como en un estudio de la industria",
        "Niveles en las calles de París y en las catacumbas"
      ],
      tags: ["Unity", "C#", "2D", "Plataformas"],
      color: "#d9a441",
      cover: "assets/img/coeur-de-mime/06.jpg",
      images: [
        "assets/img/coeur-de-mime/06.jpg",
        "assets/img/coeur-de-mime/03.jpg",
        "assets/img/coeur-de-mime/04.jpg",
        "assets/img/coeur-de-mime/05.jpg",
        "assets/img/coeur-de-mime/01.jpg",
        "assets/img/coeur-de-mime/02.jpg",
        "assets/img/coeur-de-mime/07.jpg",
        "assets/img/coeur-de-mime/08.jpg"
      ],
      video: "uoDC5HrfKnc",
      links: { play: "https://franpe.itch.io/coeur-de-mime", code: "" }
    },
    {
      title: "Mi última primavera",
      tagline: "Una historia de Twine llevada a 3D, contada desde adentro de la mente de su protagonista.",
      context: "Taller de Videojuegos",
      status: "En desarrollo",
      team: "",
      role: "Programación",
      description: "Olga es una maestra a punto de jubilarse que empieza a perder la memoria. El jugador vive sus últimos días de clase desde una consola al estilo Intensamente: lee cada momento, elige con botones físicos y la historia se ramifica hacia distintos finales.",
      highlights: [
        "Intérprete propio de historias de Twine (Harlowe): variables, condicionales y saltos entre pasajes",
        "Minijuego de memoria tipo Simon: si fallás la secuencia, el texto aparece con palabras olvidadas",
        "El aula se ve desde los ojos de Olga en una pantalla ovalada, con render texture y un shader propio",
        "Diálogos que se escriben letra por letra y cámara que viaja entre vistas"
      ],
      tags: ["Unity", "URP", "3D", "Narrativa"],
      color: "#8b6cff",
      cover: "assets/img/mi-ultima-primavera/01.jpg",
      images: [
        "assets/img/mi-ultima-primavera/01.jpg",
        "assets/img/mi-ultima-primavera/02.jpg",
        "assets/img/mi-ultima-primavera/03.jpg"
      ],
      video: "",
      links: { play: "", code: "" }
    },
    {
      title: "Realidades Alteradas",
      tagline: "Exploración en primera persona inspirada en los Backrooms.",
      context: "Realidades Extendidas",
      status: "En desarrollo",
      team: "En equipo",
      role: "Sistema de interacciones",
      description: "Un recorrido por pasillos que parecen no terminar nunca, donde la luz importa tanto como lo que se esconde en la oscuridad. Me encargo de todo lo que el jugador puede agarrar, prender o abrir.",
      highlights: [
        "Sistema de interacción extensible con interfaces: sumar un objeto nuevo no obliga a tocar el código del jugador",
        "Linterna que se levanta del piso, interruptores de luz, ventilador de techo y puertas con bisagra",
        "Cámara de video que, al agarrarla, muestra un HUD de grabación con efectos de post-procesado"
      ],
      tags: ["Unity", "3D", "Primera persona", "Terror"],
      color: "#2bb3a3",
      cover: "",
      images: [],
      video: "",
      links: { play: "", code: "" }
    }
  ],

  skills: [
    {
      category: "Lenguajes",
      items: [
        { name: "C#", detail: "Gameplay, sistemas de interacción y herramientas en Unity" },
        { name: "Blueprints", detail: "Scripting visual de gameplay en Unreal Engine" }
      ]
    },
    {
      category: "Motores y librerías",
      items: [
        { name: "Unity 6", detail: "URP, Input System, Render Textures y cinemáticas" },
        { name: "Unreal Engine", detail: "Gameplay y level design en 3D" },
        { name: "Photon Fusion 2", detail: "Multijugador en red para Unity" },
        { name: "SDL / SDL2", detail: "Ventana, render, input y audio a bajo nivel" }
      ]
    },
    {
      category: "Herramientas",
      items: [
        { name: "Git y GitHub", detail: "Control de versiones y trabajo en equipo" },
        { name: "Visual Studio", detail: "Desarrollo y depuración en C#" },
        { name: "Twine", detail: "Narrativa ramificada en formato Harlowe" }
      ]
    },
    {
      category: "Habilidades blandas",
      items: [
        { name: "Trabajo en equipo", detail: "Proyectos compartidos con repositorio y tareas repartidas" },
        { name: "Comunicación", detail: "Presentaciones y defensas orales de proyectos" },
        { name: "Aprendizaje rápido", detail: "Una herramienta nueva en cada proyecto" }
      ]
    }
  ],

  education: [
    {
      period: "En curso",
      title: "Licenciatura en Desarrollo de Videojuegos",
      place: "UADE · Universidad Argentina de la Empresa",
      detail: "Programación, diseño de niveles, realidad virtual y desarrollo de juegos en equipo."
    }
  ],

  experience: [],

  about: {
    paragraphs: [
      "Me gusta crear juegos de punta a punta: pensar una mecánica, programarla y ajustarla hasta que se sienta bien en las manos de quien juega.",
      "Por eso me muevo entre la programación y el game design. Trabajé en Unity y en Unreal, en 2D y en 3D, y uso cada proyecto para sumar algo nuevo: multijugador en red, narrativa ramificada, level design o juegos programados sin motor.",
      "Me adapto bien a cada equipo: puedo sumarme a una tarea y acompañar el ritmo del grupo, o tomar la iniciativa y liderar cuando hace falta, organizando el trabajo y coordinando al resto para que el proyecto avance.",
      "Busco sumarme a un estudio donde pueda seguir creciendo en programación y game design."
    ],
    learning: ["Shaders", "Netcode", "Optimización"],
    languages: ["Español · nativo", "Inglés · intermedio"],
    hobbies: []
  }
};
