<script setup lang="ts">
const route = useRoute()
const { data: post } = await useAsyncData(route.path, () => {
  return queryCollection('blog').path(route.path).first()
})

if (!post.value) {
  throw createError({ statusCode: 404, statusMessage: 'Post not found', fatal: true })
}

useHead({
  title: post.value?.title || 'Blog Post',
  meta: [
    { name: 'description', content: post.value?.description || post.value?.summary || '' },
    { property: 'og:image', content: post.value?.banner || post.value?.image || '' }
  ]
})
</script>

<template>
  <main class="container mx-auto px-4 py-12 max-w-4xl">
    <article v-if="post" class="bg-white dark:bg-gray-900 rounded-3xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-800">
      <!-- Banner Image -->
      <div v-if="post.banner || post.image" class="aspect-video relative overflow-hidden">
        <NuxtImg 
          :src="post.banner || post.image" 
          :alt="post.title"
          class="w-full h-full object-cover"
          placeholder
        />
        <div class="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
        <div class="absolute bottom-0 left-0 p-8 text-white w-full">
           <div class="flex items-center gap-4 mb-3 text-sm font-medium opacity-90">
             <span v-if="post.date">{{ new Date(post.date).toLocaleDateString() }}</span>
             <span v-if="post.tags && post.tags.length" class="px-2 py-1 bg-primary-500/20 backdrop-blur-md rounded border border-primary-400/30">
               {{ post.tags[0] }}
             </span>
           </div>
           <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">{{ post.title }}</h1>
        </div>
      </div>
      
      <!-- Content Body -->
      <div class="p-8 md:p-12">
        <!-- Render the MDX/Markdown content -->
        <ContentRenderer 
          :value="post" 
          class="prose prose-lg dark:prose-invert max-w-none prose-primary prose-img:rounded-xl prose-headings:font-bold prose-a:text-primary-600 dark:prose-a:text-primary-400 hover:prose-a:text-primary-500 transition-colors"
        />
      </div>

      <!-- Navigation / Footer of Article -->
      <div class="bg-gray-50 dark:bg-gray-800/50 p-8 border-t border-gray-100 dark:border-gray-800 flex justify-between items-center">
        <NuxtLink to="/blog" class="text-primary-600 hover:text-primary-700 font-bold flex items-center gap-2">
           <Icon name="heroicons:arrow-left-20-solid" />
           Back to Blog
        </NuxtLink>
        <div class="flex gap-4">
           <!-- Social Share buttons could go here -->
        </div>
      </div>
    </article>
  </main>
</template>
