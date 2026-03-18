import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://xiaoeheblog.netlify.app',  // 你的实际 Netlify 域名
  integrations: [tailwind()],
  output: 'static',  // 纯静态
});
