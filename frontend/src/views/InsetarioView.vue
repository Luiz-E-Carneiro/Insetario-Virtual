<script setup>
import Form from '@/components/insectarium/Form.vue';
import axios from 'axios';
import { onMounted, ref } from 'vue';
import InsectCard from '@/components/insectarium/InsectCard.vue';

const dadosOrganizados = ref({});
const dadosOriginais = ref({});

onMounted(() => {
    selectAll();
});

const selectAll = () => {
    axios.get("http://localhost/insetario/backend/requests/insetos.php")
        .then((res) => {
            dadosOrganizados.value = res.data;
            dadosOriginais.value = res.data;
            console.log(res.data);
        })
        .catch((error) => {
            console.error(error);
        });
};

const handleSearch = (formData) => {
    dadosOrganizados.value = filtrarInsetos(dadosOriginais.value, formData);
};

const filtrarInsetos = (dados, filtros) => {
    const { nome_comum, nome_cientifico, ordem, familia, predador, cultura } = filtros;
    const ordensFiltradas = {};

    for (const [ordemId, ordemData] of Object.entries(dados)) {

        if (ordem && Number(ordemId) !== Number(ordem)) continue;

        const familiasFiltradas = {};

        for (const [familiaId, familiaData] of Object.entries(ordemData.familias)) {

            if (familia && Number(familiaId) !== Number(familia)) continue;

            const insetosFiltrados = familiaData.insetos.filter((inseto) => {

                const nomeComumMatch = !nome_comum || inseto.nomes_comuns.some((n) => n.toLowerCase().includes(nome_comum.toLowerCase()));
                const nomeCientificoMatch = !nome_cientifico || inseto.nome_cientifico.toLowerCase().includes(nome_cientifico.toLowerCase());
                const predadorMatch = predador === false || inseto.predador === predador;
                const culturaMatch = !cultura || Object.values(inseto.ids_culturas).includes(String(cultura));

                return nomeComumMatch && nomeCientificoMatch && predadorMatch && culturaMatch;
            });

            if (insetosFiltrados.length > 0) {
                familiasFiltradas[familiaId] = {
                    nome_familia: familiaData.nome_familia,
                    insetos: insetosFiltrados,
                };
            }
        }

        if (Object.keys(familiasFiltradas).length > 0) {
            ordensFiltradas[ordemId] = {
                nome_ordem: ordemData.nome_ordem,
                familias: familiasFiltradas,
            };
        }
    }

    return ordensFiltradas;
};



const getPrimeiraImagem = (id_inseto) => {
    const imagem = imagens.find(img => img.id_inseto === id_inseto);
    return imagem;
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


const currentOrder = ref('');

const updateFamilias = () => {
    if (formData.value.ordem !== currentOrder.value) {
        formData.value.familia = '';
    }
    currentOrder.value = formData.value.ordem;

};

</script>

<template>
    <div
        class="mt-16 pb-4 w-full h-fit px-10 max-sm:px-4 bg-prayingMantis bg-fixed bg-no-repeat bg-cover bg-center max-sm:bg-dragonFly text-white">
        <h1 class="pt-4 text-2xl sm:text-3xl font-bold">Insetário</h1>

        <Form @search="handleSearch" />

        <div class="bg-black/[.25] w-full h-fit min-h-44 rounded px-2 sm:px-3 pt-2 pb-4 mt-4 backdrop-blur-md z-10">
            <div v-for="(ordemData, ordemId) in dadosOrganizados" :key="ordemId">
                <h2 class="text-xl font-bold sm:text-2xl mt-3">{{ ordemData.nome_ordem }}</h2>

                <div v-for="(familiaData, familiaId) in ordemData.familias" :key="familiaId" class="mt-2">
                    <h3 class="text-lg font-semibold pl-2 sm:text-xl sm:pl-6">{{ familiaData.nome_familia }}</h3>

                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-2 sm:pl-8">
                        <InsectCard v-for="inseto in familiaData.insetos" :key="inseto.id" :id="Number(inseto.id)"
                            :nome-comum="inseto.nomes_comuns[0]" :nome-cientifico="inseto.nome_cientifico"
                            :imagem="getPrimeiraImagem(inseto.id)?.caminho_imagem" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
