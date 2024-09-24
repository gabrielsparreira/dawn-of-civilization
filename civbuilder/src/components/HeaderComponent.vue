<template>
    <header class="header-component">
      <h1>Clicker Game Title</h1>
      <button @click="openSettings">Settings</button>
    </header>
  </template>
  
  <script>
  export default {
    name: 'HeaderComponent',
    methods: {
      openSettings() {
        // Implement settings modal or navigation
        this.$emit('open-settings');
      }
    }
  };
  </script>
  
  <style scoped>
  .header-component {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: #2c3e50;
    color: white;
    height: 10%;
  }
  .header-component button {
    padding: 5px 10px;
    cursor: pointer;
  }
  </style>
  