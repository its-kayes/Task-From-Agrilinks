import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const NestedRoute = () => {
    return (
        <div>
            <div className=' py-20 flex justify-evenly'>
                <p> <Link className='text-2xl ' to='business'>  Business  </Link></p>
                <p> <Link className='text-2xl ' to='review'>  Review  </Link></p>
                {/* <p> <Link className='bg-white rounded-3xl px-8 py-2 font-semibold shadow-lg shadow-white-500/100' to='pop' >POP-UNDER</Link> </p>
                <p> <Link className='bg-white rounded-3xl px-8 py-2 font-semibold shadow-lg shadow-white-500/100' to='banner' >BANNER AD</Link> </p>
                <p> <Link className='bg-white rounded-3xl px-8 py-2 font-semibold shadow-lg shadow-white-500/100' to='native' >NATIVE</Link> </p>
                <p> <Link className='bg-white rounded-3xl px-8 py-2 font-semibold shadow-lg shadow-white-500/100' to='skim' >SKIM</Link> </p> */}
            </div>

            <Outlet> </Outlet>

        </div>
    );
};

export default NestedRoute;
