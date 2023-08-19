import React from 'react';
import NewsAnimation from '../NewsAnimation/NewsAnimation';
import Headline from '../Headlines/headline';
import Advertisement from '../Advertisement/advertisement';

function BodyWrapper() {
    return ( 
        <>
            <div className='container-fluid px-0'>
                <div className='row g-0'>
                    <div className='col-10'>
                        <Headline />
                    </div>
                    <div className='col-2  advetisementHeight'>
                        <Advertisement />
                    </div>
                </div>
            </div>
        </>
     );
}

export default BodyWrapper;
