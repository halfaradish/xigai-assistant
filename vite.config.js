import { defineConfig } from 'vite';
import monkey from 'vite-plugin-monkey';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    monkey({
      entry: 'src/main.js',
      userscript: {
        icon: 'https://vitejs.dev/logo.svg',
        name: '学习通-习概课程助手',
        namespace: 'npm/vite-plugin-monkey',
        match: ['https://mooc1.chaoxing.com/'],
      },
    }),
  ],
});
