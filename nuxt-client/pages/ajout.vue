<template>
  <div class="container-ajout">
    <b-form @submit="onSubmit">
      <b-form-group id="input-group-2" label="Titre:" label-for="input-title">
        <b-form-input
          id="input-title"
          v-model="form.title"
          required
          placeholder="Game of thrones"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-2"
        label="Description:"
        label-for="textarea-description"
      >
        <b-form-textarea
          id="textarea-description"
          v-model="form.description"
          placeholder="une description pour la série"
          rows="3"
          max-rows="6"
        ></b-form-textarea>
      </b-form-group>

      <b-form-group
        id="input-group-3"
        label="Nombre de saisons:"
        label-for="textarea-description"
      >
        <b-form-input
          id="input-title"
          type="number"
          v-model="form.seasons"
          required
          placeholder="3"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" block variant="primary">Ajouter</b-button>
    </b-form>

    <!-- <b-card class="mt-3" header="Form Data Result">
        <pre class="m-0">{{ form }}</pre>
      </b-card> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        title: '',
        description: '',
        seasons: '',
      },
    }
  },
  methods: {
    async onSubmit(evt) {
      evt.preventDefault()
      // alert(JSON.stringify(this.form))

      const rawResponse = await fetch('http://localhost:4000/rest/posts', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.form),
      })
      const res = await rawResponse.json()
      console.log(res.toString())
      this.$router.push('/')
    },
  },
}
</script>

<style>
.container-ajout {
  margin: 30px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: left;
}
</style>
