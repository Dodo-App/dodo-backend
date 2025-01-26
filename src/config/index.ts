export default {
  port: process.env.PORT || 8080,
  frontendDomain: process.env.WEBSITE_DOMAIN || 'http://localhost:3000',
  supertokens: {
    connectionURI: process.env.SUPERTOKENS_CONNECTION_URI || '',
    apiKey: process.env.SUPERTOKENS_API_KEY || '',
    apiDomain: process.env.API_DOMAIN || 'http://localhost:8080',
    websiteDomain: process.env.WEBSITE_DOMAIN || 'http://localhost:3000',
    // Oauth settings
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
      redirectUri: process.env.GOOGLE_REDIRECT_URI || 'http://localhost:8080/auth/callback/google',
    },
    facebook: {
      clientId: process.env.FACEBOOK_CLIENT_ID || '',
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET || '',
    }
  },
}