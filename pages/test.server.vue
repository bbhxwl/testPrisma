<script setup lang="ts">
const prisma = usePrismaClient()
const count = await prisma.user.count()
</script>

<template>
    <h3>{{count}}</h3>
</template>

<style scoped>

</style>