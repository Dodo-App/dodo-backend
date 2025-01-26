import config from './index'
import SuperTokens from "supertokens-node";
import ThirdParty from "supertokens-node/recipe/thirdparty"
import Passwordless from "supertokens-node/recipe/passwordless"
import Session from "supertokens-node/recipe/session"
import { TypeInput } from "supertokens-node/types";

export const SuperTokensConfig: TypeInput = {
  framework: 'express',
  supertokens: {
    connectionURI: config.supertokens.connectionURI,
    apiKey: config.supertokens.apiKey
  },
  appInfo: {
    appName: "Dodo",
    apiDomain: config.supertokens.apiDomain,
    websiteDomain: config.supertokens.websiteDomain,
    apiBasePath: '/auth',
    websiteBasePath: '/auth',
  },
  recipeList: [
    Passwordless.init({
      contactMethod: 'EMAIL',
      flowType: 'USER_INPUT_CODE_AND_MAGIC_LINK'
    }),
    ThirdParty.init({
      signInAndUpFeature: {
        providers: [{
          config: {
            thirdPartyId: "google",
            clients: [{
              clientId: config.supertokens.google.clientId,
              clientSecret: config.supertokens.google.clientSecret,
              scope: ["email", "profile"],
            }]
          }
        }, {
          config: {
            thirdPartyId: "facebook",
            clients: [{
              clientId: config.supertokens.facebook.clientId,
              clientSecret: config.supertokens.facebook.clientSecret,
            }]
          }
        }],
      }
    }),
    Session.init()
  ]
}