import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sitemap from 'vite-plugin-sitemap'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
    sitemap({
      hostname: 'https://coachingandmentorshipwithfelecia.com',
      generateRobotsTxt: false,
      dynamicRoutes: [
        '/about',
        '/services',
        '/testimonial',
        '/contact',
        '/blog',
        '/coaching',
        '/fitness-lifestyle',
        '/terms'
      ]
    })
  ],
})
