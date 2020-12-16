<template>
  <v-card
      class="mx-auto"
      max-width="420"
  >
    <v-card-title class="title font-weight-regular justify-space-between">
      <span>Авторизация</span>
    </v-card-title>

    <v-window >
      <v-card-text>
        <v-text-field
            label="Логин"
            type="логин"
            v-model="login"
        ></v-text-field>
        <v-text-field
            label="Пароль"
            type="password"
            v-model="password"
        ></v-text-field>
      </v-card-text>
    </v-window>

    <v-divider></v-divider>

    <v-alert
      :value="alert"
      color="red"
      dark
      border="top"
      icon="mdi-home"
      transition="scale-transition"
    >
      Ошибка! Неверный ввод данных!
    </v-alert>

    <v-card-actions>
      <v-btn
          text
          color="indigo"
          depressed
          v-on:click="auth"
      >
        Войти
      </v-btn>
    </v-card-actions>
    <span class="caption grey--text text--darken-1">
            У меня еще нет аккаунта
          </span>
    <v-card-actions >
      <v-btn
          text
          color="red"
          depressed
          @click = "$router.push('/registration')"
      >
        Регистрация >
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import {sendData} from "@/functions";

export default {
  name: 'Authorization',
  data: () => ({
    authorized:false,
    login: '',
    password: '',
    alert: false,
  }),
  watch:{

  },
  methods: {
    auth: function (){
      let url = 'https://automation-viewer-backend.herokuapp.com/login';
      let data = {
        'login': this.login,
        'password': this.password
      };
      sendData(url, data).then( (res) => {
        console.log(res);
        if (res['ok']){
          this.authorized = true;
          this.$router.push('/statistics')
        } else {
          this.alert = true
          this.authorized = false;
        }
      }).catch( er => {
        console.error(er);
      })
    }
  }
}
</script>