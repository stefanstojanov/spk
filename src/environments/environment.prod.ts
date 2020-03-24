export const environment = {
    production: true,
    URL: 'https://e-payment.postfinance.ch/Ncol/Test/orderstandard_UTF8.asp',
    PSPID: 'koalitoTEST',
    USERID: 'koalito-stefan',
    PASSPHRASE: '_koalito#@kbox_pay2016@##',
    URLBASE: 'https://api.spk.ch/',
    CALLBACK_URL_ALIAS_ERROR: 'http://api.spk.ch/payment-error.php',
    CALLBACK_URL_PAYMENT_ERROR: 'http://api.spk.ch/payment-alias-creation-error.php',
    CALLBACK_URL_ALIAS_SUCCESS: 'http://api.spk.ch/payment-alias-creation.php',
    CALLBACK_URL_PAYMENT_SUCCESS: 'http://api.spk.ch/payment.php',
};
