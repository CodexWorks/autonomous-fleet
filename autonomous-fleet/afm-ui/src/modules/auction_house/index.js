import React, {useEffect} from 'react';
import DataService from '../../services/DataService'

let text = '';
const AuctionHouse = () => {
    useEffect(() => {
        DataService.getAuctionHouseData();
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
