<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Ciudadanía laboral

    .bloque-texto-g.color-secundario.p-3.p-lg-5.p-md-4.mb-5(data-aos="fade-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Según Alonso (como se citó en Escuela Nacional Sindical, 2011), la ciudadanía laboral, entendida como el reconocimiento de los derechos laborales y el trabajo como eje de la vida social, económica y política, implica la integración del conflicto social y de la ciudadanía total de manera orgánica. En esta perspectiva, la ciudadanía adquiere un matiz de demanda, lucha y participación activa de los trabajadores y trabajadoras en la sociedad (Alonso, 2007, como se citó en Escuela Nacional Sindical, 2011).

    .tarjeta.color-acento-contenido.p-4.mb-5(data-aos="fade-right")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/tema1/pdf.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-2 Anexo 3. Trabajo y ciudadanía
              p.mb-0 Para profundizar esta temática, le invitamos a consultar el siguiente documento titulado #[b “Trabajo y ciudadanía”.]
            .col-sm-auto
              a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo3_TRABAJO_Y_CIUDADANIA.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download

    .titulo.mb-5.ps-2.pe-2.pe-lg-2.ps-lg-5.pe-md-0.ps-md-5(data-aos="fade-right")
      img(src='@/assets/curso/tema1/18.svg', alt='Imagen decorativa')
      h3.mb-0.mx-4.text-white Función social del trabajo

    .row.justify-content-center.align-items-stretch.mb-lg-5.mb-4
      .col-lg-8.pe-lg-0
        .p-4.h-100.p-lg-4.d-flex.align-content-center.flex-wrap.bg2.rw2
          p.mb-4.my-1.mx-lg-4 Para Ramírez (2015), los derechos relacionados con el trabajo se entienden como la relación transformadora entre las personas, el mundo, la naturaleza y el entorno. En este sentido, la cotidianidad está configurada en gran medida por el trabajo y, sobre todo, por las condiciones de protección o desprotección en las que este se realiza.
          p.mb-3.mx-lg-4 Las condiciones laborales guardan una estrecha relación con los principios de justicia social y paz mundial, así como con las necesidades humanas y las posibilidades de autorrealización. En consecuencia, el trabajo protegido se vincula directamente con la dignidad humana, ya que crea las condiciones materiales para vivir con bienestar, habilita escenarios para la realización personal conforme a un proyecto de vida deseable y, finalmente, contribuye a la democracia y a la igualdad. Todo ello es posible en la medida en que el trabajo se desarrolle en ambientes participativos, respetuosos de la diferencia y libres de discriminación.
      .col-lg-4.mb-4.mb-lg-0.ps-lg-0
        figure.col-9.m-auto.col-md-7.col-lg-12
          img.d-none.d-lg-block(src="@/assets/curso/tema2/3.svg")
    
    .titulo1.mb-5.ps-2.pe-2.pe-lg-2.ps-lg-5.pe-md-0.ps-md-5(data-aos="fade-right")
      img(src='@/assets/curso/tema1/18.svg', alt='Imagen decorativa')
      h3.mb-0.mx-4.text-white Derechos relacionados con el trabajo

    .row.fondo4.p-4.p-lg-5.p-md-4.mb-5(data-aos="fade-down")
      .col-lg-12
         
        p.mb-4 Los #[b derechos directamente relacionados con el trabajo] incluyen (Escuela Nacional Sindical, 2011):
        .row.justify-content.align-items-end.mb-0
          .col-lg-5
            .bg5.p-lg-5.p-4.mb-lg-0.mb-4
              ul.lista-ul.mb-0.my-2
                li.d-flex.mb-2
                  i.fas.fa-user
                  p.mb-0 El derecho al trabajo.
                li.d-flex.mb-2
                  i.fas.fa-user
                  p.mb-0 La abolición de la esclavitud, la servidumbre y cualquier forma de trata de personas, trabajo forzoso u obligatorio.
                li.d-flex.mb-2
                  i.fas.fa-user
                  p.mb-0 El ejercicio del trabajo en condiciones de libertad, legalidad y libre escogencia.
                li.d-flex.mb-2
                  i.fas.fa-user
                  p.mb-0 El acceso a servicios gratuitos de empleo.
                li.d-flex.mb-2
                  i.fas.fa-user
                  p.mb-0 La formación para el trabajo.
                li.d-flex.mb-2
                  i.fas.fa-user
                  p.mb-0 La protección frente al desempleo.
          .col-lg-3
            img.d-none.d-lg-block(src='@/assets/curso/tema2/4.svg' alt='')
          .col-lg-4
            img.mb-3.img-t.d-none.d-lg-block(src='@/assets/curso/tema2/5.svg' alt='')
            p.mb-0 De estos se derivan otros derechos vinculados a condiciones laborales justas y equitativas. Entre ellos se encuentran la regulación de la jornada laboral, la remuneración adecuada, las vacaciones y los tiempos de descanso, la protección en trabajos insalubres o peligrosos, la salud ocupacional, la afiliación a la seguridad social, la protección especial a mujeres y jóvenes, el derecho a la pensión, la licencia de maternidad y la estabilidad en el empleo. También destacan la irrenunciabilidad de los derechos básicos, la primacía de la realidad sobre las formalidades, y el derecho de asociación y sindicalización.

    .tarjeta.color-acento-contenido.p-4.mb-5(data-aos="fade-right")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/tema1/pdf.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-2 Anexo 4. Derechos laborales individuales
              p.mb-0 Para profundizar esta temática, le invitamos a consultar el siguiente documento titulado #[b “Derechos laborales individuales”.] 
            .col-sm-auto
              a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo4_Derechos_laborales_individuales.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download
    
    .bloque-texto-a.color-acento-contenido.p-3.p-md-4.p-lg-5.mb-5(data-aos="fade-right") 
      .row.m-0.align-items-center.justify-content-center
        .col-lg-8.mb-0.mb-lg-0
          .bloque-texto-a__texto.p-lg-4.p-3
            p.mb-lg-2.my-lg-1.my-0.mb-0.mx-lg-2 Una de las principales luchas de los movimientos sociales, encabezados por el movimiento de mujeres, ha sido el derecho al acceso laboral en condiciones de no discriminación y de igualdad de oportunidades, tanto en la remuneración como en el acceso a empleos dignos. A esta exigencia se suma la protección de las personas jóvenes trabajadoras y la erradicación del trabajo infantil. En este marco surge la Organización Internacional del Trabajo (OIT), fundada en 1919 como parte del Tratado de Versalles y convertida en 1946 en el primer organismo especializado de la ONU. La OIT, actualmente con 187 Estados miembros, constituye el único organismo tripartito que reúne a gobiernos, empleadores y trabajadores para elaborar normas, formular políticas y establecer programas que promuevan el trabajo decente para todos (OIT, 2023).
        .col-lg-4.mb-0
          img.d-none.d-lg-block(src='@/assets/curso/tema2/10.png', alt='')
    
    .tarjeta.color-acento-contenido.p-4.mb-5(data-aos="fade-right")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/tema1/video.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-2 La labor de la OIT
              p.mb-0 Para profundizar esta temática, le invitamos a consultar el siguiente video #[b “La labor de la OIT”.]
            .col-sm-auto
              a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=VzXwkDHtRXc" target="_blank")
                span Ir al sitio
                i.fas.fa-video
    
    .titulo2.mb-5.ps-2.pe-2.pe-lg-2.ps-lg-5.pe-md-0.ps-md-5(data-aos="fade-right")
      img(src='@/assets/curso/tema1/18.svg', alt='Imagen decorativa')
      h3.mb-0.mx-4.text-white Concepto de trabajo

    .bg10.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-5.col-md-8.col-12.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/tema2/2.jpg', alt='')
        .col-lg-7.pe-lg-4(data-aos="fade-left")
          .p-4
            p.mb-lg-4.my-lg-3.mb-0(data-aos="fade-left") El trabajo, además de ser una actividad creativa y transformadora que posibilita la autorrealización y fortalece las relaciones sociales, se expresa tanto en el ámbito productivo como en el reproductivo, y abarca distintas dimensiones: la social, que contribuye a la cohesión y a la interacción entre personas y comunidades; la económica, vinculada a la generación de ingresos y medios de subsistencia; la cultural, que transmite valores, saberes y tradiciones; la sexual, que refleja la división y roles de género en el mundo laboral; y la espacio-temporal, que organiza la vida de las personas en relación con los tiempos y lugares de trabajo (Didácticas para la ciudadanía laboral, 2011).

    .tarjeta.color-acento-contenido.p-4.mb-5(data-aos="fade-right")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/tema1/video.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-2 Evolución histórica del trabajo
              p.mb-0 Para profundizar esta temática, le invitamos a consultar el siguiente video #[b “Evolución histórica del trabajo”.]
            .col-sm-auto
              a.boton.color-acento-botones(href="https://zajuna.sena.edu.co/Repositorio/Titulada/institution/SENA/Transversales/OVA/Derechos_fundamentales_en_el_trabajo/CF1_Ejercicio_derechos_fundamentales_en_el_trabajo/downloads/Anexo-evolucion-historica-del-trabajo.mp4" target="_blank")
                span Ir al sitio
                i.fas.fa-video

    .titulo2.mb-5.ps-2.pe-2.pe-lg-2.ps-lg-5.pe-md-0.ps-md-5(data-aos="fade-right")
      img(src='@/assets/curso/tema1/18.svg', alt='Imagen decorativa')
      h3.mb-0.mx-4.text-white Convenio colectivo
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.col-md-9.col-10
        img.mb-lg-2.mb-4(src='@/assets/curso/tema2/11.png', alt='Imagen decorativa')
      .col-lg-7
        p.mb-0 El contrato colectivo de trabajo, también llamado convenio colectivo o convención colectiva de trabajo (CCT), es un acuerdo celebrado entre un sindicato o grupo de sindicatos y uno o varios empleadores, o entre estos y una organización representativa de los mismos; en ausencia de sindicato, puede ser suscrito por representantes elegidos y autorizados por los trabajadores, según la legislación nacional. Este contrato regula aspectos fundamentales de la relación laboral como salarios, jornada, descansos, vacaciones, licencias, condiciones de trabajo, capacitación, régimen de despidos y categorías profesionales, además de establecer reglas de relación entre sindicatos y empleadores, como la representación en los lugares de trabajo, los mecanismos de información y consulta, la cartelera sindical y las licencias o permisos para dirigentes sindicales (Didácticas para la ciudadanía laboral, 2011).
    
    .tarjeta.color-acento-contenido.p-4.mb-4(data-aos="fade-right")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/tema1/video.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-2 Convenio Colectivo del Trabajo | ABC del Derecho # 119
              p.mb-0 Para profundizar esta temática, le invitamos a consultar el siguiente video #[b “Convenio Colectivo del Trabajo | ABC del Derecho # 119.”]
            .col-sm-auto
              a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=11In33LDzzA" target="_blank")
                span Ir al sitio
                i.fas.fa-video
    
    .tarjeta.color-acento-contenido.p-4.mb-5(data-aos="fade-right")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/tema1/pdf.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-2 Anexo 5. Manual de Derechos Laborales
              p.mb-0 Para profundizar esta temática, le invitamos a consultar el siguiente documento titulado #[b “Manual de Derechos Laborales”.]
            .col-sm-auto
              a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo5_Manual_de_Derechos_Laborales.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download

    .titulo3.mb-5.ps-2.pe-2.pe-lg-2.ps-lg-5.pe-md-0.ps-md-5(data-aos="fade-right")
      img(src='@/assets/curso/tema1/18.svg', alt='Imagen decorativa')
      h3.mb-0.mx-4.text-white Libertad sindical

    .row.justify-content-center.align-items-stretch.mb-lg-5.mb-4
      .col-lg-8.pe-lg-0
        .p-4.h-100.p-lg-4.d-flex.align-content-center.flex-wrap.bg2.rw2
          p.mb-0.my-lg-1.mx-lg-4 La libertad sindical es un derecho humano y fundamental que garantiza a los trabajadores la posibilidad de defender y promover sus derechos para asegurar condiciones dignas de salario, vida y trabajo. Se considera un derecho humano por estar estrechamente ligado a la dignidad en el trabajo y porque constituye una condición indispensable para el progreso económico y social. Además, su incumplimiento por parte de empleadores o del Estado puede ser denunciado ante organismos nacionales e internacionales.
      .col-lg-4.mb-4.mb-lg-0.ps-lg-0
        figure.col-9.m-auto.col-md-7.col-lg-12
          img.d-none.d-lg-block(src="@/assets/curso/tema2/12.svg")
    
    .tarjeta.color-acento-contenido.p-4.mb-4(data-aos="fade-right")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/tema1/video.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-2 La libertad sindical, un derecho fundamental
              p.mb-0 Para profundizar esta temática, le invitamos a consultar el siguiente video #[b “La libertad sindical, un derecho fundamental.”]
            .col-sm-auto
              a.boton.color-acento-botones(href="https://zajuna.sena.edu.co/Repositorio/Titulada/institution/SENA/Transversales/OVA/Derechos_fundamentales_en_el_trabajo/CF1_Ejercicio_derechos_fundamentales_en_el_trabajo/downloads/Anexo-La-Libertad-Sindical-Un-derecho-fundamental(OIT).mp4" target="_blank")
                span Ir al sitio
                i.fas.fa-video

    .tarjeta.color-acento-contenido.p-4.mb-4(data-aos="fade-right")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/tema1/video.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-2 ¿Qué es un Sindicato?
              p.mb-0 Para profundizar esta temática, le invitamos a consultar el siguiente video #[b “¿Qué es un Sindicato?”]
            .col-sm-auto
              a.boton.color-acento-botones(href="https://zajuna.sena.edu.co/Repositorio/Titulada/institution/SENA/Transversales/OVA/Derechos_fundamentales_en_el_trabajo/CF1_Ejercicio_derechos_fundamentales_en_el_trabajo/downloads/Anexo-Que-es-un-sindicato-CF.mp4" target="_blank")
                span Ir al sitio
                i.fas.fa-video
    
    .tarjeta.color-acento-contenido.p-4.mb-5(data-aos="fade-right")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/tema1/pdf.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-2 Anexo 6. Guía práctica asociación sindical
              p.mb-0 Para profundizar esta temática, le invitamos a consultar el siguiente documento titulado #[b “Guía práctica asociación sindical”.] 
            .col-sm-auto
              a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo6_GUIA_PRACTICA_ASOCIACION_SINDICAL.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download
    
    .titulo4.mb-5.ps-2.pe-2.pe-lg-2.ps-lg-5.pe-md-0.ps-md-5(data-aos="fade-right")
      img(src='@/assets/curso/tema1/18.svg', alt='Imagen decorativa')
      h3.mb-0.mx-4.text-white La negociación colectiva

    .row.justify-content-center.align-items-end.mb-5
      .col-lg-3
        img.d-none.d-lg-block(src='@/assets/curso/tema2/14.svg', alt='Imagen decorativa')
      .col-lg-4
        img.mb-5.img-t.d-none.d-lg-block(src='@/assets/curso/tema2/13.svg', alt='Imagen decorativa')
        p.mb-lg-0.mb-4 La negociación colectiva, según los instrumentos de la OIT (1976), es la actividad o proceso orientado a la conclusión de un contrato o acuerdo colectivo. A su vez, la Recomendación núm. 91 define el contrato colectivo como un acuerdo celebrado entre empleadores y trabajadores (o sus representantes) con el fin de regular las condiciones de trabajo y empleo, así como otros aspectos relacionados con la relación laboral.
      .col-lg-5
        .bg5.p-4
          p.mb-0.mb-lg-4.my-lg-4.mx-lg-3 La Recomendación núm. 91 de la OIT define el contrato colectivo como: “Todo acuerdo escrito relativo a las condiciones de trabajo y de empleo, celebrado entre un empleador, un grupo de empleadores o una o varias organizaciones de empleadores, por una parte, y, por otra, una o varias organizaciones representativas de trabajadores o, en ausencia de tales organizaciones, representantes de los trabajadores interesados, debidamente elegidos y autorizados por estos últimos, de acuerdo con la legislación nacional” (OIT, 1976, p. 95).
    
    .row.justify-content-center.align-items-stretch.mb-lg-5.mb-4
      .col-lg-8.pe-lg-0
        .p-4.h-100.p-lg-4.d-flex.align-content-center.flex-wrap.bg2.rw2
          p.mb-4.my-lg-1.mx-lg-4 Las normas Nacionales e internacionales que amparan la negociación Colectiva:
          ul.lista-ul.mb-0.my-2.mx-lg-4
            li.d-flex.mb-2
              i.fas.fa-user
              p.mb-0 Constitución política, artículo 19, artículo 60 y artículo 62.
            li.d-flex.mb-2
              i.fas.fa-user
              p.mb-0 Código del trabajo, artículo 303 y siguientes.
            li.d-flex.mb-2
              i.fas.fa-user
              p.mb-0 Convenio OIT No. 98 (Derecho de sindicación y Negociación Colectiva).
      .col-lg-4.mb-4.mb-lg-0.ps-lg-0
        figure.col-9.m-auto.col-md-7.col-lg-12
          img.d-none.d-lg-block(src="@/assets/curso/tema2/15.svg")
    
    p.mb-5 Para profundizar esta temática, le invitamos a consultar los siguientes videos:
    
    .tarjeta.color-acento-contenido.p-4.mb-4(data-aos="fade-right")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/tema1/video.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-0 La negociación colectiva. Parte 1.
            .col-sm-auto
              a.boton.color-acento-botones(href="https://zajuna.sena.edu.co/Repositorio/Titulada/institution/SENA/Transversales/OVA/Derechos_fundamentales_en_el_trabajo/CF1_Ejercicio_derechos_fundamentales_en_el_trabajo/downloads/Anexo-La-negociacin-colectiva-parte-1.mp4" target="_blank")
                span Ir al sitio
                i.fas.fa-video

    .tarjeta.color-acento-contenido.p-4.mb-5(data-aos="fade-right")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/tema1/video.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-0 La negociación colectiva. Parte 2.
            .col-sm-auto
              a.boton.color-acento-botones(href="https://zajuna.sena.edu.co/Repositorio/Titulada/institution/SENA/Transversales/OVA/Derechos_fundamentales_en_el_trabajo/CF1_Ejercicio_derechos_fundamentales_en_el_trabajo/downloads/Anexo-La-negociacin-colectiva-parte-2.mp4" target="_blank")
                span Ir al sitio
                i.fas.fa-video
    
    p.mb-5 Le invitamos a realizar lectura de los siguientes anexos, para profundizar sobre esta importante temática.

    .tarjeta.color-acento-contenido.p-4.mb-4(data-aos="fade-right")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/tema1/pdf.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-0 Anexo 7. Negociación Colectiva ante el Siglo XXI.
            .col-sm-auto
              a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo7_Negociacion_Colectiva_ante_el_Siglo_XXI.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download

    .tarjeta.color-acento-contenido.p-4.mb-5(data-aos="fade-right")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/tema1/pdf.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-0 Anexo 8. La importancia de la negociación colectiva en las relaciones laborales.
            .col-sm-auto
              a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo8_La_importancia_de_la_negociacion_colectiva_en_las_relaciones_laborales.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download
    
    .titulo.mb-5.ps-2.pe-2.pe-lg-2.ps-lg-5.pe-md-0.ps-md-5(data-aos="fade-right")
      img(src='@/assets/curso/tema1/18.svg', alt='Imagen decorativa')
      h3.mb-0.mx-4.text-white Organizaciones sindicales
    
    .row.fondot.p-4.p-lg-5.mb-5(data-aos="fade-down")
      .col-lg-12
      
        .row.justify-content-center.align-items-center.mb-0(data-aos="fade-right")
          .col-lg-5
            img.d-none.d-lg-block(src='@/assets/curso/tema2/16.png', alt='')
          .col-lg-7
            p.mb-0 La Constitución de 1991, en su artículo 39, reconoce el derecho de asociación sindical y garantiza que tanto trabajadores como empleadores puedan constituir organizaciones sindicales sin intervención del Estado, en consonancia con los principios de los Convenios 87 y 98 de la OIT. Asimismo, se establece que los sindicatos tienen autonomía para definir su estructura y funcionamiento, con reconocimiento inmediato de su personería jurídica. La Corte Constitucional ha precisado que estas organizaciones cumplen una función esencial al defender los intereses de la clase obrera, convirtiéndose en un pilar del Estado Social de Derecho, dado que son los únicos intermediarios idóneos entre trabajadores y empleadores. Para profundizar en esta temática, se sugiere la lectura de la guía de la OIT sobre conductas atentatorias contra el derecho de asociación sindical.
  
    .tarjeta.color-acento-contenido.p-4.mb-5(data-aos="fade-right")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/tema1/pdf.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-2 Anexo 9. Guía conductas atentatorias contra el derecho de asociación sindical
              p.mb-0 Para profundizar esta temática, le invitamos a consultar el siguiente documento titulado #[b “Guía conductas atentatorias contra el derecho de asociación sindical”.]
            .col-sm-auto
              a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo9_Guia_conductas_atentatorias_contra_el_derecho_de_asociacion_sindical.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download

    .caja.p-4.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-1
          img.d-none.d-lg-block(src='@/assets/curso/tema2/17.svg', alt='')
        .col-lg-11
          p.mb-0 Entre los derechos laborales fundamentales también se encuentra el derecho a la huelga, entendido como un mecanismo legítimo de defensa de los intereses colectivos de los trabajadores frente a los empleadores y el Estado. Su ejercicio constituye una expresión de la libertad sindical y un componente esencial de la negociación colectiva, enmarcado en la Constitución y en los convenios internacionales ratificados por Colombia. 

    .tarjeta.color-acento-contenido.p-4.mb-0(data-aos="fade-right")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/tema1/pdf.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-2 Anexo 10. Apuntes sobre el derecho de huelga en Colombia
              p.mb-0 Para ampliar esta temática, se sugiere la lectura del siguiente documento #[b “Apuntes sobre el derecho de huelga en Colombia”.]
            .col-sm-auto
              a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo10_Apuntes_sobre_el_derecho_de_huelga_en_Colombia.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
