import axios from 'axios';

class DataService {

    getAuctionHouseData() {
        axios('auction_house/')
        .then(result => {
            console.log(result.data);
            return result.data;
        })
    };
}

export default new DataService();