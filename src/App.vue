<template>
  <div id="app">
    <v-app id="inspire"

    >
      <v-app-bar
          color= #cd5c5c
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
          <router-link to="/">Главная</router-link> |
          <router-link to="/statistics">Статистика</router-link> |
          <router-link to="/about">О разработчиках</router-link> |
          <router-link to="/authorization">Авторизация</router-link>
        </div>
        <v-spacer></v-spacer>
      </v-app-bar>
      <div
          class="main-bg-img-div"
      >
        <router-view></router-view>
      </div>
    </v-app>
  </div>
</template>

<script>

export default {
  name: 'App',

  components: {
  },

  data: () => ({
  }),
  methods: {
  },
  watch: {
  },
  updated() {
  }
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
  color: ghostwhite;
}

#nav a.router-link-exact-active {
  color: #00008b;
}

.main-bg-img-div{
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  background-image: url('./assets/gra.png');
}
</style>