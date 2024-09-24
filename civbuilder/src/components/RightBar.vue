<template>
    <div class="side-bar right-bar">
      <button @click="toggleMenu">☰</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'RightBar',
    methods: {
      toggleMenu() {
        this.$emit('toggle-right-menu');
      }
    }
  };
  </script>
  
  <style scoped>
  .side-bar {
    width: 50px;
    background-color: #2c3e50;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 60px; /* Height of the header + resource bar */
    bottom: 40px; /* Height of the footer */
  }
  .right-bar {
    right: 0;
  }
  .side-bar button {
    background: none;
    border: none;
    color: white;
    font-size: 24px;
    cursor: pointer;
  }
  </style>
  