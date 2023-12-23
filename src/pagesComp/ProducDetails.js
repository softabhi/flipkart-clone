import React, { useState, useContext, useEffect } from 'react'
import pic from '../assest/images.js';
import Footer from './Footer.js';
import { AiFillStar } from 'react-icons/ai'
import { IoIosStarHalf } from 'react-icons/io'
import { globleInfo } from '../App.js';
import { BASE_URL } from '../helpers/backedurl.js';
import { Navigate, useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { add } from '../globalStore/cartSlice.js';


const ProducDetails = () => {

    
    const { addProduct, logedUser } = useContext(globleInfo)
    const [addCardData, setAddCartData] = useState();
    const [currUserData,setCurrUserData] = useState("")
    const dispatch = useDispatch();


    // setAddCartData(addProduct);
    // console.log(logedUser);
    // console.log(addProduct);
    

    let mainImg = document.getElementById("main-img");
    let smallImg = document.getElementsByClassName("small-img");


    //  console.log(addProduct);

    //   useEffect(()=>{

    //   },[])
   
   

    const addCartFunction =  () => {
        
        // console.log("produId")   

        dispatch(add(addProduct))

        if (logedUser._id && addProduct._id) {
            let userId = logedUser._id;
            let produId = {product:addProduct._id};

            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ userId, produId })
            };
            fetch('http://localhost:5001/api/v2/addCart', requestOptions)
                .then((response) => {
                    // console.log(response,11)
                    return response.json();
                })
                .then(data => {
                    // setProducts(data)
                    // setFilterProduct(data);
                    // setSearchItem(data)
                    console.log(data.massage, 10)
                    alert(data.massage)

                })
          
        }else{
            alert("please loging first for item add")
            // navigation("/loginRegise")
            // navigation("/loginRegise")
            Navigate("/loginRegise")
        }


        // var productCart = JSON.parse(localStorage.getItem('cartData') || "[]")
        // productCart.push(addProduct)
        // localStorage.setItem('cartData', JSON.stringify(productCart));
        // console.log(addCardData)
    }



    const [singImg, SetImg] = useState(pic.img1);


    //      const getSingleProduDetails =  ()=>{
    //       let result = fetch(`${BASE_URL}/api/v2/singleproduct/${addCurtProduId}`)
    //         .then((data)=>{
    //             return data.json();
    //         })
    //         .then((produtData)=>{
    //             // console.log(produtData)
    //         //    setSingProduData(produtData)
    //         return produtData;
    //         })

    //         setSingProduData(result);
    //         // console.log(result)
    //         // console.log("monu")
    //   }



    //      useEffect(()=>{
    //         getSingleProduDetails();

    //      },[addCurtProduId])



    return (
        <>

            <div className="container">
                <div className="row">
                    <div className="col-lg-5 d-flex flex-column justify-content-around mt-5 mb-5">
                        <img src={`${BASE_URL}/${addProduct.produImg}`} className="img-fluid" id='main-img' style={{ width: "35rem", height: "30rem" }} alt="" />
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
                                <h2 className='fw-bold'>{addProduct.productName}</h2>
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
                                    <button className='btn btn-primary m-2' onClick={addCartFunction}>Add Cart</button>
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