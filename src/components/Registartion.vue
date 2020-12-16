<template>
  <v-card
    class="mx-auto"
    max-width="500"
  >
    <v-card-title class="title font-weight-regular justify-space-between">
      <span>{{ currentTitle }}</span>
      <v-avatar
        color="primary lighten-2"
        class="subheading white--text"
        size="24"
        v-text="step"
      ></v-avatar>
    </v-card-title>

    <v-window v-model="step">
      <v-window-item :value="1">
        <v-card-text>
          <v-text-field
            label="Логин"
            v-model="login"
          >
          </v-text-field>
          <span class="caption grey--text text--darken-1">
            Этот логин вы будете использовать для входа в свою учетную запись
          </span>
        </v-card-text>
      </v-window-item>

      <v-window-item :value="2">
        <v-card-text>
          <v-text-field
            label="Пароль"
            type="password"
            v-model="pass"
          >
          </v-text-field>
          <v-text-field
            label="Повторите пароль"
            type="password"
            v-model="passRep"
          >
          </v-text-field>
          <span class="caption grey--text text--darken-1">
            Пожалуйста введите пароль для окончания регистрации
          </span>
        </v-card-text>
      </v-window-item>

      <v-window-item :value="3">
        <div class="pa-4 text-center">
          <v-img
            class="mb-4"
            contain
            height="128"
            src="@/assets/Логотип-removebg-preview.png"
          ></v-img>
          <h3 class="title font-weight-light mb-2">Добро пожаловать в AutomationViewer</h3>
          <span class="caption grey--text">Спасибо за регистрацию!</span>
        </div>
      </v-window-item>
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
      Ошибка! {{mess}}
     </v-alert>

    <v-card-actions>
      <v-btn
        :disabled="step === 1 && step === 3 "
        text
        @click="step--"
      >
        Назад
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn
        :disabled="step === 3"
        color="primary"
        depressed
         @click="printData"
      >
        Далее
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>

  import {sendData} from "@/functions";

  export default {
    data: () => ({
      step: 1,
      login: '',
      pass: '',
      passRep:'',
      alert: false,
      mess: ''
    }),
    computed: {
      currentTitle () {
        switch (this.step) {
          case 1: return 'Регистрация'
          case 2: return 'Введите пароль'
          default: return 'Аккаунт успешно создан'
        }
      },
    },
    methods: {
      printData() {
        if (this.step == 1) {
          if (this.login == '') {
            this.mess = "Введите логин"
            this.alert = true
          } else {
            this.step++
            this.alert = false
          }
        } else if (this.step == 2) {
          if (this.pass == '' || this.pass != this.passRep)
          {
            this.mess = "Неверно введен пароль"
            this.alert = true
          }
          else
            {
            this.funcRegistr();
            }
        }
      },
      funcRegistr(){
        let url = 'https://automation-viewer-backend.herokuapp.com/register';
        let data = {
          'login': this.login,
          'password': this.pass
        };
        sendData(url, data).then( res => {
          console.log(res);
          if (res['ok']) {
         this.step++
        //this.$router.push('/statistics')
        }
        else {
          this.mess = "Данный пользователь уже существует"
          this.alert = true
        }
        }).catch(er => {
          console.error(er);
        })
        let res = sendData(url, data);
        console.log('res: ', res);
      }
  },
    mounted() {
      localStorage.setItem('authorized', 'false');
    }
  }
</script>