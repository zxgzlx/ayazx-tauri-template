import { IRegister } from '@/stores/Register';
import { StoreDefinition, defineStore } from 'pinia';
import { computed, ref } from 'vue';

export class StoreMgr implements IRegister {
    testStore: StoreDefinition | null = null;
    regist(): void {
        console.log('StoreMgr regist');
        this.testStore = defineStore('test', () => {
            const count = ref(0);
            const getCount = computed(() => count.value);
            const increment = () => {
                count.value++;
            };
            return {
                count,
                getCount,
                increment,
            };
        });
    }

    getStore() {
        if (this.testStore === null) {
            throw new Error('StoreMgr testStore is null.');
        }
        return this.testStore();
    }
}
