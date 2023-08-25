import React, { useEffect, useState } from 'react'
import './seller.css'
// import './userlogin.css'
import { Link, json } from 'react-router-dom';
import { BASE_URL } from '../../helpers/backedurl';
import axios from 'axios';


const SellerRegis = ({ setLogedSeller, setUserIcon }) => {

    const [loginSection, setLoginSection] = useState(false);
    const [regisSection, setRegisSection] = useState(true);
    const [imagePic, setImage] = useState("");
    const [userLogin, setUserLogin] = useState({
        email: "",
        password: ""
    })

    
    const [user, setUser] = useState({
        name: "",

        email: "",
        password: "",
        repassword: "",
        role: "",
        profileImg: ""
    });

    const onChangeHandler = e => {
        // console.log(e.target);

        const { name, value } = e.target;
        setUser({ ...user, [name]: value })

        setUserLogin({ ...userLogin, [name]: value })
        // console.log(userLogin)
    }



    const userRegisterHandler = (e) => {
        e.preventDefault();

        const formData = new FormData();

        const { name, email, password, repassword, role } = user;

        formData.append('name', user.name)

        formData.append('email', user.email)
        formData.append('password', user.password)
        formData.append('repassword', user.repassword)
        formData.append('role', user.role)
        formData.append('profileImg', imagePic)

        if (name && email && (password === repassword)) {
            axios.post(`${BASE_URL}/api/v1/sellerRegistration`, formData)
                .then(rep => alert(rep.data));
        } else {
            alert("please enter all field");
        }


        console.log(formData);
        console.log(imagePic);
        setUser({
            name: "",
            email: "",
            password: "",
            repassword: "",
            role: "",
            profileImg: ""
        });
    }


    // console.log(mainClass)
    // regis login section handler
    const loginCompHandler = () => {
        setLoginSection(true);
        setRegisSection(false)
    }
    const registCompHandler = () => {
        setRegisSection(true);
        setLoginSection(false);
    }



    //   login code section

    // useEffect(()=>{
    //     // console.log(userLogin)
    //     localStorage.setItem('userdata',userLogin.email);

    // },[userLogin])

    const login = (e) => {
        e.preventDefault();
        axios.post("https://flipclonebacked.onrender.com/api/v1/sellerLogin", userLogin)
            .then(res => {
                alert(res.data.message)
                setLogedSeller(res.data.user)
                // setUserIcon(res.data.user)   
            }
            );

            localStorage.setItem('userdata',userLogin.email);
        setUserLogin({ email: "", password: "" });
        // console.log(userLogin)
        // console.log("mona")
    }



    return (
        <>
            <div className="main_body">

                <div className="regis_class">
                    <div className={regisSection ? "main_container" : "active"}>
                        <div className="title_seller_regis" id=''>
                            <button className='login_btn1' onClick={loginCompHandler}>Seller Login</button>
                            <button className='reg_btn ' onClick={registCompHandler}>Seller Registration</button>
                        </div>
                        <div className="content">
                            <form action="#" encType="multipart/form-data">
                                <div className="user-details">
                                    <div className="input-box">
                                        <span className="details">Full Name</span>
                                        <input type="text" name='name' placeholder="Enter your name" value={user.name} onChange={onChangeHandler} required />
                                    </div>
                                    <div className="input-box">
                                        <span className="details">Username</span>
                                        <input type="text" name='userName' placeholder="Enter your username" value={user.userName} onChange={onChangeHandler} required />
                                    </div>
                                    <div className="input-box">
                                        <span className="details">Email</span>
                                        <input type="email" name='email' placeholder="Enter your email" value={user.email} onChange={onChangeHandler} required />
                                    </div>
                                    <div className="input-box">
                                        <span className="details">Phone Number</span>
                                        <input type="number" name='mobileNumber' placeholder="Enter your number" value={user.mobileNumber} onChange={onChangeHandler} required />
                                    </div>
                                    <div className="input-box">
                                        <span className="details">Password</span>
                                        <input type="text" name='password' placeholder="Enter your password" value={user.password} onChange={onChangeHandler} required />
                                    </div>
                                    <div className="input-box">
                                        <span className="details">Confirm Password</span>
                                        <input type="text" name='repassword' placeholder="Confirm your password" value={user.repassword} onChange={onChangeHandler} required />
                                    </div>
                                    <div className="input-box">
                                        <span className="details">Address</span>
                                        <input type="text" name='address' placeholder="Enter Communication Address" value={user.address} onChange={onChangeHandler} required />
                                    </div>
                                    <div className="input-box">
                                        <span className="details">Profile Image</span>
                                        <input type="file" name='profileImg' id='profile_img' placeholder="" onChange={(e) => setImage(e.target.files[0])} required />
                                    </div>
                                </div>
                                <div className="gender-details">
                                    <input type="radio" name="gender" id="dot-1" />
                                    <input type="radio" name="gender" id="dot-2" />
                                    <input type="radio" name="gender" id="dot-3" />
                                    <span className="gender-title">Gender</span>
                                    <div className="category">
                                        <label for="dot-1">
                                            <span className="dot one"></span>
                                            <span className="gender">Male</span>
                                        </label>
                                        <label for="dot-2">
                                            <span className="dot two"></span>
                                            <span className="gender">Female</span>
                                        </label>
                                        <label for="dot-3">
                                            <span className="dot three"></span>
                                            <span className="gender">Third gender</span>
                                        </label>
                                    </div>
                                </div>
                                <div className="button">
                                    <input type="submit" onClick={userRegisterHandler} value="Register" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>


                <div className={loginSection ? "container-fluid" : "main"}>
                    <div className="row sub_element">
                        <div className="col">


                            <div className="row  bg-white input_box ">

                                <div className="title_seller d-flex" >
                                    <button className='login_btn3' onClick={loginCompHandler}>Seller Login</button>
                                    <button className='regis_btn4' onClick={registCompHandler}>Seller Registration</button>
                                </div>

                                <div className="col box">
                                    <div className=''>
                                        <h2 className=''>Sing in</h2>
                                    </div>
                                    <div className='user-input'>

                                        {/* <label htmlFor="user_id">User Id/Email Id</label> */}
                                        <input type="text" id='user_id' placeholder='User Id/Email Id' name='email' value={userLogin.email} onChange={onChangeHandler} />
                                    </div>
                                    <div className='user-input'>
                                        <input type="text" placeholder='Enter Password' name='password' value={userLogin.password} onChange={onChangeHandler} />
                                    </div>

                                    <div className='user-input'>
                                        <input type="text" id='captcha' placeholder='CAPTCHA' />
                                        <span style={{ color: "red" }}>545655</span>
                                    </div>


                                    <div className="">
                                        <button type='submit' className='btn btn-info w-75 mt-5 fs-5' onClick={login} >Login</button>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}

export default SellerRegis