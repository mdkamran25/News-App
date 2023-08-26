import React from 'react';
import './App.css';
import BodyWrapper from './Component/BodyWrapper/bodyWrapper';
import Categories from './Component/Categories/categories';
import Navbar from './Component/Navbar/Navbar';
import Loader from './Component/LazyLoading/loader';
const Home = React.lazy(() => import('./Component/BodyWrapper/bodyWrapper'))

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='d-none d-md-block'><Categories /></div>
      <React.Suspense fallback={<Loader />}>
        <Home />
      </React.Suspense>
    </div>
  );
}

export default App;
