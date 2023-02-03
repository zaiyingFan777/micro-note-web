import { defineConfig } from 'umi';
import routes from './routes';
export default defineConfig({
  plugins: ['@umijs/plugins/dist/antd'],
  antd: {
    import: true,
  },
  routes,
  npmClient: 'pnpm',
});
