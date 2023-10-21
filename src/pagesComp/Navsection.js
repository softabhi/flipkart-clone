import { React, useState, useEffect } from 'react'
import '../cssComp/Navsection.css'
import { BASE_URL } from '../helpers/backedurl'
import pic from '../assest/images.js'
import axios from 'axios'
// import { FcApproval } from 'react-icons/fc';

import { FaUserAlt, FaCartPlus, FaUserCircle, FaSearch } from "react-icons/fa";
// import LoginCom from './RegiCom.js';
// import { Modal, ModalBody, ModalHeader } from 'reactstrap'

import { Link } from 'react-router-dom'
import UserProfile from './UserProfile';
import SellerProfile from './SellerProfile';




const Navsection = ({ currentUser, setLogedUser, setSearchItem, currentLogedSeller, setLogedSeller, setLogoutSeller, setCurrProduId }) => {

    // const [modal, SetPopup] = useState(false);
    const [products, setProducts] = useState("");
    // const [filterProduct, setFilterProduct] = useState();

  


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

    // setCurrProduId("data")

    // const userInputItem = ()=>{

    // }

    // console.log(searchItem);

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



                            <Link to="/cartpage">
                                <h4 className='text-white ms-3'><FaCartPlus /></h4>

                            </Link>
                            <h5 className='text-white ms-2 mt-1 fw-bold'>Cart</h5>

                            <Link to="/sellerRegis">
                                {/* <h4  className='btn text-white ms-2 fw-bold'>{currentLogedSeller && currentLogedSeller._id ? <SellerProfile setLogoutSeller={setLogoutSeller} currentLogedSeller={currentLogedSeller}/> :"Become partner"}</h4> */}
                                {currentLogedSeller && currentLogedSeller._id ? <SellerProfile setLogoutSeller={setLogoutSeller} currentLogedSeller={currentLogedSeller} /> : <h5 className='btn text-white ms-4 fw-bold'>Become/Seller</h5>}

                            </Link>
                        </div>

                    </div>

                </div>
            </nav>
            {/* <LoginCom popupHandler={popupHandler}/> */}



        



        </>
    );
}

export default Navsection;



//     <Modal size='md'
//     isOpen={modal}
//     toggle={() => SetPopup(!modal)}
// >


//     <ModalHeader
//         toggle={() => SetPopup(!modal)}
//     >
//     </ModalHeader>
//     <ModalBody>
//         {/* <!-- Pills navs --> */}
//         <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
//             <li className="nav-item" role="presentation">
//                 <a className="nav-link active" id="tab-login" data-mdb-toggle="pill" href="#pills-login" role="tab"
//                     aria-controls="pills-login" aria-selected="true">Login</a>
//             </li>
//             <li className="nav-item" role="presentation">
//                 <a className="nav-link" id="tab-register" data-mdb-toggle="pill" href="#pills-register" role="tab"
//                     aria-controls="pills-register" aria-selected="false">Register</a>
//             </li>
//         </ul>
//         {/* <!-- Pills navs --> */}

//         {/* <!-- Pills content --> */}
//         <div className="tab-content">
//             <div className="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
//                 <form>
//                     <div className="text-center mb-3">
//                         <p>Sign in with:</p>
//                         <button type="button" className="btn btn-link btn-floating mx-1">
//                             <i className="fab fa-facebook-f"></i>
//                         </button>

//                         <button type="button" className="btn btn-link btn-floating mx-1">
//                             <i className="fab fa-google"></i>
//                         </button>

//                         <button type="button" className="btn btn-link btn-floating mx-1">
//                             <i className="fab fa-twitter"></i>
//                         </button>

//                         <button type="button" className="btn btn-link btn-floating mx-1">
//                             <i className="fab fa-github"></i>
//                         </button>
//                     </div>

//                     <p className="text-center">or:</p>

//                     {/* <!-- Email input --> */}
//                     {/* value={login.email} */}
//                     <div className="form-outline mb-4">
//                         <input type="email" id="loginName" name='email' value={userLogin.email} onChange={loginHandler} className="form-control" />
//                         <label className="form-label" for="loginName">Email or username</label>
//                     </div>

//                     {/* <!-- Password input --> */}
//                     <div className="form-outline mb-4">
//                         <input type="password" id="loginPassword" name='password' value={userLogin.password} onChange={loginHandler} className="form-control" />
//                         <label className="form-label" for="loginPassword">Password</label>
//                     </div>

//                     {/* <!-- 2 column grid layout --> */}
//                     <div className="row mb-4">
//                         <div className="col-md-6 d-flex justify-content-center">
//                             {/* <!-- Checkbox --> */}
//                             <div className="form-check mb-3 mb-md-0">
//                                 <input className="form-check-input" type="checkbox" value="" id="loginCheck" checked />
//                                 <label className="form-check-label" for="loginCheck"> Remember me </label>
//                             </div>
//                         </div>

//                         <div className="col-md-6 d-flex justify-content-center">
//                             {/* <!-- Simple link --> */}
//                             <a href="#!">Forgot password?</a>
//                         </div>
//                     </div>

//                     {/* <!-- Submit button --> */}
//                     <button type="submit" onClick={login} className="btn btn-primary btn-block mb-4">Sign in</button>

//                     {/* <!-- Register buttons --> */}
//                     <div className="text-center">
//                         <p>Not a member? <a href="#!">Register</a></p>
//                     </div>
//                 </form>
//             </div>
//             <div className="tab-pane fade" id="pills-register" role="tabpanel" aria-labelledby="tab-register">
//                 <form onSubmit={userRegisterHandler}>

//                     <div className="text-center mb-3">
//                         <p>Sign up with:</p>
//                         <button type="button" className="btn btn-link btn-floating mx-1">
//                             <i className="fab fa-facebook-f"></i>
//                         </button>

//                         <button type="button" className="btn btn-link btn-floating mx-1">
//                             <i className="fab fa-google"></i>
//                         </button>

//                         <button type="button" className="btn btn-link btn-floating mx-1">
//                             <i className="fab fa-twitter"></i>
//                         </button>

//                         <button type="button" className="btn btn-link btn-floating mx-1">
//                             <i className="fab fa-github"></i>
//                         </button>
//                     </div>

//                     <p className="text-center">or:</p>

//                     {/* <!-- Name input --> */}
//                     <div className="form-outline mb-4">
//                         <input type="text" id="registerName" name='name' value={user.name} className="form-control" onChange={changeHandler} />
//                         <label className="form-label" for="registerName">Name</label>
//                     </div>

//                     {/* <!-- Username input --> */}
//                     <div className="form-outline mb-4">
//                         <input type="text" id="registerUsername" name='userName' value={user.userName} className="form-control" onChange={changeHandler} />
//                         <label className="form-label" for="registerUsername">Username</label>
//                     </div>

//                     {/* <!-- Email input --> */}
//                     <div className="form-outline mb-4">
//                         <input type="email" id="registerEmail" name='email' value={user.email} className="form-control" onChange={changeHandler} />
//                         <label className="form-label" for="registerEmail">Email</label>
//                     </div>

//                     {/* <!-- Password input --> */}
//                     <div className="form-outline mb-4">
//                         <input type="password" id="registerPassword" name='password' value={user.password} className="form-control" onChange={changeHandler} />
//                         <label className="form-label" for="registerPassword">Password</label>
//                     </div>

//                     {/* <!-- Repeat Password input --> */}
//                     <div className="form-outline mb-4">
//                         <input type="password" id="registerRepeatPassword" name='rePassword' value={user.repassword} className="form-control" onChange={changeHandler} />
//                         <label className="form-label" for="registerRepeatPassword">Repeat password</label>
//                     </div>

//                     {/* <!-- Checkbox --> */}
//                     <div className="form-check d-flex justify-content-center mb-4">
//                         <input className="form-check-input me-2" type="checkbox" value="" id="registerCheck" checked
//                             aria-describedby="registerCheckHelpText" />
//                         <label className="form-check-label" for="registerCheck">
//                             I have read and agree to the terms
//                         </label>
//                     </div>

//                     {/* <!-- Submit button --> */}
//                     <button type="submit" onClick={userRegisterHandler} className="btn btn-primary btn-block mb-3">Sign in</button>
//                 </form>
//             </div>
//         </div>
//         {/* <!-- Pills content --> */}
//     </ModalBody>

// </Modal>