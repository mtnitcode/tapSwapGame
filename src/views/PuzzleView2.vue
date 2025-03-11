<template>
  <div>
    <h1>Image Puzzle Game</h1>
    <ImageUploader @image-uploaded="handleImageUploaded" />
    <PuzzleGrid v-if="v_imageSrc" :imageSrc="v_imageSrc" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import ImageUploader from '@/components/ImageUploader.vue';
import PuzzleGrid from '@/components/PuzzleGrid.vue';

export default defineComponent({
  components: {
    ImageUploader,
    PuzzleGrid,
  },
  setup() {
    const v_imageSrc = ref<string | null>(null);


    return { v_imageSrc};
  },
  methods:
  {
    handleImageUploaded (src: string) {
      console.log(src);
      this.v_imageSrc = src;
    }

  }
});
</script>