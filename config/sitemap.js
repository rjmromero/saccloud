export default [
  {
    path: '/sitemap.xml',
    hostname: 'https://saccloud.co',
    gzip: true,
    exclude: [
      '/redirect/**',
      '/factura/**',
      '/licencia/**'
    ],
    // routes: async () => {
    //   try {
    //     // const { data } = await axios.post('https://app.thebiznation.com/website/cursos/urls')
    //     // return data.map(($) => $.to)
    //   } catch (e) {
    //     console.log(e)
    //     return []
    //   }
    // }
  }
]
