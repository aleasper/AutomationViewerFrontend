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
    return {
      mess: ''
    }
  },
  methods: {
    async sendData() {
      const response = await fetch('https://cors-anywhere.herokuapp.com/https://automation-viewer-backend.herokuapp.com/vk_data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          app_id: this.mess
        })
      })
      console.log(response)
    }
  }
}
</script>

<style scoped>
.org-label-text{
  font-size: 22px;
}
</style>