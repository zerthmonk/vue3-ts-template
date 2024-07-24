import antfu from '@antfu/eslint-config';

export default antfu({
  unocss: true,

  stylistic: {
    indent: 2,
    quotes: 'single',
    semi: true
  },

  typescript: true,
  vue: true,

  jsonc: false,
  yaml: false,
});