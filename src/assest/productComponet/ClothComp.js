import React, { useEffect, useState } from 'react'
import pic from '../images.js';
import axios from 'axios'
import { Link } from 'react-router-dom';
import clothList from './allProductData/ClothProdu.js';

const ClothComp = () => {

     const [products,setProducts] =useState("");

   useEffect(() => {
     const feathData = async ()=>{
        const data = await axios.get("http://localhost:5001/api/v1/products")
        .then((res)=>{
              setProducts(res.data)
              
        })
     }
     feathData();
   },[])


   console.log(products,12)



    // console.log(clothList);


    return (

        <>
            <div className="container">
                <div className="row">

                    {
                        products && products?.map((item, index) => {
                            
                            return(


                            <div className="col-sm-2 col-lg-2 col-md-3">

                                <Link to="/productDetails">

                                    <div className="card m-3">

                                        < div className="imgDiv" />

                                        <img src={`http://localhost:5001/${item.produImg}`}
                                            className="card-img-top img-fluid"
                                            alt="..." />

                                    </div>
                                    <div className="titleCss" >

                                        <h6 className="" > {item.productName} </h6>

                                        <h6 className='text-success'>Min {item.discount}% off</h6>

                                    </div>
                                </Link>
                            </div>
                           )
                            
                        }

                        )

                    }

                </div>
            </div>
        </>
    )
 }

export default ClothComp;