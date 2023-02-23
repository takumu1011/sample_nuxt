<template>
    <nav>
        <ul>
            <li><NuxtLink to="/">Home</NuxtLink></li>
            <li><NuxtLink to="/about">About</NuxtLink></li>
            <li><NuxtLink to="/users">User Index</NuxtLink></li>
            <li><NuxtLink to="/users/1">User 1</NuxtLink></li>
            <li><NuxtLink :to="{name: 'users-list'}">User List</NuxtLink></li>
            <li><NuxtLink to="/posts">User Index</NuxtLink></li>
        </ul>
    </nav>
</template>