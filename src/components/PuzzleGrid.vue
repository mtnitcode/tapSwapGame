<template>
    <div>
      <div v-if="imageSrc" class="puzzle-grid">
        <div
          v-for="(piece, index) in puzzlePieces"
          :key="index"
          class="puzzle-piece"
          :style="getPieceStyle(piece)"
          @touchstart="handleTouchStart(index)"
          @touchend="handleTouchEnd(index)"
        ></div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, computed } from 'vue';
  
  export default defineComponent({
    directives: {
      //touch: VueTouch,
    },
    props: {
      imageSrc: {
        type: String,
        required: true,
      },
    },
    setup(props) {
      const gridSize = 3; // 3x3 grid
      const pieceSize = 100; // Size of each puzzle piece
      const puzzlePieces = ref<number[]>([]);
      const selectedPiece = ref<number | null>(null);
  
      // Shuffle the puzzle pieces
      const shufflePuzzle = () => {
        const pieces = Array.from({ length: gridSize * gridSize }, (_, i) => i);
        for (let i = pieces.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [pieces[i], pieces[j]] = [pieces[j], pieces[i]];
        }
        puzzlePieces.value = pieces;
      };
  
      // Get the background position for each puzzle piece
      const getPieceStyle = (pieceIndex: number) => {
        const row = Math.floor(pieceIndex / gridSize);
        const col = pieceIndex % gridSize;
        return {
          width: `${pieceSize}px`,
          height: `${pieceSize}px`,
          backgroundImage: `url(${props.imageSrc})`,
          backgroundPosition: `-${col * pieceSize}px -${row * pieceSize}px`,
        };
      };
  
      // Handle touch start event
      const handleTouchStart = (index: number) => {
        selectedPiece.value = index;
        console.log(index);

      };
  
      // Handle touch end event
      const handleTouchEnd = (index: number) => {
        if (selectedPiece.value !== null && selectedPiece.value !== index) {
          // Swap the pieces
          const temp = puzzlePieces.value[selectedPiece.value];
          puzzlePieces.value[selectedPiece.value] = puzzlePieces.value[index];
          puzzlePieces.value[index] = temp;
          selectedPiece.value = null;
          checkPuzzleSolved();
        }
      };
  
      // Check if the puzzle is solved
      const checkPuzzleSolved = () => {
        const isSolved = puzzlePieces.value.every((piece, index) => piece === index);
        if (isSolved) {
          alert('Congratulations! You solved the puzzle!');
        }
      };
  
      shufflePuzzle(); // Shuffle pieces initially
  
      return { puzzlePieces, getPieceStyle, handleTouchStart, handleTouchEnd };
    },
  });
  </script>
  
  <style scoped>
  .puzzle-grid {
    display: grid;
    grid-template-columns: repeat(3, 100px);
    gap: 2px;
  }
  .puzzle-piece {
    border: 1px solid #000;
    background-size: 300px 300px;
    touch-action: none; /* Disable default touch behavior */
  }
  </style>