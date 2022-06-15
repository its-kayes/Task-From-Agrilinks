import React from 'react';
import useData from '../hook/useData';

const ShopDetails = () => {
    let shop = useData();

    return (
        <div>

            <div className='flex gap-8'>
                <div>
                    <i class="fa-solid fa-circle-user text-8xl "></i>
                </div>
                <div>
                    <div>
                        <p className='text-2xl font-bold'> {shop?.name} </p>
                        <p> {shop?.loclevel3Name}, {shop?.loclevel2Name} </p>
                        <p className='font-sans'> Speaks English </p>
                    </div>
                    <div className='flex gap-3 my-3'>
                        <p className='px-3 py-1 bg-[#01A39D] rounded-3xl text-white'> <i class="fa-solid fa-user-plus"></i> Connect </p>
                        <p className='px-3 py-1 rounded-3xl border border-[#01A39D] text-[#01A39D] '> <i class="fa-solid fa-user-plus"></i> Connect </p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ShopDetails;