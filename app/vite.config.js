import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
// vite.config.ts
import Icons from 'unplugin-icons/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({

      exportAsDefault: false,

      svgrOptions({
        // svgr options
      }, { path, ...rest }) {
        // path is the path to the file being transformed
        // rest is the rest of the options passed to the plugin
        return {
          // svgr options
        }
      }
    }),
    Icons({
      autoInstall: true
    }),
  ]
})
