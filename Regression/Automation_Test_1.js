//Those tests that are running on the CI.

/*
WIP
*/

const {exampleName} = require('../Index.js');
let projectButtons = require('../Dependencies/ProjectButtons.js');
let localB = new projectButtons();
let EC = protractor.ExpectedConditions;
browser.ignoreSynchronization = true;

describe('Checking the login section of the project - name', function () {

    it('Step 1 - Name', function () {
        browser.get('https://google.com/');
        exampleName.eleminvis('element')
    });

    it('Step 2 - Name', function () {
        localB.auctionHouse('planner1');
    });

    it('Step 3 - Name', function () {
        exampleName.typeRandomText('text')
    });

});


