let typeText = function(message){
    browser.controlFlow().execute(function(){
        console.log(message);
    });
};

let invisiButton = function(elem){
    let EC = protractor.ExpectedConditions;
    browser.wait(EC.invisibilityOf(elem), browser.params.defaultTimeoutInterval);
};

module.exports = {
    typeText,
    invisiButton,
};
