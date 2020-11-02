<template>
  <div class="container">
    <div>
      <!-- <h3>Page accueil</h3> -->
      <div class="sub-container-1">
        <NuxtLink to="ajout">
          <b-button pill variant="primary">Ajouter une série</b-button>
        </NuxtLink>
      </div>
      <b-container fluid="xl" class="sub-container-2">
        <b-row v-for="serie in series" :key="serie.id">
          <b-col><Carte :serie="serie"></Carte></b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { series: [] }
  },
  async fetch() {
    this.series = await fetch('http://localhost:4000/rest/shows').then((res) =>
      res.json()
    )
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
