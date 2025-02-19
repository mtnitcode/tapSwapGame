<template>

    <li> number : {{ number }}</li>
    <button v-on:click="increment"> add number </button>

</template>
<script>
export default {
    'name' : 'method',
    data (){
        return {
            number: 5454,
        }
    },
    methods :{
        increment(){

            this.number+=1;
        }

    }

};

</script>