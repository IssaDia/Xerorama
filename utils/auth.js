import { initAuth0 } from '@auth0/nextjs-auth0'

export default initAuth0({
  domain: process.env.NEXT_PUBLIC_AUTH0_DOMAIN,
  clientId: process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID,
  clientSecret: process.env.NEXT_PUBLIC_AUTH0_CLIENT_SECRET,
  scope: 'openid profile',
  redirectUri: process.env.redirectUri,
  postLogoutRedirectUri: process.env.postLogoutRedirectUri,
  session: {
    cookieSecret: process.env.cookieSecret,
    cookieLifetime: 60 * 60 ** 8,
    storeIdToken: false,
    storeAccessToken: false,
    storeRefreshToken: false
  },
  oidcClient: {
    httpTimeout: 2500,
    clockTolerance: 10000
  }
})
