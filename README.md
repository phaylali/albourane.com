# 🌊 Albourane.com

[![Nuxt](https://img.shields.io/badge/Nuxt-00DC82?style=for-the-badge&logo=nuxt.js&logoColor=white)](https://nuxt.com)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Bun](https://img.shields.io/badge/Bun-282a36?style=for-the-badge&logo=bun&logoColor=f9f9f9)](https://bun.sh)

A modern, high-performance web platform built for **Albourane**, the traditional fishing cooperative based in **Oued Laou, Morocco**. This website serves as a digital hub for news, insights, and technical tools tailored to the local fishing community.

## 🎯 Project Goal

The primary objective of this project is to provide a premium digital presence for the Albourane cooperative. It focuses on:

- **Information Sharing**: Delivering real-time updates and news regarding local fishing conditions and cooperative activities.
- **Project Showcasing**: Featuring specialized tools like the **Albourane Ticket Reader** used for tractor services.
- **Cultural Preservation**: Documenting and promoting the traditional fishing heritage of the Oued Laou region.

## 🛠️ Tech Stack

This project leverages the latest web technologies to ensure speed, SEO, and a premium user experience:

- **Core**: [Nuxt 4/3](https://nuxt.com) (Vue.js Framework)
- **Package Manager**: [Bun](https://bun.sh) (for ultra-fast builds and installs)
- **Content Management**: [Nuxt Content v3](https://content.nuxt.com) (Git-based CMS for Markdown/MDX)
- **Styling**: [Tailwind CSS](https://tailwindcss.com) with Typography & Forms plugins
- **Icons**: [@nuxt/icon](https://nuxt.com/modules/icon) (Iconify eco-system)
- **Images**: [@nuxt/image](https://image.nuxt.com) (Optimized image delivery)
- **Theme**: [@nuxtjs/color-mode](https://color-mode.nuxt.com) (Native Dark/Light mode support)
- **Fonts**: [@nuxt/fonts](https://fonts.nuxt.com) (Typed and optimized font management)

## 🏗️ Technical Details

### Architecture

The project follows a modular Nuxt 3+ architecture:

- **Git-based CMS**: All blog posts and stories are written in **MDX/Markdown** inside the `content/` directory.
- **Type-Safety**: Entirely written in **TypeScript**, including configuration and data definitions (using Zod for content schema validation).
- **Responsive Design**: A mobile-first, fluid layout designed with high-end glassmorphism and smooth transitions.

### Key Components

- **MDX Integration**: Custom Vue components (like YouTube embeds and Gallery layouts) are directly usable inside blog posts.
- **Dynamic Routing**: Automatic route generation based on the `content/` structure.
- **SEO Optimized**: Pre-configured meta tags, server-side rendering (SSR), and automated sitemap generation.

## 🚀 Getting Started

### Installation

```bash
bun install
```

### Development

```bash
bun run dev
```

### Build for Production

```bash
bun run build
```

---

_Dedicated to the fishermen of Oued Laou._ 🇲🇦
_With love from Morocco._
_Brought to you by Omniversify._
