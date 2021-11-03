/**
 * By default, Nuxt.js is configured to cover most use cases.
 * This default configuration can be overwritten in this file
 * @link {https://nuxtjs.org/guide/configuration/}
 */


module.exports = {
  ssr: false,
  target: 'static',
  head: {
    title: 'app',
    meta: [{ charset: "utf-8" }]
  },
  loading: false,
  plugins: [
    {ssr: true, src: '@/plugins/icons.js'},
    { src: "~/plugins/pixi", ssr: false },
    
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  build: {
    babel: {
      plugins: [
        ['@babel/plugin-proposal-private-methods', { loose: true }],
        ["@babel/plugin-proposal-private-property-in-object", { "loose": true }],
      ],
      
    },
  },
  
  buildModules: [
    '@nuxtjs/vuetify',
  ],
  styleResources: {
    stylus: [
      '@nib',
      '@/assets/styles/common.styl',
    ],
    css: []
  },
  modules: [
    '@nuxtjs/style-resources',
  ],
          vuetify: {
            theme: {
              themes: {
                light: {
                  primary: '#1867c0',
                  secondary: '#b0bec5',
                  accent: '#8c9eff',
                  error: '#b71c1c',
                },
              },
            }
          },
};
