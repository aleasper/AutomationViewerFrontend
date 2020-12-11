<template>
  <div>
    <UploadingData></UploadingData>
    <MainPage></MainPage>
      <div id="app">
        <v-app id="inspire">
          <v-parallax src="@/assets/градиент1.png">
           <div class="text-right">
             <v-btn class="mx-2" fab dark small color="primary">
                <v-icon dark>mdi-minus</v-icon>
            </v-btn>
             <v-img
                 src="@/assets/Логотип-removebg-preview.png"
               height="125"
                contain
             ></v-img>
            </div>
          Second15
          </v-parallax>
        </v-app>
      </div>
  </div>
</template>

<script>
import UploadingData from '@/components/UploadingData.vue'
import MainPage from '@/components/MainPage.vue'

export default {
  name: "SecondPage",
  components: {
    UploadingData,
    MainPage
  }
}
</script>

<style scoped>

</style>