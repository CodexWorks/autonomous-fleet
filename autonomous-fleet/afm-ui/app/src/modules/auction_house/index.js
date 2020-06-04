import React, {useEffect} from 'react';
import axios from 'axios';

const text = ''
const AuctionHouse = () => {
     useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'auction_house/',
            );
              console.log(result.data);
              text = result.data;
            };

            fetchData();
     }, [])
    return (<div>{text}</div>)

};



export default {
    routeProps: {
        path: '/auction_house',
        component: AuctionHouse
    },
    name: 'AuctionHouse',
}
