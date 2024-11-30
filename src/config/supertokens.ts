import dotenv from 'dotenv'
dotenv.config()

import SuperTokens from "supertokens-node";
import ThirdParty from "supertokens-node/recipe/thirdparty"
import Passwordless from "supertokens-node/recipe/passwordless"
import Session from "supertokens-node/recipe/session"

SuperTokens.init({
  framework: 'express',
  supertokens: {
    connectionURI: process.env.SUPERTOKENS_CONNECTION_URI || 'http://localhost:3567',
    apiKey: process.env.SUPERTOKENS_API_KEY || '',
  },
  appInfo: {
    appName: "Dodo",
    apiDomain: process.env.API_DOMAIN || 'http://localhost:8080',
    websiteDomain: process.env.WEBSITE_DOMAIN || 'http://localhost:3000',
    apiBasePath: '/auth',
    websiteBasePath: '/auth',
  },
  recipeList: [
    Passwordless.init({
      contactMethod: 'EMAIL',
      flowType: 'USER_INPUT_CODE_AND_MAGIC_LINK',
    }),
    ThirdParty.init({
      signInAndUpFeature: {
        providers: [{
          config: {
            thirdPartyId: "google",
            clients: [{
              clientId: process.env.GOOGLE_CLIENT_ID || '',
              clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
            }]
          }
        }, {
          config: {
            thirdPartyId: "facebook",
            clients: [{
              clientId: process.env.FACEBOOK_CLIENT_ID || '',
              clientSecret: process.env.FACEBOOK_CLIENT_SECRET || '',
            }]
          }
        }],
      }
    }),
    Session.init()
  ]
});