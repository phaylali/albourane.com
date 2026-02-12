<script setup lang="ts">
const { data: posts } = await useAsyncData('recent-posts', () => {
  return queryCollection('blog').order('date', 'DESC').limit(3).all()
})
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="relative py-20 bg-gradient-to-br from-primary-50 to-primary-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden rounded-3xl mb-16 shadow-2xl">
      <div class="absolute inset-0 opacity-10 pattern-grid-lg text-primary-500"></div>
      <div class="container mx-auto px-4 relative z-10 text-center">
        <h1 class="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-purple-600 dark:from-primary-400 dark:to-purple-400">
          Discover the Future
        </h1>
        <p class="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          Exploring the latest in technology, design, and innovation. Stay ahead of the curve with Albourane.
        </p>
        <div class="flex justify-center gap-4">
          <NuxtLink to="/blog" class="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-full transition-all transform hover:scale-105 shadow-lg shadow-primary-500/30">
            Read Blog
          </NuxtLink>
           <NuxtLink to="/about" class="px-8 py-4 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-bold rounded-full border border-gray-200 dark:border-gray-700 transition-all transform hover:scale-105">
            About Us
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Latest Posts Grid -->
    <section class="container mx-auto px-4 mb-20">
      <div class="flex items-center justify-between mb-12">
        <h2 class="text-3xl font-bold border-l-4 border-primary-500 pl-4">Latest Insights</h2>
        <NuxtLink to="/blog" class="text-primary-600 hover:text-primary-700 font-semibold flex items-center gap-2 group">
          View All Posts 
          <Icon name="heroicons:arrow-right-20-solid" class="group-hover:translate-x-1 transition-transform" />
        </NuxtLink>
      </div>
      
      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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
              {{ post.description }}
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
    </section>

    <!-- Newsletter / CTA -->
    <section class="bg-primary-900 text-white py-20 rounded-t-3xl mt-auto">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-4">Stay in the Loop</h2>
        <p class="text-primary-200 mb-8 max-w-xl mx-auto">Get the latest posts delivered right to your inbox. No spam, just quality content.</p>
        <form class="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto" @submit.prevent>
          <input 
            type="email" 
            placeholder="Enter your email" 
            class="px-6 py-3 rounded-full text-gray-900 focus:outline-none focus:ring-4 focus:ring-primary-500/50 w-full"
          />
          <button class="px-8 py-3 bg-white text-primary-900 font-bold rounded-full hover:bg-gray-100 transition-colors">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  </div>
</template>

<style scoped>
.pattern-grid-lg {
  background-image: radial-gradient(currentColor 1px, transparent 1px);
  background-size: 20px 20px;
}
</style>
