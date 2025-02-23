<template>
    <div 
      class="puzzle-piece"
      :style="pieceStyle"
      @click="handleClick"
      @dragstart="handleDragStart"
      @dragover="handleDragOver"
      @drop="handleDrop"
      draggable="true"
    >
      <img :src="imageUrl" :alt="`Puzzle piece ${index}`" />
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';

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
      }
    },
    computed: {
      pieceStyle() {
        return {
          border: '1px solid #ccc',
          cursor: 'pointer',
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