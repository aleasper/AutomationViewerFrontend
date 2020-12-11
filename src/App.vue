<template>
  <div id="app">
    <v-app id="inspire">
        <v-parallax src="@/assets/gra.png">

        <v-app-bar
          app
          color= #c8a696
          dark
        >

          <div class="d-flex align-center">
            <v-img
              alt="Logo"
              class="shrink mr-2"
              contain
              src="@/assets/Логотип-removebg-preview.png"
              transition="scale-transition"
              width="60"
            />
            <h2>Automation Viewer</h2>
          </div>
            <div id="nav">
           <router-link to="/">Home</router-link> |
           <router-link to="/about">About</router-link>
             </div>
          <router-view/>
          <v-spacer></v-spacer>

          <v-btn
            href="https://github.com/vuetifyjs/vuetify/releases/latest"
            target="_blank"
            text
          >
            <span class="mr-2">Авторизация</span>
            <v-icon>mdi-open-in-new</v-icon>
          </v-btn>

        </v-app-bar>

        <v-main>
        </v-main>
          </v-parallax>
    </v-app>
  </div>
</template>

<script>

export default {
  name: 'App',

  components: {
  },

  data: () => ({
    //
  }),
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: white;
}

#nav a.router-link-exact-active {
  color: #00008b;
}
</style>