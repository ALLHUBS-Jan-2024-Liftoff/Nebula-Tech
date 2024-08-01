import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "../resources/static/",
    emptyOutDir: true,
  },
   server: {
     proxy: {
       '/api': 'http://localhost:8080',
     },
   },
});

// GET localhost:8080/api/demo
//      --> port 8080 doesn't exist when deployed live
//          --> Spring Boot runs only frontend LOCAL port 5173 when deployed live

// live deployment provides only a NON-LOCAL port with url-path /api

// http//:itinera.com/api/demo
//      --> allows React frontend to call backend without localhost:8080 via /api

// server returns react app & backend from same port /api when deployed live!

// '/api' --> reserved for all backend routes

// Render serves index.html which displays main.jsx providing React router handling
//    for example,
//        'itinera/123' displays a customizable React 404 route-error page
//            which looks far better than Java's route-error page
