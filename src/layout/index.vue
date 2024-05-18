<script setup lang="ts">
// import Logo from '@/assets/vue.svg';
import CustomAlertDialog from '@/components/custom/CustomAlertDialog.vue';
import CustomMenu from '@/components/custom/CustomMenu.vue';
import { onMounted } from 'vue';
// import { appWindow } from '@tauri-apps/api/window';
import { Button } from '@/components/ui/button';

onMounted(() => {
    // document
    //     .getElementById('titlebar-minimize')!
    //     .addEventListener('click', () => appWindow.minimize());
    // document
    //     .getElementById('titlebar-maximize')!
    //     .addEventListener('click', () => appWindow.toggleMaximize());
    // document
    //     .getElementById('titlebar-close')!
    //     .addEventListener('click', () => appWindow.close());
    console.log('onMounted------', document.getElementById('titlebar-close'));
});
</script>

<template>
    <div class="layout-main">
        <CustomMenu />

        <CustomAlertDialog>
            <Button>Show Open</Button>
        </CustomAlertDialog>
        <!-- <div class="layout-header flex justify-between" data-tauri-drag-region>
            <div>
                <img :src="Logo" class="logo-img size-8" data-tauri-drag-region />
            </div>
            <div class="header-action flex items-center">
                <div class="titlebar-button" id="titlebar-minimize">
                    <Button variant="outline">-</Button>
                </div>
                <div class="titlebar-button" id="titlebar-maximize">
                    <Button variant="outline">+</Button>
                </div>
                <div class="titlebar-button" id="titlebar-close">
                    <Button variant="outline">x</Button>
                </div>
            </div>
        </div> -->
        <!-- <div class="main-box">
            <router-view></router-view>
        </div> -->
    </div>
</template>
