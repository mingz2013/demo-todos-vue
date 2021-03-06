import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

import Index from '@/components/todos/Index'
import List from '@/components/todos/List'
import Add from '@/components/todos/Add'
import Detail from '@/components/todos/Detail'
import Edit from '@/components/todos/Edit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // name: 'HelloWorld',
      // component: HelloWorld
      redirect: '/todos'
    },
    {
      path: '/todos',
      name: 'Index',
      component: Index,
      children: [
        {
          path: '',
          component: List
        },
        {
          path: 'list',
          component: List
        },
        {
          path: 'edit/:id',
          props: true,
          component: Edit
        },
        {
          path: 'detail/:id',
          props: true,
          component: Detail
        },
        {
          path: 'add',
          component: Add
        }
      ]
    }

  ]
})
