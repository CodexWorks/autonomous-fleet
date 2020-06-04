import React, {useEffect} from 'react';
import axios from 'axios';

const LogisticsERP = () => {
     useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'logistics_erp/example1',
            );
              console.log(result.data);
            };

            fetchData();
     }, [])
    return (<div>Logistics ERP Module</div>)

};

export default {
    routeProps: {
        path: '/logistics_erp',
        component: LogisticsERP
    },
    name: 'LogisticsERP',
}
