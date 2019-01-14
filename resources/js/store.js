import {getLocalUser} from "./helpers/auth";

const user = getLocalUser();

export default {
    state: {
        currentUser: user,
        isLoggedIn: !!user,
        loading: false,
        auth_error: null,
        customers: [],
        snackbar: false,
        snackbarTimeout: 3000,
        snackbarColor: 'error',
        snackbarText: '',
    },
    getters:{
        isLoading(state){
            return state.loading;
        },
        isLoggedIn(state){
            return state.isLoggedIn;
        },
        currentUser(state){
            return state.currentUser;
        },
        authError(state){
            return state.auth_error;
        },
        customers(state){
            return state.customers;
        },
        snackbar(state){
            return state.snackbar;
        },
        snackbarTimeout(state){
            return state.snackbarTimeout;
        },
        snackbarColor(state){
            return state.snackbarColor;
        },
        snackbarText(state){
            return state.snackbarText;
        }
    },
    mutations:{
        login(state){
            state.loading = true;
            state.auth_error = null;
        },
        loginSuccess(state, payload){
            state.auth_error = null;
            state.isLoggedIn = true;
            state.loading = false;
            state.currentUser = Object.assign({}, payload.user, {token:payload.access_token});
            localStorage.setItem('user',JSON.stringify(state.currentUser));
        },
        loginFail(state, payload){
            state.loading = false;
            state.auth_error = payload.error;
        },
        logout(state){
            localStorage.removeItem('user');
            state.isLoggedIn = false;
            state.currentUser = null;
        },
        snackbarAlert(state, payload){
            state.snackbar = true;
            state.snackbarColor = payload.color;
            state.snackbarText = payload.text;
            state.snackbarTimeout = payload.timeout;
        },
        closeSnackBar(state){
            state.snackbar = false;
            state.snackbarText = '';
        }
    },
    actions:{
        login(context){
            context.commit('login');
        }
    }
};