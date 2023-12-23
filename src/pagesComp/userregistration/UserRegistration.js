import React, { useState } from 'react'
import './userregis.css'
// import './userlogin.css'
import { Link } from 'react-router-dom';
import { BASE_URL } from '../../helpers/backedurl';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
// import { Jwt } from 'jsonwebtoken';




const UserRegistration = ({ setLogedUser, setUserIcon }) => {
    const secKey = 'adfjdsfsdjkjkdkdjf'
    const navigation = useNavigate()

    const [loginSection, setLoginSection] = useState(false);
    const [regisSection, setRegisSection] = useState(true);

    const [imagePic, setImage] = useState("");
    const [userLogin, setUserLogin] = useState({
        email: "",
        password: ""
    })
    const [user, setUser] = useState({
        name: "",
        userName: "",
        email: "",
        password: "",
        repassword: "",
        profileImg: "",
        mobileNumber: "",
        address: ""
    });

    // regis login section handler
    const loginCompHandler = () => {
        setLoginSection(true);
        setRegisSection(false)
    }
    const registCompHandler = () => {
        setRegisSection(true);
        setLoginSection(false);
    }

    const onChangeHandler = e => {
        // console.log(e.target);

        const { name, value } = e.target;
        setUser({ ...user, [name]: value })

        setUserLogin({ ...userLogin, [name]: value })
    }



    const userRegisterHandler = (e) => {
        e.preventDefault();

        const formData = new FormData();

        const { name, userName, email, password, repassword, mobileNumber, address } = user;

        formData.append('name', user.name)
        formData.append('userName', user.userName)
        formData.append('email', user.email)
        formData.append('password', user.password)
        formData.append('repassword', user.repassword)
        formData.append('mobileNumber', user.mobileNumber)
        formData.append('address', user.address)
        formData.append('profileImg', imagePic)

        if (name && userName && email && mobileNumber && address && (password === repassword)) {
            axios.post(`${BASE_URL}/api/v1/registration`, formData)
                .then(rep => alert(rep.data));
        } else {
            alert("please enter all field");
        }


        console.log(formData);
        // console.log(imagePic);
        setUser({
            name: "",
            userName: "",
            email: "",
            password: "",
            repassword: "",
            profileImg: "",
            mobileNumber: "",
            address: ""
        });

        setImage(null);
    }


    // const webToken = jwt.sign({monu:'abc'},secKey,{expiresIn:'300s'})

    const login = (e) => {
        e.preventDefault();
        axios.post(`${BASE_URL}/api/v1/login`, userLogin)
            .then(res => {
                alert(res.data.message)
                // console.log(res)
                setLogedUser(res.data.user)
                // console.log(res.data.user)
                // setUserIcon(res.data.user)

                navigation("/")

            }
            );


        // localStorage.setItem('userToken',webToken)
        setUserLogin({ email: "", password: "" });
        // console.log(userLogin)
        // console.log("mona")
    }







    return (
        <>

            <div className="main_body">

                <div className="regis_class">
                    <div className={regisSection ? "main_container" : "active"}>
                        <div className="title">
                            <button className='login_btn1' onClick={loginCompHandler}>User Login</button>
                            <button className='reg_btn ' onClick={registCompHandler}>User Registration</button>
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
                        <div className="col ">


                            <div className="row  bg-white input_box ">

                                <div className="second_title d-flex">
                                    <button className='login_btn2 ps-2' onClick={loginCompHandler}>User Login</button>
                                    <button className='regis_btn2' onClick={registCompHandler}>User Registration</button>
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

export default UserRegistration