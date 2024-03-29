import React, { useState, useEffect } from 'react'
import '../cssComp/Navsection.css'
import { BASE_URL } from '../helpers/backedurl'
import pic from '../assest/images.js'
import axios from 'axios'
// import { FcApproval } from 'react-icons/fc';

import { FaUserAlt, FaCartPlus, FaUserCircle, FaSearch } from "react-icons/fa";
// import LoginCom from './RegiCom.js';
// import { Modal, ModalBody, ModalHeader } from 'reactstrap'

import { Link, useNavigate } from 'react-router-dom'
import UserProfile from './UserProfile';
import SellerProfile from './SellerProfile';
import { useSelector } from 'react-redux/es/hooks/useSelector.js'






const Navsection = ({cartCount, currentUser, setLogedUser, setSearchItem, currentLogedSeller, setLogedSeller, setLogoutSeller, setCurrProduId }) => {

    // const [modal, SetPopup] = useState(false);
    const [products, setProducts] = useState("");
    const navigate = useNavigate()
//    const cartCount = useSelector(state=>state.cart);

   

    const navigatetoPage = () => {
        console.log("mama")

        if (currentUser && currentUser._id) {
            navigate('/cartpage')
        } else {
            navigate('/loginRegise')
            // navigate('/cartpage')
        }
    }


    const fetchingData = () => {
        fetch(`${BASE_URL}/api/v2/products`)
            .then((response) => {
                // console.log(response,11)
                return response.json();
            })
            .then(data => {
                setProducts(data)
                // setFilterProduct(data);
                setSearchItem(data)
                // console.log(data,10)

            })
    }

    useEffect(() => {
        //  const feathData = async ()=>{
        //     const data = await axios.get("http://localhost:5001/api/v1/products")
        //     .then((res)=>{
        //           setProducts(res.data)

        //     })
        //  }
        //  feathData();
        fetchingData();
    }, [])


    const userSearchItem = (e) => {
        setSearchItem(products.filter(f => f.productName.toLowerCase().includes(e.target.value)))
    }

  

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-primary" >
                <div className="container-fluid" >

                    <div className="row">
                        <img src={pic.img16} alt="" className='img-fluid ms-lg-1 ms-sm-0' style={{ width: "8rem" }} />
                    </div>




                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>


                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-5 mb-2 mb-lg-0 ms-3 ms-sm">
                            <li className="nav-item">

                                <Link to="/" className='nav-link text-white'>Home</Link>
                            </li>

                            <li className="nav-item dropdown">

                                <Link to="/product" className='nav-link dropdown-toggle text-white' role="button" data-bs-toggle="dropdown" aria-expanded="false">Product</Link>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">

                                <Link to="/product" className="nav-link text-white">Offer</Link>
                            </li>

                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2"
                                style={{ width: "35vw" }} type="search"
                                placeholder="Search" aria-label="Search"
                                onChange={userSearchItem}

                            />
                            <button className="btn btn-success me-5" type="submit"><FaSearch /></button>
                        </form>

                        <div className="d-flex ms">

                            <h4 className='text-white me-2'>{currentUser && currentUser._id ? <UserProfile setLogout={setLogedUser} currentUser={currentUser} /> : <FaUserAlt />}</h4>

                            <Link to="/loginRegise" className=''>
                                <button className='btn text-white ms-5 fw-bold' >{currentUser && currentUser._id ? currentUser.name : "Login/Sign"}</button>
                            </Link>




                            <button className='cart_btn' onClick={() => navigatetoPage()}>

                                <div>
                                    <i class="fas fa-shopping-cart "></i>
                                    <span
                                        class="badge bg-danger cart_count"
                                       >{currentUser ? cartCount : "0"}</span>
                                </div>
                            </button>
                            {/* <Link to="/cartpage">
                                <h4 className='text-white ms-3'><FaCartPlus /></h4>

                            </Link>
                            <h5 className='text-white ms-2 mt-1 fw-bold'>Cart</h5> */}

                            <Link to="/sellerRegis">
                                {/* <h4  className='btn text-white ms-2 fw-bold'>{currentLogedSeller && currentLogedSeller._id ? <SellerProfile setLogoutSeller={setLogoutSeller} currentLogedSeller={currentLogedSeller}/> :"Become partner"}</h4> */}
                                {currentLogedSeller && currentLogedSeller._id ? <SellerProfile  currentLogedSeller={currentLogedSeller} /> : <h5 className='btn text-white ms-4 fw-bold'>Become/Seller</h5>}

                            </Link>
                        </div>

                    </div>

                </div>
            </nav >
            {/* <LoginCom popupHandler={popupHandler}/> */}







        </>
    );
}

export default Navsection;



