<script setup lang="ts">
import siteMetadata from '@/data/siteMetadata'

const navLinks = [
  { href: '/blog', title: 'Blog' },
  { href: '/projects', title: 'Projects' },
  { href: '/about', title: 'About' },
  { href: '/contact', title: 'Contact' },
]

const colorMode = useColorMode()
const isDark = computed(() => colorMode.value === 'dark')

const toggleColorMode = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <div class="flex flex-col min-h-screen font-sans text-gray-900 bg-gray-50 dark:bg-gray-950 dark:text-gray-100 transition-colors duration-300">
    <header class="sticky top-0 z-50 w-full backdrop-blur-lg bg-white/80 dark:bg-gray-950/80 border-b border-gray-200 dark:border-gray-800 transition-all duration-300">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <NuxtLink to="/" class="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <!-- You can verify if siteMetadata.siteLogo exists, otherwise fallback to text or icon -->
          <NuxtImg 
            v-if="siteMetadata.siteLogo" 
            :src="siteMetadata.siteLogo" 
            alt="Logo" 
            class="h-10 w-10 rounded-full object-cover ring-2 ring-primary-500/20" 
          />
          <span class="text-xl font-bold bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
            {{ siteMetadata.headerTitle }}
          </span>
        </NuxtLink>

        <div class="hidden md:flex items-center gap-8">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.title"
            :to="link.href"
            class="text-sm font-medium hover:text-primary-600 dark:hover:text-primary-400 transition-colors relative group"
            active-class="text-primary-600 dark:text-primary-400 font-bold"
          >
            {{ link.title }}
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
          </NuxtLink>
        </div>

        <div class="flex items-center gap-4">
           <!-- Theme Toggler -->
           <button 
             @click="toggleColorMode" 
             class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500"
             aria-label="Toggle Dark Mode"
           >
             <Icon v-if="isDark" name="heroicons:moon-20-solid" class="w-5 h-5 text-yellow-400" />
             <Icon v-else name="heroicons:sun-20-solid" class="w-5 h-5 text-orange-500" />
           </button>
           
           <!-- Mobile Menu Button (simplified for now) -->
           <button class="md:hidden p-2 text-gray-500">
             <Icon name="heroicons:bars-3-20-solid" class="w-6 h-6" />
           </button>
        </div>
      </div>
    </header>
    
    <main class="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <slot />
    </main>

    <footer class="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 py-12 transition-colors duration-300">
      <div class="container mx-auto px-4 flex flex-col items-center">
        <div class="flex space-x-6 mb-8">
          <a :href="siteMetadata.github" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors transform hover:scale-110 duration-200">
            <Icon name="mdi:github" size="1.5em" />
          </a>
          <a :href="siteMetadata.twitter" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110 duration-200">
             <Icon name="mdi:twitter" size="1.5em" />
          </a>
          <a :href="`mailto:${siteMetadata.email}`" class="text-gray-400 hover:text-red-500 transition-colors transform hover:scale-110 duration-200">
             <Icon name="mdi:email" size="1.5em" />
          </a>
        </div>
        <p class="text-sm text-gray-500 dark:text-gray-400">
          &copy; {{ new Date().getFullYear() }} {{ siteMetadata.author }}. All rights reserved.
        </p>
      </div>
    </footer>
  </div>
</template>
