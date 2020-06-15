import React, {useEffect} from 'react';
import GetService from '../../services/GetService'

let text = '';
const AuctionHouse = () => {
    useEffect(() => {
        GetService.fetchData();
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
