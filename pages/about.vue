<template>
    <h1>About Page</h1>
    <div>Count: {{  count  }}</div>
    <div>
        <button class="btn countup" @click="() => increment()">カウントアップ</button>
        <button class="btn countdown" @click="() => decrement()">カウントダウン</button>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'custom'
});
const { count, increment, decrement } = useCounter(100);

useHead({
    title: 'About'
});
</script>

<style scoped>
    .btn {
        margin: 10px;
        padding: 10px;
        border: none;
        border-radius: 10px;
        outline: none;
        font-weight: bold;
        cursor: pointer;
    }
    .countup {
        color: #fff;
        background: #ff0000;
    }
    .countdown {
        color: #fff;
        background: #00ffff;
    }
</style>