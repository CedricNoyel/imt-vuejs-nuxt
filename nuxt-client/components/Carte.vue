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

<style>
.container {
  margin: 30px auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.sub-container-1 {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  text-align: center;
}

.sub-container-2 {
  margin: 20px auto;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
</style>
