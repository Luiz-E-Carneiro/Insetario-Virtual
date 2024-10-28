<script setup>
import { useRouter } from 'vue-router';

const props = defineProps({
    id: {
        type: Number,
        required: true
    },
    nomeComum: String,
    nomeCientifico: String,
    imagem: String
});

const router = useRouter();

const goToDetails = () => {
    router.push({ name: 'detalhes', params: { id: props.id } });
};

const formatadoNomeComum = (nomeComum) => {
    return nomeComum.charAt(0).toUpperCase() + nomeComum.slice(1);
};

const formatadoNomeCientifico = (nomeCientifico) => {
    if (nomeCientifico == null) {
        return '';
    }
    return nomeCientifico.replace(/\b(sp|spp|cf|var|subsp|f|n)\.?$/gi, (match) => `<span class="not-italic">${match.trim()}</span>`).trim();
};
</script>

<template>
    <div @click="goToDetails"
        class="bg-white shadow-md rounded-lg p-2 sm:p-4 ml-4 max-w-full h-28 sm:w-60 sm:h-80 flex sm:flex-col hover:bg-white/90 cursor-pointer">

        <img :src="props.imagem" alt="Imagem do inseto"
            class="max-sm:max-w-36 h-full sm:h-44 object-cover rounded-md" />
        <div class="w-full flex-grow flex flex-col justify-center items-center text-wrap text-center">
            <h3 class="mt-2 text-lg font-bold text-black/90">{{ formatadoNomeComum(props.nomeComum) }}</h3>
            <p class="text-gray-500 italic" v-html="formatadoNomeCientifico(props.nomeCientifico)"></p>
        </div>
    </div>
</template>
