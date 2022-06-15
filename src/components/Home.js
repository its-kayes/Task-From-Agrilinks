import React from 'react';
import useData from '../hook/useData';
import NestedRoute from './NestedRoute';
import ShopDetails from './ShopDetails';

const Home = () => {

    let shop = useData();
    console.log(shop);

    return (
        <div>
            <div className='flex justify-center py-10'>

                <ShopDetails> </ShopDetails>

            </div>
            <div className=''>
                <NestedRoute> </NestedRoute>
            </div>
        </div>
    );
};

export default Home;