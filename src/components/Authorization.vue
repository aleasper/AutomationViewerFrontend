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
          ></v-text-field>
          <v-text-field
            label="Пароль"
            type="password"
          ></v-text-field>
        </v-card-text>
      </v-window>

    <v-divider></v-divider>

    <v-card-actions>
      <v-btn
        text
        color="indigo"
        depressed
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
  export default {
  }
</script>