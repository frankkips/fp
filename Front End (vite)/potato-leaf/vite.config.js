import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
  define: {
    'process.env.REACT_APP_API_URL': JSON.stringify('http://0.0.0.0:8000/predict'),
  },
},
})
