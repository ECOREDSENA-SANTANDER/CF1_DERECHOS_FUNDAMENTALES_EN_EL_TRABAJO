export default {
  global: {
    Name: 'Derechos fundamentales en el trabajo',
    Description:
      'En los distintos procesos del desarrollo de la humanidad, el trabajo ha ejercido un papel determinante, como factor clave en la construcción de las relaciones sociales, de habilidades individuales y colectivas, de la promoción de la dignidad humana.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Trabajo, sociedad y dignidad humana',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'La democracia',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Derechos humanos',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Constitución política de Colombia',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'El trabajo como derecho humano fundamental',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Los derechos del trabajo y en el trabajo',
            hash: 't_1_5',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Ciudadanía laboral',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Mecanismos de materialización de los derechos fundamentales',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Desarrollo para una vida digna',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '1. Trabajo, sociedad y dignidad',
      referencia:
        'CARLOS ARTURO GARCÍA CALERO. (2023, June 8). ¿Qué son los derechos fundamentales en el trabajo [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=sDEwRetsBCw',
    },
    {
      tema: '4. Desarrollo para una vida digna',
      referencia:
        'Canal Capital. (2021, June 30). ¿Qué significa el Estado Social de Derecho? | La promesa congelada | Especiales Capital [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=EY-woQB8z8Q&t=35s',
    },
  ],
  glosario: [
    {
      termino: 'Acción de Tutela',
      significado:
        'es la garantía constitucional que tiene toda persona a la protección judicial de sus derechos fundamentales a través de un recurso efectivo. La constitución señala claramente que: "La protección consistirá en una orden para aquél respecto de quien se solicita la tutela, actúe o se abstenga de hacerlo".',
    },
    {
      termino: 'Acción Pública',
      significado:
        'se definen como acciones públicas, aquellas acciones jurídicas que las personas pueden presentar por su propia cuenta sin que medie necesariamente la representación de un abogado. Este tipo de acciones pueden ser elevadas por cualquier ciudadano, en las entidades de control y garantía de los derechos fundamentales.',
    },
    {
      termino: 'Activismo Judicial Territorial',
      significado:
        'consiste en una práctica específica de los grupos y las comunidades para promover el acceso a la justicia frente a vulneraciones de sus derechos, mediante la utilización de acciones públicas, y otros mecanismos de exigibilidad de los derechos. La movilización y la acción colectiva para la exigibilidad de los derechos es una de las prácticas que más crece en la demanda de derechos en América Latina, Estados Unidos y Europa, en el entendido que el derecho le pertenece a las personas y que las instituciones locales tienen la responsabilidad de protegerlos y garantizarlos.',
    },
    {
      termino: 'Derecho de petición',
      significado:
        'es aquel derecho que tiene toda persona individual o jurídica, grupo, organización o asociación para solicitar información, documentación, o reclamar ante las autoridades competentes -normalmente los gobiernos o entidades públicas-, o ante quien se encuentre en estado de subordinación, como el empleador, por razones de interés público o particular, ya sea que se haga de forma individual, general o colectivo.',
    },
    {
      termino: 'Derecho Laboral',
      significado:
        'también conocido como derecho del trabajo o derecho social, es una rama del derecho cuyos principios y normas jurídicas tienen por objeto la tutela del trabajo humano realizado en forma libre, por cuenta ajena, en relación de dependencia y a cambio de una contraprestación.',
    },
    {
      termino: 'Derechos de solidaridad o de los pueblos',
      significado:
        'también llamados derechos de los pueblos, son las exigencias más recientes en el tiempo, son derechos que optimizan el desarrollo de una persona en un ambiente apropiado. Son caracterizados porque se vinculan con la solidaridad, cubren a pueblos o la humanidad entera y no solamente a individuos, contemplan al ser humano en su universalidad y buscan garantías para la humanidad como un todo. Según la clasificación de las tres generaciones de derechos humanos, se los denomina como derechos de tercera generación.',
    },
    {
      termino: 'Derechos de tercera generación',
      significado:
        'también conocidos como Derechos de Solidaridad o de los Pueblos contemplan cuestiones de carácter supranacional como el derecho a la paz y a un medio ambiente sano. Surgen como respuesta a la necesidad de cooperación entre las naciones y los distintos grupos que las integran. Comprende tres tipos de derechos: civiles y políticos; económicos, sociales y culturales; y de cooperación entre los pueblos. Pertenecen a los distintos grupos que conforman una nación y a las naciones entre sí. Su titular es el Estado, pero también pueden ser reclamados ante el propio Estado por los grupos pertenecientes al mismo, y ante otro Estado, en el caso de la comunidad internacional: de nación a nación.',
    },
    {
      termino: 'Derechos de territorialidad',
      significado:
        'hacen relación a los derechos de los pueblos indígenas, negritudes, raizales, palenqueros, en estos derechos se establece el reconocimiento y el respeto de las costumbres, las tradiciones y los sistemas de tenencia de la tierra de estos pueblos. En el caso de Colombia, como nación multiétnica y pluricultural, se ha establecido que estas comunidades tienen derecho a decidir sobre sus territorios. En este sentido, el Estado debe tomar las medidas necesarias para determinar las tierras ocupadas y garantizar la protección efectiva de sus derechos de propiedad y posesión.',
    },
    {
      termino: 'Desarrollo sostenible',
      significado:
        'se define como la satisfacción de las necesidades actuales sin comprometer la capacidad de las futuras generaciones para satisfacer las suyas. Este principio es fundamental para el desarrollo mundial a largo plazo y se basa en tres pilares: el desarrollo económico, el desarrollo social y la protección del medio ambiente, buscando un equilibrio entre ellos.',
    },
    {
      termino: 'Dignidad de los pueblos',
      significado:
        'variable construida a partir del reconocimiento de la materialización de los derechos y la línea de redistribución de los mismos asociada a la equidad, igualdad e identidad en los derechos fundamentales en el trabajo.',
    },
    {
      termino: 'Equidad laboral',
      significado:
        'hace referencia a la igualdad en lo que a raza, origen o religión se refiere, en un mundo en el que las oleadas migratorias son el pan de cada día. De hecho, el objetivo final es que cualquier trabajador tenga los mismos derechos en una empresa o institución sea cual sea su origen, sus creencias o su sexo/ sexualidad. En conclusión, la equidad laboral es aquello que debería regir los puestos de trabajo de todos los ciudadanos del mundo.',
    },
    {
      termino: 'Identidad cultural',
      significado:
        'es un conjunto de valores, tradiciones, símbolos, creencias y modos de comportamiento que funcionan como elementos dentro de un grupo social y que actúan para que los individuos que lo forman puedan fundamentar su sentimiento de pertenencia que hacen parte a la diversidad al interior de las mismas en respuesta a los intereses, códigos, normas y rituales que comparten dichos grupos dentro de la cultura dominante.',
    },
    {
      termino: 'Identidad nacional',
      significado:
        'identidad de una persona que se relaciona con la nación a la cual pertenece, sea esta por haber nacido en tal territorio, por formar parte de una comunidad o por sentir lazos de pertenencia con las costumbres y tradiciones de tal nación.',
    },
    {
      termino: 'Igualdad laboral',
      significado:
        'hace referencia a que todos los trabajadores son iguales ante la ley, gozando de las mismas protecciones y garantías, lo que elimina cualquier distinción jurídica basada en la naturaleza de su trabajo, su forma o retribución, salvo excepciones legales.',
    },
    {
      termino: 'Libertad sindical',
      significado:
        'es un derecho fundamental que permite a los trabajadores y sus organizaciones agruparse para defender sus intereses comunes. Incluye aspectos individuales y colectivos, garantizando la formación de sindicatos y reconociendo pilares como organización, regulación, representación, negociación y huelga. Este derecho humano fundamental, protegido por el artículo 39 de la Constitución Colombiana, asegura que los trabajadores puedan crear y afiliarse a sindicatos sin interferencias del Estado o empleadores.',
    },
    {
      termino: 'Normas Internacionales del Trabajo',
      significado:
        'son instrumentos jurídicos elaborados por los mandantes (gobiernos, empleadores y trabajadores) de la Organización Internacional del Trabajo, en los que se sientan principios y derechos básicos en el trabajo.',
    },
    {
      termino: 'Sindicato',
      significado:
        'asociación de trabajadores o empleadores que defiende sus intereses sociales, económicos y profesionales. Negocian en nombre de sus afiliados sobre salarios y condiciones laborales, buscando el bienestar de sus miembros y fomentando un diálogo social entre empleadores y trabajadores.',
    },
  ],
  referencias: [
    {
      referencia:
        'Antunes, R. (2009). Los sentidos del trabajo: Ensayo sobre la afirmación y la negación del trabajo. Buenos Aires: Herramienta.',
      link: '',
    },
    {
      referencia:
        'Asamblea Nacional Constituyente. (1991). Constitución Política de Colombia. Diario Oficial No. 40.965.',
      link: '',
    },
    {
      referencia:
        'Bobbio, N. (1987). El futuro de la democracia. México: Fondo de Cultura Económica.',
      link: '',
    },
    {
      referencia:
        'Cardona, C., & Vera, C. (2003). Modelo de producción, mundo del trabajo y cambio cultural. En C. Cardona & C. Vera (Eds.), Trabajo, sociedad y dignidad humana (pp. 13–36). Editorial Anthropos.',
      link: '',
    },
    {
      referencia:
        'Castel, R. (1997). La metamorfosis de la cuestión social: una crónica del salariado. Paidós.',
      link: '',
    },
    {
      referencia:
        'Cepeda Espinosa, M. J. (2004). Derecho constitucional colombiano: Una introducción crítica. Bogotá: Universidad de los Andes, Facultad de Derecho.',
      link: '',
    },
    {
      referencia:
        'Constitución Política de Colombia. (1991). Asamblea Nacional Constituyente. Recuperado de',
      link: 'https://www.constitucioncolombia.com/',
    },
    {
      referencia:
        'Corte Constitucional. (1992). Sentencia T-401 de 1992. Magistrado ponente: Eduardo Cifuentes Muñoz. Recuperado de',
      link:
        'https://img.lpderecho.pe/wp-content/uploads/2022/05/Sentencia-T-401-1992-Colombia-LPDerecho.pdf',
    },
    {
      referencia:
        'Dahl, R. A. (2001). La democracia: Una guía para los ciudadanos. Madrid: Taurus.',
      link: '',
    },
    {
      referencia:
        'Federici, S. (2013). El patriarcado del salario. Traficantes de Sueños.',
      link: '',
    },
    {
      referencia:
        'Feregrino Basurto, M. A. (2015). TRABAJO y CIUDADANÍA. In Iberofórum. Revista De Ciencias Sociales De La Universidad Iberoamericana: Vol. Año X (Issue No. 19, pp. 29–62) [Journal-article]. Universidad Iberoamericana A.C., Ciudad de México.',
      link:
        'https://ibero.mx/iberoforum/19/pdf/ESPANOL/2.%20NOTAS%20PARA%20EL%20DEBATE%20FEREGRINO%20NO.%2019.pdf',
    },
    {
      referencia:
        'Kant, I. (1785/2007). Fundamentación de la metafísica de las costumbres (M. García Morente, Trad.). México: Ediciones Coyoacán. (Obra original publicada en 1785)',
      link: '',
    },
    {
      referencia:
        'López, D., & Rojas, A. (2018). Derechos colectivos del trabajo en Colombia: avances y desafíos. Revista Derecho del Trabajo, 35(2), 45–62.',
      link: '',
    },
    {
      referencia:
        'Mallarino, C. (2005). Relaciones laborales y principios del derecho del trabajo. Universidad del Rosario.',
      link: '',
    },
    {
      referencia:
        'Marshall, T. H. (1998). Ciudadanía y clase social. Madrid: Alianza Editorial.',
      link: '',
    },
    {
      referencia:
        'Nussbaum, M., & Sen, A. (Eds.). (1996). La calidad de vida (1.ª ed., traducción de Victoria Camps). Fondo de Cultura Económica. (Obra original publicada en 1993)',
      link: '',
    },
    {
      referencia:
        'Organización Internacional del Trabajo (OIT). (2019). La cultura del trabajo decente.',
      link: 'https://www.ilo.org',
    },
    {
      referencia:
        'Organización Internacional del Trabajo (OIT). (2019). Entornos de trabajo saludables y productivos.',
      link: 'https://www.ilo.org',
    },
    {
      referencia:
        'Organización Internacional del Trabajo (OIT). (2021). La libertad sindical y la negociación colectiva: Principios y normas internacionales del trabajo.',
      link: 'https://www.ilo.org',
    },
    {
      referencia:
        'Organización Internacional del Trabajo. (s. f.). Los derechos laborales son derechos humanos. Recuperado de',
      link:
        'https://www.ilo.org/es/resource/article/los-derechos-laborales-son-derechos-humanos',
    },
    {
      referencia:
        'Procuraduría General de la Nación. (s.f.). Plan Estratégico Nacional en Derechos Humanos y Derecho Internacional Humanitario (PLANEDH). Bogotá, Colombia. Recuperado de',
      link: 'https://www.procuraduria.gov.co',
    },
    {
      referencia:
        'Ramírez, D. (2015). Trabajo decente y cultura del trabajo: Claves para una ciudadanía laboral en Colombia. Universidad Nacional de Colombia.',
      link: '',
    },
    {
      referencia:
        'Real Academia Española. (s. f.). Democracia. En Diccionario de la lengua española (23.ª ed.). Recuperado de',
      link: 'https://dle.rae.es/democracia',
    },
    {
      referencia: 'Sartori, G. (1998). ¿Qué es la democracia? México: Taurus.',
      link: '',
    },
    {
      referencia:
        'Sen, A. (2000). Desarrollo y libertad (1.ª ed., traducción de Joaquín Chamorro Mielke). Editorial Planeta.',
      link: '',
    },
    {
      referencia:
        'UNESCO. (2020). Educación para la ciudadanía mundial: prepararse para el futuro.',
      link: 'https://www.unesco.org',
    },
    {
      referencia:
        'Uprimny, R. (2011). La tutela: origen, desarrollos y desafíos. Bogotá: Dejusticia.',
      link: '',
    },
    {
      referencia:
        'Vásquez, M., & Molina, D. (2020). Ciudadanía y acceso a la justicia: estrategias pedagógicas para la divulgación de derechos. Bogotá: Universidad Nacional de Colombia.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Fredy Gabriel Martínez Loza',
          cargo: 'Experto temático',
          centro:
            'Centro de Desarrollo Agroempresarial de Chía - Regional Cundinamarca',
        },
        {
          nombre: 'Josué Dario Niño Riaño',
          cargo: 'Experto temático',
          centro:
            'Centro de Desarrollo Agroempresarial de Chía - Regional Cundinamarca',
        },
        {
          nombre: 'José Adriano Valentín',
          cargo: 'Experto temático',
          centro:
            'Centro de Desarrollo Agroempresarial de Chía - Regional Cundinamarca',
        },
        {
          nombre: 'Andrea Ardila Chaparro',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yazmin Rocio Figueroa Pacheco',
          cargo: 'Diseñadora de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Pedro Alonso Bolivar González',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: '',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: ' ',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: ' ',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
