<template>

  <div class="create_task">
    <button @click="showModal">Добавить задание</button>
  </div>

  <MyModal v-model:show="modalVisible">
    <CreateForm />    
  </MyModal>
  <div class="container" v-if="!isDataLoading">

    <div v-for="offer in tasks" :key="offer.id">
      <CardVue :task="offer" />
    </div>

  </div>
  <div v-else>
    Load data ...
  </div>

  <div ref="observer" class="observer">

  </div>
</template>

<script>
import CardVue from './components/Card.vue';
import CreateForm from './components/CreateForm.vue';
import axios from 'axios';
import MyModal from './components/MyModal.vue';

export default {
  name: 'App',
  components: {
    CardVue,
    CreateForm,
    MyModal
},
  data() {
    return {
      tasks: [],

      isDataLoading: false,

      //общее количество страниц
      totalPage: 0,

      pagecount: 0,

      //индекс первого элемента на странице
      pageIndex: 0,

      //количество загружаемых за раз заданий 
      limit: 9,

      modalVisible: false,
    }
  },
  methods: {
    async fetchData() {
      try {
        this.pageIndex += this.limit
        this.pagecount += 1;
        setTimeout(async () => {
          const response = await axios.get('http://api.staging.umeu.app/test/tasks/search', {
            params: {
              pagingCount: this.limit,
              pagingAfter: this.pageIndex
            }
          })
          this.totalPage = Math.ceil(response.headers['content-length']/this.limit)
          console.log(this.pagecount)
          this.tasks = [...this.tasks, ...response.data.result.offers]
          
        }, 1000)
      } catch (e) {
        alert("Error" + e)
      }
    },
    showModal() {
      this.modalVisible = true
    }
  },
  mounted() {
    this.fetchData()
    console.log(this.$refs.observer)
    const options = {
      rootMargin: '0px',
      threshold: 1.0
    }
    const callback = (entries) => {
      if (entries[0].isIntersecting && this.pagecount < this.totalPage) {
        this.fetchData()
      }
    }
    const observer = new IntersectionObserver(callback, options);
    observer.observe(this.$refs.observer);
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
  margin: auto;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
}

.observer {
  height: 30px;
}

.create_task {
  max-width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 10px;
}

.create_task button {
  background-color: rgb(81, 127, 234);
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  font-size: 16px;
  color: white;
}

.create_task button:hover {
  cursor: pointer;
  box-shadow: 5px 5px 5px #a1a1a1;
  transition: .5s;
}
</style>
