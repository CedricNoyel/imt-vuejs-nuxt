<template>
  <div>
    <b-card
      :img-src="serie.images.poster"
      onerror="this.src='./assets/images/notfound.bmp'"
      img-alt="Image de la carte"
      img-left
      class="mb-3"
      img-height="200"
    >
      <b-card-text>
        <h4>{{ serie.title }}</h4>
        <p>
          {{ serie.description.split('.').slice(0, 4) + '...' }}
        </p>
      </b-card-text>
      <NuxtLink :to="'/detail/' + serie.id">
        <b-button variant="outline-primary">Voir la série</b-button>
      </NuxtLink>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'Carte',
  props: {
    serie: Object,
  },
}
</script>
