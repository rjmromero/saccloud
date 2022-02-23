export default [
  {
    UserAgent: '*',
    Disallow: () => [
      '/redirect/*',
      '/factura/*',
      '/licencia/*'
    ],
    Sitemap: 'https://saccloud.co/sitemap.xml',
  }
]
