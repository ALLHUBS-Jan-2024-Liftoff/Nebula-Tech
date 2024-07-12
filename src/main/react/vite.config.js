import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: '../resources/static/',
    emptyOutDir: true,
  },
  server: {
    proxy: {
      '/api': 'http://localhost:8080',
    },
  },
});

// GET localhost:8080/api/demo
//      --> port 8080 doesn't exist when deployed
//          --> only frontend port 5173 works when deployed
// two ports running locally but when deployed, only one port available

// http//:itinera.com/api/demo
//      --> allows api calls from frontend without pointing to localhost:8080

// server must return react app & api from same port when deployed!

// '/api' --> reserved for all backend routes for api

// user visits 'itinera/123' page
//      --> displays customizable react default 404 cannot find page
//          --> server returns index.html with all react app router handling
