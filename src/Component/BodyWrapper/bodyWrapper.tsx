import React from 'react';
import './bodyWrapper.css'
import NewsAnimation from '../NewsAnimation/NewsAnimation';
// import Headline from '../Headlines/headline';
import Advertisement from '../Advertisement/advertisement';
import CategoriesWiseNews from '../CategorieWiseNews/categoriesWiseNews';
import Loader from '../LazyLoading/loader';
const Headline = React.lazy(() => import('../Headlines/headline'))
function BodyWrapper() {
    return (
        <>
            <div className='container-fluid px-0'>
                <div className='row g-0'>
                    <div className='col-12 col-md-10'>
                        <React.Suspense fallback={<Loader />}>
                            <Headline />
                        </React.Suspense>
                    </div>
                    <div className='col-2 d-none d-md-block advetisementHeight'>
                        <Advertisement />
                    </div>
                </div>
                <div className='row mx-1 g-0 d-flex justify-content-evenly'>
                    <div className='col-12 col-sm-6 col-md-4 mt-1 categoriesWiseNewsWrapper'>
                        <CategoriesWiseNews categorie="business" />
                    </div>
                    <div className='col-12 col-sm-6 col-md-4 d-md-none  mt-1'>
                        <Advertisement />
                    </div>
                    <div className='col-12 col-sm-6 col-md-4 mt-1 categoriesWiseNewsWrapper'>
                        <CategoriesWiseNews categorie="health" />
                    </div>
                    
                    <div className='col-12 col-sm-6 col-md-4 mt-1 categoriesWiseNewsWrapper'>
                        <CategoriesWiseNews categorie="entertainment" />
                    </div>
                    <div className='col-12 col-sm-6 col-md-4 mt-1 categoriesWiseNewsWrapper'>
                        <CategoriesWiseNews categorie="science" />
                    </div>
                    <div className='col-12 col-sm-6 col-md-4 d-md-none mt-1'>
                        <Advertisement />
                    </div>
                    <div className='col-12 col-sm-6 col-md-4 mt-1 categoriesWiseNewsWrapper'>
                        <CategoriesWiseNews categorie="sports" />
                    </div>
                    <div className='col-12 col-sm-6 col-md-4 mt-1 categoriesWiseNewsWrapper'>
                        <CategoriesWiseNews categorie="technology" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default BodyWrapper;
