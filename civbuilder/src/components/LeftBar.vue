<template>
    <div class="side-bar left-bar">
      <button @click="toggleMenu">☰</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LeftBar',
    methods: {
      toggleMenu() {
        this.$emit('toggle-left-menu');
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
  .left-bar {
    left: 0;
  }
  .side-bar button {
    background: none;
    border: none;
    color: white;
    font-size: 24px;
    cursor: pointer;
  }
  </style>
  