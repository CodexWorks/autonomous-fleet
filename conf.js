// conf.js - used for the CI runner
let SpecReporter = require('jasmine-spec-reporter').SpecReporter;
exports.config = {
    framework: 'jasmine2',
    seleniumAddress: 'http://localhost:4444/wd/hub',

    capabilities: {
        'browserName': 'chrome',
        'chromeOptions': {
            args: [ "--headless", "--no-sandbox", "--disable-notifications"]
        },
        acceptInsecureCerts : true,
        loggingPrefs: {
            performance: 'ALL',
            browser: 'ALL'
        }
    },
    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    },
    specs: ['Regression/*.js'],

    onPrepare: function() {
        browser.driver.manage().window().setSize(1920, 1080);
        jasmine.getEnv().addReporter(new SpecReporter({displayStacktrace: 'all'}));
    }
};
