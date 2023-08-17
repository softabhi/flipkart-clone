import React, { useState, useContext, useEffect } from 'react'
import './useredit.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { globleInfo } from '../../App';



const UserEdit = () => {

    // const [editUser, setEditUser] = useState({
    //     name: "",
    //     email: ""
    // });


    const [editUserImg, setEditUserImg] = useState("");
    const [userDetails, setUserDetails] = useState("");
    const [imagePic, setImage] = useState("");
    const [user, setUser] = useState({
        name: "",
        userName: "",
        email: "",
        password: "",
        repassword: "",
        profileImg: ""
    });

    const { appColor, singleUserId } = useContext(globleInfo);

    // console.log(singleUserId);
    // console.log(appColor);

    // const onChangeHandler = (e) => {
    //     const { name, value } = e.target;
    //     setEditUser({ ...editUser, [name]: value })
    // }

    // console.log(editUser)




    const singleUserDetails = async () => {
        fetch(`http://localhost:5001/api/v1/singleUser/${singleUserId}`)
            .then((response) => {
                return response.json();
            }).then((userData) => {
                // setUserDetails(userData);
                setUser(userData);
            })
    }


    useEffect(() => {
        singleUserDetails();
    }, []);

    // // console.log(userDetails)

    // const editProductHandler = async (e) => {

    //     e.preventDefault();
    //     const formData = new FormData();
    //     const { name, email } = editUser;

    //     formData.append("name", editUser.name);
    //     formData.append('email', editUser.email);

    //     const result = await fetch(`http://localhost:5001/api/v1/editUser/${singleUserId}`, formData, {
    //         method: "PUT"
    //         //   headers: {
    //         //     "Content-Type": "Application/json"
    //         // }
    //     })

    //     const finalResult = result.json();

    //     console.log(finalResult)
    //    .then((respose)=>{
    //        return respose.json();
    //    })
    //    .then((data)=>{
    //        console.log(data);
    //    })

    // }




    const onChangeHandler = e => {
        // console.log(e.target);

        const { name, value } = e.target;
        setUser({ ...user, [name]: value })

        // setUserLogin({ ...userLogin, [name]: value })
    }



    const editUserHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData();

        const { name, userName, email, password, repassword } = user;

        formData.append('name', user.name)
        formData.append('userName', user.userName)
        formData.append('email', user.email)
        formData.append('password', user.password)
        formData.append('repassword', user.repassword)
        formData.append('profileImg', imagePic)

        //     const result = await fetch(`http://localhost:5001/api/v1/editUser/${singleUserId}`, formData, {
        //     method: "PUT",
        //       headers: {
        //         "Content-Type": "Application/json"
        //     }
        // })

        // const finalResult = result.json();

        // console.log(finalResult)

        if (name && userName && email) {
            axios.put(`http://localhost:5001/api/v1/editUser/${singleUserId}`, formData)
                .then(rep => alert(rep.data));
        } else {
            alert("please enter all field");
        }


        console.log(formData);
        console.log(imagePic);
        // setUser({
        //     name: "",
        //     userName: "",
        //     email: "",
        //     password: "",
        //     repassword: "",
        //     profileImg:""
        // });
    }





    return (
        <>



            <div className="main shadow-lg">
                <Link to="/">
                    <button >X</button>
                </Link>

                <div className="d-flex justify-content-evenly">
                    <button className='btn btn-success login'  >Login</button>
                    <button className='btn btn-primary singup' >Registration</button>
                </div>
                <div className="regis_form">
                    <form action="" className='' enctype="multipart/form-data">
                        <div className='d-flex flex-column'>
                            <label htmlFor="name">Name</label>
                            <input type="text" id='name' name='name' value={user.name} onChange={onChangeHandler} />
                        </div>
                        <div className='d-flex flex-column'>
                            <label htmlFor="name">Username</label>
                            <input type="text" id='username' name='userName' value={user.userName} onChange={onChangeHandler} />
                        </div>
                        <div className='d-flex flex-column'>
                            <label htmlFor="email">Email</label>
                            <input type="text" id='email' name='email' value={user.email} onChange={onChangeHandler} />
                        </div>
                        <div className='d-flex flex-column'>
                            <label htmlFor="password">Password</label>
                            <input type="text" id='password' name='password' value={user.password} onChange={onChangeHandler} />
                        </div>
                        <div className='d-flex flex-column'>
                            <label htmlFor="repassword">Repassword</label>
                            <input type="text" id='repassword' name='repassword' value={user.repassword} onChange={onChangeHandler} />
                        </div>
                        <div className='d-flex flex-column'>
                            <label htmlFor="profileImg">Profile Image</label>
                            <input type="file" id='profileImg' name='profileImg' onChange={(e) => setImage(e.target.files[0])} />
                        </div>
                        <div className='d-flex justify-content-center p-3'>
                            <button className='btn btn-success' onClick={editUserHandler} >Register</button>
                        </div>

                    </form>
                </div>
            </div>



            {/* <div className="container mt-5 " style={{ maxWidth: "40rem" }}>
                <h3>Add Products</h3>
                <div className="row bg-light border border-dark p-4">

                    <form action="" enctype="multipart/form-data">
                        <div className="col">
                            <div className='d-flex flex-column'>
                                <label htmlFor="name">Enter product name</label>
                                <input type="text" id='name' name='name' value={editUser.name} onChange={onChangeHandler} />
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
                                    <label htmlFor="email">email</label>
                                    <input type="email" id='email' name='email'  value={editUser.email} onChange={onChangeHandler} />
                                </div>
                            </div>


                            <div className='col-6 d-flex flex-column'>
                                <label htmlFor="price">Product price</label>
                                <input type="text" id='price' name='price'  onChange={onChangeHandler} />
                            </div>
                        </div>



                        <div className="row">
                            <div className="col">
                                <div className='d-flex flex-column'>
                                    <label htmlFor="produImg">Product image</label>
                                    <input type="file" id='produImg' name='produImg' onChange={(e) => setEditUserImg(e.target.files[0])} />
                                </div>
                            </div>

                            <div className="col">
                                <div className='d-flex flex-column'>
                                    <label htmlFor="discount">Discount Percentage</label>
                                    <input type="text" id="discount" name='discount'  onChange={onChangeHandler}></input>
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
                                <button className='btn btn-primary' onClick={editProductHandler}>Add Product</button>
                            </div>
                        </div>
                    </form>

                </div>
            </div> */}
        </>
    )
}

export default UserEdit