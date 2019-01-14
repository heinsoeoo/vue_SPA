<template>
    <v-container fluid fill-height mt-5>
        <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
                <v-card>
                    <v-card-title>
                        <h3>Login Form</h3>
                    </v-card-title>
                    <v-card-text>
                        <v-form v-model="valid">
                            <v-text-field
                                v-model="form.email"
                                :rules="mailRules"
                                label="Your email"
                            ></v-text-field>
                            <v-text-field
                                v-model="form.password"
                                :append-icon="show ? 'visibility_off' : 'visibility'"
                                :type="show ? 'text' : 'password'"
                                :rules="passwordRules"
                                label="Your Password"
                                @click:append="show = !show"
                                ></v-text-field>
                            <v-btn
                                :disabled="!valid"
                                @click.prevent="authenticate"
                            >Login</v-btn>
                        </v-form>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
    import {login} from '../../helpers/auth';

    export default {
        name: 'login',
        data() {
            return {
                valid:true,
                form: {
                    email: '',
                    password: ''
                },
                error:null,
                show:false,
                mailRules: [
                    value => !!value || 'Required',
                    value => /.+@.+/.test(value) || 'Invalid email'
                ],
                passwordRules: [
                    value => !!value || 'Required',
                ]
            }
        },
        methods: {
            authenticate() {
                this.$store.dispatch('login');

                login(this.$data.form)
                    .then((res) => {
                        this.$store.commit('loginSuccess', res);
                        this.$router.push({path:'/'})
                    })
                    .catch((error) => {
                        this.$store.commit('loginFail', {error});
                        let snackbar = Object.create({
                            color: 'error',
                            timeout: 3000,
                            text: error
                        });
                        this.$store.commit('snackbarAlert', snackbar);
                    })
            }
        }
    }
</script>
<style></style>