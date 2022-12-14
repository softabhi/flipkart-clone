import React, { useState } from 'react'
import pic from '../assest/images.js';
import Footer from './Footer.js';
import { AiFillStar } from 'react-icons/ai'
import { IoIosStarHalf } from 'react-icons/io'
const ProducDetails = () => {

    let mainImg = document.getElementById("main-img");
    let smallImg = document.getElementsByClassName("small-img");

    console.log(mainImg);
    console.log(smallImg);

    const [singImg, SetImg] = useState(pic.img1);


    return (
        <>

            <div className="container">
                <div className="row">
                    <div className="col-lg-5 d-flex flex-column justify-content-around mt-5 mb-5">
                        <img src={singImg} className="img-fluid" id='main-img' style={{ width: "35rem", height: "30rem" }} alt="" />
                        <div className="row mt-2">
                            <div className="col-3">
                                <img src={pic.img1} className="img-fluid small-img" onClick={() => SetImg(smallImg[0].src)} style={{ width: "7rem", height: "8rem" }} alt="" />
                            </div>
                            <div className="col-3">
                                <img src={pic.img2} className="img-fluid small-img" onClick={() => SetImg(smallImg[1].src)} style={{ width: "7rem", height: "8rem" }} alt="" />
                            </div>
                            <div className="col-3">
                                <img src={pic.img3} className="img-fluid small-img" onClick={() => SetImg(smallImg[2].src)} style={{ width: "7rem", height: "8rem" }} alt="" />
                            </div>
                            <div className="col-3">
                                <img src={pic.img2} className="img-fluid small-img" onClick={() => SetImg(smallImg[3].src)} style={{ width: "7rem", height: "8rem" }} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 text-black mt-lg-5">
                        <div className="row mt-lg-5">
                            <div className="row">
                                <h5>Home/T-shirt</h5>
                                <h2 className='fw-bold'>Men Fashion T-shirt</h2>
                                <h4>$139</h4>
                            </div>

                            <div>
                                <select name="" id="" style={{ width: "5rem" }}>
                                    <option value="">Size</option>
                                    <option value="">XL</option>
                                    <option value="">XXL</option>
                                    <option value="">Small</option>
                                    <option value="">Large</option>
                                </select>
                            </div>


                            <div>
                                <select name="" id="" style={{ width: "2rem" }} >
                                    {/* <option value=""></option> */}
                                    <option value="">1</option>
                                    <option value="">2</option>
                                    <option value="">3</option>
                                    <option value="">4</option>
                                </select>


                            </div>

                            <div className="d-flex">
                                <h4><AiFillStar /></h4>
                                <h4><AiFillStar /></h4>
                                <h4><AiFillStar /></h4>
                                <h4><AiFillStar /></h4>
                                <h4><IoIosStarHalf /></h4>
                            </div>

                            <div className="row">
                                <div className="col-3"></div>
                                <div className="col-6 m-3">
                                    <button className='btn btn-success m-2'>Buy Now</button>
                                    <button className='btn btn-primary m-2'>Add Cart</button>
                                </div>
                                <div className="col-3"></div>

                            </div>

                            <div className="row ">
                                <p>
                                    This is the front page of the Simple English Wikipedia.
                                    Wikipedias are places where people work together to write encyclopedias in different languages.
                                    We use Simple English words and grammar here.
                                    The Simple English Wikipedia is for everyone!
                                    That includes children and adults who are learning English.
                                    are 224,347 articles on the Simple English Wikipedia.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />

        </>
    )
}

export default ProducDetails