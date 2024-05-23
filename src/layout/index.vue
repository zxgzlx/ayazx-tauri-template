<script setup lang="ts">
    // import Logo from '@/assets/vue.svg';
    import CustomAlertDialog from '@/components/custom/CustomAlertDialog.vue';
    import CustomMenu from '@/components/custom/CustomMenu.vue';
    import { onMounted, ref } from 'vue';
    // import { appWindow } from '@tauri-apps/api/window';
    import { Button } from '@/components/ui/button';
    import { Register } from '@/stores/Register';
    import { StoreMgr } from '@/stores/StoreMgr';

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

    Register.regist(StoreMgr);
    let testStore = Register.get(StoreMgr).getStore();
    testStore.increment();
    console.log('Register.get(StoreMgr).getStore().getCount()------', testStore.getCount);
    const isShow = ref(false);
    const toggleShowDialog = () => {
        isShow.value = !isShow.value;
    };
    const onConfirm = () => {
        console.log('hello ok');
    };
    const onClose = () => {
        console.log('hello cancel');
    };
</script>

<template>
    <div class="layout-main">
        <CustomMenu />
        <Button @click="toggleShowDialog">Show Open</Button>

        <CustomAlertDialog v-model="isShow" :on-confirm="onConfirm" :on-close="onClose" />
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
