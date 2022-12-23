
import './App.css';
import { products } from './boxdata';
import BoxInfo from './components/BoxInfo';
import MyBtn from './components/MyBtn';

function App() {

  return (
    <div className="App" style={{backgroundColor:'pink'}}>
      <h1 style={{fontSize:'40px', textAlign:'center'}}>Danh sach san pham</h1>
      <div>
      {products.map((product,index) => (
        <div key={product.name} style={{width: '80%', display:'flex', flexDirection:'column', alignItems:'center', position:'relative'}}>
        <BoxInfo key={product.id} id={product.id} src={product.image} desc={product.desc} name={product.name} price={product.price}/>
        <MyBtn parent={product.id}/>
        </div>
      ))}
        
      </div>
      
      
    </div>
  );
}

export default App;
