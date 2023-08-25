import './App.css';
import BodyWrapper from './Component/BodyWrapper/bodyWrapper';
import Categories from './Component/Categories/categories';
import Navbar from './Component/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='d-none d-md-block'><Categories /></div>
      <BodyWrapper />
    </div>
  );
}

export default App;
