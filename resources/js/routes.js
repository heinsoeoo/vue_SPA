import Home from './components/Home.vue';
import LoginComponent from './components/auth/LoginComponent.vue';
import RegisterComponent from './components/auth/RegisterComponent.vue';

export const routes = [
    {
        path:'/',
        component: Home,
        meta: {
            requireAuth: true,
        }
    },
    {
        path:'/login',
        component: LoginComponent
    },
    {
        path:'/register',
        component: RegisterComponent
    }
];