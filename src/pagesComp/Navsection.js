import React from 'react'
import pic from '../assest/images.js'

import { Link } from 'react-router-dom'
const Navsection = () => {
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
                            <input className="form-control me-2" style={{ width: "40vw" }}  type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navsection;