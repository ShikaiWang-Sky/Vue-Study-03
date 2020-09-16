import Vue from "vue";
import Router from "vue-router";

import Main from "../views/Main";
import Login from "../views/Login";
import List from "../views/User/List";
import Profile from "../views/User/Profile";
import NotFound from "../views/NotFound";

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/main/:name',
      name: 'main',
      props: true,
      component: Main,
      //嵌套路由
      children: [
        {
          path: '/user/list',
          name: 'list',
          component: List
        },
        {
          //用 /:参数名 传递参数
          path: '/user/profile/:id',
          name: 'profile',
          component: Profile
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/goHome',
      redirect: '/main'
    },
    {
      path: '*',
      component: NotFound
    }
  ]
});
