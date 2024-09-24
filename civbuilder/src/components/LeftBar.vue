<template>
    <div class="side-bar">
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
    display: flex;
    width: 10%;
    background-color: #2c3e50;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .side-bar button {
    background: none;
    border: none;
    color: white;
    font-size: 24px;
    cursor: pointer;
  }
  </style>
  