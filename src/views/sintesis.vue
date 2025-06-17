<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p Los derechos fundamentales en el ámbito laboral son principios esenciales que garantizan la dignidad, la igualdad y la justicia de los trabajadores. Estos derechos han evolucionado a lo largo de la historia, reflejando cambios sociales y económicos, y se encuentran protegidos por diversas normativas y convenios internacionales. Sin embargo, en el contexto actual, enfrentan numerosos desafíos, como la precarización del trabajo y la desigualdad en el acceso a oportunidades. Comprender la importancia de estos derechos es crucial, ya que no solo protegen a los individuos, sino que también fomentan un entorno laboral más justo y equitativo, contribuyendo al bienestar general de la sociedad. El siguiente diagrama, menciona los conceptos y temas más relevantes tratados en este componente. 

    .row.justify-content-center
      .col-lg-12.mb-5.p-4
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Descripción imagen")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
