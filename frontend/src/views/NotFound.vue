<template>
    <div class="w-full mt-20 flex flex-col items-center gap-6">
        <h2 class="mt-24">404 PAGE NOT FOUND!</h2>
        <router-link :to="{name: 'home'}">
            <button class="border p-3">Voltar à Tela inicial!</button>
        </router-link>
    </div>
</template>