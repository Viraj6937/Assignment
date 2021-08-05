/* eslint-disable no-undef */
let SpecReporter = require('jasmine-spec-reporter').SpecReporter;

exports.config = {
  //your config here

  onPrepare: function(){
    jasmine.getEnv().addReporter(new SpecReporter({
      displayFailuresSummary: true,
      displayFailuredSpec: true,
      displaySuiteNumber: true,
      displaySpecDuration: true
    }));
  }

}