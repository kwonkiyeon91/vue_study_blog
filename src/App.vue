<template>
  <div>
    <HeaderView />

    <div class="mt-4">
      <router-view :blogData="blogData"></router-view>
    </div>
    
   <!-- <ListView :blogData="blogData[i]" v-for="(data, i) in blogData" :key="data"/> -->
  </div>
</template>

<script>
//import ListView from './components/ListView.vue'
import blog from './assets/blog.js'
import HeaderView from './components/HeaderView.vue'

export default {
  name: "App",
  components: {
    HeaderView
  },
  data() {
    return {
      blogData: blog
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
