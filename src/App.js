
import { Routes, Route } from 'react-router-dom';
import './App.css';

import Navsection from './pagesComp/Navsection';
import Home from './pagesComp/Home';
// import Product from './pagesComp/Product';
import ProducDetails from './pagesComp/ProducDetails';
import Addcart from './assest/productComponet/Addcart'
import RegiCom from './pagesComp/RegiCom';
import { useState, createContext } from 'react';
import UserProfile from './pagesComp/UserProfile';
import Dashboard from './adminDashboard/Dashboard';
import SellerRegi from './pagesComp/SellerRegi';
import AddProduct from './adminDashboard/AddProduct';
import UserRegistration from './pagesComp/userregistration/UserRegistration';
import SellerRegis from './pagesComp/sellerregistration/SellerRegis';
import Customers from './adminDashboard/customers/Customers';
import SingleUser from './adminDashboard/singleUserPage/SingleUser';
import UserEdit from './adminDashboard/userEditpage/UserEdit';
import Inventory from './adminDashboard/inventorypage/Inventory';
import UserEdition from './adminDashboard/usersedit/UserEdition';

export const globleInfo = createContext();

function App() {

  const [logedUser, setLogedUser] = useState();
  // const [logout, setLogout] = useState();
  const [logedSeller, setLogedSeller] = useState();
  const [logoutSeller, setLogoutSeller] = useState();
  const [userId, setUserId] = useState("");
  const [searchItem, setSearchItem] = useState();
  const [addProduct, setCurrProduId] = useState();
  // const [userIcon, setUserIcon] = useState();

  // setUserIcon()
  // console.log(currProduId)
  // console.log(logoutSeller)  
  // setLogedUser(logout)


  const singleUserData = (id) => {
    setUserId(id)
  }
  return (


    <globleInfo.Provider value={{ singleUserData: singleUserData, singleUserId: userId, searchItem,addProduct }}>
      <>
        {/* <UserProfile/> */}
        {/* <LoginCom/> */}
        {/* <Dashboard/> */}
        <UserEdit />
        <Routes>


          <Route path="/loginRegise" element={logedUser && logedUser._id ? [<Navsection currentUser={logedUser}

            setLogedUser={setLogedUser}
            setLogoutSeller={setLogedSeller}
            currentLogedSeller={logedSeller}
          />, <Home />] : <UserRegistration setLogedUser={setLogedUser} />} />


          <Route path="/SellerRegis" element={logedSeller && logedSeller._id ? <Dashboard /> : <SellerRegis setLogedSeller={setLogedSeller} />} />       
          
           <Route path="/" element={[<Navsection currentUser={logedUser}
            // setLogout={setLogout} 
            setLogedUser={setLogedUser}
            setLogoutSeller={setLogedSeller}
            currentLogedSeller={logedSeller}
            setSearchItem={setSearchItem}
            
          />, <Home setCurrProduId={setCurrProduId} />]} />


          {/* <Route path="/sellerRegis" element={<SellerRegi/>} /> */}
          {/* <Route path="/" element={<Home />} /> */}
          {/* <Route path="/product" element={<Product />} /> */}


          <Route path="/productDetails" element={<ProducDetails />} />
          <Route path="/cartpage" element={<Addcart />} />

          {/* <Route path="/addproduct" element={<AddProduct/>} /> */}

          <Route path="/customers" element={<Customers />} />
          <Route path="/addProduct" element={<AddProduct />} />
          <Route path="/singleuser" element={<SingleUser />} />
          <Route path="/userEdit" element={<UserEdition />} />
          <Route path="/inventory" element={<Inventory />} />



        /* adime routes */
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
       
      </>
    </globleInfo.Provider>
  );
}

export default App;
