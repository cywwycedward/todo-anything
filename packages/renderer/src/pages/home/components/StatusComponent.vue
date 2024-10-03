<template>
    <div class="status-bar">
        <h3>用户状态</h3>
        <p>状态内容</p>
    </div>
    <button @click="createFloatingBar">
        Floating Bar
    </button>
</template>

<script setup lang="ts">
const createFloatingBar=async ()=>{
    window.electronWindowAPI.createFloatingBar();
};
</script>

<style scoped>
.status-bar {
    padding: 20px;
    background-color: #002140;
    color: #fff;
}
</style>