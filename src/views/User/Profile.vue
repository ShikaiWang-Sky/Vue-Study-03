<template>
<!--所有的元素, 不能直接在根节点下, 要用div标签包起来-->
  <div>
    <!--展示路由中的值-->
    <h1>个人信息</h1>
    {{$route.params.id}}
  </div>
</template>

<script>
export default {
  name: "UserProfile",
  //相当于过滤器
  beforeRouteEnter: (to, from, next) => {
    console.log("进入路由之前");
    next(vm => {
      vm.getData();   //进入路由之前, 执行getData方法
    });
  },
  beforeRouteLeave: (to, from, next) => {
    console.log("进入路由之后");
    next();
  },
  methods: {
    getData : function () {
      this.axios({
        method: "get",
        url: 'http://localhost:8080/static/mock/data.json'
      }).then(function (response) {
        console.log(response)
      })
    }
  }
}
</script>

<style scoped>

</style>
