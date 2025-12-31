import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    server: {
        proxy: {
            '/api/efood': {
                target: 'https://api-ebac.vercel.app',
                changeOrigin: true,
                secure: true
            }
        }
    }
})
