import Vue from 'vue'
import Router from 'vue-router'


//整合组件写法
//import ComponentName from '@/components/ComponentName'
//
//异步组件写法
//const ComponentName = () => import(/* webpackChunkName: "ChunkName" */'@/components/ComponentName')
//


const HelloWorld = () => import(/* webpackChunkName: "com-HelloWorld" */'@/components/HelloWorld')


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
