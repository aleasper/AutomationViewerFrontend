<template>
  <div class="statistics-div">
    <v-row class="input-data-div">
      <v-col
          md="3"
      >
        <v-text-field
            class="app-id-input"
            v-model="appId"
            outlined
            label="Идентификатор сообщества"
            color= "blue"
        >
        </v-text-field>
      </v-col>
      <v-col
          md="1"
      >
        <v-btn
            class="get-app-data-btn"
            color=#cd5c5c
            v-on:click="getStat"
        >Получить данные</v-btn>
      </v-col>
    </v-row>
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

    <div class="display-data-div">
      <v-data-table
          :headers="tableHeaders"
          :items="tableItems"
          :items-per-page="10"
          class="elevation-20"
          multi-sort
      >
      </v-data-table>
      <v-divider></v-divider>
      <v-btn
      :loading="loading3"
      :disabled="loading3"
      color=#cd5c5c
      class="get-app-data-btn"
      @click="loader = 'loading3'"
    >
      Загрузить данные в .xlsx
      <v-icon right dark>mdi-cloud-upload</v-icon>
    </v-btn>
    </div>
  </div>
</template>

<script>
import {sendData} from '@/functions.js'

export default {
  name: "Statistics",
  data: () => ({
    appId: '',
    alert: false,
    error: '',
    loader: null,
    loading3: false,
    tableHeaders: [
      {
        text: 'Источники',
        value: 'name'
      },
      {
        text: 'Понравилось',
        value: 'likes'
      },
      {
        text: 'Комментарии',
        value: 'comments'
      },
      {
        text: 'Поделились',
        value: 'reposts'
      }
    ],
    tableItems: [],
  }),
   watch: {
     loader() {
       const l = this.loader
       this[l] = !this[l]

       setTimeout(() => (this[l] = false), 3000)

       this.loader = null
     },
   },
  methods:{
    getStat(){
      let url = 'https://automation-viewer-backend.herokuapp.com/vk_data';
      let data = {
        'app_id': this.appId
      };
      sendData(url, data).then( res => {
        console.log(res['app_info']);
        if (res['app_info'].length !== 0){
          for (let i in res['app_info']) {
            this.tableItems.push(res['app_info'][i]['info']);
          }
        }
        else {
          this.error = "Данное приложение не привязано к Automation Viewer, пожалуйста проверьте ввод данных"
          this.alert = true
        }
      }).catch(er => {
        console.error(er);
      });
    }
  },
  components: {
  }
}
</script>

<style scoped>

.v-text-field--outlined >>> fieldset {
  border-color: dodgerblue;
  color: darkblue;
}

.statistics-div{
  margin: 8px 0;
  width: 100%;
  height: calc(100% - 8px);
}

.input-data-div{
  width: 100%;
  min-height: 110px;
  max-height: 160px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: baseline;
}

.display-data-div{
  width: 100%;
  height: max-content;
}

.app-id-input{
  color: darksalmon;
}
.get-app-data-btn{
color: darkblue;
}
</style>