<script setup lang="ts">
import projectsData from '@/data/projectsData'
import siteMetadata from '@/data/siteMetadata'

useHead({
  title: 'Projects | ' + siteMetadata.title,
  meta: [
    { name: 'description', content: 'Explore our latest projects and applications.' }
  ]
})
</script>

<template>
  <div class="container mx-auto px-4 py-12">
    <div class="text-center mb-16">
      <h1 class="text-4xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-purple-600 dark:from-primary-400 dark:to-purple-400">
        Our Projects
      </h1>
      <p class="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
        Innovative solutions and tools developed by our team.
      </p>
    </div>

    <div class="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
      <div 
        v-for="project in projectsData" 
        :key="project.title"
        class="group bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-800 flex flex-col transform hover:-translate-y-2"
      >
        <div class="relative aspect-video overflow-hidden">
          <NuxtImg 
            :src="project.imgSrc" 
            :alt="project.title"
            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            placeholder
          />
          <div class="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
             <a :href="project.href" target="_blank" class="px-6 py-2 bg-white text-gray-900 font-bold rounded-full text-sm">
               View Project
             </a>
          </div>
        </div>
        
        <div class="p-8 flex flex-col flex-grow">
          <h2 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
            {{ project.title }}
          </h2>
          <p class="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed flex-grow">
            {{ project.description }}
          </p>
          <div class="mt-auto">
            <a 
              :href="project.href" 
              target="_blank"
              class="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 font-bold hover:gap-3 transition-all"
            >
              Learn More
              <Icon name="heroicons:arrow-right-20-solid" class="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
