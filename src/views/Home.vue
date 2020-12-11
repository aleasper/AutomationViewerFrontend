<template>
  <div>
    <div class="home">
      <img alt="Vue logo" src="../assets/logo.png">
      <HelloWorld/>
      <router-link tag="button" v-if="isHidden" v-on:click="isHidden = !isHidden"  to="/secondPage" >Следующая страница</router-link>
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
