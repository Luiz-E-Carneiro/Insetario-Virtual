<script setup>
import { onMounted, ref, computed, defineEmits } from 'vue';
import axios from 'axios';

const formData = ref({
    nome_comum: '',
    nome_cientifico: '',
    ordem: '',
    familia: '',
    predador: false,
    cultura: '',
});

onMounted(() => {
    getFormInformations();
});

const handleSearch = () => {
    emit('search', formData.value);
};

const emit = defineEmits();

const FormInformations = ref({});

const getFormInformations = () => {
    axios.post("http://localhost/insetario/backend/requests/formInformation.php")
        .then(res => {
            FormInformations.value = res.data;
        })
        .catch(error => {
            console.error(error);
        });
};

const handleReset = () => {
    formData.value = {
        nome_comum: '',
        nome_cientifico: '',
        ordem: '',
        familia: '',
        predador: false,
        cultura: '',
    };
};

const filteredFamilias = computed(() => {
    if (!formData.value.ordem) {
        return FormInformations.value.familias;
    }
    return FormInformations.value.familias.filter(familia => familia.id_ordem === formData.value.ordem);
});

const updatePredador = () => {
    if (formData.value.predador) {
        formData.value.cultura = '';
    }
};

const updateFamilias = () => {
    formData.value.familia = '';
};

</script>

<template>
    <div class="form-container bg-black/[.25] w-full h-fit rounded px-4 py-3 mt-4 backdrop-blur-sm z-10 text-white">
        <h1 class="text-xl sm:text-2xl font-semibold">Filtragem</h1>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            <div class="col-span-1 flex flex-col justify-between gap-4">
                <div class="flex gap-2 items-center">
                    <label for="nome_comum" class="font-semibold text-nowrap">Nome Comum:</label>
                    <input type="text" id="nome_comum" name="nome_comum" v-model="formData.nome_comum"
                        class="w-full bg-transparent border-b-2 border-white outline-none" />
                </div>

                <div class="flex gap-2 items-center">
                    <label for="nome_cientifico" class="font-semibold text-nowrap">Nome Científico:</label>
                    <input type="text" id="nome_cientifico" name="nome_cientifico" v-model="formData.nome_cientifico"
                        class="w-full bg-transparent border-b-2 border-white outline-none" />
                </div>
            </div>

            <div class="col-span-1 flex flex-col justify-between gap-4">
                <div class="flex gap-2 items-center">
                    <label for="ordem" class="font-semibold text-nowrap">Ordem:</label>
                    <select id="ordem" name="ordem" v-model="formData.ordem" @change="updateFamilias"
                        class="w-full bg-white/25 border-b-2 border-white outline-none">
                        <option value="">Todas</option>
                        <option v-for="ordem in FormInformations.ordens" :key="ordem.ordem_id" :value="ordem.ordem_id">
                            {{ ordem.nome_ordem }}
                        </option>
                    </select>
                </div>

                <div class="flex gap-2 items-center">
                    <label for="familia" class="font-semibold">Família:</label>
                    <select id="familia" name="familia" v-model="formData.familia"
                        class="w-full bg-white/25 border-b-2 border-white outline-none">
                        <option value="">Todas</option>
                        <option v-for="familia in filteredFamilias" :key="familia.familia_id"
                            :value="familia.familia_id">
                            {{ familia.nome_familia }}
                        </option>
                    </select>
                </div>
            </div>

            <div class="h-7 md:h-full sm:col-span-2 lg:col-span-1 flex items-start lg:flex-col lg:justify-between gap-4">
                <div class="flex items-center">
                    <label for="predador" class="font-semibold">Predador:</label>
                    <input type="checkbox" id="predador" name="predador" v-model="formData.predador"
                        @change="updatePredador" class="ml-3" />
                </div>

                <div v-if="!formData.predador" class="w-full flex-grow flex flex-col sm:flex-row gap-2 items-start">
                    <label for="cultura" class="font-semibold text-nowrap">Cultura atacada:</label>
                    <select id="cultura" name="cultura" v-model="formData.cultura"
                        class="w-full bg-white/25 border-b-2 border-white outline-none">
                        <option value="">Todas</option>
                        <option v-for="cultura in FormInformations.culturas" :key="cultura.cultura_id"
                            :value="cultura.cultura_id">
                            {{ cultura.nome_cultura.charAt(0).toUpperCase() + cultura.nome_cultura.slice(1) }}
                        </option>
                    </select>

                </div>
            </div>
        </div>

        <div class="flex justify-between mt-4 max-sm:mt-12">
            <button @click="handleReset"
                class="px-4 py-2 font-semibold bg-white/45 text-white rounded duration-200 ease-in-out hover:bg-white/25">
                Limpar
            </button>

            <button @click="handleSearch"
                class="px-4 py-2 font-semibold bg-green-600 text-white rounded duration-200 ease-in-out hover:bg-[#688A41]">
                Pesquisar
            </button>
        </div>
    </div>
</template>