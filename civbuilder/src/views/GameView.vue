<template>
    <div class="game-view">
      <HeaderComponent @open-settings="openSettings" />
      <div class="game-content">
        <ResourceBar />
        <LeftBar @toggle-left-menu="toggleLeftMenu" />
        <LeftMenu :visible="isLeftMenuVisible" />
        <main class="main-content">
            <GatherButton />
        </main>
        <RightMenu :visible="isRightMenuVisible" />
        <RightBar @toggle-right-menu="toggleRightMenu" />
      </div>      
      <FooterComponent />
      
      <!-- Settings Modal (optional) -->
      <div v-if="isSettingsOpen" class="modal">
        <div class="modal-content">
          <span class="close" @click="closeSettings">&times;</span>
          <h2>Settings</h2>
          <!-- Settings form goes here -->
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import ResourceBar from '@/components/ResourceBar.vue';
  import LeftBar from '@/components/LeftBar.vue';
  import RightBar from '@/components/RightBar.vue';
  import LeftMenu from '@/components/LeftMenu.vue';
  import RightMenu from '@/components/RightMenu.vue';
  import GatherButton from '@/components/GatherButton.vue';
  import FooterComponent from '@/components/FooterComponent.vue';
  import HeaderComponent from '@/components/HeaderComponent.vue';
  
  export default {
    name: 'GameView',
    components: {
      HeaderComponent,
      ResourceBar,
      LeftBar,
      RightBar,
      LeftMenu,
      RightMenu,
      GatherButton,
      FooterComponent
    },
    data() {
      return {
        isLeftMenuVisible: false,
        isRightMenuVisible: false,
        isSettingsOpen: false
      };
    },
    methods: {
      toggleLeftMenu() {
        this.isLeftMenuVisible = !this.isLeftMenuVisible;
      },
      toggleRightMenu() {
        this.isRightMenuVisible = !this.isRightMenuVisible;
      },
      openSettings() {
        this.isSettingsOpen = true;
      },
      closeSettings() {
        this.isSettingsOpen = false;
      }
    }
  };
  </script>
  
  <style scoped>
  .game-view {
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
  }

  .game-content {
    display: flex;
    flex-wrap: wrap;
    height: 100%;
    width: 100%;
  }
  
  .main-content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 4;
  }
  
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.75);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .modal-content {
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    width: 400px;
  }
  .close {
    position: absolute;
    top: 15px;
    right: 20px;
    font-size: 24px;
    cursor: pointer;
    color: aliceblue;
  }
  </style>
  