<template>
  <div class="org-label-text">
        <h1>Введите текст</h1>
        <input type="text" v-model="mess">
        <button @click="printVKData">Отправить текст в консоль бразуера</button>
        <v-alert
          :value="alert"
          color="red"
          dark
          border="top"
          icon="mdi-home"
          transition="scale-transition"
        >
          Ошибка! {{error}}
         </v-alert>
        <v-btn
            text
            @click="step--"
          >
            Назад!
        </v-btn>
  </div>
</template>

<script>
import {sendData} from '@/functions.js'

export default {
  name: 'UploadingData',
  data() {
    return {
      mess: '',
      alert: false,
      error: '',
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
        if (res['app_info' == 'Array(0)']){
          this.error = "Данное приложение не привязано к Automation Viewer, пожалуйста проверьте ввод данных"
          this.alert = true
        }
        else {
          this.error = "yee"
          this.alert = true
        }
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