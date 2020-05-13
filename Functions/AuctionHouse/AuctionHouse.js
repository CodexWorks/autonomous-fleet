let writeText = function(message){
    browser.controlFlow().execute(function(){
        console.log(message);
    });
};

let noButton = function(elem){
    let EC = protractor.ExpectedConditions;
    browser.wait(EC.invisibilityOf(elem), browser.params.defaultTimeoutInterval);
};

module.exports = {
    writeText,
    noButton,
};
