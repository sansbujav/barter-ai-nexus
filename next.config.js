
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost'],
  },
  i18n: {
    locales: ['en', 'ka', 'de', 'it', 'fr'],
    defaultLocale: 'en',
    localeDetection: true,
  },
}

module.exports = nextConfig
