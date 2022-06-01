import './App.scss';
import ProductImage from './components/ProductImage';
import data from './mock/data.json';
function App() {
  return (
    <div className="app">
      <h2>DIABLO APPAREL</h2>
      <div className='carousel-container'>
        {data.images.map((item, index) => {
          return <ProductImage key={index} item={item} />
        })}
      </div>
      <h2>DIABLO APPAREL ENHANCED</h2>
      <div className='carousel-container'>
        {data.images.sort(() => (Math.random() > 0.5) ? 2 : -1).map((item, index) => {
          return <ProductImage key={index} item={item} />
        })}
      </div>
    </div>
  );
}

export default App;
