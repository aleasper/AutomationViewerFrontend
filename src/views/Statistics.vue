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
      <v-alert
          :value="alert"
          color="red"
          dark
          border="top"
          transition="scale-transition"
      >
        Ошибка! {{error}}
      </v-alert>
      <v-col
          md="1"
      >
        <v-btn
            class="get-app-data-btn"
            color=#cd5c5c
            v-on:click="getStat"
            :loading="loadingData"
        >Получить данные</v-btn>
      </v-col>
    </v-row>
    <v-row>
      <div class="display-data-div">
        <v-data-table
            :headers="tableHeaders"
            :items="tableItems"
            :items-per-page="5"
            class="elevation-1"
            multi-sort
        ></v-data-table>
        <xlsx></xlsx>
      </div>
    </v-row>
    <v-row>
      <v-card
          v-if="top.length !== 0"
          class="mx-auto"
      >
        <v-list-item two-line>
          <v-list-item-content>
            <v-list-item-title>Больше всего лайков</v-list-item-title>
            <v-list-item-subtitle>{{m_liked['info']['name']}}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>

        <v-list-item two-line>
          <v-list-item-content>
            <v-list-item-title>Больше всего комментариев</v-list-item-title>
            <v-list-item-subtitle>{{m_commented['info']['name']}}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>

        <v-list-item two-line>
          <v-list-item-content>
            <v-list-item-title>Больше всего репостов</v-list-item-title>
            <v-list-item-subtitle>{{m_reposted['info']['name']}}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>

        <v-list-item two-line>
          <v-list-item-content>
            <v-list-item-title>Наиболее релевантные источники</v-list-item-title>
            <v-list-item-subtitle v-for="(ref, i) in top" :key="i">{{ref['info']['name']}}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

      </v-card>
    </v-row>
    <v-btn
        class="get-app-data-btn"
    >
      <download-excel
      class="get-app-data-btn"
      :data="tableItems"
      :fields="json_fields"
      worksheet="Данные ПАСИПМ"
      name="filename.xls"
    >
      Сохранить таблицу в .xlsx
    </download-excel>
    </v-btn>
  </div>
</template>

<script>
import {getRequest} from '@/functions.js'
import Xlsx from "@/components/xlsx";

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
    loadingData: false,
    m_liked: '',
    m_commented: '',
    m_reposted: '',
    top: [],

    json_fields: {
      "Источники": "info.name",
      Понравилось: "info.likes",
      Комментарии: "info.comments",
      Поделились: "info.reposts",
    },
    json_info: [{
        id: "1",
       info: {
          likes: "1",
         comments: "1",
         reposts: "4",
         name: "abcd",
       }
    }],
    json_data: [
      {
        name: "Tony Peña",
        city: "New York",
        country: "United States",
        birthdate: "1978-03-15",
        phone: {
          mobile: "1-541-754-3010",
          landline: "(541) 754-3010",
        },
      },
      {
        name: "Thessaloniki",
        city: "Athens",
        country: "Greece",
        birthdate: "1987-11-23",
        phone: {
          mobile: "+1 855 275 5071",
          landline: "(2741) 2621-244",
        },
      },
    ],
    json_meta: [
      [
        {
          key: "charset",
          value: "utf-8",
        },
      ],
    ],
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
      this.tableItems = [];
      this.top = [];
      this.m_liked = '';
      this.m_commented = '';
      this.m_reposted = '';
      if (sessionStorage.getItem('AV_login') != null && sessionStorage.getItem('AV_password') != null) {
        this.loadingData = true;
        let url = 'https://automation-viewer-backend.herokuapp.com/vk_data';
        let data = {
          'app_id': this.appId,
          'login': sessionStorage.getItem('AV_login'),
          'password': sessionStorage.getItem('AV_password')
        };
        getRequest(url, data).then(res => {
          console.log(res['app_info']);
          if (res['app_info'].length !== 0) {
            for (let i in res['app_info']) {
              this.tableItems.push(res['app_info'][i]['info']);
            }
            this.alert = false;

            url = 'https://automation-viewer-backend.herokuapp.com/vk_data_analytics';
            getRequest(url, data).then(res => {
              console.log('\n\n\n', res);
              this.m_liked = res['analytics']['mostly_liked'];
              this.m_commented = res['analytics']['mostly_commented'];
              this.m_reposted = res['analytics']['mostly_reposted'];

              this.top = res['analytics']['top'];

            }).catch(er => {
              console.error(er);
            }).finally(() => {
              this.loadingData = false;
            });

          } else {
            this.error = "Данное приложение не привязано к Automation Viewer, пожалуйста проверьте ввод данных"
            this.alert = true;
          }
        }).catch(er => {
          console.error(er);
        }).finally(() => {

        });
      } else {
        this.error = "Пожалуйста, выполните авторизацию"
        this.alert = true;
      }

    },
    saveXlsx(){
      this.loadindXlsx = true;
      let url = 'https://automation-viewer-backend.herokuapp.com/vk_data_xlsx';
      let data = {
        'app_id': this.appId,
        'login': sessionStorage.getItem('AV_login'),
        'password': sessionStorage.getItem('AV_password')
      };
      getRequest(url, data).then( res => {
        if (res['ok']){
          this.downloadBase64(res['base64'], 'data:application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;base64,')
        }else{
          console.error(res);
        }
      }).catch().finally( () => {
        this.loadindXlsx = false;
      })
    },
    downloadBase64(base64string, prefix){
      var link = document.createElement("a");
      link.href = prefix + base64string;
      link.style = "visibility:hidden";
      link.download = 'statistics.xlsx';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  },
  components: {
    Xlsx
  },
}
</script>

<style scoped>

.v-text-field--outlined >>> fieldset {
  border-color: dodgerblue;
  color: darkblue;
}

.statistics-div{
  padding: 6px 8px;
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
  margin: 4px 0;
  color: darkblue;
}
</style>