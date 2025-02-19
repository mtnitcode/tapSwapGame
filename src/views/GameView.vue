
<template>

    <main>
        Your Score Is : {{ playStatus }}
        <div id="gameContainer" ref="gameContainer"> 
        </div>
        <audio id="clickSound" src="https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-skyclad-sound/skyclad_BELLMisc_Brailler_Perkins_Ding_NONE_774.mp3" ref="mySound"  preload="auto"></audio>

    </main>

</template>
<style>
body {
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
            margin: 0;
            overflow: hidden;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }
        #gameContainer {
            position: relative;
            width: 250px;
            height: 500px;
            background-image: url('../assets/background.webp');
            background-repeat: no-repeat;
            background-size: contain;
            overflow: hidden;
        }
        #score {
            position: absolute;
            top: 10px;
            left: 10px;
            font-size: 24px;
            color: #000;
        }
        .emoji {
            position: absolute;
            font-size: 30px;
            cursor: pointer;
            user-select: none;
        }

</style>
<script>
import '../assets/css/flags.css';
import { createEmoji } from '../scripts/imoji';

export default {
    name : "game",
    mounted() {
        const gameElement = this.$refs.gameContainer; 
        // document.getElementById('gameContainer');
        //const audioElement1 = document.getElementById('clickSound') as HTMLAudioElement;
        const audioElement =  document.getElementById('clickSound') ;
        //const scoreElement = document.getElementById('score');
        //console.log(this.$refs.gameContainer);

         if (gameElement) {
            //setInterval(createEmoji(this.$refs.game-container , this.playStatus), 1000);
            //createEmoji(gameElement , this.playStatus);
            //createEmoji(gameElement , this.playStatus);

            const intervalId = setInterval(() => {
                createEmoji(gameElement , audioElement);
                this.playStatus = window.scoreValue;
                //this.$refs.mySound.play();
            }, 1000);
            //const intervalId = setInterval(createEmoji(gameElement , this.playStatus), 1000);
         } else {
             console.error('Parent element not found');
         }
    },
    data ()
    {
        return {
            playStatus : 0,
            isplayed : false,
            flagName : '',
            currentScore :0
        }
    },
    methods :
    {
    }
}

</script>
