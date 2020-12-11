<template>
  <div>
    <router-link tag="button" v-if="isHidden" v-on:click="isHidden = !isHidden"  to="/secondPage" >Авторизация</router-link>
    <div class="home">
      <img alt="Vue logo" src="../assets/logo.png">
      <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  data() {
    return {
      isHidden: true
    }
  },
  components: {
    HelloWorld
  }
}
</script>
