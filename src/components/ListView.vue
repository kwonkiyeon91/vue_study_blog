<template>
  <div class="data-list" v-for="(data, i) in blogData" :key="data">
    <div>
      <h5 @click="$router.push('detail/'+i)">{{blogData[i].title}}</h5>
      <p>{{blogData[i].date}}</p>
      <div>
        {{blogData[i].content}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'ListView',
    props: {
        blogData: Array
    }
};
</script>

<style>
.data-list {
  margin-bottom: 50px;
}
</style>