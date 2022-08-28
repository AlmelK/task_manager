<template>
  <section class="card_wrapper">
    <div v-for="task in tasks" :key="task.id" class="cardItem">
      <TaskCard :task="task" />
    </div>

    <div ref="loadMore" class="load_more" v-if="loadmore">
      <svg viewBox="25 25 50 50">
        <circle cx="50" cy="50" r="20"></circle>
      </svg>
    </div>
  </section>
</template>

<script>

import axios from 'axios';
import TaskCard from './components/TaskCard.vue';

export default {
  name: 'App',
  components: {
    TaskCard
  },

  data() {
    return {
      tasks: [],

      limit: 9,

      startIndex: 0,

      pageCount: 8,

      pageNumber: 1,

      loadmore: true
    }
  },
  methods: {
    async getTasks() {
      try {
        const response = await axios.get('http://api.staging.umeu.app/test/tasks/search',
          {
            params: {
              pagingCount: this.limit,
              pagingAfter: this.startIndex
            }
          })
        this.tasks.push(...response.data.result.offers)
      } catch (e) {
        console.log(e.message)
      }
    },

    // 
    setLoadingObserver() {
      var options = {
        rootMargin: '0px',
        threshold: 1.0
      }
      var callback =  (entries) => {
        /* Content excerpted, show below */
        if (entries[0].isIntersecting && this.pageNumber < this.pageCount) {
          setTimeout(() => {
              this.getTasks()
              this.startIndex += this.limit
              this.pageNumber++

              if(this.pageNumber >= this.pageCount) {
                this.loadmore = false
              }
            }, 1000)
        } 
            
      };
      var observer = new IntersectionObserver(callback, options);

      observer.observe(this.$refs.loadMore)
    }
  },
  mounted() {
    //this.fetchData()
    this.setLoadingObserver()
  }

}
</script>

<style lang="sass">
body
    padding: 5% 5% 0 5%
    box-sizing: border-box
    background: linear-gradient(70deg, #fffafa, #e6e6e6)

.card_wrapper
    padding: 0 auto
    display: flex
    min-width: 100%
    justify-content: center
    flex-wrap: wrap
    flex-direction: column

    .load_more
      display: flex
      justify-content: center

      svg 
        width: 3.75em
        transform-origin: center
        animation: rotate 2s linear infinite
      
        circle 
          fill: none
          stroke: #473144
          stroke-width: 3
          stroke-dasharray: 1, 200
          stroke-dashoffset: 0
          stroke-linecap: round
          animation: dash 1.5s ease-in-out infinite

          @-moz-keyframes rotate 
            100% 
              transform: rotate(360deg)
            
          
          @-webkit-keyframes rotate 
            100% 
              transform: rotate(360deg)
            
          
          @-o-keyframes rotate 
            100% 
              transform: rotate(360deg)
            
          
          @keyframes rotate 
            100% 
              transform: rotate(360deg)
            
          
          @-moz-keyframes dash 
            0% 
              stroke-dasharray: 1, 200
              stroke-dashoffset: 0
            
            50% 
              stroke-dasharray: 90, 200
              stroke-dashoffset: -35px
            
            100% 
              stroke-dashoffset: -125px
            
          
          @-webkit-keyframes dash 
            0% 
              stroke-dasharray: 1, 200
              stroke-dashoffset: 0
            
            50% 
              stroke-dasharray: 90, 200
              stroke-dashoffset: -35px
            
            100% 
              stroke-dashoffset: -125px
            
          
          @-o-keyframes dash 
            0% 
              stroke-dasharray: 1, 200
              stroke-dashoffset: 0
            
            50% 
              stroke-dasharray: 90, 200
              stroke-dashoffset: -35px
            
            100% 
              stroke-dashoffset: -125px
            
          
          @keyframes dash 
            0% 
              stroke-dasharray: 1, 200
              stroke-dashoffset: 0
            
            50% 
              stroke-dasharray: 90, 200
              stroke-dashoffset: -35px
            
            100% 
              stroke-dashoffset: -125px
            
          
      

</style>
