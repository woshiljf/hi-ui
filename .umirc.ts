import { defineConfig } from 'dumi';

// 此处更换为自己的仓库名
let base = '/react-ui-library-tutorial';
let publicPath = '/react-ui-library-tutorial/';

if (process.env.SITE_BUILD_ENV === 'PREVIEW') {
  base = undefined;
  publicPath = undefined;
}

export default defineConfig({
  title: 'HL UI',
  mode: 'site',
  logo: '/image/logo.png',
  outputPath: 'doc-site',
  exportStatic: {},
  dynamicImport: {},
  webpack5: {},
  mfsu: {},
  base,
  publicPath,

});
