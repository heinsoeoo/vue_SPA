<template>
    <div id="main">
        <SnackBar/>
        <Header/>
        <v-content>
            <router-view></router-view>
        </v-content>
    </div>
</template>

<script>
    import Header from './Header.vue';
    import SnackBar from './SnackBar.vue';

    export default {
        name:'main-app',
        components:{Header, SnackBar}
    }
</script>

<!--

public static void main(String ar[]){

    println(ldfkja;lilk ) lfka lf) lkfa)

    List<String> values = new listof();
    // add many data

}

-->