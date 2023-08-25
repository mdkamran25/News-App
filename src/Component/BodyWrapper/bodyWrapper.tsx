import React from 'react';
import './bodyWrapper.css'
import NewsAnimation from '../NewsAnimation/NewsAnimation';
import Headline from '../Headlines/headline';
import Advertisement from '../Advertisement/advertisement';
import CategoriesWiseNews from '../CategorieWiseNews/categoriesWiseNews';

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
                <div className='row g-0 d-flex justify-content-evenly'>
                    <div className='col-12 col-sm-5 col-md-4 mt-2 categoriesWiseNewsWrapper'>
                        <CategoriesWiseNews categorie="business" />
                    </div>
                    <div className='col-12 col-sm-5 col-md-4 mt-2 categoriesWiseNewsWrapper'>
                        <CategoriesWiseNews categorie="health" />
                    </div>
                    <div className='col-12 col-sm-5 col-md-4 mt-2 categoriesWiseNewsWrapper'>
                        <CategoriesWiseNews categorie="entertainment" />
                    </div>
                    <div className='col-12 col-sm-5 col-md-4 mt-2 categoriesWiseNewsWrapper'>
                        <CategoriesWiseNews categorie="science" />
                    </div>
                    <div className='col-12 col-sm-5 col-md-4 mt-2 categoriesWiseNewsWrapper'>
                        <CategoriesWiseNews categorie="sports" />
                    </div>
                    <div className='col-12 col-sm-5 col-md-4 mt-2 categoriesWiseNewsWrapper'>
                        <CategoriesWiseNews categorie="technology" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default BodyWrapper;
