export const navigation = {
  navigation: [
    {
      label: 'Home',
      href: '/',
    },
    {
      label: 'About',
      href: '/about',
    },
    {
      label: 'Services',
      href: '/services',
      items: [
        {
          label: 'Service 1',
          href: '/services/service-1',
        },
        {
          label: 'Service 2',
          href: '/services/service-2',
        },
      ],
    },
    { label: 'Contact', href: '/contact' },
  ],
}
