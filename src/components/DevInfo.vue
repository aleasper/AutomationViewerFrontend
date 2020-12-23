<template>
  <div class="dev-info-div">
    <div class="org-label-text">
       <v-carousel
    cycle
    height="400"
    hide-delimiter-background
    show-arrows-on-hover
  >
    <v-carousel-item
      v-for="(slide, i) in slides"
      :key="i"
    >
      <v-sheet
        :color="colors[i]"
        height="100%"
      >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <div class="display-1">{{ slide }}</div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
      <p>Приложение находится в разработке</p>
      <p>https://github.com/aleasper/AutomationViewerFrontend</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "DevInfo",
    data () {
      return {
        colors: [
          'red lighten-1',
          'warning',
          'indigo',
          'green',
          'pink darken-2',
          'deep-purple accent-1',
            'teal',
        ],
        slides: [
          'AutomationViewer – Веб-приложение, анализирующее собранные данные',
          'Средство визуализации результатов работы ПАСИПМ ',
          'ПАСИПМ – программа автоматического сбора и публикации медиа-контента',
          'Аналитические и статистические выкладки ',
          'Увеличение охвата аудитории',
          'Поддержка в принятие решений',
          'Сравнение релевантных источников медиа-контента ',
        ],
      }
    },
  }
</script>

<style scoped>
.dev-info-div{
  margin: 10px;
  color: gray(1);
}
.org-label-text{
  font-size: 22px;
  color: gray;
}
</style>