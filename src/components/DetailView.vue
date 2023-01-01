<template>
  <div>
    <h4>상세페이지</h4>
    <h5>{{blogData[$route.params.id].title}}</h5>
    <p>글 설명</p>
    <router-view></router-view>
    <router-link to="/list">리스트 페이지</router-link>
  </div>
</template>

<script>
export default {
    name: 'DetailView',
    props: {
        blogData: Array
    }
}
</script>

<style>

</style>