<template>
    <div class="w-full mt-20 mb-20 flex flex-col items-center gap-6">
        <h2 class="mt-24">404 Página Encontrada!</h2>
        <router-link :to="{name: 'home'}">
            <button class="border p-3">Voltar à Tela inicial!</button>
        </router-link>
    </div>
</template>