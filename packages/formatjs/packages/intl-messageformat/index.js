/* jshint node:true */

'use strict';

var IntlMessageFormat = require('./lib/core').default;

// Add all locale data to `IntlMessageFormat`;
require('./lib/locales');

// Set the default locale to English.
IntlMessageFormat.defaultLocale = 'en';

// Re-export `IntlMessageFormat` as the CommonJS default exports with all the
// locale data registered, and with English set as the default locale. Define
// the `default` prop for use with other compiled ES6 Modules.
exports = module.exports = IntlMessageFormat;
Object.defineProperty(exports, 'default', {value: exports});