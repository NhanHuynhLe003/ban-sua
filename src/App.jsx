
import './App.css';
import { products } from './boxdata';
import BoxInfo from './components/BoxInfo';

function App() {
  console.log(products)
  return (
    <div className="App" style={{backgroundColor:'pink'}}>
      <h1 style={{fontSize:'40px', textAlign:'center'}}>Danh sach san pham</h1>
      <div style={{width: '80%', display:'flex', flexDirection:'column', alignItems:'center'}}>
      {products.map((product,index) => (
        <BoxInfo id={product.id} src={product.image} desc={product.desc} name={product.name} price={product.price}/>
      ))}
      </div>
      
      
    </div>
  );
}

export default App;
