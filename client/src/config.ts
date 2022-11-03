//  Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = '50ooflkde0'
export const apiEndpoint = `https://${apiId}.execute-api.ap-south-1.amazonaws.com/dev`

export const authConfig = {
  //  Create an Auth0 application and copy values from it into this map. For example:
  // domain: 'dev-nd9990-p4.us.auth0.com',
  domain: 'uffey.us.auth0.com',            // Auth0 domain
  clientId: 'iMBFivIAWgCzQaLXqU5Gopf5WAJZ1tgt',          // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
}
