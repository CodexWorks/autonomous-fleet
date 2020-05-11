(function() {
    let projectButtons = function() {
        let localB = this;
        localB.auctionHouse = function(b){
            switch(b){
                case 'ahbutton1':
                    return element.all(by.className('primary')).get(first);
               }
        };
        localB.logisticsERP  = function(b){
            switch(b){
                case 'erp1':
                    return element.all(by.id('primary')).get(first);
            }
        };
        localB.tripPlanner  = function (b){
            switch (b) {
                case 'planner2':
                    return element.all(by.css('primary')).get(last);
            }
        };
    };

    module.exports = function() {
        return new projectButtons();
    };
}());
