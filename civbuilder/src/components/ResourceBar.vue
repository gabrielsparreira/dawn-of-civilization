<template>
    <div class="resource-bar" @click="toggleDetails">
      <span>Resources: {{ resources }}</span>
    </div>
  </template>
  
  <script>
  import { mapGetters } from 'vuex';
  
  export default {
    name: 'ResourceBar',
    data() {
      return {
        showDetails: false
      };
    },
    computed: {
      ...mapGetters(['resources'])
    },
    methods: {
    }
  };
  </script>
  
  <style scoped>
  .resource-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: #838383;
    color: rgb(0, 0, 0);
    height: 5%;
    width: 100%;
  }
  .resource-bar button {
    padding: 5px 10px;
    cursor: pointer;
  }
  </style>