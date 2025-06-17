<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Desarrollo para una vida digna

    .row.justify-content-center.align-items-center.mb-lg-5.mb-4(data-aos="fade-right")
      .col-lg-5
        img.d-none.d-lg-block(src='@/assets/curso/tema4/1.png', alt='Imagen decorativa')
      .col-lg-7
        p.mb-4 El concepto de desarrollo para una vida digna se vincula con la posibilidad de que todas las personas accedan a condiciones materiales, sociales y culturales que les permitan ejercer plenamente sus derechos fundamentales. Según Sen (2000), el desarrollo debe entenderse como un proceso de expansión de las libertades reales de las personas, más allá del crecimiento económico. Este enfoque reconoce que el bienestar humano se encuentra relacionado con múltiples dimensiones, como la salud, la educación, la participación social y la seguridad personal.
        .bg5.p-4
          p.mb-0 En el contexto colombiano, el artículo 1 de la Constitución Política establece que Colombia es un Estado social de derecho, fundado en el respeto de la dignidad humana. A partir de este principio, el desarrollo no solo se limita a indicadores económicos, sino que se orienta también hacia la eliminación de barreras estructurales que impiden el ejercicio de los derechos. Como afirma Uprimny (2006), la dignidad humana opera como un eje articulador de los derechos fundamentales, lo cual implica que las políticas públicas deben considerar la inclusión y la equidad como ejes del desarrollo.

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
      .col-lg-1
        img.d-none.d-lg-block(src='@/assets/curso/tema4/2.svg', alt='')
      .col-lg-11
        p.mb-0 Finalmente, el papel del Estado, la sociedad civil y las instituciones educativas resulta fundamental en la promoción de una cultura que valore la dignidad humana como un principio orientador del desarrollo. Tal como señalan Nussbaum y Sen (1993), el desarrollo humano debe enfocarse en ampliar las capacidades de las personas, permitiéndoles elegir el tipo de vida que valoran. Este enfoque demanda una acción colaborativa que priorice la justicia social y la equidad en la distribución de oportunidades, sin privilegiar intereses particulares o visiones políticas específicas.

    .tarjeta.color-acento-contenido.p-4.mb-0(data-aos="fade-right")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/tema1/video.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-2 Estado social de derecho
              p.mb-0 Para finalizar, le invitamos a consultar el siguiente video “Estado social de derecho”
            .col-sm-auto
              a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=qUIXuBrkH9A" target="_blank")
                span Ir al sitio
                i.fas.fa-video







</template>

<script>
export default {
  name: 'Tema4',
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
