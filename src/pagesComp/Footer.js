import React from 'react'
import { FcRating, FcBriefcase, FcCustomerSupport, FcConferenceCall } from 'react-icons/fc'
import '../cssComp/FooterPage.css'
const Footer = () => {
    return (

        <>


            <div className="container-fluid">
                <div className="row" id='font-style' style={{ background: "#172337" }}>

                    <div className="col-lg-7">
                        <div className="row mt-5 mb-5">
                            <div className="col-lg-1">

                            </div>
                            <div className="col-lg-3 text-white">
                                <h6 className=''>ABOUT</h6>
                                <p className='mb-0'>Contact Us</p>
                                <p className='mb-0'>About Us</p>
                                <p className='mb-0'>Carrear</p>
                                <p className='mb-0'>Flipkart Stories</p>
                                <p className='mb-0'>Press</p>
                                <p className='mb-0'>Flipkart Wholesale</p>
                                <p className='mb-0'>Corporate Information</p>
                            </div>
                            <div className="col-lg-3 text-white">
                                <h6>HELP</h6>
                                <p className='mb-0'>Payment</p>
                                <p className='mb-0'>Shipping</p>
                                <p className='mb-0'>Cancellation & Returns</p>
                                <p className='mb-0'>Flipkart Stories</p>
                                <p className='mb-0'>Report Infrinigment</p>
                                <p className='mb-0'>Flipkart Wholesale</p>
                            </div>
                            <div className="col-lg-3 text-white">
                                <h6>POLICY</h6>
                                <p className='mb-0'>ReturnPolicy</p>
                                <p className='mb-0'>Terms Use</p>
                                <p className='mb-0'>Security</p>
                                <p className='mb-0'>Privacy</p>
                                <p className='mb-0'>Site Map</p>
                                <p className='mb-0'>Flipkart Wholesale</p>
                            </div>
                            <div className="col-lg-2 text-white">
                                <h6>SOCIAL</h6>
                                <p className='mb-0'>Facebook</p>
                                <p className='mb-0'>Twitter</p>
                                <p className='mb-0'>Youtube</p>
                            </div>


                        </div>
                    </div>

                    <div className="col-lg-5" style={{ height: "" }}>
                        <div className="row mt-5 mb-5">

                            <div className="col-lg-5 text-white border-start border-success border-3">
                                <h6>Mail Us</h6>
                                <p>
                                    Flipkart Internet Private Limited,

                                    Buildings Alyssa, Begonia &

                                    Clove Embassy Tech Village,

                                    Outer Ring Road, Devarabeesanahalli Village,

                                    Bengaluru, 560103,

                                    Karnataka, India

                                </p>
                            </div>

                            <div className="col-lg-1">

                            </div>

                            <div className="col-lg-5 text-white">
                                <h6>Registered Office</h6>
                                <p>
                                    Flipkart Internet Private Limited,

                                    Buildings Alyssa, Begonia &

                                    Clove Embassy Tech Village,

                                    Outer Ring Road, Devarabeesanahalli Village,

                                    Bengaluru, 560103,

                                    Karnataka, India

                                    CIN : U51109KA2012PTC066107

                                    Telephone: 044-45614700

                                </p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="row border border-top border-success" style={{ background: "#172337" }}>
                    <div className="col-lg-2 col-sm-12 mt-4 ms-lg-5 ">
                        <h6 className='text-white' ><span><FcBriefcase /></span>Become a seller</h6>
                    </div>
                    <div className="col-lg-1 col-sm-12 mt-4">
                        <h6 className='text-white'><span><FcConferenceCall /></span> Advertise</h6>
                    </div>
                    <div className="col-lg-1 col-sm-6 mt-4 mb">
                        <h6 className='text-white'><span><FcRating /></span> Gift card</h6>
                    </div>
                    <div className="col-lg-1 col-sm-6 mt-4 mb">
                        <h6 className='text-white'><span><FcCustomerSupport /></span> Help center</h6>
                    </div>
                    <div className="col-lg-3 col-sm-6 mt-4 mb">

                    </div>
                    <div className="col-lg-4 col-sm-6 mt-4 mb">

                    </div>
                </div>


            </div>

        </>
    )
}

export default Footer