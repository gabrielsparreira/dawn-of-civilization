<template>
    <transition name="slide-left">
      <div class="left-menu" v-if="visible">
        <!-- Add menu items here -->
        <ul>
          <li><button @click="navigate('option1')">Option 1</button></li>
          <li><button @click="navigate('option2')">Option 2</button></li>
          <!-- Add more options as needed -->
        </ul>
      </div>
    </transition>
  </template>
  
  <script>
  export default {
    name: 'LeftMenu',
    props: ['visible'],
    methods: {
      navigate(option) {
        // Handle navigation or actions
        console.log(`Navigating to ${option}`);
      }
    }
  };
  </script>
  
  <style scoped>
  .left-menu {
    display: flex;
    width: 20%;
    background-color: #34495e;
    color: white;
    padding: 20px;
    box-shadow: 2px 0 5px rgba(0,0,0,0.3);
  }
  .left-menu ul {
    list-style: none;
    padding: 0;
  }
  .left-menu li {
    margin-bottom: 10px;
  }
  .left-menu button {
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    font-size: 16px;
  }
  </style>
  