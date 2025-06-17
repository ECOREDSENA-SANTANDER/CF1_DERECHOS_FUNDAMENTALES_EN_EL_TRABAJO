<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Mecanismos de materialización de los derechos fundamentales

    .row.justify-content-center.align-items-center.mb-lg-5.mb-4(data-aos="fade-right")
      .col-lg-8.pe-lg-0
        .p-4.h-100.p-lg-4.c3.d-flex.align-content-center.flex-wrap.bg2
          p.mb-0.mx-lg-4.my-3.mb-2 La garantía y realización efectiva de los derechos fundamentales en Colombia constituye un pilar para la consolidación de la dignidad humana y el fortalecimiento de las libertades individuales. En este contexto, el ordenamiento jurídico colombiano ha dispuesto diversas herramientas legales, como la acción de tutela, los recursos administrativos y la labor de organismos de control, que permiten a los ciudadanos exigir el cumplimiento de sus derechos ante posibles vulneraciones. Estos mecanismos no solo operan como instrumentos de protección inmediata, sino que también contribuyen a la construcción de una cultura jurídica basada en el respeto por los derechos humanos. Como lo señala Uprimny (2011), la acción de tutela, en particular, ha sido un instrumento clave para la justiciabilidad de los derechos fundamentales en el país. 
      .col-lg-4.mb-4.mb-lg-0.ps-lg-0
        figure.col-9.m-auto.col-md-7.col-lg-12
          img.d-none.d-lg-block(src="@/assets/curso/tema3/1.svg")

    .titulo.mb-5.ps-5.pe-2(data-aos="fade-right")
      img(src='@/assets/curso/tema1/18.svg', alt='Imagen decorativa')
      h3.mb-0.mx-4.text-white La acción de tutela

    .row.fondot.p-4.p-lg-5.p-md-3.mb-lg-5.mb-4(data-aos="fade-down")
      .col-lg-12
      
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-7
            p.mb-0 La acción de tutela en Colombia constituye un mecanismo judicial de protección inmediata de los derechos fundamentales cuando estos se consideran vulnerados o amenazados por la acción u omisión de una autoridad pública o, en ciertos casos, de particulares. Este recurso, consagrado en el artículo 86 de la Constitución Política de 1991, ha sido ampliamente valorado por su accesibilidad, informalidad y eficacia, especialmente en contextos donde otros medios judiciales resultan insuficientes o ineficaces. Según Uprimny (2011), la tutela representa una innovación jurídica relevante en América Latina, al consolidarse como un instrumento que democratiza el acceso a la justicia y fortalece el Estado de Derecho, aunque también enfrenta desafíos relacionados con su uso excesivo y la seguridad jurídica. En este sentido, la tutela no solo protege derechos individuales, sino que ha contribuido a moldear la cultura constitucional del país.
          .col-lg-5
            img.d-none.d-lg-block(src='@/assets/curso/tema3/2.png', alt='')

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-3.col-md-5.col-8.mb-4
        img.d-none.d-lg-block(src='@/assets/curso/tema3/3.png', alt='')
      .col-lg-9.mb-0
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul").mb-0(data-aos="fade-right")
          .row.justify-content-center.align-items-center.col-xl-11.m-auto(titulo="¿Cuándo Procede la Acción de Tutela?")
            .col-lg-12
              p.mb-4 La acción de tutela procede en las siguientes circunstancias:
              ul.lista-ul.mb-0
                li.d-flex.mb-2
                  i.fas.fa-user
                  p.mb-0 #[b Vulneración de Derechos Fundamentales:] cuando se vean vulnerados o amenazados los derechos constitucionales fundamentales, incluso aquellos que no están textualmente consagrados en la Constitución Política, siempre que se pueda establecer una conexión con los derechos fundamentales. Esto puede ocurrir por la acción u omisión de cualquier autoridad pública.
                li.d-flex.mb-2
                  i.fas.fa-user
                  p.mb-0 #[b Falta de Otros Medios de Protección:] la tutela es procedente cuando no existen otros mecanismos disponibles para proteger el derecho en cuestión. Sin embargo, también puede utilizarse como recurso transitorio para evitar un perjuicio irremediable, incluso si hay otros medios de protección disponibles.
                li.d-flex.mb-2
                  i.fas.fa-user
                  p.mb-0 #[b Acción u Omisión de Particulares:] la acción de tutela puede ser invocada cuando la vulneración de derechos se deriva de la acción u omisión de un particular, siempre que este esté prestando un servicio público o cumpliendo funciones públicas.
                li.d-flex.mb-2
                  i.fas.fa-user
                  p.mb-0 #[b Situación de indefensión:] proceder cuando el solicitante se encuentre en una situación de indefensión o subordinación respecto del particular contra quien se interpone la acción de tutela.
          .row.justify-content-center.align-items-center.col-xl-11.m-auto(titulo="¿Qué derechos protege la acción de tutela?")
            .col-lg-12
              p.mb-0 La acción de tutela tiene como objetivo proteger los derechos fundamentales, que incluyen, entre otros, el derecho a la vida, la integridad personal, la igualdad, el reconocimiento de la personalidad jurídica, y las libertades de conciencia, religión, expresión, circulación, elección de profesión u oficio, enseñanza, aprendizaje, investigación y cátedra. Asimismo, se consideran derechos fundamentales la honra, el buen nombre, el debido proceso, el derecho a la defensa, y el derecho a elegir y ser elegido. También se incluyen el derecho de petición, el derecho de asociación y los derechos de los niños, todos los cuales son esenciales para garantizar la dignidad y el bienestar de los individuos en la sociedad.
          .row.justify-content-center.align-items-center.col-xl-11.m-auto(titulo="¿Cuál es el término que el juez tiene para resolver la solicitud de tutela?")
            .col-lg-12
              p.mb-0 En ningún caso podrá transcurrir un plazo superior a 10 días entre la presentación de la solicitud de tutela y la emisión de su resolución.
          .row.justify-content-center.align-items-center.col-xl-11.m-auto(titulo="¿Cómo se debe presentar la acción de tutela?")
            .col-lg-12
              p.mb-4 La acción de tutela puede ser presentación de manera verbal o escrita, y puede hacerse en nombre propio o en representación de la persona afectada. No es necesario contar con la asistencia de un abogado para interponer esta acción.
              p.mb-4 La acción de tutela puede ser presentada de forma verbal en los siguientes casos:
              ul.lista-ul.mb-0
                li.d-flex.mb-2
                  i.fas.fa-user
                  p.mb-0 Cuando el solicitante no sabe escribir.
                li.d-flex.mb-2
                  i.fas.fa-user
                  p.mb-0 Cuando el solicitante sea menor de edad.
                li.d-flex.mb-0
                  i.fas.fa-user
                  p.mb-0 Cuando se requiera una protección urgente.
          .row.justify-content-center.align-items-center.col-xl-11.m-auto(titulo="¿Ante quién se presenta la acción de tutela?")
            .col-lg-12
              p.mb-4 La acción de tutela puede ser interpuesta, en principio, ante cualquier juez que tenga jurisdicción en el lugar donde ocurrieron los hechos que amenazan o vulneran el derecho. Sin embargo, existen reglas de competencia establecidas por el Decreto 1382 de 2000, que, aunque fueron inaplicadas por la Corte Constitucional durante un tiempo, ahora son de obligatorio cumplimiento.
              p.mb-4 Estas reglas de competencia se definen de la siguiente manera: las acciones de tutela que se interpongan contra cualquier autoridad pública del orden nacional, salvo lo dispuesto en el siguiente inciso, serán asignadas para su conocimiento, en primera instancia, a los tribunales superiores de distrito judicial o administrativo, así como a los consejos seccionales de la judicatura.
              ol.lista-ol--cuadro
                li.d-flex
                  .lista-ol--cuadro__vineta
                    span 1
                  | Las acciones de tutela que se interpongan contra cualquier organismo o entidad del sector descentralizado por servicios del orden nacional, así como contra autoridades públicas del orden departamental, serán asignadas para su conocimiento, en primera instancia, a los jueces de circuito o a aquellos que tengan categoría de tales.
                li.d-flex 
                  .lista-ol--cuadro__vineta
                    span 2
                  | A los jueces municipales les serán repartidas para su conocimiento en primera instancia, las acciones de tutela que se interpongan contra cualquier autoridad pública del orden distrital o municipal y contra particulares.
                li.d-flex 
                  .lista-ol--cuadro__vineta
                    span 3
                  | Cuando la acción de tutela se promueva contra más de un funcionario o corporación judicial, le será repartida al respectivo superior funcional del accionado. Si se dirige contra la Fiscalía General de la Nación, se repartirá al superior funcional del juez al que esté adscrito el fiscal.

          .row.justify-content-center.align-items-center.col-xl-11.m-auto(titulo="¿Quién puede interponer la acción?")
            .col-lg-12
              p.mb-0 La acción de tutela puede ser presentada por cualquier persona que considere que sus derechos fundamentales están siendo vulnerados o amenazados. También puede ser interpuesta a través de un apoderado judicial, así como por el defensor del pueblo o el personero.

    .titulo.mb-5.ps-5.pe-2(data-aos="fade-right")
      img(src='@/assets/curso/tema1/18.svg', alt='Imagen decorativa')
      h3.mb-0.mx-4.text-white El derecho de petición

    .bloque-texto-a.color-acento-contenido.p-4.p-md-5.mb-5(data-aos="fade-right") 
      .row.m-0.align-items-center.justify-content-center
        .col-lg-8.mb-0.mb-lg-0
          .bloque-texto-a__texto.p-4
            p.mb-3.my-3 El derecho de petición es un derecho fundamental que otorga a toda persona la facultad de presentar solicitudes respetuosas a las autoridades, ya sea por motivos de interés general o particular, y de recibir una pronta respuesta. Este derecho también se extiende a situaciones en las que se interpone una petición contra particulares, con el fin de garantizar los derechos fundamentales. Esto incluye casos en los que los particulares ejercen funciones públicas, prestan servicios públicos o cuando el peticionario se encuentra en una situación de subordinación, como en el caso de un empleador.
        .col-lg-4.mb-0
          img.d-none.d-lg-block.wi(src='@/assets/curso/tema3/4.png', alt='')

    .titulo.mb-5.ps-5.pe-2(data-aos="fade-right")
      img(src='@/assets/curso/tema1/18.svg', alt='Imagen decorativa')
      h3.mb-0.mx-4.text-white Acción de cumplimiento

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-1.d-none.d-lg-block
        .bg12.p-4
      .col-lg-2.col-md-7.col-9
        img.mb-lg-0.mb-4(src='@/assets/curso/tema3/5.svg', alt='Imagen decorativa')
      .col-lg-9
        .bg11.p-4
          p.mb-2.my-2 La acción de cumplimiento es un mecanismo ágil y directo que permite a todas las personas, asociaciones, sociedades y fundaciones exigir el cumplimiento de los deberes establecidos por las leyes y las decisiones de la administración que no han sido ejecutadas debido a la negligencia de las autoridades públicas.

    .tarjeta.color-acento-contenido.p-4.mb-5(data-aos="fade-right")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/tema1/pdf.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-2 Mecanismos Constitucionales y Legales
              p.mb-0 Para profundizar esta temática, le invitamos a consultar la página 14 del siguiente documento titulado “Mecanismos Constitucionales y Legales para la defensa de los derechos fundamentales de las y los trabajadores”.
            .col-sm-auto
              a.boton.color-acento-botones(href="https://www.ens.org.co/wp-content/uploads/2016/11/Escuela-de-Liderazgo-Sindical-Democr%C3%A1tico-Mecanismos-Const-y-Legales-para-la-def-de-los-derechos-fundamentales-de-los-trabajadores-2007.pdf" target="_blank")
                span Descargar
                i.fas.fa-file-download

    .titulo.mb-5.ps-5.pe-2(data-aos="fade-right")
      img(src='@/assets/curso/tema1/18.svg', alt='Imagen decorativa')
      h3.mb-0.mx-4.text-white Acciones populares y de grupo

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-1.d-none.d-lg-block
        .bg12.p-4
      .col-lg-2.col-md-7.col-9
        img.mb-lg-0.mb-4(src='@/assets/curso/tema3/6.jpg', alt='Imagen decorativa')
      .col-lg-9
        .bg11.p-4
          p.mb-2.my-2 Consiste en la facultad que tienen todas las personas de solicitar la protección de los derechos e intereses colectivos relacionados con el patrimonio, el espacio público, la seguridad y la salubridad, la moral administrativa, el medio ambiente, la libre competencia económica y otros derechos de naturaleza similar.

    .tarjeta.color-acento-contenido.p-4.mb-5(data-aos="fade-right")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/tema1/pdf.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-2 Mecanismos Constitucionales y Legales
              p.mb-0 Para profundizar esta temática, le invitamos a consultar la página 16 del siguiente documento titulado “Mecanismos Constitucionales y Legales para la defensa de los derechos fundamentales de las y los trabajadores”.
            .col-sm-auto
              a.boton.color-acento-botones(href="https://www.ens.org.co/wp-content/uploads/2016/11/Escuela-de-Liderazgo-Sindical-Democr%C3%A1tico-Mecanismos-Const-y-Legales-para-la-def-de-los-derechos-fundamentales-de-los-trabajadores-2007.pdf" target="_blank")
                span Descargar
                i.fas.fa-file-download

    .titulo.mb-5.ps-5.pe-2(data-aos="fade-right")
      img(src='@/assets/curso/tema1/18.svg', alt='Imagen decorativa')
      h3.mb-0.mx-4.text-white Mecanismos de divulgación de derechos y rutas de atención
    
    .bg13.p-lg-0.p-4.mb-0(data-aos="fade-right")
      .row.justify-content-center.align-items-center.mb-0
        .col-lg-10
          .row.justify-content-center.align-items-center
            .col-lg-2.ps-0.pe-0
              img.img-a.img-t.mt-3.d-none.d-lg-block(src='@/assets/curso/tema3/7.svg', alt='Imagen decorativa')
            .col-lg-8
              p.mb-4.mt-lg-5.mt-0 Los mecanismos de divulgación de derechos y las rutas de atención constituyen herramientas fundamentales para el ejercicio efectivo de la ciudadanía, ya que permiten que las personas conozcan sus derechos y los procedimientos establecidos para su protección. Estos mecanismos, que incluyen campañas pedagógicas, servicios de orientación jurídica gratuita y plataformas digitales, buscan reducir las barreras de acceso a la justicia y promover una cultura de legalidad y corresponsabilidad (Vásquez & Molina, 2020). 
              .bg14.p-lg-3.p-4.mb-0
                p.mb-0 En contextos como el colombiano, la Corte Constitucional ha reiterado que la garantía de los derechos fundamentales no se limita a su consagración normativa, sino que exige una acción institucional dirigida a su promoción y conocimiento por parte de la ciudadanía (Corte Constitucional, Sentencia T-406 de 1992). Por tanto, la divulgación de derechos no solo cumple una función informativa, sino también preventiva y formativa dentro de un Estado social de derecho.
            .col-lg-2.pe-0.ps-0
              img.img-a.img-t.mv.d-none.d-lg-block(src='@/assets/curso/tema3/8.svg', alt='Imagen decorativa')

</template>

<script>
export default {
  name: 'Tema3',
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
