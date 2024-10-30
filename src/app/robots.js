import { config } from '@/data'

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${config?.business.url}/sitemap.xml`,
  }
}
