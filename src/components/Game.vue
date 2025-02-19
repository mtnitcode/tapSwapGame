<template>
    <div>
      <h1>This is MyComponent</h1>
      <p>Welcome to my custom component!</p>
    </div>
    <label for="msg">
      <input id="msg" type="text" v-model="msg" >
    </label>
  </template>
  
  <script>
  export default {
    name: 'Game',
  };
  </script>
  
  <style scoped>
  h1 {
    color: blue;
  }
  </style>