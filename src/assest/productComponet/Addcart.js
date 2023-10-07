import React, { useEffect, useState } from 'react'

import pic from '../images'
import { BASE_URL } from '../../helpers/backedurl'


const Addcart = () => {

    const [count, setCount] = useState(0);
    const [cartItem,setCartItem] = useState([])

    const cartItems = JSON.parse(localStorage.getItem('cartData'))
    // console.log(cartItems)
     
    useEffect(()=>{
        setCartItem([...cartItems])
    },[])

    const increasFunc = (itemId) => {
        const targetCart = cartItem.filter((item, id)=>{
            if(itemId === id){
                setCount(count + 1)
            }
        })
       
    }
    const decreasFunc = () => {
        setCount(count - 1)
    }


    const DeletFunction = (itemId) => {
        // console.log(itemId)
       const updatedCart =  cartItem.filter((item,id)=>{
           return itemId!=id
        })
        setCartItem(updatedCart)
    }

    return (
        <>

            <div className="container-fluid" style={{ height: "100vh" }}>
                <div className="row " >
                    <div className="col-lg-2"></div>
                    <div className="col-lg-5 shadow-lg p-3 mb-5 bg-white rounded mt-5" style={{ height: "auto" }}>
                        <h2 className=' text-black'>Shopping Cart</h2>


                        {
                            cartItem.map((items, index) => {

                                return (
                                    <>
                                        <div className="row d-flex align-items-center border-bottom border-primary border-top border-primary p-2">
                                            <div className="col-2 ">
                                                <img className='img-fluid' src={`${BASE_URL}/${items.produImg}`} alt="" />
                                            </div>
                                            <div className="col-2">
                                                <h6>{items.productName}</h6>

                                            </div>
                                            <div className="col-4">
                                                <div className="row">
                                                    <div className="col-3 ">
                                                        <button onClick={decreasFunc}>-</button>

                                                    </div>
                                                    <div className="col-4 border border-primary">
                                                        <p>{count}</p>
                                                    </div>
                                                    <div key={index}  className="col-3 ">
                                                        <button onClick={()=>increasFunc(index)}>+</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-2">
                                                <p>{items.price}</p>
                                            </div>
                                            <div key={index} className="col-2">
                                                <button onClick={() => DeletFunction(index)}>X</button>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }

                    </div>




                    <div className="col-lg-3 shadow-lg p-3 mb-5 bg rounded mt-5" style={{ background: "#e0e0e0", height: "auto" }}>
                        <h3 className=' text-black'>Summary</h3>

                        <div className="row mt-5">
                            <div className="col-5">
                                <h6>ITEM 3</h6>
                            </div>
                            <div className="col-5">
                                <h6>$123</h6>
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
                                <button className='btn btn-black' style={{ width: "100%" }}>CHECKOUT</button>
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