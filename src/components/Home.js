import React from 'react';
import useData from '../hook/useData';
 
const Home = () => {

    let shop = useData();
    console.log(shop);

    return (
        <div>
            <h1> kaj kore {shop?.name} </h1>
        </div>
    );
};

export default Home;