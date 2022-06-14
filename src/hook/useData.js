// import React, { useState } from 'react';
// import { useQuery } from 'react-query'
// import Loading from '../shared/Loading';

// const useData = () => {
//     let [shop, setShop] = useState();

//     let {data, isLoading} = useQuery('data', ()=> fetch('https://api.gramoday.net:8082/v1/user/bySlug?profileSlug=mmtradingco').then(res=> res.json()));

//     if(isLoading){
//         return <Loading> </Loading>
//     }

//     setShop(data);

//     return shop;
// };

// export default useData;





import React, { useEffect, useState } from 'react';

const useData = () => {

    let [shop, setShop] = useState();

    useEffect(() => {
        fetch('https://api.gramoday.net:8082/v1/user/bySlug?profileSlug=mmtradingco')
            .then(res => res.json())
            .then(data => setShop(data));
    }, [])
    return shop;
};

export default useData;