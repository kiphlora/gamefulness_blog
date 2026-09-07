import { defineThemeConfig } from '@utils/defineThemeConfig'
import previewImage from '@assets/img/social-preview-image.png'
// import logoImage from '@assets/img/logo.svg'
import logoImage from '@assets/img/hero_image_gamefulness.svg'

export default defineThemeConfig({
  name: 'Gamefulness',
  id: 'gamefulness',
  seo: {
    title: 'Gamefulness',
    description: 'Gamefulness is primarily a blog dedicated to posts about games, game design, and games related to making a positive difference in the world.',
    image: previewImage,
  },
  logo: logoImage,
  colors: {
    // primary: '#d648ff',
    // secondary: '#00d1b7',
    // primary: '#3E809C',
    // secondary: '#FDEC4B',
    primary: '#0099ff',
    secondary: '#ff0099',
    neutral: '#b9bec4',
    outline: '#ff4500',
  },
  navigation: {
    darkmode: true,
    items: [
      {
        type: 'link',
        label: 'Home',
        href: '/',
      },
      {
        type: 'link',
        label: 'Blog',
        href: '/blog',
      },
      {
        type: 'link',
        label: 'GT EdTech Project',
        href: 'https://sdt.gamefulness.org',
        external: true,
      },
      {
        type: 'link',
        label: 'Kiphlora',
        href: 'https://www.kiphlora.com',
        external: true,
      },
      {
        type: 'link',
        label: 'Gamefulness repo on Github',
        href: 'https://github.com/kiphlora/gamefulness/',
        icon: 'lucide:github',
        external: true,
        excludeFromLauncher: true,
      },
      // {
      //   type: 'link',
      //   label: 'Portfolio',
      //   href: '/portfolio',
      // },
      // {
      //   type: 'dropdown',
      //   label: 'Features',
      //   items: [
      //     {
      //       label: 'Accessibility statement',
      //       href: '/accessibility-statement',
      //     },
      //     {
      //       label: 'Accessible components',
      //       href: '/accessible-components',
      //     },
      //     {
      //       label: 'Accessible launcher',
      //       href: '/accessible-launcher',
      //     },
      //     {
      //       label: 'Color contrast checker',
      //       href: '/color-contrast-checker',
      //     },
      //     {
      //       label: 'Markdown page',
      //       href: '/markdown-page',
      //     },
      //     {
      //       label: 'MDX page',
      //       href: '/mdx-page',
      //     },
      //     {
      //       label: 'Sitemap',
      //       href: '/sitemap',
      //     }
      //   ],
      // },
      {
        type: 'link',
        label: 'Contact',
        href: '/contact',
      }
    ],
  },
  socials: [],
})
