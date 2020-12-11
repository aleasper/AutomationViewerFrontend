<template>
  <div class="org-label-text">
    <p>Aleasper NPO</p>
    <h1>Введите текст</h1>
    <input type="text" v-model="mess">
    <button @click="printVKData">Отправить текст в консоль бразуера</button>
  </div>
</template>

<script>
import {sendData} from '@/functions.js'

export default {
  name: 'UploadingData',
  data() {
    return {
      mess: ''
    }
  },
  methods: {
    printVKData(){
      let url = 'https://automation-viewer-backend.herokuapp.com/vk_data';
      let data = {
        'app_id': this.mess
      };
      sendData(url, data).then( res => {
        console.log(res);
      }).catch(er => {
        console.error(er);
      })
      let res = sendData(url, data);
      console.log('res: ', res);

    }
  },
}
</script>

<style scoped>
.org-label-text{
  font-size: 22px;
}
</style>