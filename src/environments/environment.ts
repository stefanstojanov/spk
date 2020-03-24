// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.


export const environment = {
  production: false,
  URL: 'https://e-payment.postfinance.ch/Ncol/Test/orderstandard_UTF8.asp',
  PSPID: 'koalitoTEST',
  USERID: 'koalito-stefan',
  PASSPHRASE: '_koalito#@kbox_pay2016@##',
  URLBASE: 'http://localhost/SPK_MY/',
  CALLBACK_URL_ALIAS_ERROR: 'http://localhost/SPK_MY/payment-error.php',
  CALLBACK_URL_PAYMENT_ERROR: 'http://localhost/SPK_MY/payment-alias-creation-error.php',
  CALLBACK_URL_ALIAS_SUCCESS: 'http://localhost/SPK_MY/payment-alias-creation.php',
  CALLBACK_URL_PAYMENT_SUCCESS: 'http://localhost/SPK_MY/payment.php',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
