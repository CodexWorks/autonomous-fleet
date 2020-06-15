import axios from 'axios';

class GetService {

    fetchData() {
        axios('auction_house/')
        .then(result => {
            console.log(result.data);
            return result.data;
        })
    };
}

export default new GetService();