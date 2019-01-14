<template>
    <v-snackbar
        v-model="snackbar"
        right top multi-line
        :timeout="snackbarTimeout"
        :color="snackbarColor"
    >
        {{snackbarText}}
        <v-btn
            dark
            flat
            @click.prevent="closeSnackBar"
        >
            Close
        </v-btn>
    </v-snackbar>
</template>
<script>
    export default  {
        name:'snackbar',
        methods: {
            closeSnackBar(){
                this.$store.commit('closeSnackBar');
            }
        },
        computed: {
            snackbar(){
                return this.$store.getters.snackbar;
            },
            snackbarTimeout(){
                return this.$store.getters.snackbarTimeout;
            },
            snackbarColor(){
                return this.$store.getters.snackbarColor;
            },
            snackbarText(){
                return this.$store.getters.snackbarText;
            }
        }
    }
</script>