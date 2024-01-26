import React, { useEffect, useState,useContext} from 'react'
import './inventory.css'
import { FaTrashAlt } from 'react-icons/fa'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faPenSquare } from '@fortawesome/free-solid-svg-icons'
import SingleUser from '../singleUserPage/SingleUser'
import { productsGetFunction } from '../singleUserPage/SingleUser'
import { Link } from 'react-router-dom'
import { globleInfo } from '../../App'
import { BASE_URL } from '../../helpers/backedurl'
import Swal from 'sweetalert2'



const Inventory = () => {

    const [products, setProducts] = useState("");
    
    const {singleUserData} = useContext(globleInfo);
    // console.log(singleUserData)/




    const fetchUsers = () => {
        fetch(`${BASE_URL}/api/v2/products`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setProducts(data);
            })
    }

    useEffect(() => {
        fetchUsers();
    }, [])


//    const productsEditHandler = (id)=>{
//      singleUserDetails(id)
//    }




    const productsDelete = async (id) => {

        const result = await fetch(`${BASE_URL}/api/v2/deleteProduct/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "Application/json"
            }
        });

        const deleteData = await result.json();
        //  console.log(deleteData,123)

        if (deleteData) {
            fetchUsers();
        } else {
            Swal.fire({
                title: "something wrong",
                text: "Thank You",
                icon: "success"
              });
            alert("something wrong")
        }
    }



    return (

        <>
          <h1>All Products Data</h1>
        <div className='container main_content' style={{ width: "" }}>
            
            <div className="row border border-dark py-2 tablehead" >
                <div className="col-1"> <th className='tabheding'>No</th></div>
                <div className="col-3"><th className='tabheding'>Name</th></div>
                <div className="col-3"><th className='tabheding'>Email Id</th></div>
                <div className="col-2"><th className='tabheding'>Mobile No</th></div>
                <div className="col-1"><th className='tabheding'>Status</th></div>
                <div className="col-2"><th className='tabheding'>Action</th></div>
            </div>


            {
                products.length > 0 && products.map((products, index) => {
                    return (
                        <div className="row bg-light border border-dark">
                            <div className="col-1 my-1"><td>{index + 1}</td></div>
                            <div className="col-3 my-1"><td>{products.productName}</td></div>
                            <div className="col-3 my-1"><td>{products.email}</td></div>
                            <div className="col-2 my-1"><td>5135645652</td></div>
                            <div className="col-1 my-1"><td>14565</td></div>
                            <div className="col-2 my-1">
                                <Link to='/singleproducts'>
                                    <button className='btn  py-1 my-1' onClick={()=>singleUserData(products._id)}  ><FontAwesomeIcon icon={faEye} /></button>
                                </Link>
                                <button className='btn  py-1 my-1' onClick={() => productsDelete(products._id)} ><FaTrashAlt /></button>

                                <Link to='/productsEdit'>
                                    <button className='btn  py-1 my-1' onClick={()=>singleUserData(products._id)} ><FontAwesomeIcon icon={faPenSquare} /></button>
                                </Link>
                            </div>
                        </div>
                    )
                })
            }
        </div>
        </>
    )
}

export default Inventory