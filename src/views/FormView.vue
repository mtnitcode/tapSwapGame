<template>
    <form v-on:submit="submitForm">

        <input type="text" id="t1"></input>
        <input type="text" id="t2"></input>
        <input type="submit" />
    </form>
</template>
<script>
export default {
    name:'form',
    data(){

    },
    methods:
    {
        submitForm(event){
            event.preventDefault() 
            return;
        }
    }


}
</script>