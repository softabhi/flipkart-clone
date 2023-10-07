import React, { useEffect, useState, useContext } from 'react'
import styles from './customers.module.css'
import { FaTrashAlt } from 'react-icons/fa'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faPenSquare } from '@fortawesome/free-solid-svg-icons'
import SingleUser from '../singleUserPage/SingleUser'
import { userGetFunction } from '../singleUserPage/SingleUser'
import { Link } from 'react-router-dom'
import { globleInfo } from '../../App'
import { BASE_URL } from '../../helpers/backedurl'


const Customers = () => {

    const [users, setUsers] = useState("");

    const { singleUserData } = useContext(globleInfo);
    // console.log(singleUserData)/




    const fetchUsers = () => {
        console.log("shubh")
        fetch(`${BASE_URL}/api/v1/allUsers`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data)
                setUsers(data);
            })
    }

    useEffect(() => {
        fetchUsers();
    }, [])


    //    const userEditHandler = (id)=>{
    //      singleUserDetails(id)
    //    }




    const userDelete = async (id) => {

        const result = await fetch(`${BASE_URL}/api/v2/deleteUser/${id}`, {
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
            alert("something wrong")
        }


    }



    return (

        <>
            <div className="container">
                <div className="row d-flex align-items-center justify-content-around my-5">
                    <div className="col">
                        <h3>My Customers</h3>
                    </div>
                    <div className="col">
                        <input type="text" placeholder='find users......' className='px-2 py-1'/>
                    </div>
                    
                    
                    <div className="col">
                    <Link to='/dashboard'>                           
                        <button type='button' id={styles.dash_btn} className='btn btn-outline-primary'>Go To Dashboard</button>
                    </Link>
                    </div>
                    
                </div>

                <div className={styles.main_content} style={{ width: "" }}>

                    <div className="row border border-dark py-2 tablehead" >
                        <div className="col-1"> <th className='tabheding'>No</th></div>
                        <div className="col-3"><th className='tabheding'>Name</th></div>
                        <div className="col-3"><th className='tabheding'>Email Id</th></div>
                        <div className="col-2"><th className='tabheding'>Mobile No</th></div>
                        <div className="col-1"><th className='tabheding'>Status</th></div>
                        <div className="col-2"><th className='tabheding'>Action</th></div>
                    </div>


                    {
                        users.length > 0 && users.map((user, index) => {
                            return (
                                <div className="row bg-light border border-dark">
                                    <div className="col-1 my-1"><td>{index + 1}</td></div>
                                    <div className="col-3 my-1"><td>{user.name}</td></div>
                                    <div className="col-3 my-1"><td>{user.email}</td></div>
                                    <div className="col-2 my-1"><td>{user.mobileNumber}</td></div>
                                    <div className="col-1 my-1"><td>active</td></div>
                                    <div className="col-2 my-1">
                                        <Link to='/singleuser'>
                                            <button className='btn  py-1 my-1' onClick={() => singleUserData(user._id)}  ><FontAwesomeIcon icon={faEye} /></button>
                                        </Link>
                                        <button className='btn  py-1 my-1' onClick={() => userDelete(user._id)} ><FaTrashAlt /></button>

                                        <Link to='/userEdit'>
                                            <button className='btn  py-1 my-1' onClick={() => singleUserData(user._id)} ><FontAwesomeIcon icon={faPenSquare} /></button>
                                        </Link>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Customers