<script setup>
defineProps(['src', 'alt'])
</script>

<template>
  <figure class="my-8">
    <NuxtImg
      :src="src"
      :alt="alt"
      class="w-full h-auto rounded-lg shadow-md"
      placeholder
      loading="lazy"
    />
    <figcaption v-if="alt" class="text-center text-sm text-gray-500 mt-2">{{ alt }}</figcaption>
  </figure>
</template>
