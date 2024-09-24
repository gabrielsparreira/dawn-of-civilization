<template>
    <div class="resource-bar" @click="toggleDetails">
      <span>Resources: {{ resources }}</span>
      <div v-if="showDetails" class="details">
        <!-- Add detailed resource information here -->
        <p>More detailed resource info...</p>
      </div>
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
      toggleDetails() {
        this.showDetails = !this.showDetails;
      }
    }
  };
  </script>
  