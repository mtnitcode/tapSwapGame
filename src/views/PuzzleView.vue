<template>
    <div class="puzzle-game">
      <h1>Image Puzzle Game</h1>
      <input type="file" @change="handleImageUpload" accept="image/*" />
      <div class="puzzle-board" :style="{ '--gridSize': gridSize , '--pieceWidth': pieceWidth }">
        <PuzzlePiece
          v-for="(piece, index) in puzzlePieces"
          :key="index"
          :imageUrl="piece.url"
          :index="index"
          :pWidth="pieceWidth"
          :pHeight="pieceHeight"
          @piece-clicked="handlePieceClick"
          @piece-dropped="handlePieceDrop"
        />
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  import PuzzlePiece from '@/components/PuzzlePiece.vue';
  
  export default defineComponent({
    components: {
      PuzzlePiece,
    },
    setup() {
      const gridSize = ref(5); // 3x3 grid
      let pieceWidth = ref('100px'); // Each piece is 100px wide
      let pieceHeight = ref('100px'); // Each piece is 100px tall
        
      const puzzlePieces = ref<{ url: string; index: number }[]>([]);
  
      // Handle image upload
      const handleImageUpload = (event: Event) => {
        const input = event.target as HTMLInputElement;
        if (input.files && input.files[0]) {
          const reader = new FileReader();
          reader.onload = (e) => {
            const imageUrl = e.target?.result as string;
            splitImageIntoPieces(imageUrl);
          };
          reader.readAsDataURL(input.files[0]);
        }
      };
  
      // Split the image into pieces using canvas
      const splitImageIntoPieces = (imageUrl: string) => {
        const image = new Image();
        image.src = imageUrl;
        image.onload = () => {
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');
          if (!ctx) return;
  
          puzzlePieces.value = [];
          
          const imgWidth = image.width;
          const imgHeight = image.height;
            console.log(imgWidth);
            console.log(imgHeight);


          pieceWidth.value = imgWidth / gridSize.value + 'px';
          pieceHeight.value = imgHeight / gridSize.value+ 'px';

          const pWidth = imgWidth / gridSize.value ;
          const pHeight = imgHeight / gridSize.value;

          for (let row = 0; row < gridSize.value; row++) {
            for (let col = 0; col < gridSize.value; col++) {
              const x = col * pWidth;
              const y = row * pHeight;
            
              // Set canvas size to the piece size
              canvas.width = pWidth;
              canvas.height = pHeight;
  
              // Draw the piece on the canvas
              ctx.drawImage(
                image,
                x,
                y,
                pWidth,
                pHeight,
                0,
                0,
                pWidth,
                pHeight
              );
  
              // Get the cropped image as a data URL
              const pieceUrl = canvas.toDataURL();
  
              puzzlePieces.value.push({
                url: pieceUrl,
                index: row * gridSize.value + col,
              });
            }
          }
  
          shufflePieces();
        };
      };
  
      // Shuffle the puzzle pieces
      const shufflePieces = () => {
        puzzlePieces.value = puzzlePieces.value.sort(() => Math.random() - 0.5);
      };
  
      // Handle piece click
      const handlePieceClick = (index: number) => {
        console.log(`Piece ${index} clicked`);
      };
  
      // Handle piece drop
      const handlePieceDrop = ({ fromIndex, toIndex }: { fromIndex: number; toIndex: number }) => {
        const pieces = [...puzzlePieces.value];
        const temp = pieces[fromIndex];
        pieces[fromIndex] = pieces[toIndex];
        pieces[toIndex] = temp;
        puzzlePieces.value = pieces;
      };
  
      return {
        puzzlePieces,
        gridSize,
        pieceWidth, 
        pieceHeight,
        handleImageUpload,
        handlePieceClick,
        handlePieceDrop,
      };
    },
  });
  </script>
  
  <style scoped>
  .puzzle-game {
    text-align: center;
  }
  
  .puzzle-board {
    display: grid;
    grid-template-columns: repeat(var(--gridSize), var(--pieceWidth));
    gap: 5px;
    justify-content: center;
    margin-top: 20px;
  }
  </style>