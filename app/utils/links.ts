import type { NavigationMenuItem } from '@nuxt/ui'

export const navLinks: NavigationMenuItem[] = [{
  label: 'Accueil',
  icon: 'i-lucide-home',
  to: '/'
}, {
  label: 'Projets',
  icon: 'i-lucide-folder',
  to: '/projects'
}, {
  label: 'Articles',
  icon: 'i-lucide-file-text',
  to: '/blog'
}, {
  label: 'À propos',
  icon: 'i-lucide-user',
  to: '/about'
}]
