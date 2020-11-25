<template>
  <div class="org-label-text">
    <p>Aleasper NPO</p>
    <h1>Введите текст</h1>
    <input type = "text" v-model = "mess">
    <button @click="sendData">Отправить текст в консоль бразуера</button>
  </div>
</template>

<script>
export default {
  data() {
    return{
      mess: ''
    }
  },
  methods: {
     sendData() {
       console.log(this.mess)
      }
  }
}
</script>

<style scoped>
.org-label-text{
  font-size: 22px;
}
</style>