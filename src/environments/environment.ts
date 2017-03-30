// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyC4EbmxRu6EvhWHYc5_eTrLF7swC9DHd2Y',
    authDomain: 'vets-4-warriors.firebaseapp.com',
    databaseURL: 'https://vets-4-warriors.firebaseio.com',
    storageBucket: 'vets-4-warriors.appspot.com',
    messagingSenderId: '115737848275'
  },
  googleMaps: {
    apiKey: 'AIzaSyCBEipjiuluP1z2yMoPNRZTESTN3krdSD0'
  }
}
