export default {
  '/@/': { target: 'http://localhost:6000' },
  '/sac-cloud/': { target: 'http://localhost:6000' },
  '/iccloud/v1/': { target: 'https://api.iccloud.co', pathRewrite: {'^/iccloud/v1/': ''} }
}
