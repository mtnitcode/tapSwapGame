<template>
    <main>
        playStatus : {{ playStatus }}

        <video src="https://archive.org/download/SampleVideo1280x7205mb/SampleVideo_1280x720_5mb.mp4"
        id="sampleVideo"
        controls
        width="500px" height="400px"
        v-on:play="playMethod"
        v-on:pause="pauseMethod"
        ref="myVideo">

        </video>

        <br>
        <button v-if="!isplayed" v-on:click="play" value="Play" >Play</button>
        <button v-if="isplayed" v-on:click="pause" value="Pause"> Pause</button>


    </main>

</template>
<script >
export default {
    name : "basicEvent",
    data ()
    {

        return {
            playStatus :'video is not played',
            isplayed : false
        }

    },
    methods :
    {
        playMethod (){
            this.playStatus = 'video is played'

        },
        pauseMethod(){
            this.playStatus ='video is paused'
        },
        play(){
            this.$refs.myVideo.className='play'
            this.$refs.myVideo.play()
            this.isplayed= true;

        },
        pause(){
            this.$refs.myVideo.className='play'
            this.$refs.myVideo.pause()
            this.isplayed = false;
        }
    }



}
</script>
