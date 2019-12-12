import Vue from 'vue';
import Router from 'vue-router';

import Viewer from '@/pages/viewer';
import Diff from '@/pages/diff';

Vue.use(Router);

export default new Router({
  routes: [

    {
      path: '/',
      name: 'viewer',
      component: Viewer,
    },
    {
      path: '/diff',
      name: 'diff',
      component: Diff,
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});
