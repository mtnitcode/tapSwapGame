<template>
    <div 
      class="puzzle-piece"
      :style="pieceStyle"
      @click="handleClick"
      @dragstart="handleDragStart"
      @dragover="handleDragOver"
      @drop="handleDrop"
      @touchstart="startDrag"
      @touchmove="drag"
      @touchend="endDrag"
      @touchcancel="endDrag"
      draggable="true"
    >
      <img :src="imageUrl" :alt="`Puzzle piece ${index}`" ref="piece-{{index}}" />
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import { ref, reactive, onMounted } from 'vue';

  let currentPieceIndex: number ;

  export default defineComponent({
    props: {
      imageUrl: {
        type: String,
        required: true,
      },
      index: {
        type: Number,
        required: true,
      },
      pWidth: {
        type: String,
        required: true,
      },
      pHeight: {
        type: String,
        required: true,
      },
      position: {
        type: Object ,// { x, y } position of the piece      
        required: true,
      }
    },
    data() {
      return {
        isDragging: false,
        startX: 0,
        startY: 0,
        offsetX: 0,
        offsetY: 0,
      };
    },    
    computed: {
      pieceStyle() {
        return {
          border: '1px solid #ccc',
          cursor: 'pointer',
          touchAction: 'none', // Disable default touch behavior          
        };
      },
    },
    methods: {
      handleClick() {
        this.$emit('piece-clicked', this.index);
      },
      handleDragStart(event: DragEvent) {
        event.dataTransfer?.setData('text/plain', this.index.toString());
      },
      handleDragOver(event: DragEvent) {
        event.preventDefault();
      },
      handleDrop(event: DragEvent) {
        event.preventDefault();
        const fromIndex = Number(event.dataTransfer?.getData('text/plain'));
        this.$emit('piece-dropped', { fromIndex, toIndex: this.index });
      },
      startDrag(event: TouchEvent){
        event.preventDefault();
        currentPieceIndex=this.index;
        this.$emit('piece-touched', this.index);
        this.isDragging = true;
        const touch = event.touches[0];
        this.startX = touch.clientX - this.offsetX;
        this.startY = touch.clientY - this.offsetY;        
      },
      drag(event: TouchEvent){
        event.preventDefault();
        if (this.isDragging) {
          this.$emit('piece-dropped', { currentPieceIndex, toIndex: this.index });
          const touch = event.touches[0];
          // this.offsetX = touch.clientX - this.startX;
          // this.offsetY = touch.clientY - this.startY;
          // this.position.x += this.offsetX;
          // this.position.y += this.offsetY;
        }
      },
      endDrag(event: TouchEvent){
        event.preventDefault();
        const fromIndex = currentPieceIndex;
        this.$emit('piece-touchend', { fromIndex, toIndex: this.index });
        this.isDragging = false;
      }
    },
  });
  </script>
  
  <style scoped>
  .puzzle-piece img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  </style>