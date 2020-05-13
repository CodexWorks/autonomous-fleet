let typeRandomText = function(message){
    browser.controlFlow().execute(function(){
        console.log(message);
    });
};

let invisib = function(elem){
    let EC = protractor.ExpectedConditions;
    browser.wait(EC.invisibilityOf(elem), browser.params.defaultTimeoutInterval);
};

module.exports = {
    typeRandomText,
    invisib,
};
