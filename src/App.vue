<template>

  <div class="container">
    <CardVue :tasks="task"/>
  </div>

</template>

<script>
import CardVue from './components/Card.vue';

export default {
  name: 'App',
  components: {
    CardVue
  },
  data() {
    return {
      task: {
        category: "Cat",
        task_text: "to do sth",
        timeline: "23/08/2020",
        cost: "250USD"
      }
      
    }
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 5%;
  box-sizing: border-box;
}

.container {
  max-width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
}
</style>
