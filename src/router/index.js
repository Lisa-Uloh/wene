// import Vue from 'vue';
// import VueRouter from 'vue-router';
// import Registration from '@/components/Registration.vue';
import Registration from '@/components/UserRegistration.vue';
import Payment from '@/components/PaymentPage.vue';
import { createRouter, createWebHistory } from 'vue-router';



// Vue.use(VueRouter);

const routes = [
  { path: '/', redirect: '/register' },
  {
    path: '/register',
    name: 'Registration',
    component: Registration
  },
  {
    path: '/payment',
    name: 'Payment',
    component: Payment
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
