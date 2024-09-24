<template>
    <footer class="footer-component">
      <span>&copy; 2024 Your Company</span>
      <div class="links">
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <!-- Add more links as needed -->
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'FooterComponent'
  };
  </script>
  
  <style scoped>
  .footer-component {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 40px;
    background-color: #2c3e50;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
  }
  .footer-component .links a {
    color: white;
    margin-left: 15px;
    text-decoration: none;
  }
  .footer-component .links a:hover {
    text-decoration: underline;
  }
  </style>
  