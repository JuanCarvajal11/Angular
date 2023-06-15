// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
	production: false,
	airApiURL: '/api/flights/', // This is the api url for the flights service
	changeBadgeApiURL: '/currency_data/', // This is the api url for the change badge service
	changeBadgeApiKEY: '4K40cLvdd1yU18SiHoacV21MxcsD7cM0' // This is the api key for the change badge service
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
