<template>
    <v-layout mt-5>
        <v-flex xs12 sm6 offset-sm3>
            <v-card>
                <v-img src="https://www.desktopbackground.org/download/o/2014/08/19/811515_blue-mountain-material-design-wallpapers-collection_2560x1440_h.png"></v-img>
                <v-card-title primary-title>
                    <div>
                        <h3 headline mb-0>Welcome to Vuetify</h3>
                        <div>
                            Laravel Vuetify App
                        </div>
                    </div>
                </v-card-title>
                <v-card-actions>
                    <v-btn flat color="purple">Share</v-btn>
                    <v-btn flat color="purple">Explore</v-btn>
                </v-card-actions>
            </v-card>
        </v-flex>
    </v-layout>
</template>
<script>
    export default {
        name: 'home'
    }
</script>