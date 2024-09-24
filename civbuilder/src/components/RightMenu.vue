<template>
    <transition name="slide-right">
      <div class="right-menu" v-if="visible">
        <!-- Add menu items here -->
        <ul>
          <li><button @click="navigate('optionA')">Option A</button></li>
          <li><button @click="navigate('optionB')">Option B</button></li>
          <!-- Add more options as needed -->
        </ul>
      </div>
    </transition>
  </template>
  
  <script>
  export default {
    name: 'RightMenu',
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
  .right-menu {
    position: fixed;
    right: 50px; /* Width of the right bar */
    top: 60px;
    bottom: 40px;
    width: 200px;
    background-color: #34495e;
    color: white;
    padding: 20px;
    box-shadow: -2px 0 5px rgba(0,0,0,0.3);
  }
  .right-menu ul {
    list-style: none;
    padding: 0;
  }
  .right-menu li {
    margin-bottom: 10px;
  }
  .right-menu button {
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    font-size: 16px;
  }
  </style>
  