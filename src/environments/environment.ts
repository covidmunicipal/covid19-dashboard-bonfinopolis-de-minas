// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  buildVersion: 'debug',
  production: false,
  firebase: {
    apiKey: "AIzaSyBsuUsm7wT93b4RvJbBaM4jCGBlWiHz_Nw",
    authDomain: "radar-covid-bonfinopolis.firebaseapp.com",
    databaseURL: "https://radar-covid-bonfinopolis.firebaseio.com",
    projectId: "radar-covid-bonfinopolis",
    storageBucket: "radar-covid-bonfinopolis.appspot.com",
    messagingSenderId: "974807591803",
    appId: "1:974807591803:web:f2e33df61538556d94ebde",
    measurementId: "G-G6Y6XXZ9W1"
  },
  spreadsheetId: '1fveoSvn9oN5kJ-HxGUNffkxQ0F9Z5STlh7p3VNiVuOY',
  appName: 'Radar Coronavírus Bonfinópolis de Minas',
  targetLocation: 'Bonfinópolis de Minas'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
