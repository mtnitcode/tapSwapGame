<template>
  <div class="about">
    <h1>This is an about </h1>
  </div>

  <label for="msg">
    <input id="msg" type="text" v-model="msg" >
  </label>

  <div v-if="msg === 'msg'">
    massage is : {{ msg }}
  </div>
  <div v-else-if="msg != 'msg'">
    hi  : {{ msg }}
  </div>
  <Game ></Game>
</template>

<script>
import Game from '@/components/Game.vue';

export default {
  name: 'About',
  components: {
    Game,

  },
  data(){
    return {
      msg : "asdfasdf"

    }

  }
};
</script>

<style scoped>
h1 {
  color: green;
}
</style>