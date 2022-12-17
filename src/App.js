


import { Routes, Route} from 'react-router-dom';
import './App.css';

import Navsection from './pagesComp/Navsection';
import Home from './pagesComp/Home';
import Product from './pagesComp/Product';
function App() {
  return (
   <>
    {/* <ul>
      <li><Link to="/">hpoo</Link></li>
      <li><Link to="/product">produc</Link></li>
    </ul> */}
   <Navsection/>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/product" element={<Product/>}/>
   </Routes>
     {/* <h2>hello </h2>
      */}
   </>
  );
}

export default App;
