<template>
  <div class="org-label-text">
    <p>Aleasper NPO</p>
    <h1>Введите текст</h1>
    <input type="text" v-model="mess">
    <button @click="printVKData">Отправить текст в консоль бразуера</button>
  </div>
</template>

<script>
//TODO Вынести в отдельный файл
/* Вне Vue компонента, т.к. это отдельная функция не имеющая отношения к компоненту*/
async function sendData(url, data) {
  const response = await fetch(url, {
    method: 'POST',
    mode: 'cors', // no-cors, *cors, same-origin
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  if (response.ok){
    return await response.json();
  } else {
    console.error(`Fetch err to ${url} with: ${response.status}`);
    return await null;
  }
}

export default {
  data() {
    return {
      mess: ''
    }
  },
  methods: {
    printVKData(){
      let url = 'http://127.0.0.1:8000/vk_data';
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