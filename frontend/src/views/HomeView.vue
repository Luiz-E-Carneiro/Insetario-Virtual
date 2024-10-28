<script setup>

import TeamMemberCard from '@/components/home/TeamMemberCard.vue';


import reginaImg from '@/assets/teamImages/regina.png';
import luizImg from '@/assets/teamImages/luiz.png';
import thiagoImg from '@/assets/teamImages/thiago.png';
import emmilyImg from '@/assets/teamImages/emmily.png';
import anaImg from '@/assets/teamImages/ana.png';

const team = [
  { picture: reginaImg, name: "Regina da Silva Broba", func: "Orientadora" },
  { picture: thiagoImg, name: "Thiago Grassel dos Reis", func: "Colaborador" },
  { picture: emmilyImg, name: "Emmily Eduarda Flamia", func: "Fotógrafa" },
  { picture: anaImg, name: "Ana Luiza Hentz de Moura", func: "Fotógrafa" },
  { picture: luizImg, name: "Luiz Eduardo Carneiro", func: "Programador" }
];

</script>

<template>
  <div
    class="mt-16 pb-4 w-full h-fit px-10 max-sm:px-4 bg-fixed bg-ladybird1 bg-no-repeat bg-cover bg-center max-sm:bg-dragonFly">
    <h1 class="pt-4 text-2xl font-semibold text-white">Sobre o Projeto</h1>

    <div class="bg-black/[.25] w-full h-fit rounded px-4 py-3 mt-4 backdrop-blur-md z-10">
      <section class="w-full text-justify text-white pl-4">
        <p class="text-lg">
          O projeto de criação do Insetário Virtual visa modernizar e expandir o acervo entomológico do IFRS - Campus
          Bento Gonçalves,
          possibilitando o acesso online às coleções de insetos. Com a ampliação constante do número de espécies
          catalogadas
          no laboratório de Entomologia, surgiu a necessidade de uma plataforma que facilite o registro e a consulta
          desses dados.
          O objetivo é oferecer uma ferramenta interativa, onde estudantes das áreas agrárias e biológicas, produtores
          rurais e demais
          interessados possam identificar e estudar insetos de relevância agrícola, incluindo tanto pragas como espécies
          benéficas.
        </p>
      </section>

      <section>
        <h2 class="mt-3 text-xl font-semibold text-white">Equipe:</h2>
        <div class="w-full h-fit flex justify-center gap-4 flex-wrap mt-3">
          <TeamMemberCard v-for="(info, index) in team" :key="index" :data="info" />
        </div>
      </section>

      <section>
        <h2 class="mt-3 text-xl font-semibold text-white">Motivação:</h2>
        <p class="w-full text-justify text-white pl-4 text-lg">
          A motivação por trás deste projeto decorre da crescente demanda por recursos tecnológicos que facilitem o
          estudo de insetos,
          em especial aqueles de importância agrícola. O Insetário Virtual visa preencher uma lacuna existente,
          proporcionando uma maneira
          prática e acessível para que estudantes, pesquisadores e produtores identifiquem e preservem insetos. Além
          disso, o projeto busca
          fomentar a conscientização ambiental, destacando a importância dos insetos benéficos, como polinizadores e
          predadores naturais, no
          equilíbrio dos ecossistemas agrícolas. Ao disponibilizar essa ferramenta ao público, espera-se promover não só
          o aprendizado, mas
          também a responsabilidade ambiental no manejo de culturas agrícolas.
        </p>
      </section>
    </div>
  </div>
</template>