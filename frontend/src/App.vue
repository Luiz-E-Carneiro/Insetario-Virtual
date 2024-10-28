<script setup>
import { ref } from 'vue';
import { RouterView } from 'vue-router';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

const links = ref([
  { name: 'Sobre o Projeto', link: '/' },
  { name: 'Insetário', link: '/insetario' }
]);

</script>

<template>
  <div class="min-h-screen flex flex-col">
    <Header :links="links" />

    <main class="flex-grow">
      <RouterView/>
    </main>

    <Footer :links="links" />
  </div>  
</template>
