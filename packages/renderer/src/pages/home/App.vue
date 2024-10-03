<template>
  <div class="main-layout">
    <!-- 左侧菜单栏 -->
    <SideBar />

    <!-- 右侧内容栏 -->
    <div class="content">
      <ContentComponent />
    </div>
  </div>
</template>

<script setup lang="ts">
import SideBar from './components/SideBar.vue';
import ContentComponent from './components/ContentComponent.vue';
</script>

<style scoped>
.main-layout {
  display: flex;
  height: 100vh;
}

.content {
  flex-grow: 1;
  padding: 20px;
  background-color: #f0f2f5;
}
</style>
