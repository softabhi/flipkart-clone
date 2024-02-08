import '../../cssComp/addcart.css'
import React, { useEffect, useState,useContext } from 'react'
import { useDispatch,useSelector } from 'react-redux';

import pic from '../images'
import { BASE_URL } from '../../helpers/backedurl'
import { globleInfo } from '../../App'
import { remove } from '../../globalStore/cartSlice';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';



const Addcart = ({setCartCount}) => {

    

    // const cartItem = useSelector((state) => state.cart);

    const [count, setCount] = useState(0);
    const [cartItem, setCartItem] = useState([])
    const{logedUser} = useContext(globleInfo)
    
    // const cartStore = useSelector(state=>state.cart)
    // const dispatch = useDispatch();



    useEffect(()=>{

    //    setCartItem(cartStore)
        // console.log(userId)
        if(logedUser && logedUser._id){
            let userId = logedUser._id
            axios.get(`http://localhost:5001/api/v2/cartItems/${userId}`) 
            .then(res=>{
                setCartItem(res.data.result)
                // console.log(res.data.massage)
                // console.log(res.data.result)
            })

            setCartCount(cartItem.length)
        }
      

    
    },[cartItem, logedUser])

   

    const increasFunc = (itemId) => {
        if (logedUser._id && itemId) {
            let userId = logedUser._id;
            // let produId = {product:addProduct._id};

            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ userId, itemId })
            };
            fetch('http://localhost:5001/api/v2/increaseCartItem', requestOptions)
                .then((response) => {
                    // console.log(response,11)
                    return response.json();
                })
                .then(data => {
                    // setProducts(data)
                    // setFilterProduct(data);
                    // setSearchItem(data)
                    console.log(data.massage, 10)
                    Swal.fire({
                        title: data.massage,
                        text: "You clicked the button!",
                        icon: "success"
                      });

                })
          
        }
    }
    const decreasFunc = (itemId) => {
        if (logedUser._id && itemId) {
            let userId = logedUser._id;
            // let produId = {product:addProduct._id};

            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ userId, itemId })
            };
            fetch('http://localhost:5001/api/v2/decreaseCartItem', requestOptions)
                .then((response) => {
                    // console.log(response,11)
                    return response.json();
                })
                .then(data => {
                    // setProducts(data)
                    // setFilterProduct(data);
                    // setSearchItem(data)
                    console.log(data.massage, 10)
                    Swal.fire({
                        title: data.massage,
                        text: "You clicked the button!",
                        icon: "success"
                      });

                })
          
        }
    }


    const DeletFunction = async(itemId) => {
       
        let userId = logedUser._id;
        let ids = {userId,itemId}
        console.log(userId,itemId)

        // dispatch(remove(itemId))

        axios.post("http://localhost:5001/api/v2/deleteCartItem",ids) 
            .then(response=>{
                // dispatch(add(res.data.result.cart))
                // setCartItem(res.data.result.cart)
                // return response.json();
                Swal.fire({
                    title: response.data.massage,
                    text: "You clicked the button!",
                    icon: "warning"
                  });
            })
           
            

    }

    let totalAmount=0;

    return (
        <>

            <div className="container-fluid" style={{ height: "100vh" }}>
                <div className="row " >
                    <div className="col-lg-2"></div>
                    <div className="col-lg-5 shadow-lg p-3 mb-5 bg-white rounded mt-5" style={{ height: "auto" }}>
                        <h2 className=' text-black'>Shopping Cart</h2>


                        {
                          cartItem && cartItem?.map((items, index) => {
                                      totalAmount += Number(items.productPrice); 
                             return (
                                    
                                        <div key={index} className="row d-flex align-items-center border-bottom border-primary border-top border-primary p-2">
                                            <div className="col-2 ">
                                                <img className='img-fluid' src={`${BASE_URL}/${items.productImg}`} alt="" />
                                            </div>
                                            <div className="col-2">
                                                <h6>{items.productName}</h6>

                                            </div>
                                            <div className="col-4">
                                                <div className="row">
                                                    <div className="col-3 decrease_btn">
                                                        <button id='decBtn' onClick={()=>decreasFunc(items._id)}>-</button>

                                                    </div>
                                                    <div className="col-4 border border-primary ">
                                                        <p className='qty'>{items.productQty}</p>
                                                    </div>
                                                    <div key={index} className="col-3 increase_btn">
                                                        <button onClick={() => increasFunc(items._id)}>+</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-2">
                                                <p>{items.productPrice}</p>
                                            </div>
                                            <div key={index} className="col-2 rem_btn">
                                                <button onClick={() => DeletFunction(items._id)}>X</button>
                                            </div>
                                        </div>
                                    
                                )
                            })
                        }

                    </div>




                    <div className="col-lg-3 shadow-lg p-3 mb-5 bg rounded mt-5" style={{ background: "#e0e0e0", height: "auto" }}>
                        <h3 className=' text-black'>Summary</h3>

                        <div className="row mt-5">
                            <div className="col-5">
                                <h5>Items</h5>
                                <h6>{cartItem.length}</h6>
                            </div>
                            <div className="col-5">
                                <h6>{totalAmount}</h6>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-10 mt-3">
                                <h6>SHIPPIING PATNER</h6>

                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-2"></div>
                            <div className="col-lg-8 mt-3  text-black" >
                                <select name="" id="" style={{ width: "100%" }}>
                                    <option value="">Delhivery   $29</option>
                                    <option value="">Ekart   $329</option>
                                    <option value="">Bludart  $229</option>
                                    <option value="">E-Com   $129</option>
                                </select>
                            </div>
                            <div className="col-lg-2"></div>
                        </div>



                        <div className="row">
                            <div className="col-10 mt-3">
                                <h6>DISCOUNT COUPON</h6>

                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-2"></div>
                            <div className="col-lg-8 mt-3" >
                                <input type="text" style={{ width: "100%" }} />
                            </div>
                            <div className="col-lg-2"></div>
                        </div>

                        <div className="row mt-3">
                            <div className="col-5">
                                <h6>TOTAL AMOUNT</h6>
                            </div>
                            <div className="col-5">
                                <h6>$134</h6>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-2"></div>
                            <div className="col-lg-8 mt-5" >
                              <Link to="/ordersummary">
                              <button className='btn btn-black' style={{ width: "100%" }}>CHECKOUT</button>
                              </Link>
                            </div>
                            <div className="col-lg-2"></div>
                        </div>
                    </div>
                    <div className="col-lg-2"></div>
                </div>
            </div>

        </>
    )
}

export default Addcart