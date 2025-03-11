<template>
    <div>
      <input type="file" @change="handleImageUpload" accept="image/*" />
      <img v-if="u_imageSrc" :src="u_imageSrc" alt="Uploaded Image" />
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  
  export default defineComponent({
    setup() {
      const u_imageSrc = ref<string | null>(null);
  
    //   const handleImageUpload = (event: Event) => {
    //     const file = (event.target as HTMLInputElement).files?.[0];
    //     if (file) {
    //       const reader = new FileReader();
    //       reader.onload = (e) => {
    //         u_imageSrc.value = e.target?.result as string;
    //       };
    //       reader.readAsDataURL(file);

    //     }
    //   };
  
      return { u_imageSrc }; //, handleImageUpload
    },
    methods: {
        handleImageUpload(event: Event){
            const file = (event.target as HTMLInputElement).files?.[0];

            if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                this.u_imageSrc = event.target?.result as string;
                this.$emit('image-uploaded', this.u_imageSrc);
            };
            reader.readAsDataURL(file);

            }
            


        }

    }
  });
  </script>