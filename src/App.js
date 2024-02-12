
import { Routes, Route } from 'react-router-dom';
import './App.css';

import { Provider } from 'react-redux';

import Navsection from './pagesComp/Navsection';
import Home from './pagesComp/Home';
// import Product from './pagesComp/Product';
import ProducDetails from './pagesComp/ProducDetails';
import Addcart from './pagesComp/Addcart'
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
import store from './globalStore/MainStore';
import Ordersummarypage from './pagesComp/orderpage/orderSummaryPage';
import Orders from './adminDashboard/customerOrders/Orders';






export const globleInfo = createContext();

function App() {

  const [logedUser, setLogedUser] = useState();
  // const [logout, setLogout] = useState();
  const [logedSeller, setLogedSeller] = useState();
  // const [logoutSeller, setLogoutSeller] = useState();
  const [userId, setUserId] = useState("");
  const [searchItem, setSearchItem] = useState();
  const [addProduct, setCurrProduId] = useState();
  const [cartItems, setCartCount] = useState(0);
  // const [userIcon, setUserIcon] = useState();

  // setUserIcon()
  // console.log(currProduId)
  // console.log(logedSeller)  
  // setLogedUser(logout)


  const singleUserData = (id) => {
    setUserId(id)
  }
  return (

    
    <globleInfo.Provider value={{ singleUserData: singleUserData, singleUserId: userId, searchItem, addProduct, logedUser,logedSeller,cartItems }}>
    
      <>
      <Provider store={store}>


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


          <Route path="/SellerRegis" element={logedSeller && logedSeller._id ? <Dashboard  setLogoutSeller={setLogedSeller}/> : <SellerRegis setLogedSeller={setLogedSeller} />} />

          <Route path="/" element={[<Navsection currentUser={logedUser}
            // setLogout={setLogout} 
            setLogedUser={setLogedUser}
            setLogoutSeller={setLogedSeller}
            currentLogedSeller={logedSeller}
            setSearchItem={setSearchItem}
            cartCount={cartItems.length}

          />, <Home setCurrProduId={setCurrProduId} />]} />


          {/* <Route path="/sellerRegis" element={<SellerRegi/>} /> */}

          <Route path="/ordersummary" element={<Ordersummarypage/>} />
          <Route path="/orders" element={<Orders/>} />

          
          <Route path="/productDetails" element={<ProducDetails />} />
          <Route path="/cartpage" element={<Addcart setCartCount={setCartCount}/>} />

          {/* <Route path="/addproduct" element={<AddProduct/>} /> */}

          <Route path="/customers" element={<Customers />} />
          <Route path="/addProduct" element={<AddProduct />} />
          <Route path="/singleuser" element={<SingleUser />} />
          <Route path="/userEdit" element={<UserEdition />} />
          <Route path="/inventory" element={<Inventory />} />



        {/* adime routes */}
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>

        </Provider>
      </>
    </globleInfo.Provider>
  );
}

export default App;
