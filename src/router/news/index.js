/*
 * @Descripttion: ''
 * @version: ''
 * @Author: 周涛
 * @Date: 2021-07-14 21:24:06
 * @LastEditors: 周涛
 * @LastEditTime: 2021-09-17 14:57:44
 */
export default [
  {
    path: '/news',
    name: 'News',
    component: () => import(/* webpackChunkName: "news" */ '@/views/news/index.vue'),
    meta: {
      title: '消息中心',
      label: 'news'
    },
    // id: 4,
    // pId: 40,
    sort: 3,
    icon: 'notice'
  }
]
