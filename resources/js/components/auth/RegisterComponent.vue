<template>
    <v-container fluid full-height mt-5>
        <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
            <v-card>
                <v-card-title>
                    <h3>Register Form</h3>
                </v-card-title>
                <v-card-text>
                    <v-form v-model="valid" @submit.prevent="submitRegister">
                        <v-text-field
                            v-model="form.name"
                            label="Your name"
                            :rules="nameRules"
                        ></v-text-field>
                        <v-text-field
                            v-model="form.email"
                            label="Your email"
                            :rules="emailRules"
                        ></v-text-field>
                        <v-text-field
                            v-model="form.password"
                            label="Your password"
                            :rules="passwordRules"
                            :append-icon="showPassword ? 'visibility_off' : 'visibility'"
                            :type="showPassword ? 'text' : 'password'"
                            @click:append="showPassword=!showPassword"
                        ></v-text-field>
                        <v-text-field
                            v-model="conPassword"
                            label="Confirm password"
                            :rules="conPasswordRules"
                            :append-icon="showConPassword ? 'visibility_off' : 'visibility'"
                            :type="showConPassword ? 'text' : 'password'"
                            @click:append="showConPassword=!showConPassword"
                        ></v-text-field>
                        <v-btn
                            :disabled="!valid"
                            @click.prevent="submitRegister"
                        >Register</v-btn>
                    </v-form>
                </v-card-text>
            </v-card>
        </v-flex>
    </v-layout>
    </v-container>
</template>
<script>
    import {register} from "../../helpers/auth";

    export default {
        name:'register',
        data(){
            return{
                valid:true,
                form:{
                    name:'',
                    email:'',
                    password:''
                },
                conPassword:'',
                showPassword: false,
                showConPassword: false,
                nameRules:[
                    value => !!value || "Required",
                ],
                emailRules: [
                    value => !!value || 'Required',
                    value => /.+@.+/.test(value) || 'Invalid Email'
                ],
                passwordRules: [
                    value => !!value || 'Required',
                    value => value.length >= 8 || 'Password must be at least 8 characters'
                ],
                conPasswordRules: [
                    value => !!value || 'Required',
                    value => value === this.form.password || 'Password does not match'
                ]
            }
        },
        methods: {
            submitRegister(){
                register(this.$data.form)
                    .then((res) => {
                        this.$store.commit('loginSuccess', res);
                        this.$router.push({path:'/'});
                    })
                    .catch((error) =>{
                        this.$store.commit('loginFail', error);
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