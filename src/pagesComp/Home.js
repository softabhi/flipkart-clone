import React from 'react'
import { Link } from 'react-router-dom'
import '../cssComp/HomePage.css';
// import '../cssComp/LoginCom.css'
import ProductComp from './ProductComp.js';
// import HomeProdu from '../assest/productComponet/HomeProduCom';
import pic from '../assest/images.js';
import Footer from './Footer';
// import LoginCom from './LoginCom';
const Home = ({setCurrProduId}) => {

  // setCurrProduId=("mona")
  // setCurrProduId("dato")
  return (
    <>
      <div className="container-fluid text-center">
        <div className="row">
          <div className="col-sm-1"></div>
          <div className="col-sm-10">

            <div className="row">
              <div className="col-sm-2 col-lg-2 col-md-3 ">
                <Link>
                  <img className="img-fluid" src={pic.im1} alt="" />

                  <div className="col list-cotegary">
                    Appliances
                  </div>
                </Link>

              </div>
              <div className="col-sm-2 col-lg-2 col-md-3 ">
                <Link>

                  <img className="img-fluid" src={pic.im2} alt="" />
                  <div className="col list-cotegary">
                    Two Whelers
                  </div>
                </Link>
                {/* <img className="" src={im2} alt="" /> */}
              </div>
              <div className="col-sm-2 col-lg-2 col-md-3">
                {/* <img src={im3} alt="" /> */}
                <Link>

                  <img className="img-fluid" src={pic.im3} alt="" />
                  <div className="col list-cotegary">
                    Mobiles
                  </div>
                </Link>
              </div>
              <div className="col-sm-2 col-lg-2 col-md-3">
                {/* <img src={im4} alt="" /> */}
                <Link>

                  <img className="img-fluid" src={pic.im4} alt="" />
                  <div className="col list-cotegary">
                    Electronics
                  </div>
                </Link>
              </div>
              <div className="col-sm-2 col-lg-2 col-md-3">
                <Link>

                  <img className="img-fluid" src={pic.im5} alt="" />
                  <div className="col list-cotegary">
                    Graocery
                  </div>
                </Link>
                {/* <img src={im5} alt="" />
            <Link>Grocery</Link> */}
              </div>
              {/* <div className="col-sm-2 col-lg-2 col-md-3">
                <img src={im6} alt="" />
             </div> */}
              <div className="col-sm-2 col-lg-2 col-md-3">
                {/* <img src={im7} alt="" /> */}
                <Link>
                  <img className="img-fluid" src={pic.im7} alt="" />
                  <div className="col list-cotegary">
                    Home
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-sm-1"></div>
        </div>


        {/* <LoginCom/> */}
        {/* slider section  */}
        <div className="row ">
          <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={pic.im8} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={pic.im9} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={pic.im10} className="d-block w-100" alt="..." />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
      <ProductComp setCurrProduId={setCurrProduId}/>
      {/* <HomeProdu /> */}
      <Footer />


    </>

  )
}

export default Home