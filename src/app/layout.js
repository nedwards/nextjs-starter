// Ananlytics
import { GoogleAnalytics } from '@next/third-parties/google'

// components
import { Header, Footer, SkipLinks } from '@/components'

// fonts
import { Inter } from 'next/font/google'

// data
import { config } from '@/data'

// css
import '@/css/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  robots: {
    index: true,
  },
  icons: {
    icon: '/favicons/favicon.ico',
    apple: '/favicons/apple-touch-icon.png',
  },
  openGraph: {
    title: config?.business.name,
    description: config?.business.description,
    url: config?.business.url,
    siteName: config?.business.name,
    images: [
      {
        url: `${config?.business.url}/social/opengraph.png`,
      },
    ],
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SkipLinks />
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
      <GoogleAnalytics gaId={config?.google.analyticsId} />
    </html>
  )
}
