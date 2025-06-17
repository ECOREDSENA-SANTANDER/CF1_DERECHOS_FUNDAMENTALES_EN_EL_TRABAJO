<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.fondo1.justify-content-center.align-items-center.p-2.mb-0(data-aos="fade-down")
      .col-lg-12.px-lg-5.px-4.mb-0
    
        .row.justify-content-center.align-items-center.mb-4
          .col-lg-1
            img.mb-0.d-none.d-lg-block(src='@/assets/curso/intro/1.svg')
          .col-lg-11
            p.mb-0(data-aos="fade-right") Los derechos fundamentales son esenciales en el ámbito laboral, ya que garantizan la dignidad, la igualdad y la justicia en el entorno de trabajo. A lo largo de este componente formativo, se analizará la evolución histórica de estos derechos, así como los desafíos que enfrentan en el contexto actual; con el objetivo de comprender cómo estos derechos no solo protegen a los individuos, sino que también promueven un ambiente laboral más justo y equitativo. 
    
        .row.justify-content-center.align-items-center           
          .col-lg-12
            figure
              .video
                iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
            figcaption Video. 

</template>

<script>
export default {
  name: 'Introduccion',
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
