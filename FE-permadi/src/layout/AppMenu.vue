<script setup>
import { ref } from 'vue';

import AppMenuItem from './AppMenuItem.vue';

const model = ref([
    {
        label: 'Home',
        items: [
            { label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/dashboard' },
            {
                label: 'Machine',
                icon: 'pi pi-fw pi-user',
                items: [
                    {
                        label: 'Overview',
                        icon: 'pi pi-fw pi-home',
                        to: '/machine/input'
                    },
                    {
                        label: 'Detail',
                        icon: 'pi pi-fw pi-user',
                        to: '/machine/detail'
                    }
                ]
            },
            { label: 'Digital Twin', icon: 'pi pi-fw pi-users', to: '/dt' },



        ],
    }
]);
</script>

<template>
    <ul class="layout-menu">
        <template v-for="(item, i) in model" :key="item">
            <app-menu-item v-if="!item.separator" :item="item" :index="i"></app-menu-item>
            <li v-if="item.separator" class="menu-separator"></li>
        </template>
    </ul>
</template>

<style lang="scss" scoped></style>
