<template>
  <b-container fluid="lg" v-if="detailShow">
    <b-row v-if="detailShow.images.banner">
      <b-img
        class="fullWidth"
        :src="detailShow.images.banner"
        fluid-grow
        alt="Banner"
      ></b-img>
    </b-row>
    <b-row>
      <b-col id="information">
        <h1>{{ detailShow.title }} ({{ detailShow.creation }})</h1>
        <div class="bold"><b-icon-star class="mr-2"></b-icon-star>Favoris</div>
        <div>
          <span class="bold">Genre :</span>
          <span v-for="genre in detailShow.genres" :key="genre"
            >{{ genre }},
          </span>
        </div>
        <div>
          <span class="bold">Durée d'un épisode :</span>
          {{ detailShow.length }} minutes
        </div>
        <div>
          <div class="bold mt-3">Description :</div>
          <p>{{ detailShow.description }}</p>
        </div>
      </b-col>
      <b-col id="poster" class="text-right">
        <b-img
          :src="detailShow.images.poster"
          fluid
          alt="Poster"
          class="poster mt-3"
        ></b-img>
      </b-col>
    </b-row>
    <b-row class="text-center">
      <b-col id="trailer"
        ><span class="bold">Trailer</span
        ><b-embed
          type="iframe"
          aspect="16by9"
          :src="'https://www.youtube.com/embed/' + detailShow.next_trailer"
          allowfullscreen
        ></b-embed
      ></b-col>
      <b-col id="episodes"
        ><span class="bold">Saisons</span>
        <div v-for="season in detailShow.seasons_details" :key="season">
          <div>
            Saison {{ season.number }} - Nombre d'épisodes :
            {{ season.episodes }}
          </div>
        </div></b-col
      >
      <b-col
        >Note : {{ detailShow.notes.mean }}/5 ({{
          detailShow.notes.total
        }}
        votes)</b-col
      >
    </b-row>
  </b-container>
</template>

<script>
import { BIconStar } from 'bootstrap-vue'
export default {
  async fetch() {
    this.detailShow = await fetch(
      `http://localhost:4000/rest/shows/${this.$route.params.id}`
    ).then((res) => res.json())
  },
  data() {
    return { detailShow: null }
  },
  components: { BIconStar },
}
</script>

<style scoped>
.poster {
  width: 300px;
  height: 400px;
}
.bold {
  font-weight: bold;
}
.center {
  text-align: center;
}
</style>
