<template>
    <div class="puzzle-game">
      <h1>Image Puzzle Game</h1>
      <input type="file" @change="handleImageUpload" accept="image/*" />
      <div id="puzzleBoard" class="puzzle-board" :style="{ '--gridSize': gridSize , '--pieceWidth': pieceWidth, '--pieceHeight': pieceHeight }">
        <PuzzlePiece
          v-for="(piece, index) in puzzlePieces"
          :id="piece.key"
          :key="piece.key"
          :imageUrl="piece.url"
          :index="index"
          :pWidth="pieceWidth"
          :pHeight="pieceHeight"
          :position="piece.position"
          @piece-clicked="handlePieceClick"
          @piece-touched="handlePieceTouch"
          @piece-dropped="handlePieceDrop"
          @piece-touchend="handlePieceTouchEnd"
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
      const gridSize = ref(3); // 3x3 grid
      let pieceWidth = ref('100px'); // Each piece is 100px wide
      let pieceHeight = ref('100px'); // Each piece is 100px tall


      const puzzlePieces = ref<{ url: string; index: number;key:number ;position:Object}[]>([]);
  
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
          const boardElement =  document.getElementById('puzzleBoard')  as HTMLInputElement;
          
          console.log(boardElement.offsetWidth);
          const scaleFactor  = Math.min(
            parseFloat((boardElement.offsetWidth / image.width).toFixed(2)),
            parseFloat((boardElement.offsetHeight / image.height).toFixed(2))
          );

          //const scalePercent :number = parseFloat((boardElement.offsetWidth / image.width).toFixed(2));  ;
          console.log(scaleFactor);

          const imgWidth = image.width;
          const imgHeight = image.height;

          console.log(imgWidth);
          console.log(imgHeight);

          pieceWidth.value = (imgWidth / gridSize.value)*scaleFactor + 'px';
          pieceHeight.value = (imgHeight / gridSize.value)*scaleFactor + 'px';

          console.log(pieceWidth.value);
          console.log(pieceHeight.value);

          const pWidth = imgWidth / gridSize.value ;
          const pHeight = imgHeight / gridSize.value;
          let pieceNumber = 0;
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
                key : pieceNumber++,
                position: { x: col * pHeight, y: row * pWidth },                
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
        console.log(areChildrenSorted("puzzleBoard"));

      };
  
      // Handle piece click
      const handlePieceTouch = (index: number) => {

        console.log(`Piece ${index} Touched`);
        console.log(areChildrenSorted("puzzleBoard"));

      };
        
      // Handle piece drop
      const handlePieceDrop = ({ fromIndex, toIndex }: { fromIndex: number; toIndex: number }) => {
        const pieces = [...puzzlePieces.value];
        const temp = pieces[fromIndex];
        pieces[fromIndex] = pieces[toIndex];
        pieces[toIndex] = temp;
        puzzlePieces.value = pieces;
        console.log(areChildrenSorted("puzzleBoard"));
      };
      const handlePieceTouchEnd = ({ fromIndex, toIndex }: { fromIndex: number; toIndex: number }) => {
        const pieces = [...puzzlePieces.value];
        const temp = pieces[fromIndex];
        pieces[fromIndex] = pieces[toIndex];
        pieces[toIndex] = temp;
        puzzlePieces.value = pieces;
        console.log(areChildrenSorted("puzzleBoard"));
      };
      const areChildrenSorted = (parentId: string): boolean => {
          // Get the parent container
          const parent = document.getElementById(parentId);
          if (!parent) {
            console.error(`Parent container with id "${parentId}" not found.`);
            return false;
          }

          // Get the child elements
          const children = parent.children;

          // Extract and sort the IDs
          const ids: number[] = [];
          for (let i = 0; i < children.length; i++) {
            const child = children[i] as HTMLElement;
            const id = parseInt(child.id, 10); // Convert id to number
            if (isNaN(id)) {
              console.error(`Invalid id "${child.id}" found in child element.`);
              return false;
            }
            ids.push(id);
          }

          // Check if the IDs are sorted
          for (let i = 1; i < ids.length; i++) {
            if (ids[i] < ids[i - 1]) {
              return false; // Not sorted
            }
          }

          return true; // Sorted
        };

      return {
        puzzlePieces,
        gridSize,
        pieceWidth, 
        pieceHeight,
        handleImageUpload,
        handlePieceClick,
        handlePieceDrop,
        handlePieceTouch,
        handlePieceTouchEnd,
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
    grid-template-rows: repeat(var(--gridSize), var(--pieceHeight));
    gap: 5px;
    justify-content: center;
    margin-top: 20px;
    width: 80vw;
    height: 80vh;
    overflow: hidden;
  }
  </style>