const nextEnv = require('next-env')
const dotenvLoad = require('dotenv-load')
dotenvLoad()

const withNextEnv = nextEnv()

module.exports = withNextEnv({
  images: {
    loader: 'imgix',
    path:
      'https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/Xero_software_logo.svg/1200px-Xero_software_logo.svg.png'
  }
})
