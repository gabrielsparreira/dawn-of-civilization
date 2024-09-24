<template>
    <div class="gather-container">
      <button @click="gather" class="gather-button">Gather</button>
      <p>Clicks: {{ clicks }}</p>
      <p>Resources: {{ resources }}</p>
    </div>
  </template>
  
  <script>
  import { mapGetters, mapActions } from 'vuex';
  
  export default {
    name: 'GatherButton',
    computed: {
      ...mapGetters(['clicks', 'resources'])
    },
    methods: {
      ...mapActions(['gather'])
    }
  };
  </script>
  
  <style scoped>
  .gather-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .gather-button {
    padding: 20px 40px;
    font-size: 24px;
    cursor: pointer;
    margin-bottom: 10px;
  }
  </style>
  