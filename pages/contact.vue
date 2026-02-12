<script setup lang="ts">
import siteMetadata from '@/data/siteMetadata'

useHead({
  title: 'Contact | ' + siteMetadata.title,
  meta: [
    { name: 'description', content: 'Get in touch with ' + siteMetadata.title }
  ]
})

const form = ref({
  name: '',
  email: '',
  message: ''
})

const sendMessage = () => {
  // In a real app, you would send this to a backend
  // For now, we can just open a mailto link
  const subject = `New message from ${form.value.name}`
  const body = `Name: ${form.value.name}\nEmail: ${form.value.email}\n\nMessage:\n${form.value.message}`
  window.location.href = `mailto:${siteMetadata.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}
</script>

<template>
  <div class="container mx-auto px-4 py-12 max-w-6xl">
    <div class="text-center mb-16">
      <h1 class="text-4xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-400 dark:from-primary-400 dark:to-primary-200">
        Get in Touch
      </h1>
      <p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
        Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as we can.
      </p>
    </div>

    <div class="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
      <!-- Contact Info -->
      <div class="space-y-8">
        <div class="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-xl border border-gray-100 dark:border-gray-800 transform hover:scale-[1.02] transition-transform duration-300">
          <h2 class="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-3">
            <div class="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg text-primary-600 dark:text-primary-400">
               <Icon name="heroicons:chat-bubble-left-right" class="w-6 h-6" />
            </div>
            Contact Information
          </h2>
          
          <div class="space-y-6">
            <a :href="`mailto:${siteMetadata.email}`" class="flex items-start gap-4 group">
              <div class="p-3 bg-gray-100 dark:bg-gray-800 rounded-2xl group-hover:bg-primary-50 dark:group-hover:bg-primary-900/20 transition-colors">
                <Icon name="heroicons:envelope" class="w-6 h-6 text-gray-500 group-hover:text-primary-600 dark:text-gray-400 dark:group-hover:text-primary-400" />
              </div>
              <div>
                <p class="font-medium text-gray-900 dark:text-white">Email Us</p>
                <p class="text-gray-600 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {{ siteMetadata.email }}
                </p>
              </div>
            </a>

            <div class="flex items-start gap-4 group">
              <div class="p-3 bg-gray-100 dark:bg-gray-800 rounded-2xl group-hover:bg-primary-50 dark:group-hover:bg-primary-900/20 transition-colors">
                <Icon name="heroicons:map-pin" class="w-6 h-6 text-gray-500 group-hover:text-primary-600 dark:text-gray-400 dark:group-hover:text-primary-400" />
              </div>
              <div>
                <p class="font-medium text-gray-900 dark:text-white">Location</p>
                <p class="text-gray-600 dark:text-gray-400">
                  Oued Laou, Morocco
                </p>
              </div>
            </div>
          </div>

          <div class="mt-8 pt-8 border-t border-gray-100 dark:border-gray-800">
            <h3 class="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Follow Us</h3>
            <div class="flex gap-4">
              <a :href="siteMetadata.github" target="_blank" class="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-all duration-300">
                <Icon name="mdi:github" class="w-6 h-6" />
              </a>
              <a :href="siteMetadata.twitter" target="_blank" class="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-[#1DA1F2] hover:text-white transition-all duration-300">
                <Icon name="mdi:twitter" class="w-6 h-6" />
              </a>
              <a :href="siteMetadata.facebook" target="_blank" class="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-[#1877F2] hover:text-white transition-all duration-300">
                <Icon name="mdi:facebook" class="w-6 h-6" />
              </a>
              <a :href="siteMetadata.instagram" target="_blank" class="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-pink-600 hover:text-white transition-all duration-300">
                <Icon name="mdi:instagram" class="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Contact Form -->
      <div class="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-xl border border-gray-100 dark:border-gray-800 relative overflow-hidden">
        <div class="absolute top-0 right-0 w-32 h-32 bg-primary-500/10 rounded-bl-full -mr-8 -mt-8 pointer-events-none"></div>
        
        <h2 class="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Send a Message</h2>
        
        <form @submit.prevent="sendMessage" class="space-y-6">
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
            <input 
              v-model="form.name"
              type="text" 
              id="name" 
              required
              class="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:bg-white dark:focus:bg-gray-800 transition-all"
              placeholder="Your name"
            />
          </div>

          <div>
            <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
            <input 
              v-model="form.email"
              type="email" 
              id="email" 
              required
              class="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:bg-white dark:focus:bg-gray-800 transition-all"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
            <textarea 
              v-model="form.message"
              id="message" 
              rows="4" 
              required
              class="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:bg-white dark:focus:bg-gray-800 transition-all resize-none"
              placeholder="How can we help you?"
            ></textarea>
          </div>

          <button 
            type="submit"
            class="w-full py-4 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-xl shadow-lg shadow-primary-500/30 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <span>Send Message</span>
            <Icon name="heroicons:paper-airplane" class="w-5 h-5" />
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
