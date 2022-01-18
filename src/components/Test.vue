<template>
    <div>
        {{ label }}
        {{ value }}
    </div>
</template>

<script lang="ts" setup>
interface Props {
    value: number|string,
    label: string|null|undefined,
}

withDefaults(defineProps<Props>(), {
    label: null,
});
</script>
