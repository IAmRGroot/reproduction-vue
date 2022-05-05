<template>
    <Wrapper />
</template>

<script lang="ts" setup>
import { useIp } from '@/compositions/ip';
import Wrapper from './components/Wrapper.vue';

const { fetchIp } = useIp();

void fetchIp();
</script>