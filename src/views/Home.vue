<template>
  <div>
    <div class="home">
      <DevInfo></DevInfo>
      <v-btn v-on:click="goToStat">Go to statistics</v-btn>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import DevInfo from "@/components/DevInfo";
export default {
  name: 'Home',
  data() {
    return {
      isHidden: true
    }
  },
  methods:{
    goToStat() {
      this.$router.push({ path: '/statistics' });
    },
  },
  components: {
    DevInfo
  }
}
</script>
