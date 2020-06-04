import React, {useEffect} from 'react';
import axios from 'axios';

const AuctionHouse = () => {
     useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'auction_house/example2',
            );
              console.log(result.data);
            };

            fetchData();
     }, [])
    return (<div>Auction House Module</div>)

};



export default {
    routeProps: {
        path: '/auction_house',
        component: AuctionHouse
    },
    name: 'AuctionHouse',
}
