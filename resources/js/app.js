require('./bootstrap');
import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import Vuetify from 'vuetify';
import {routes} from './routes';
import StoreData from './store';
import MainApp from './components/MainApp.vue';

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(Vuetify);

const store = new Vuex.Store(StoreData);

const router = new VueRouter({
    routes,
    mode: 'history'
});

router.beforeEach((to, from, next) => {
    const requireAuth = to.matched.some(record => record.meta.requireAuth);
    const currentUser = store.state.currentUser;

    if (requireAuth && !currentUser){
        next('/login');
    }else if (to.path === '/login' && currentUser){
        next('/');
    }else if (to.path === '/register' && currentUser){
        next('/');
    }else{
        next();
    }
});

const app = new Vue({
    el: '#app',
    router,
    store,
    components:{
        MainApp
    }
});
