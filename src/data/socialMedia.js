// components
import { XIcon, InstagramIcon, FacebookIcon } from '@/components'

export const socialMedia = {
  socialMedia: [
    {
      label: 'Facebook',
      href: '#',
      icon: (props) => <FacebookIcon {...props} />,
    },
    {
      label: 'Instagram',
      href: '#',
      icon: (props) => <InstagramIcon {...props} />,
    },
    {
      label: 'X',
      href: '',
      icon: (props) => <XIcon {...props} />,
    },
  ],
}
