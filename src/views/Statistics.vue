<template>
  <div class="statistics-div">
    <v-row class="input-data-div">
      <v-col
          md="2"
      >
        <v-text-field
            class="app-id-input"
            v-model="appId"
            outlined
            label="Application id"
        >
        </v-text-field>
      </v-col>
      <v-col
          md="1"
      >
        <v-btn
            class="get-app-data-btn"
            v-on:click="getStat"
        >Статистика</v-btn>
      </v-col>
    </v-row>
    <div class="display-data-div">
      <v-data-table
          :headers="tableHeaders"
          :items="tableItems"
          :items-per-page="10"
          class="elevation-1"
          multi-sort
      ></v-data-table>
    </div>
  </div>
</template>

<script>
import {sendData} from '@/functions.js'

export default {
  name: "Statistics",
  data: () => ({
    appId: '',
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
  methods:{
    getStat(){
      let url = 'https://automation-viewer-backend.herokuapp.com/vk_data';
      let data = {
        'app_id': this.appId
      };
      sendData(url, data).then( res => {
        console.log(res);
        if (res !== []){
          for (let i in res['app_info']){
            this.tableItems.push(res['app_info'][i]['info']);
          }
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

.statistics-div{
  margin: 4px 0;
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

}
.get-app-data-btn{

}
</style>