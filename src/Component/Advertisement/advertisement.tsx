import React from 'react'
import './advertisement.css'
import advertisementImage from '../../assets/advertisement.jpg'
const Advertisement = () => {
    return (
        <div>
            <div className='advertisementOverlaySlide position-relative ps-1'>
                <img className='w-100 advertisementImage'  src={advertisementImage} alt='Advertisement' />
                <div>
                    <h2>Advetisement Section</h2>
                    <p>This section is only for advertisement purpose.</p>
                </div>
            </div>
        </div>
    )
}

export default Advertisement
