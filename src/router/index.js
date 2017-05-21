import Vue from 'vue'
import Router from 'vue-router'
import Tabs from '@/components/Tabs'
import Login from '@/components/Login'
import Records from '@/components/records'
import Patients from '@/components/patients'
import Doctors from '@/components/doctors'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/', component: Tabs,
      children: [
        {
          path: '/', redirect: '/records/current'
        },
        {
          path: '/records/:type',
          name: 'Архив',
          component: Records
        },
        {
          path: '/patients/',
          name: 'Пациенты',
          component: Patients
        },
        {
          path: '/doctors',
          name: 'Врачи',
          component: Doctors
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
