


import { Routes, Route} from 'react-router-dom';
import './App.css';

import Navsection from './pagesComp/Navsection';
import Home from './pagesComp/Home';
import Product from './pagesComp/Product';
import ProducDetails from './pagesComp/ProducDetails';
import Addcart from './assest/productComponet/Addcart'
function App() {
  return (
   <>
   
   <Navsection/>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/product" element={<Product/>}/>
    <Route path="/productDetails" element={<ProducDetails/>}/>
    <Route path="/cartpage" element={<Addcart/>}/>
   </Routes>
     {/* <h2>hello </h2>
      */}
   </>
  );
}

export default App;
