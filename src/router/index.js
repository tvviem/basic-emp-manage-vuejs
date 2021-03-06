import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import ViewEmployee from '@/components/ViewEmployee'
import EditEmployee from '@/components/EditEmployee'
import NewEmployee from '@/components/NewEmployee'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/new',
      name: 'new-employee',
      component: NewEmployee
    },
    {
      path: '/edit/:emp_id',
      name: 'edit-employee',
      component: EditEmployee
    },
    {
      path: '/:emp_id',
      name: 'view-employee',
      component: ViewEmployee
    },
  ]
})
