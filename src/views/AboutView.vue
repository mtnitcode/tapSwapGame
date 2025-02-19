<template>
  <div class="about">
    <h1> Telegrom bot Chameleon tap swap Game </h1>
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

    }

  }
};
</script>

<style scoped>
h1 {
  color: green;
}
</style>