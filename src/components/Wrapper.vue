<template>
    <div v-if="ip">
        <Test 
            :value="ip"
        />

        {{ ip + 'fdsaasdf' }}
    </div>
</template>


<script lang="ts" setup>
import { useIp } from '@/compositions/ip';
import { watch } from '@vue/composition-api';
import Test from './Test.vue';

const { ip } = useIp();

watch(() => ip.value, () => {
    console.log(ip.value)
}, {
    immediate: true,
});
</script>