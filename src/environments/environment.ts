// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  base: 'http://localhost:3000',
  googleMaps: {
    apiKey: 'AIzaSyCBEipjiuluP1z2yMoPNRZTESTN3krdSD0'
  },
  auth0: {
    // A/B popup testing
    popup: false,
    // Client config
    clientID: 'hjDO7i3dXLrWyISp7ZIxExw122gCldJ1',
    clientDomain: 'vets4warriors.auth0.com',
    // Auth config
    redirectUri: 'http://localhost:4200/authcallback',
    audience: 'https://vets4warriors.auth0.com/api/v2/',
    scope: 'openid profile',
  }
}
