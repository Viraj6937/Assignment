/* eslint-disable no-undef */
let SpecReporter = require('jasmine-spec-reporter').SpecReporter

exports.config = {
  allScriptsTimeout:11000,
  directConnect: true,
  SELENIUM_PROMISE_MANAGER:false,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['assignment_spec.js'],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 999999
  },

  onPrepare: function () {
    jasmine.getEnv().addReporter(
      new SpecReporter({
        spec: {
          displayStacktrace: true,
        },
      })
    )
  },
};
