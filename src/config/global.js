export default {
  global: {
    Name: 'Derechos fundamentales del trabajo',
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
            titulo: 'Constitución Política de Colombia',
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
        download: 'downloads/CF1_DU.zip',
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
      tema: 'Trabajo, sociedad y dignidad',
      referencia:
        'García Calero, C. A. (2023, junio 8). ¿Qué son los derechos fundamentales en el trabajo?',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=sDEwRetsBCw',
    },
    {
      tema: 'Desarrollo para una vida digna',
      referencia:
        'Canal Capital. (2021, June 30). ¿Qué significa el Estado Social de Derecho? | La promesa congelada | Especiales Capital.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=EY-woQB8z8Q&t=35s',
    },
  ],
  glosario: [
    {
      termino: 'Acción de tutela',
      significado:
        'es la garantía constitucional que tiene toda persona a la protección judicial de sus derechos fundamentales a través de un recurso efectivo. La constitución señala claramente que: "la protección consistirá en una orden para aquél respecto de quien se solicita la tutela, actúe o se abstenga de hacerlo".',
    },
    {
      termino: 'Acción pública',
      significado:
        'se definen como acciones públicas, aquellas acciones jurídicas que las personas pueden presentar por su propia cuenta sin que medie necesariamente la representación de un abogado. Este tipo de acciones pueden ser elevadas por cualquier ciudadano, en las entidades de control y garantía de los derechos fundamentales.',
    },
    {
      termino: 'Activismo judicial territorial',
      significado:
        'consiste en una práctica específica de los grupos y las comunidades para promover el acceso a la justicia frente a vulneraciones de sus derechos, mediante la utilización de acciones públicas, y otros mecanismos de exigibilidad de los derechos. La movilización y la acción colectiva para la exigibilidad de los derechos es una de las prácticas que más crece en la demanda de derechos en América Latina, Estados Unidos y Europa, en el entendido que el derecho le pertenece a las personas y que las instituciones locales tienen la responsabilidad de protegerlos y garantizarlos.',
    },
    {
      termino: 'Derecho de petición',
      significado:
        'es aquel derecho que tiene toda persona individual o jurídica, grupo, organización o asociación para solicitar información, documentación, o reclamar ante las autoridades competentes (normalmente los gobiernos o entidades públicas), o ante quien se encuentre en estado de subordinación, como el empleador, por razones de interés público o particular, ya sea que se haga de forma individual, general o colectivo.',
    },
    {
      termino: 'Derecho laboral',
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
        'también conocidos como derechos de solidaridad o de los pueblos, contemplan cuestiones de carácter supranacional como el derecho a la paz y a un medio ambiente sano. Surgen como respuesta a la necesidad de cooperación entre las naciones y los distintos grupos que las integran. Comprende tres tipos de derechos: civiles y políticos; económicos, sociales y culturales; y de cooperación entre los pueblos. Pertenecen a los distintos grupos que conforman una nación y a las naciones entre sí. Su titular es el Estado, pero también pueden ser reclamados ante el propio Estado por los grupos pertenecientes al mismo, y ante otro Estado, en el caso de la comunidad internacional: de nación a nación.',
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
        'hace referencia a la igualdad en lo que a raza, origen o religión se refiere, en un mundo en el que las oleadas migratorias son el pan de cada día. De hecho, el objetivo final es que cualquier trabajador tenga los mismos derechos en una empresa o institución sea cual sea su origen, sus creencias o su sexo/sexualidad. En conclusión, la equidad laboral es aquello que debería regir los puestos de trabajo de todos los ciudadanos del mundo.',
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
        'Cardona, H., & Vera, C. (2003). Trabajo y sociedad: Dimensiones, conflictos y perspectivas.',
      link: '',
    },
    {
      referencia:
        'Colombia. Constitución Política de 1991. Diario Oficial No. 44.601.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=4125.',
    },
    {
      referencia:
        'Colombia. Código Sustantivo del Trabajo. Decreto Ley 2351 de 1965.',
      link: '',
    },
    {
      referencia: 'Colombia. Ley 23 de 1991.',
      link: '',
    },
    {
      referencia: 'Colombia. Ley 446 de 1998.',
      link: '',
    },
    {
      referencia: 'Colombia. Ley 640 de 2001.',
      link: '',
    },
    {
      referencia: 'Colombia. Decreto 1818 de 1998.',
      link: '',
    },
    {
      referencia: 'Colombia. Decreto 2511 de 1998.',
      link: '',
    },
    {
      referencia:
        'Corte Constitucional de Colombia. (1992). Sentencia T-401 de 1992.',
      link: 'https://www.corteconstitucional.gov.co/',
    },
    {
      referencia:
        'Didácticas para la ciudadanía laboral. (2011). Escuela Nacional Sindical.',
      link: '',
    },
    {
      referencia:
        'Escuela Nacional Sindical. (2011). La ciudadanía laboral y los derechos del trabajo.',
      link: '',
    },
    {
      referencia:
        'García. (1987). Justicia Constitucional y Estado de Derecho.',
      link: '',
    },
    {
      referencia: 'Marquardt. (2009). Democracia y Estado Constitucional.',
      link: '',
    },
    {
      referencia:
        'Organización Internacional del Trabajo. (1919/2023). Acerca de la OIT.',
      link: 'https://www.ilo.org/global/about-the-ilo/lang--es/index.htm',
    },
    {
      referencia:
        'Organización Internacional del Trabajo. (1976). Recomendación núm. 91 sobre contratos colectivos de trabajo.',
      link: 'https://www.ilo.org',
    },
    {
      referencia:
        'Organización Internacional del Trabajo. Convenio núm. 87: Derecho de sindicación (ratificado por Colombia).',
      link: '',
    },
    {
      referencia:
        'Organización Internacional del Trabajo. Convenio núm. 98: Derecho de negociación colectiva (ratificado por Colombia).',
      link: '',
    },
    {
      referencia: 'Ramírez. (2015). Trabajo protegido y dignidad humana.',
      link: '',
    },
    {
      referencia:
        'Wilensky, H. L. (1975). The welfare state and equality. University of California Press.',
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
          cargo: 'Evaluadora para contenidos inclusivos y accesibles',
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
          nombre: 'Johann Sebastián Teran Carvajal',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Yineth González Quintero',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Erika Fernanda Mejía Pinzón',
          cargo: 'Evaluadora para contenidos inclusivos y accesibles',
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
