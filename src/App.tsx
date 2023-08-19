import './App.css';
import BodyWrapper from './Component/BodyWrapper/bodyWrapper';
import Categories from './Component/Categories/categories';
import Navbar from './Component/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Categories />
      <BodyWrapper />
    </div>
  );
}

export default App;
