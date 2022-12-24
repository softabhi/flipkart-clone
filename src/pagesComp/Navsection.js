import { React, useState } from 'react'
import pic from '../assest/images.js'
// import { FcApproval } from 'react-icons/fc';
import { FaUserAlt, FaCartPlus } from "react-icons/fa";
// import LoginCom from './LoginCom.js';
import { Modal, ModalBody, ModalHeader } from 'reactstrap'

import { Link } from 'react-router-dom'
const Navsection = () => {
    const [modal, SetPopup] = useState(false);
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-primary">
                <div className="container-fluid">

                    <div className="row">
                        <img src={pic.img16} alt="" className='img-fluid ms-lg-5 ms-sm-0' style={{ width: "8rem" }} />
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
                            <input className="form-control me-2" style={{ width: "40vw" }} type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-success me-5" type="submit">Search</button>
                        </form>

                        <div className="d-flex ms-3">
                            <h4 className='text-white me-2' ><FaUserAlt /></h4>
                            {/* <hp className='text-white ms-2 mt-1 fw-bold'  >Login/Sign</hp> */}
                            <button className='btn text-white ms-1 fw-bold' onClick={() => SetPopup(true)}>Login/Sign</button>

                           
                          
                            <Link to="/cartpage">
                            <h4 className='text-white ms-5'><FaCartPlus /></h4>
                            
                            </Link>
                            <hp className='text-white ms-2 mt-1 fw-bold'>Cart</hp>
                        </div>

                    </div>



                </div>
            </nav>


            <Modal size='md'
                isOpen={modal}
                toggle={() => SetPopup(!modal)}
            >


                <ModalHeader    
                    toggle={() => SetPopup(!modal)}
                >
                    </ModalHeader>
                    <ModalBody>
                    {/* <!-- Pills navs --> */}
                    <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
                        <li className="nav-item" role="presentation">
                            <a className="nav-link active" id="tab-login" data-mdb-toggle="pill" href="#pills-login" role="tab"
                                aria-controls="pills-login" aria-selected="true">Login</a>
                        </li>
                        <li className="nav-item" role="presentation">
                            <a className="nav-link" id="tab-register" data-mdb-toggle="pill" href="#pills-register" role="tab"
                                aria-controls="pills-register" aria-selected="false">Register</a>
                        </li>
                    </ul>
                    {/* <!-- Pills navs --> */}

                    {/* <!-- Pills content --> */}
                    <div className="tab-content">
                        <div className="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
                            <form>
                                <div className="text-center mb-3">
                                    <p>Sign in with:</p>
                                    <button type="button" className="btn btn-link btn-floating mx-1">
                                        <i className="fab fa-facebook-f"></i>
                                    </button>

                                    <button type="button" className="btn btn-link btn-floating mx-1">
                                        <i className="fab fa-google"></i>
                                    </button>

                                    <button type="button" className="btn btn-link btn-floating mx-1">
                                        <i className="fab fa-twitter"></i>
                                    </button>

                                    <button type="button" className="btn btn-link btn-floating mx-1">
                                        <i className="fab fa-github"></i>
                                    </button>
                                </div>

                                <p className="text-center">or:</p>

                                {/* <!-- Email input --> */}
                                <div className="form-outline mb-4">
                                    <input type="email" id="loginName" className="form-control" />
                                    <label className="form-label" for="loginName">Email or username</label>
                                </div>

                                {/* <!-- Password input --> */}
                                <div className="form-outline mb-4">
                                    <input type="password" id="loginPassword" className="form-control" />
                                    <label className="form-label" for="loginPassword">Password</label>
                                </div>

                                {/* <!-- 2 column grid layout --> */}
                                <div className="row mb-4">
                                    <div className="col-md-6 d-flex justify-content-center">
                                        {/* <!-- Checkbox --> */}
                                        <div className="form-check mb-3 mb-md-0">
                                            <input className="form-check-input" type="checkbox" value="" id="loginCheck" checked />
                                            <label className="form-check-label" for="loginCheck"> Remember me </label>
                                        </div>
                                    </div>

                                    <div className="col-md-6 d-flex justify-content-center">
                                        {/* <!-- Simple link --> */}
                                        <a href="#!">Forgot password?</a>
                                    </div>
                                </div>

                                {/* <!-- Submit button --> */}
                                <button type="submit" className="btn btn-primary btn-block mb-4">Sign in</button>

                                {/* <!-- Register buttons --> */}
                                <div className="text-center">
                                    <p>Not a member? <a href="#!">Register</a></p>
                                </div>
                            </form>
                        </div>
                        <div className="tab-pane fade" id="pills-register" role="tabpanel" aria-labelledby="tab-register">
                            <form>
                                <div className="text-center mb-3">
                                    <p>Sign up with:</p>
                                    <button type="button" className="btn btn-link btn-floating mx-1">
                                        <i className="fab fa-facebook-f"></i>
                                    </button>

                                    <button type="button" className="btn btn-link btn-floating mx-1">
                                        <i className="fab fa-google"></i>
                                    </button>

                                    <button type="button" className="btn btn-link btn-floating mx-1">
                                        <i className="fab fa-twitter"></i>
                                    </button>

                                    <button type="button" className="btn btn-link btn-floating mx-1">
                                        <i className="fab fa-github"></i>
                                    </button>
                                </div>

                                <p className="text-center">or:</p>

                                {/* <!-- Name input --> */}
                                <div className="form-outline mb-4">
                                    <input type="text" id="registerName" className="form-control" />
                                    <label className="form-label" for="registerName">Name</label>
                                </div>

                                {/* <!-- Username input --> */}
                                <div className="form-outline mb-4">
                                    <input type="text" id="registerUsername" className="form-control" />
                                    <label className="form-label" for="registerUsername">Username</label>
                                </div>

                                {/* <!-- Email input --> */}
                                <div className="form-outline mb-4">
                                    <input type="email" id="registerEmail" className="form-control" />
                                    <label className="form-label" for="registerEmail">Email</label>
                                </div>

                                {/* <!-- Password input --> */}
                                <div className="form-outline mb-4">
                                    <input type="password" id="registerPassword" className="form-control" />
                                    <label className="form-label" for="registerPassword">Password</label>
                                </div>

                                {/* <!-- Repeat Password input --> */}
                                <div className="form-outline mb-4">
                                    <input type="password" id="registerRepeatPassword" className="form-control" />
                                    <label className="form-label" for="registerRepeatPassword">Repeat password</label>
                                </div>

                                {/* <!-- Checkbox --> */}
                                <div className="form-check d-flex justify-content-center mb-4">
                                    <input className="form-check-input me-2" type="checkbox" value="" id="registerCheck" checked
                                        aria-describedby="registerCheckHelpText" />
                                    <label className="form-check-label" for="registerCheck">
                                        I have read and agree to the terms
                                    </label>
                                </div>

                                {/* <!-- Submit button --> */}
                                <button type="submit" className="btn btn-primary btn-block mb-3">Sign in</button>
                            </form>
                        </div>
                    </div>
                    {/* <!-- Pills content --> */}
                    </ModalBody>
                
            </Modal>
            {/* <LoginCom modal={modal} /> */}
        </>
    )
}

export default Navsection;