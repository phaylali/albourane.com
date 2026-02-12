<template>
  <div>
    <NuxtLoadingIndicator color="#0d9488" />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
  useHead({
    titleTemplate: (titleChunk) => {
      return titleChunk ? `${titleChunk} - Albourane` : 'Albourane Blog';
    }
  })
</script>
