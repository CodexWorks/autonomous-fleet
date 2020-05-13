/*
  All function constants can be declared in this index and then they all can be imported w/o multiple
  lines added to the script dependency.
 */
const exampleName = require('./LogInvis.js');
const exampleNameLogistics = require('./Logistics.js.js');
const exampleNameAuctionHouse = require('./AuctionHouse.js');
const exampleNameTripPlanner = require('./TripPlanner.js.js');
module.exports = {
    exampleName,
    exampleNameLogistics,
    exampleNameAuctionHouse,
    exampleNameTripPlanner
};
