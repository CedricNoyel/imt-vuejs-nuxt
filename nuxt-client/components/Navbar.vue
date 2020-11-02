<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <NuxtLink to="/">
        <b-navbar-brand>TVShowList</b-navbar-brand>
      </NuxtLink>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto"
          ><b-nav-form>
            <b-form-input
              size="sm"
              class="mr-sm-2"
              placeholder="Ratatouille, ..."
            ></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit"
              >Rechercher</b-button
            >
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<style></style>
