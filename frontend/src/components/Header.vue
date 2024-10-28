<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import logoIf from '@/assets/icons/if.png';
import logoInsetario from '@/assets/icons/insetario.png';


const props = defineProps({
    links: Array
});

const open = ref(false);

function toggleMenu() {
    open.value = !open.value;
}

function closeMenu() {
    open.value = false;
}

function handleResize() {
    if (window.innerWidth >= 640) {
        open.value = false;
    }
}

onMounted(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
});

onBeforeUnmount(() => {
    window.removeEventListener('resize', handleResize);
});

</script>

<template>
    <header class="fixed top-0 left-0 w-full h-16 shadow-md z-30 bg-white">
        <div class="flex items-center justify-between h-full px-10 max-sm:p-4">

            <router-link :to="{ name: 'home' }">
                <div class="flex items-center gap-2 font-bold text-xl md:text-2xl cursor-pointer">
                    <img :src="logoInsetario" alt="Logo do Insetário Virtual" class="h-11 sm:h-12 rounded-full" />
                    <span>Insetário Virtual</span>
                </div>
            </router-link>

            <div class="flex gap-7 md:gap-20">
                <nav
                    :class="`absolute sm:static top-14 sm:top-0 right-0 w-fit sm:w-auto sm:flex items-center bg-white sm:bg-transparent transition-all duration-500 ease-in-out overflow-hidden ${open ? 'max-h-[300px] opacity-100 shadow-lg' : 'max-h-0 opacity-0'} sm:max-h-none sm:opacity-100`">
                    <ul class="flex flex-col gap-10 p-4 sm:flex-row sm:items-center w-fit sm:w-auto">
                        <li v-for="(link, index) in links" :key="index" class="font-semibold text-lg">
                            <router-link :to="link.link"
                                class="text-gray-800 hover:text-[#688A41] transition duration-150" @click="closeMenu">
                                {{ link.name }}
                            </router-link>
                        </li>
                    </ul>
                </nav>

                <div class="hidden sm:flex items-center gap-4">
                    <img :src="logoIf" alt="Logo do IFR"
                        :class="`h-11 transition duration-500 ${open ? 'hidden' : 'block'}`" />
                </div>
            </div>

            <button @click="toggleMenu"
                :class="`sm:hidden flex items-center px-2 py-1 rounded-sm transition duration-100 hover:bg-slate-200 ${open ? 'z-50' : 'z-20'}`">
                {{ open ? 'Fechar' : 'Abrir' }}
            </button>
        </div>
    </header>
</template>
