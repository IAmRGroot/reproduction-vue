<template>
    <div>
        {{ ip }}
        <div>
            {{value}}
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useIp } from '@/compositions/ip';

interface Props {
    value: number|string,
}

defineProps<Props>();

const { ip } = useIp();
</script>
