<template>
    <v-toolbar dark color="primary">
        <v-toolbar-side-icon
        @click.stop="drawer = !drawer"
        >
        </v-toolbar-side-icon>
        <v-toolbar-title>
            Vue-SPA
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-xs-only">
            <template v-if="!currentUser">
                <v-btn to="/login" dark flat>Login</v-btn>
                <v-btn to="/register" dark flat>Register</v-btn>
            </template>
            <template v-else>
                <v-btn dark flat>customers</v-btn>
                <v-menu bottom offset-y>
                    <v-btn
                    slot="activator"
                    dark flat
                    >
                        {{currentUser.name}}
                    </v-btn>
                    <v-list>
                        <v-list-tile
                                @click.prevent="logout"
                        >
                            <v-list-tile-title>Logout</v-list-tile-title>
                        </v-list-tile>
                    </v-list>
                </v-menu>
            </template>
        </v-toolbar-items>
    </v-toolbar>
</template>
<script>
    export default {
        name:'app-header',
        data(){
          return{
              drawer: null,
              items: [
                  { title: 'Login' },
                  { title: 'Register' }
              ]
          }
        },
        methods:{
            logout(){
                this.$store.commit('logout');
                this.$router.push('/login');
            }
        },
        computed: {
            currentUser() {
                return this.$store.getters.currentUser;
            }
        }
    }
</script>