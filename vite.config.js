import path from 'path';
import svgr from 'vite-plugin-svgr';

export default {
  plugins: [svgr()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
};
