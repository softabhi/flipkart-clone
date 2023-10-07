import React, { useEffect, useState, useContext } from 'react'
// import pic from '../images.js';
// import axios from 'axios'
import { BASE_URL } from '../../helpers/backedurl.js';
import { Link } from 'react-router-dom';
// import clothList from './allProductData/ClothProdu.js';
import { globleInfo } from '../../App.js';
const ProductComp =  ({setCurrProduId}) => {
    const { searchItem } = useContext(globleInfo)
    //     const [products, setProducts] = useState("");
    //     const [filterProduct, setFilterProduct] = useState();

     const [itemList, setItemList] = useState(5);

     


    //     const fetchingData = () => {
    //         fetch("http://localhost:5001/api/v2/products")
    //             .then((response) => {
    //                 // console.log(response,11)
    //                 return response.json();
    //             })
    //             .then(data => {
    //                 setProducts(data)
    //                 setFilterProduct(data);
    //                 // console.log(data,10)
    //             })
    //     }

    //     useEffect(() => {
    //         //  const feathData = async ()=>{
    //         //     const data = await axios.get("http://localhost:5001/api/v1/products")
    //         //     .then((res)=>{
    //         //           setProducts(res.data)

    //         //     })
    //         //  }
    //         //  feathData();
    //         fetchingData();
    //     }, [])


    //    const userSearchItem = ()=>{
    //        setFilterProduct(products.filter(f => f.productName.toLowerCase().includes(searchItem)))
    //    }

    //    userSearchItem();

    //    useEffect(()=>{
    //     //  userSearchItem()
    //    },[])

    //    console.log(filterProduct,12)
    // console.log(searchItem);

    // setCurrProduId("danoo")
    return (

        <>
            <div className="container">
                <div className="row">

                    {
                        searchItem && searchItem?.map((item, index) => {

                            if(index<=itemList){

                                return (

                                    <div className="col-sm-2 col-lg-2 col-md-3">
    
                                        <Link to="/productDetails" onClick={()=>setCurrProduId(item)}>
                                              {/* {setCurrProduId(item._id)} */}
                                              {/* {setCurrProduId(item._id)} */}
                                            <div className="card m-3">
    
                                                < div className="imgDiv" />
    
                                                <img src={`${BASE_URL}/${item.produImg}`}
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

                        }

                        )

                    }

                </div>

               <div className="row">
                <div className="col text-center my-4">
                    <button className='text-center btn btn-success' onClick={()=>setItemList(itemList+6)} >More Items</button>
                </div>
               </div>

            </div>
        </>
    )
}

export default ProductComp;