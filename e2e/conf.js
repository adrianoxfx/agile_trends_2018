'use strict'

exports.config = {
  seleniumAddress: "http://zalenium:4444/wd/hub",
  ignoreUncaughtExceptions: true,
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  restartBrowserBetweenTests: false,
  getPageTimeout: 20000,
  allScriptsTimeout: 30000,
  rootElement: '*[ng-app]',
  baseUrl: "http://webapp:4200",
  useAllAngular2AppRoots: true,

  specs: [
    'features/*.feature'
  ],

  exclude: [],

  capabilities: {
    'browserName': 'chrome'
  },

  cucumberOpts: {
    require: 'features/step_definitions/*.js',
    tags: ['~@notImplemented'],
    format: ['json:results.json', 'pretty'],
    profile: false,
    'no-source': true
  },

  beforeLaunch: function () {
      setTimeout(function () {
        browser.driver.manage().window().setSize(1280, 1024)
        // browser.driver.manage().window().maximize()
      })
  },

  onPrepare: function () {
    browser.ignoreSynchronization = false
  },

  afterLaunch: function () {
    var reporter = require('cucumber-html-reporter')

    var options = {
      theme: 'bootstrap',
      jsonFile: 'results.json',
      output: 'report/cucumber_report.html',
      reportSuiteAsScenarios: true,
      launchReport: true,
      metadata: {
        'App Version': '0.0.1',
        'Test Environment': 'STAGING',
        'Browser': 'Chrome  54.0.2840.98',
        'Platform': 'OSX',
        'Parallel': 'Scenarios',
        'Executed': 'Remote'
      }
    }

    reporter.generate(options)
  }

}
