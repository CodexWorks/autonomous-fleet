// protractor.conf.js - specs for local testing / this can be changed w/o impacting the CI runner
let SpecReporter = require('jasmine-spec-reporter').SpecReporter;
exports.config = {
    framework: 'jasmine2',
    directConnect:true,

    capabilities: {
        'shardTestFiles': true,
        'maxInstances': 1,
        'browserName': 'chrome',
        chromeOptions: {
            args: [
                //"--headless",  -> will run the tests in headless mode, w/o UI.
                "--no-sandbox", "--disable-notifications"]
        },
        acceptInsecureCerts : true,
        loggingPrefs: {
            performance: 'ALL',
            browser: 'ALL'
        }
    },
    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000  // default timeout interval
                },
                suites:{
                    all: ['Regression/*.js'], // -> will run all test in the folder
        sandbox: [
            'Regression/Automation_Test_1.js' // -> will run only the specific test
        ]
    },
    onPrepare: function() {
        browser.driver.manage().window().setSize(1920, 1080);
        jasmine.getEnv().addReporter(new SpecReporter({displayStacktrace: 'all'}));
    }
};
