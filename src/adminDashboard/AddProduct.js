
import React, { useState } from 'react'

import axios from 'axios';
import { BASE_URL } from '../helpers/backedurl';
import Swal from 'sweetalert2';

const AddProduct = () => {

    const [proImage, setProduImg] = useState("")

    const [product, setProduct] = useState({
        productName: "",
        price: "",
        quantity: "",
        produImg: "",
        discount:""
    });

    console.log(product)

    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value })
    }

    const addProductHandler = (e) => {

        e.preventDefault();

        const formData = new FormData();

        const { productName, price, discount} = product;

        formData.append('productName', product.productName)
        formData.append('price', product.price)
        formData.append('quantity', product.quantity)
        formData.append('discount', product.discount)
        formData.append('produImg', proImage)

        console.log(formData);

        if (productName && price && discount) {
            // axios.post(`${BASE_URL}/api/v2/addProduct`, formData)
            axios.post('http://localhost:5001/api/v2/addProduct', formData)
                .then(res => {
                    Swal.fire({
                        title: res.data,
                        text: "Thank You",
                        icon: "success"
                      });
                });

                 
                setProduct({
                    productName: "",
                    price: "",
                    quantity: "",
                    discount:""
        
                });
        } else {
            Swal.fire({
                title: "Please Enter All Field",
                text: "Thank You",
                icon: "success"
              });
        }



        console.log(proImage);
       

    }
    return (
        <>
            <div className="container mt-5" style={{ maxWidth: "40rem" }}>
                <h3>Add Products</h3>
                <div className="row bg-light border border-dark p-4">

                    <form action="" enctype="multipart/form-data">
                        <div className="col">
                            <div className='d-flex flex-column'>
                                <label htmlFor="productName">Enter product name</label>
                                <input type="text" id='productName' name='productName' value={product.productName} onChange={onChangeHandler} />
                            </div>
                        </div>

                        <div className="col d-flex flex-column">

                            <label htmlFor="">Product category</label>
                            <select name="" id="">
                                <option value="">Select cotegory</option>
                                <option value="">Fruits</option>
                                <option value="">Female cloths</option>
                                <option value="">Male cloths</option>
                                <option value="">Electronic</option>
                                <option value="">Education</option>
                            </select>

                        </div>

                        <div className="row">
                            <div className="col-6">
                                <div className='d-flex flex-column'>
                                    <label htmlFor="quantity">Product quaitity</label>
                                    <input type="text" id='quantity' name='quantity' value={product.quantity} onChange={onChangeHandler} />
                                </div>
                            </div>


                            <div className='col-6 d-flex flex-column'>
                                <label htmlFor="price">Product price</label>
                                <input type="text" id='price' name='price' value={product.price} onChange={onChangeHandler} />
                            </div>
                        </div>



                        <div className="row">
                            <div className="col">
                                <div className='d-flex flex-column'>
                                    <label htmlFor="produImg">Product image</label>
                                    <input type="file" id='produImg' name='produImg' onChange={(e) => setProduImg(e.target.files[0])} />
                                </div>
                            </div>

                            <div className="col">
                                <div className='d-flex flex-column'>
                                    <label htmlFor="discount">Discount Percentage</label>
                                    <input type="text" id="discount" name='discount' value={product.discount} onChange={onChangeHandler}></input>
                                </div>
                            </div>
                        </div>


                        <div className="col">
                            <div className='d-flex flex-column'>
                                <label htmlFor=""> Product description</label>
                                <textarea name="" id="" cols="30" rows="5"></textarea>
                            </div>
                        </div>


                        <div className="row m-3">
                            <div className="col">
                                <button className='btn btn-primary' onClick={addProductHandler}>Add Product</button>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </>

    )
}

export default AddProduct