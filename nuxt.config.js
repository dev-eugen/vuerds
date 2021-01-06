export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Poppins'
      },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    title: 'words',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ]
  },
  link: [
    {
      rel: 'stylesheet',
      href: 'https://unpkg.com/kursor/dist/kursor.css'
    },
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
  ],

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    'vuesax/dist/vuesax.css',
    'boxicons/css/boxicons.min.css',
    'ambient-image/dist/lib/ambient-image.min.css',
    'kursor/dist/kursor.css',
    '@assets/fonts.css'
    //'vuesax/src/icons/icons.sass'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '@/plugins/vuesax'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',

    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: "AIzaSyAYJFjhtf-KIR9Za2MySfEs4Rp-482Vucw",
          authDomain: "vuerds.firebaseapp.com",
          projectId: "vuerds",
          storageBucket: "vuerds.appspot.com",
          messagingSenderId: "140671840163",
          appId: "1:140671840163:web:bea3ecc4a65838ebcef416",
          measurementId: "G-EGMX1MSG6H"
        },
        onFirebaseHosting: true,
        services: {
          auth: true,
          database: true,
          analytics: true,
          storage: true,
      }
      }
    ]
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },
  // server: {     
  //   port: 8000, // default: 3000     
  //   host: '0.0.0.0', // default: localhost   
  // }

}

