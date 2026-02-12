<script setup lang="ts">
const { data: posts } = await useAsyncData('blog-index', () => {
  return queryCollection('blog').order('date', 'DESC').all()
})

useHead({
  title: 'Blog',
  meta: [
    { name: 'description', content: 'Read the latest updates, stories, and insights from Albourane.' }
  ]
})
</script>

<template>
  <div class="container mx-auto px-4 py-12">
    <!-- Header -->
    <div class="text-center mb-16">
      <h1 class="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-purple-600 dark:from-primary-400 dark:to-purple-400">
        Our Blog
      </h1>
      <p class="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
        Explore our latest articles, news, and stories.
      </p>
    </div>

    <!-- Posts Grid -->
    <div v-if="posts?.length" class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      <article 
        v-for="post in posts" 
        :key="post.path"
        class="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800 flex flex-col h-full transform hover:-translate-y-1"
      >
        <NuxtLink :to="post.path" class="block overflow-hidden relative aspect-video">
           <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-end p-6">
              <span class="text-white font-bold">Read Article</span>
           </div>
           <NuxtImg 
             v-if="post.image || post.banner"
             :src="post.image || post.banner" 
             :alt="post.title"
             class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
             placeholder
             loading="lazy"
           />
           <div v-else class="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center">
              <Icon name="heroicons:newspaper" class="w-12 h-12 text-gray-400" />
           </div>
        </NuxtLink>
        
        <div class="p-6 flex flex-col flex-grow">
          <div class="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 mb-3">
            <span v-if="post.date" class="flex items-center gap-1">
               <Icon name="heroicons:calendar-20-solid" class="w-4 h-4" />
               {{ new Date(post.date).toLocaleDateString() }}
            </span>
            <span v-if="post.tags && post.tags.length" class="px-2 py-0.5 rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-xs font-medium">
              {{ post.tags[0] }}
            </span>
          </div>

          <h3 class="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-2">
            <NuxtLink :to="post.path">
              {{ post.title }}
            </NuxtLink>
          </h3>
          
          <p class="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3 flex-grow">
            {{ post.description || post.summary }}
          </p>
          
          <div class="mt-auto pt-4 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
             <div class="flex items-center gap-2">
                <div class="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
                   <!-- Author placeholder -->
                   <Icon name="heroicons:user" class="w-full h-full p-1 text-gray-400" />
                </div>
                <span class="text-sm font-medium text-gray-900 dark:text-gray-100">{{ post.author || 'Author' }}</span>
             </div>
             <span class="text-primary-600 text-sm font-medium group-hover:underline">Read more</span>
          </div>
        </div>
      </article>
    </div>
    
    <!-- Empty State -->
    <div v-else class="text-center py-20">
      <Icon name="heroicons:document-text" class="w-20 h-20 text-gray-300 mx-auto mb-4" />
      <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">No posts found</h3>
      <p class="text-gray-500">Check back later for new updates.</p>
    </div>
  </div>
</template>
