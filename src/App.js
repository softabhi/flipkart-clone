
import { Routes, Route } from 'react-router-dom';
import './App.css';

import Navsection from './pagesComp/Navsection';
import Home from './pagesComp/Home';
import Product from './pagesComp/Product';
import ProducDetails from './pagesComp/ProducDetails';
import Addcart from './assest/productComponet/Addcart'
import RegiCom from './pagesComp/RegiCom';
import { useState } from 'react';
import UserProfile from './pagesComp/UserProfile';
import Dashboard from './adminDashboard/Dashboard';
import SellerRegi from './pagesComp/SellerRegi';
import AddProduct from './adminDashboard/AddProduct';

function App() {

  const [logedUser, setLogedUser] = useState();
  // const [logout, setLogout] = useState();
  const [logedSeller, setLogedSeller] = useState();
  const [logoutSeller, setLogoutSeller] = useState();
  // const [userIcon, setUserIcon] = useState();

  // setUserIcon()
  // console.log(logout,12)
  console.log(logoutSeller)
  // setLogedUser(logout)
  return (
    <>

      <Navsection currentUser={logedUser} 
      // setLogout={setLogout} 
      setLogedUser={setLogedUser}
      setLogoutSeller={setLogedSeller}
      currentLogedSeller={logedSeller}
      />
      {/* <UserProfile/> */}
      {/* <LoginCom/> */}
      {/* <Dashboard/> */}
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/loginRegise" element={logedUser && logedUser._id ? <Home/> : <RegiCom setLogedUser={setLogedUser} />}/> 
        <Route path="/SellerRegis" element={logedSeller && logedSeller._id ? <Dashboard/> : <SellerRegi setLogedSeller={setLogedSeller} />}/> 
        <Route path="/" element={<Home/>}/> 
        {/* <Route path="/sellerRegis" element={<SellerRegi/>} /> */}
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/product" element={<Product />} />
        <Route path="/productDetails" element={<ProducDetails />} />
        <Route path="/cartpage" element={<Addcart />} />
        <Route path="/addproduct" element={<AddProduct/>} />
        
      </Routes>
      {/* <h2>hello </h2>
      */}
    </>
  );
}

export default App;
