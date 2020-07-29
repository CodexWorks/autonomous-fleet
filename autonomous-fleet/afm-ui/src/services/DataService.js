import axios from 'axios';

// endpoints

class DataService {
  getAuctionHouseData() {
    axios('auction_house/').then((result) => {
      console.log(result.data);
      return result.data;
    });
  }
}

export default new DataService();
