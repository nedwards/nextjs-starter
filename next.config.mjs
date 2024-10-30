/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    WEBSITE_URL: process.env.WEBSITE_URL,
    CONTACT_EMAIL: process.env.CONTACT_EMAIL,
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    EMAIL_FROM_ADDRESS: process.env.EMAIL_FROM_ADDRESS,
    EMAIL_TO_ADDRESS: process.env.EMAIL_TO_ADDRESS,
    GOOGLE_ANALYTICS_ID: process.env.GOOGLE_ANALYTICS_ID,
    GOOGLE_MAPS_URL: process.env.GOOGLE_MAPS_URL,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
}

export default nextConfig
