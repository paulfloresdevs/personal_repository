// vite.config.js
import path from 'path';

export default {
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')  // Esto hará que "@" apunte a la carpeta "src"
    }
  }
};
