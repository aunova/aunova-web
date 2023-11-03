import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Tools',
      links: [
        {
          text: 'OpenAI API Calculaton',
          href: getPermalink('/gptcalc'),
        },
      ],
    },
  ],
  actions: [
    { text: 'Services', href: '/#features', target: '_self' },
    { text: 'About Us', href: '/#about', target: '_self' },
    { text: 'Blog', href: '/blog', target: '_self' },
    { text: 'Follow Us', href: 'https://linktr.ee/aunova', target: '_blank' },
    { text: 'Contact', href: '/contact', target: '_self' },
  ],
};

export const footerData = {
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://bsky.app/profile/aunova.net', target: '_blank' },
  ],
  footNote: `
    Made by <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://aunova.net"> Aunova</a> · All rights reserved.
  `,
};
