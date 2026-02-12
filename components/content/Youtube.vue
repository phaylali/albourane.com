<script setup>
const props = defineProps(['link'])

const videoId = computed(() => {
  const match = props.link.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&]{11})/)
  return match ? match[1] : null
})
</script>

<template>
  <div v-if="videoId" class="aspect-video w-full my-8">
    <iframe
      class="w-full h-full rounded-lg shadow-lg"
      :src="`https://www.youtube.com/embed/${videoId}`"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
</template>
