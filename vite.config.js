import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    server: {
      host: '0.0.0.0',
      port: 3004
    },
    plugins: [react()],
    define: {
      'process.env': env
    }
  }
})
