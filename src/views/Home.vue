<template>
  <div>
    <div class="home">
      <DevInfo></DevInfo>
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
  components: {
    DevInfo
  }
}
</script>
