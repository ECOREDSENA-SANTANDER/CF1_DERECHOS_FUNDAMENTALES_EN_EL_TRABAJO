<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Ciudadanía laboral

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La ciudadanía laboral hace referencia al ejercicio pleno de los derechos y deberes de los trabajadores dentro del ámbito del trabajo, así como a su capacidad de participar activamente en la vida laboral y social en condiciones de igualdad y dignidad. Este concepto trasciende la mera relación contractual para incluir dimensiones políticas, sociales y culturales, en las que el trabajador es reconocido como sujeto de derechos dentro de una sociedad democrática (Marshall, 1998; Antunes, 2009).

    .tarjeta.color-acento-contenido.p-4.mb-5(data-aos="fade-right")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/tema1/video.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-2 Trabajo y ciudadanía
              p.mb-0 Para profundizar esta temática, le invitamos a consultar el siguiente documento titulado “Trabajo y ciudadanía”.
            .col-sm-auto
              a.boton.color-acento-botones(href="https://ibero.mx/iberoforum/19/pdf/ESPANOL/2.%20NOTAS%20PARA%20EL%20DEBATE%20FEREGRINO%20NO.%2019.pdf" target="_blank")
                span Descargar
                i.fas.fa-file-download

    .titulo.mb-5.ps-5.pe-2(data-aos="fade-right")
      img(src='@/assets/curso/tema1/18.svg', alt='Imagen decorativa')
      h3.mb-0.mx-4.text-white Concepto de trabajo

    .bg10.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-5.col-md-8.col-12.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/tema2/2.jpg', alt='')
        .col-lg-7.pe-lg-4(data-aos="fade-left")
          .p-4
            p.mb-lg-4.my-lg-3.mb-0(data-aos="fade-left") El trabajo, entendido como una actividad humana orientada a la producción de bienes o servicios, constituye un elemento central en la organización social y económica de las sociedades. Más allá de su función económica, el trabajo permite a los individuos participar activamente en la vida comunitaria y desarrollar sus capacidades personales. Según Castel (1997), el trabajo no solo representa una fuente de ingreso, sino también un espacio de integración social, identidad y reconocimiento. En esta línea, la Organización Internacional del Trabajo (OIT, 2019) subraya que el trabajo decente es fundamental para alcanzar un desarrollo inclusivo y sostenible, al garantizar condiciones de libertad, equidad, seguridad y dignidad humana.

    .titulo.mb-5.ps-5.pe-2(data-aos="fade-right")
      img(src='@/assets/curso/tema1/18.svg', alt='Imagen decorativa')
      h3.mb-0.mx-4.text-white Función social del trabajo

    .row.justify-content-center.align-items-center.mb-lg-5.mb-4
      .col-lg-8.pe-lg-0
        .p-4.h-100.p-lg-4.d-flex.align-content-center.flex-wrap.bg2.rw2
          p.mb-4.my-1 Según Ramírez (2015), los derechos relacionados directamente con el trabajo representan una relación transformadora entre las personas, el mundo, la naturaleza y su entorno. La cotidianidad de las personas está configurada en gran medida por el trabajo, especialmente por las condiciones de protección en las que se lleva a cabo. Es fundamental destacar la interrelación entre las condiciones laborales y los principios de justicia social y paz mundial, así como su conexión con las necesidades humanas y las posibilidades de autorrealización.
          p.mb-3 El trabajo guarda una estrecha relación con la dignidad humana, en tanto permite el acceso a condiciones materiales que posibilitan una vida digna. Asimismo, constituye un medio para la realización personal, en función de los proyectos de vida que cada individuo se propone alcanzar. Desde esta perspectiva, el trabajo no solo tiene un valor económico, sino también social y simbólico, al fomentar el desarrollo integral de las personas. Además, cuando se ejerce en contextos caracterizados por la participación, el respeto por la diversidad y la ausencia de discriminación, el trabajo puede contribuir significativamente al fortalecimiento de la democracia y la promoción de la igualdad.
      .col-lg-4.mb-4.mb-lg-0.ps-lg-0
        figure.col-9.m-auto.col-md-7.col-lg-12
          img.d-none.d-lg-block(src="@/assets/curso/tema2/3.svg")

    .titulo.mb-5.ps-5.pe-2(data-aos="fade-right")
      img(src='@/assets/curso/tema1/18.svg', alt='Imagen decorativa')
      h3.mb-0.mx-4.text-white Derechos relacionados con el trabajo

    .row.fondo4.p-4.p-lg-5.p-md-3.mb-5(data-aos="fade-down")
      .col-lg-12
         
        p.mb-4 Según la Organización Internacional del Trabajo (s. f.), los derechos laborales fundamentales comprenden diversas garantías esenciales para la dignidad y el bienestar de los trabajadores, entre las cuales se destacan:

        .row.justify-content.align-items-center.mb-0
          .col-lg-5
            .bg5.p-4.mb-lg-0.mb-4
              ul.lista-ul.mb-0.my-2
                li.d-flex.mb-2
                  i.fas.fa-user
                  p.mb-0 El derecho al trabajo.
                li.d-flex.mb-2
                  i.fas.fa-user
                  p.mb-0 La abolición de la esclavitud, servidumbre o cualquier forma de trata de personas, trabajo forzoso u obligatorio.
                li.d-flex.mb-2
                  i.fas.fa-user
                  p.mb-0 El ejercicio del trabajo en condiciones de libertad, legalidad y libre escogencia.
                li.d-flex.mb-2
                  i.fas.fa-user
                  p.mb-0 La posibilidad de acceso a servicios gratuitos de empleo, la formación para el trabajo y la protección contra el desempleo.
          .col-lg-3
            img.d-none.d-lg-block(src='@/assets/curso/tema2/4.svg' alt='')
          .col-lg-4
            img.mb-2.img-t.d-none.d-lg-block(src='@/assets/curso/tema2/5.svg' alt='')
            p.mb-0 El respeto y la promoción de los derechos laborales son fundamentales para el desarrollo de una economía equitativa e incluyente. Como sostiene Sen (2000), el trabajo no solo tiene valor instrumental, sino también intrínseco, en tanto permite a las personas ampliar sus libertades y capacidades. En este sentido, garantizar los derechos laborales fortalece la democracia, mejora la calidad de vida y contribuye a una ciudadanía más activa.

    p.mb-4(data-aos="fade-right") En respuesta a las transformaciones sociales y económicas derivadas de la industrialización y la creciente necesidad de regular las condiciones laborales, se creó en 1919 la Organización Internacional del Trabajo (OIT), en el marco del Tratado de Versalles. Esta institución, fue concebida con el propósito de promover la justicia social y los derechos laborales. En 1946, la OIT fue incorporada como el primer organismo especializado del sistema de las Naciones Unidas, consolidando su mandato de establecer normas internacionales del trabajo y fomentar condiciones dignas y equitativas para las personas trabajadoras en todo el mundo.

    .tarjeta.color-acento-contenido.p-4.mb-5(data-aos="fade-right")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/tema1/video.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-2 La labor de la OIT
              p.mb-0 Para profundizar esta temática, le invitamos a consultar el siguiente video “La labor de la OIT”.
            .col-sm-auto
              a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=VzXwkDHtRXc" target="_blank")
                span Ir al sitio
                i.fas.fa-video

    .titulo.mb-5.ps-5.pe-2(data-aos="fade-right")
      img(src='@/assets/curso/tema1/18.svg', alt='Imagen decorativa')
      h3.mb-0.mx-4.text-white Los sindicatos

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-5
        img.d-none.d-lg-block(src="@/assets/curso/tema2/6.png")
      .col-lg-7
        p.mb-0 La libertad sindical y el derecho a conformar organizaciones sindicales constituyen pilares fundamentales de los derechos laborales reconocidos a nivel internacional. Este derecho permite a los trabajadores y trabajadoras asociarse libremente para la defensa y promoción de sus intereses comunes en el ámbito laboral, incluyendo la negociación colectiva, la mejora de condiciones de trabajo y la participación en decisiones que los afectan directamente. Según la Organización Internacional del Trabajo (OIT), la libertad sindical es esencial para garantizar la justicia social y constituye una condición previa para el diálogo social efectivo (OIT, 2021). En Colombia, la Constitución Política de 1991 consagra este derecho en su artículo 39, asegurando la autonomía de las organizaciones sindicales y su protección frente a actos de injerencia o represalia. Como señalan López y Rojas (2018), el fortalecimiento del sindicalismo es clave para equilibrar las relaciones laborales, especialmente en contextos donde persisten desigualdades estructurales y precarización del empleo.

    .titulo.mb-5.ps-5.pe-2(data-aos="fade-right")
      img(src='@/assets/curso/tema1/18.svg', alt='Imagen decorativa')
      h3.mb-0.mx-4.text-white Deberes y responsabilidades laborales

    p.mb-4(data-aos="fade-right") En el ámbito laboral, además del reconocimiento de los derechos fundamentales de las personas trabajadoras, es igualmente relevante considerar los deberes y responsabilidades que les corresponden en el desarrollo de sus funciones. El cumplimiento de las obligaciones contractuales representa uno de los pilares esenciales en la relación laboral, ya que garantiza la coherencia entre lo acordado por las partes y lo efectivamente ejecutado en el entorno de trabajo. Esta responsabilidad incluye realizar las tareas asignadas con diligencia, respetar los tiempos establecidos y colaborar de manera efectiva con los objetivos de la organización (Mallarino, 2005).

    .row.justify-content-center.align-items-center.mb-lg-5.mb-4(data-aos="fade-left")
      .col-lg-4.mb-4.mb-lg-0.pe-lg-0
        figure.col-9.m-auto.col-md-7.col-lg-12
          img(src="@/assets/curso/tema2/7.svg")
      .col-lg-8.ps-lg-0
        .p-4.p-lg-4.h-100.d-flex.align-content-center.flex-wrap.bg1.rw
          p.mb-4 Según la Organización Internacional del Trabajo (OIT, 2019), un entorno laboral saludable depende tanto de la gestión empresarial como del involucramiento consciente de los trabajadores en su mantenimiento y mejora; por ello, la participación activa en la mejora del entorno laboral constituye una manifestación concreta del compromiso ético de los trabajadores con su lugar de trabajo. Esta participación no se limita al cumplimiento individual de funciones, sino que también se refleja en la disposición para contribuir al bienestar colectivo, proponer soluciones a problemas comunes, fomentar la comunicación y apoyar iniciativas que promuevan la salud ocupacional, la sostenibilidad y la productividad. 
          p.mb-lg-3.mb-0 El respeto por la normatividad y la convivencia en el espacio laboral también es un componente esencial de la responsabilidad individual. Este deber implica la observancia de las políticas internas, las normas legales y los principios éticos que regulan la vida organizacional. 

    .bg6.p-4.mb-lg-5.mb-4(data-aos="fade-right")
      .row.justify-content-center.align-items-center
        .col-lg-1
          img.d-none.d-lg-block(src='@/assets/curso/tema2/8.svg', alt='')
        .col-lg-11
          p.mb-0 A través del respeto mutuo, la tolerancia y el diálogo, se fortalece la cultura laboral y se previenen conflictos que pueden afectar la eficiencia, la seguridad y el clima institucional. 

    p.mb-5(data-aos="fade-right") De acuerdo con la Corte Constitucional de Colombia (Sentencia T-406 de 1992), el trabajo no solo es un derecho, sino también una actividad que se desarrolla dentro de un marco normativo que exige corresponsabilidad entre las partes para alcanzar un equilibrio justo.

    .titulo.mb-5.ps-5.pe-2(data-aos="fade-right")
      img(src='@/assets/curso/tema1/18.svg', alt='Imagen decorativa')
      h3.mb-0.mx-4.text-white Educación y cultura para la ciudadanía laboral

    .row.fondot.p-4.p-lg-5.p-md-3.mb-0(data-aos="fade-down")
      .col-lg-12
      
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-5
            img.d-none.d-lg-block(src='@/assets/curso/tema2/9.png', alt='')
          .col-lg-7
            p.mb-4 Según la UNESCO (2020), la educación para la ciudadanía global debe preparar a las personas no solo para el empleo, sino también para participar activamente en la sociedad, con conciencia de derechos y deberes. La construcción de una ciudadanía laboral sólida requiere procesos educativos que integren tanto la formación en competencias laborales como en competencias ciudadanas. Esta formación no se limita al desarrollo técnico o profesional, sino que incluye habilidades relacionadas con la comunicación, la resolución de conflictos, el pensamiento crítico, la toma de decisiones éticas y el trabajo colaborativo. En el ámbito laboral, estas competencias permiten que los trabajadores interactúen de manera respetuosa, eficiente y responsable, promoviendo un ambiente productivo y armónico.
            p.mb-0 Fomentar una cultura del respeto, la legalidad y la corresponsabilidad en el trabajo implica reconocer que el entorno laboral es un espacio de convivencia social, donde los principios democráticos deben estar presentes. El respeto por las normas, los acuerdos contractuales y los derechos de los demás no solo fortalece la legalidad, sino que también contribuye a la confianza organizacional. La corresponsabilidad, por su parte, exige que empleadores y trabajadores asuman compromisos compartidos en la mejora del bienestar laboral, en la prevención de riesgos y en la sostenibilidad de las organizaciones (Organización Internacional del Trabajo [OIT], 2019).










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
