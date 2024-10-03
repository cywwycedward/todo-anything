<template>
    <ul class="menu-items">
        <li v-for="item in menuItems" :key="item.id" @click="onMenuItemClick(item)">
            {{ item.label }}
        </li>
    </ul>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface MenuItem {
    id: number;
    label: string;
}

const menuItems = ref<MenuItem[]>([
    { id: 1, label: '首页' },
    { id: 2, label: '设置' },
    { id: 3, label: '关于' },
]);

const onMenuItemClick = (item: MenuItem) => {
    console.log(`${item.label} 被点击`);
};
</script>

<style scoped>
.menu-items {
    list-style: none;
    padding: 0;
    margin: 0;
}

.menu-items li {
    padding: 15px 20px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.menu-items li:hover {
    background-color: #1890ff;
}
</style>