/*
*   Log that waits for a promise to be solved before the output
*   Usage: declare the {helper} constant and call the function - examples.console(message);
 */

let consoleNot = function(message){
    browser.controlFlow().execute(function(){
        console.log(message);
    });
};


/*
*   Wait for the invisibility of the specified element
*   Usage: declare the {helper} constant and call the function - examples.eleminvis(elem);
 */
let eleminvis = function(elem){
    let EC = protractor.ExpectedConditions;
    browser.wait(EC.invisibilityOf(elem), browser.params.defaultTimeoutInterval);
};

module.exports = {
    consoleNot,
    eleminvis,
};
