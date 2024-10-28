<script setup>
const props = defineProps({
  data: {
    type: Object,
    required: true
  }
});
</script>

<template>
  <div class="flex gap-0.5 items-center w-full pl-3 pr-2 py-2 max-lg:h-22 md:w-5/12 rounded-l-full md:rounded-lg shadow-md mb-4 bg-white/65">
    <img :src="data.picture" :alt="data.name" class="h-16 w-16 md:h-20 md:w-20 rounded-full object-cover" />
    <div class="py-2 flex-grow flex flex-col justify-center items-center text-center text-xl">
      <h3>{{ data.name }}</h3>
      <p class="text-gray-600">{{ data.func }}</p>
    </div>
  </div>
</template>
