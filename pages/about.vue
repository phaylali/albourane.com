<script setup lang="ts">
import siteMetadata from '@/data/siteMetadata'

useHead({
  title: 'About | ' + siteMetadata.title,
  meta: [
    { name: 'description', content: 'Learn more about ' + siteMetadata.title }
  ]
})
</script>

<template>
  <div class="container mx-auto px-4 py-12 max-w-4xl">
    <div class="bg-white dark:bg-gray-900 rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 dark:border-gray-800">
      <h1 class="text-3xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
        About {{ siteMetadata.headerTitle }}
      </h1>
      
      <div class="prose prose-lg dark:prose-invert max-w-none prose-primary">
        <p class="lead text-xl text-gray-600 dark:text-gray-300">
          {{ siteMetadata.description }}
        </p>
        
        <p>
          We are dedicated to preserving and promoting traditional fishing culture in Oued Laou.
        </p>

        <!-- Placeholder content -->
        <h2>Our Mission</h2>
        <p>
          To support the local fishing community, provide updates on environmental conditions, and share the heritage of Albourane.
        </p>
      </div>
    </div>
  </div>
</template>
