<script setup lang="ts">
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
// import { computed } from 'vue';
// import { ref } from 'vue';
const props = defineProps({
    onClose: Function,
    onConfirm: Function,
});
const visible = defineModel<boolean>();

const onConfirm = () => {
    visible.value = false;
    props.onConfirm?.();
    console.log('onConfirm');
};
const onClose = () => {
    visible.value = false;
    props.onClose?.();
    console.log('onClose');
};
</script>

<template>
    <AlertDialog :open="visible">
        <AlertDialogTrigger>
            <slot />
        </AlertDialogTrigger>
        <AlertDialogContent>
            <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete your account
                    and remove your data from our servers.
                </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
                <AlertDialogCancel @click="onClose">Cancel</AlertDialogCancel>
                <AlertDialogAction @click="onConfirm">Continue</AlertDialogAction>
            </AlertDialogFooter>
        </AlertDialogContent>
    </AlertDialog>
</template>