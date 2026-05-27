export default defineAppConfig({
  global: {
    picture: {
      dark: '/index/profilepicture.jpg',
      light: '/index/profilepicture.jpg',
      alt: 'My profile picture'
    },
    meetingLink: '0767438274',
    email: 'timeo.morsilli@gmail.com',
    available: true
  },
  ui: {
    colors: {
      primary: 'blue',
      neutral: 'neutral'
    },
    pageHero: {
      slots: {
        container: 'py-18 sm:py-24 lg:py-32',
        title: 'mx-auto max-w-xl text-pretty text-3xl sm:text-4xl lg:text-5xl',
        description: 'mt-2 text-md mx-auto max-w-2xl text-pretty sm:text-md text-muted'
      }
    }
  },
  footer: {
    credits: `Viazel • © ${new Date().getFullYear()}`,
    colorMode: false,
    links: [{
      'icon': 'i-simple-icons-x',
      'to': 'https://x.com/TMorsilli',
      'target': '_blank',
      'aria-label': 'Timeo MORSILLI on X'
    }, {
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/Viazel',
      'target': '_blank',
      'aria-label': 'Timeo MORSILLI on GitHub'
    }]
  }
})
