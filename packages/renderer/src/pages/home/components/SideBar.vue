<template>
    <div class="sidebar">
        <!-- 状态栏 -->
        <StatusComponent />

        <!-- 菜单项 -->
        <MenuItems />
    </div>
</template>

<script setup lang="ts">
import StatusComponent from './StatusComponent.vue';
import MenuItems from './MenuItems.vue';
</script>

<style scoped>
.sidebar {
    width: 250px;
    background-color: #001529;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
}
</style>