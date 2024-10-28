<script setup>
import { computed, onMounted, ref } from 'vue';
import axios from 'axios';

const props = defineProps({
    id: Number
});

const { id } = props;

const inseto = ref({});
const primeiroNome = ref('')

onMounted(() => {
    axios.get(`http://localhost/insetario/backend/requests/inseto_detalhes.php?id=${id}`)
        .then(res => {
            inseto.value = res.data;
            primeiroNome.value = res.data.nomes_comuns[0]
        })
        .catch(err => {
            console.log("Ocorreu um erro ao realizarmos a requisição dos dados, por favor, se o erro persistir, informe-nos (email ou telefone)!")
            console.error(err);
        });
});

const imagensInseto = computed(() => {
    return imagens.filter(img => img.id_inseto === props.id);
});

const formatarPrimeiroNome = (nome) => {
    return nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase();
}

const formatadoNomeCientifico = (nomeCientifico) => {
    if (nomeCientifico == null) {
        return '';
    }
    return nomeCientifico.replace(/\b(sp|spp|cf|var|subsp|f|n)\.?$/gi, (match) => `<span class="not-italic">${match.trim()}</span>`).trim();
};


const imagens = [
    { id_imagem: 1, id_inseto: 1, caminho_imagem: ('./../src/assets/insetos_imagem/1.png') },
    { id_imagem: 2, id_inseto: 2, caminho_imagem: ('./../src/assets/insetos_imagem/2.png') },
    { id_imagem: 2, id_inseto: 2, caminho_imagem: ('./../src/assets/insetos_imagem/2.2.png') },
    { id_imagem: 2, id_inseto: 2, caminho_imagem: ('./../src/assets/insetos_imagem/2.3.png') },
    { id_imagem: 2, id_inseto: 2, caminho_imagem: ('./../src/assets/insetos_imagem/2.4.png') },
    { id_imagem: 3, id_inseto: 3, caminho_imagem: ('./../src/assets/insetos_imagem/3.png') },
    { id_imagem: 3, id_inseto: 3, caminho_imagem: ('./../src/assets/insetos_imagem/3.2.png') },
    { id_imagem: 3, id_inseto: 3, caminho_imagem: ('./../src/assets/insetos_imagem/3.3.png') },
    { id_imagem: 3, id_inseto: 3, caminho_imagem: ('./../src/assets/insetos_imagem/3.4.png') },
    { id_imagem: 3, id_inseto: 3, caminho_imagem: ('./../src/assets/insetos_imagem/3.5.png') },
    { id_imagem: 4, id_inseto: 4, caminho_imagem: ('./../src/assets/insetos_imagem/4.png') },
    { id_imagem: 4, id_inseto: 4, caminho_imagem: ('./../src/assets/insetos_imagem/4.2.png') },
    { id_imagem: 4, id_inseto: 4, caminho_imagem: ('./../src/assets/insetos_imagem/4.3.png') },
    { id_imagem: 5, id_inseto: 5, caminho_imagem: ('./../src/assets/insetos_imagem/5.png') },
    { id_imagem: 5, id_inseto: 5, caminho_imagem: ('./../src/assets/insetos_imagem/5.2.png') },
    { id_imagem: 5, id_inseto: 5, caminho_imagem: ('./../src/assets/insetos_imagem/5.3.png') },
    { id_imagem: 6, id_inseto: 6, caminho_imagem: ('./../src/assets/insetos_imagem/6.png') },
    { id_imagem: 6, id_inseto: 6, caminho_imagem: ('./../src/assets/insetos_imagem/6.2.png') },
    { id_imagem: 6, id_inseto: 6, caminho_imagem: ('./../src/assets/insetos_imagem/6.3.png') },
    { id_imagem: 7, id_inseto: 7, caminho_imagem: ('./../src/assets/insetos_imagem/7.png') },
    { id_imagem: 7, id_inseto: 7, caminho_imagem: ('./../src/assets/insetos_imagem/7.2.png') },
    { id_imagem: 7, id_inseto: 7, caminho_imagem: ('./../src/assets/insetos_imagem/7.3.png') },
    { id_imagem: 7, id_inseto: 7, caminho_imagem: ('./../src/assets/insetos_imagem/7.4.png') },
    { id_imagem: 7, id_inseto: 7, caminho_imagem: ('./../src/assets/insetos_imagem/7.5.png') },
    { id_imagem: 7, id_inseto: 7, caminho_imagem: ('./../src/assets/insetos_imagem/7.6.png') },
    { id_imagem: 8, id_inseto: 8, caminho_imagem: ('./../src/assets/insetos_imagem/8.png') },
    { id_imagem: 8, id_inseto: 8, caminho_imagem: ('./../src/assets/insetos_imagem/8.2.png') },
    { id_imagem: 8, id_inseto: 8, caminho_imagem: ('./../src/assets/insetos_imagem/8.3.png') },
    { id_imagem: 8, id_inseto: 8, caminho_imagem: ('./../src/assets/insetos_imagem/8.4.png') },
    { id_imagem: 8, id_inseto: 8, caminho_imagem: ('./../src/assets/insetos_imagem/8.5.png') },
    { id_imagem: 8, id_inseto: 8, caminho_imagem: ('./../src/assets/insetos_imagem/8.6.png') },
    { id_imagem: 9, id_inseto: 9, caminho_imagem: ('./../src/assets/insetos_imagem/9.png') },
    { id_imagem: 9, id_inseto: 9, caminho_imagem: ('./../src/assets/insetos_imagem/9.2.png') },
    { id_imagem: 9, id_inseto: 9, caminho_imagem: ('./../src/assets/insetos_imagem/9.3.png') },
    { id_imagem: 10, id_inseto: 10, caminho_imagem: ('./../src/assets/insetos_imagem/10.png') },
    { id_imagem: 10, id_inseto: 10, caminho_imagem: ('./../src/assets/insetos_imagem/10.2.png') },
    { id_imagem: 10, id_inseto: 10, caminho_imagem: ('./../src/assets/insetos_imagem/10.3.png') },
    { id_imagem: 10, id_inseto: 10, caminho_imagem: ('./../src/assets/insetos_imagem/10.4.png') },
    { id_imagem: 11, id_inseto: 11, caminho_imagem: ('./../src/assets/insetos_imagem/11.png') },
    { id_imagem: 11, id_inseto: 11, caminho_imagem: ('./../src/assets/insetos_imagem/11.2.png') },
    { id_imagem: 11, id_inseto: 11, caminho_imagem: ('./../src/assets/insetos_imagem/11.3.png') },
    { id_imagem: 11, id_inseto: 11, caminho_imagem: ('./../src/assets/insetos_imagem/11.4.png') },
    { id_imagem: 12, id_inseto: 12, caminho_imagem: ('./../src/assets/insetos_imagem/12.png') },
    { id_imagem: 12, id_inseto: 12, caminho_imagem: ('./../src/assets/insetos_imagem/12.2.png') },
    { id_imagem: 12, id_inseto: 12, caminho_imagem: ('./../src/assets/insetos_imagem/12.3.png') },
    { id_imagem: 12, id_inseto: 12, caminho_imagem: ('./../src/assets/insetos_imagem/12.4.png') },
    { id_imagem: 12, id_inseto: 12, caminho_imagem: ('./../src/assets/insetos_imagem/12.5.png') },
    { id_imagem: 12, id_inseto: 12, caminho_imagem: ('./../src/assets/insetos_imagem/12.6.png') },
    { id_imagem: 12, id_inseto: 12, caminho_imagem: ('./../src/assets/insetos_imagem/12.7.png') },
    { id_imagem: 13, id_inseto: 13, caminho_imagem: ('./../src/assets/insetos_imagem/13.png') },
    { id_imagem: 13, id_inseto: 13, caminho_imagem: ('./../src/assets/insetos_imagem/13.2.png') },
    { id_imagem: 13, id_inseto: 13, caminho_imagem: ('./../src/assets/insetos_imagem/13.3.png') },
    { id_imagem: 13, id_inseto: 13, caminho_imagem: ('./../src/assets/insetos_imagem/13.4.png') },
    { id_imagem: 14, id_inseto: 14, caminho_imagem: ('./../src/assets/insetos_imagem/14.png') },
    { id_imagem: 14, id_inseto: 14, caminho_imagem: ('./../src/assets/insetos_imagem/14.2.png') },
    { id_imagem: 14, id_inseto: 14, caminho_imagem: ('./../src/assets/insetos_imagem/14.3.png') },
    { id_imagem: 14, id_inseto: 14, caminho_imagem: ('./../src/assets/insetos_imagem/14.4.png') },
    { id_imagem: 14, id_inseto: 14, caminho_imagem: ('./../src/assets/insetos_imagem/14.5.png') },
    { id_imagem: 14, id_inseto: 14, caminho_imagem: ('./../src/assets/insetos_imagem/14.6.png') },
    { id_imagem: 14, id_inseto: 14, caminho_imagem: ('./../src/assets/insetos_imagem/14.7.png') },
    { id_imagem: 15, id_inseto: 15, caminho_imagem: ('./../src/assets/insetos_imagem/15.png') },
    { id_imagem: 16, id_inseto: 16, caminho_imagem: ('./../src/assets/insetos_imagem/16.png') },
    { id_imagem: 16, id_inseto: 16, caminho_imagem: ('./../src/assets/insetos_imagem/16.2.png') },
];

//MODAL Functions

const isModalOpen = ref(false);
const selectedImage = ref('');
const currentImageIndex = ref(0);

const openModal = (index) => {
    currentImageIndex.value = index;
    isModalOpen.value = true;
};

const closeModal = () => {
    isModalOpen.value = false;
    selectedImage.value = '';
    currentImageIndex.value = 0;
};

const nextImage = () => {
    if (currentImageIndex.value < imagensInseto.value.length - 1) {
        currentImageIndex.value++;
    }
};

const prevImage = () => {
    if (currentImageIndex.value > 0) {
        currentImageIndex.value--;
    }
};

</script>

<template>
    <div
        class="mt-16 pb-4 w-full h-fit px-10 max-sm:px-4 bg-ladybird1 bg-fixed bg-no-repeat bg-cover bg-center max-sm:bg-dragonFly text-white">

        <div v-if="isModalOpen"
            class="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm flex justify-center items-center z-50 p-9"
            @click="closeModal">
            <button v-if="currentImageIndex > 0" @click.stop="prevImage"
                class="absolute left-4 text-white text-2xl">❮</button>
            <img :src="imagensInseto[currentImageIndex].caminho_imagem" alt="Imagem ampliada"
                class="max-w-full max-h-full object-contain" />
            <button v-if="currentImageIndex < imagensInseto.length - 1" @click.stop="nextImage"
                class="absolute right-4 text-white text-2xl">❯</button>
        </div>

        <div class="pt-4 flex justify-between items-center">
            <h1 class="text-2xl font-semibold text-white max-lg:text-xl">Detalhes sobre o inseto</h1>
            <router-link :to="{ name: 'insetario' }">
                <button
                    class="p-2 bg-white/90 hover:bg-white/80 text-lg transition-all ease-in-out duration-200 max-md:text-base text-black font-semibold rounded">
                    Voltar
                </button>
            </router-link>
        </div>

        <div
            class="flex flex-col gap-3 bg-black/[.30] w-full h-fit rounded px-3 sm:px-5 py-3 mt-4 backdrop-blur-md z-10 text-white text-lg sm:text-xl">
            <section>
                <div class="flex flex-col gap-2 items-start">
                    <div>
                        <p>
                            <span class="font-semibold text-lg sm:text-xl">Nome(s) Comum(ns): </span>
                            <span v-if="inseto && inseto.nomes_comuns" class="text-wrap">
                                <template v-for="(nome, index) in inseto.nomes_comuns" :key="index">
                                    <span>{{ index === 0 ? formatarPrimeiroNome(nome) : nome.toLowerCase() }}</span>
                                    <span v-if="index < inseto.nomes_comuns.length - 1">, </span>
                                </template>
                            </span>
                        </p>
                    </div>
                    <div>
                        <p>
                            <span class="font-semibold text-lg sm:text-xl">Nome Científico: </span>
                            <span v-if="inseto.nome_cientifico" class="italic"
                                v-html="formatadoNomeCientifico(inseto.nome_cientifico)"></span>
                            <span v-else>Não identificado</span>
                        </p>
                    </div>
                </div>
            </section>

            <section class="p-4 w-full">
                <h2 class="text-lg sm:text-xl font-bold mb-4">Imagens do Inseto:</h2>
                <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    <template v-if="inseto && primeiroNome === 'bicho-pau'">
                        <div class="col-span-1">
                            <img v-if="imagensInseto[0]" :src="imagensInseto[0].caminho_imagem" alt="Imagem do inseto"
                                class="w-full h-auto rounded shadow-lg mb-2 cursor-pointer" @click="openModal(0)" />

                            <img v-if="imagensInseto[1]" :src="imagensInseto[1].caminho_imagem" alt="Imagem do inseto"
                                class="w-full h-auto rounded shadow-lg cursor-pointer" @click="openModal(1)" />
                        </div>
                        <div v-for="(img, index) in imagensInseto.slice(2)" :key="img.id_imagem" class="col-span-1">
                            <img :src="img.caminho_imagem" alt="Imagem do inseto"
                                class="w-full h-auto rounded shadow-lg cursor-pointer" @click="openModal(index + 2)" />
                        </div>
                    </template>

                    <template v-else>
                        <div v-for="(img, index) in imagensInseto" :key="img.id_imagem" class="col-span-1">
                            <img :src="img.caminho_imagem" alt="Imagem do inseto"
                                class="w-full h-auto rounded shadow-lg cursor-pointer" @click="openModal(index)" />
                        </div>
                    </template>

                </div>
            </section>

            <section v-if="inseto" class="w-full">
                <table class="m-auto rounded font-bold max-w-2xl w-full max-md:text-sm">
                    <thead class="bg-white text-black rounded">
                        <tr>
                            <th class="p-2 border-solid border border-black">Ordem</th>
                            <th class="p-2 border-solid border border-black">Família</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="text-center">
                            <td class="p-2 border-solid border border-black">{{ inseto.nome_ordem }}</td>
                            <td class="p-2 border-solid border border-black">{{ inseto.nome_familia }}</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section class="flex flex-col gap-1" v-if="inseto.importancia">
                <h3 class="font-semibold text-xl">Importância:</h3>
                <p class="pl-4 text-base sm:text-lg">{{ inseto.importancia }}</p>
            </section>

            <section class="flex flex-col gap-1" v-if="inseto.morfologia">
                <h3 class="font-semibold">Morfologia:</h3>
                <p class="pl-4 text-base sm:text-lg">{{ inseto.morfologia }}</p>
            </section>
        </div>
    </div>
</template>