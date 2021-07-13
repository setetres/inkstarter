import tailwindConfig from './tailwind.config'

export default {
  ssr: false,
  target: 'static',
  head: {
    htmlAttrs: {
      lang: 'en',
    },
    bodyAttrs: {
      class: 'overflow-hidden w-screen min-h-screen select-none',
    },
    title: 'InkStarter',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content:
          'width=device-width, height=device-height, user-scalable=no, initial-scale=1',
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Since 2008.',
      },

      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:title', property: 'og:title', content: 'InkStarter' },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'Since 2008.',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://inkstarter.setetres.st/share-inkstarter.png',
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://inkstarter.setetres.st',
      },

      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'InkStarter',
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: 'Since 2008.',
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https://inkstarter.setetres.st/share-inkstarter.png',
      },
    ],
    link: [
      { rel: 'icon', href: '/favicon.svg' },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap',
      },
    ],
  },
  loading: {
    color: '#000000',
    failedColor: '#e02020',
    throttle: 0,
  },
  css: ['@/assets/css/application.css'],
  plugins: [
    {
      src: '~/plugins/ga.js',
      mode: 'client',
    },
  ],
  components: true,
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/tailwindcss',
  ],
  modules: ['@nuxtjs/axios'],
  axios: {},
  build: {},
}
