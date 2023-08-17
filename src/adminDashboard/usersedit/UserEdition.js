import React, { useState, useContext, useEffect } from 'react'
// import '../../pagesComp/userregistration/userregis.css'
import styles from './userediton.module.css';
// import './userlogin.css'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { globleInfo } from '../../App';


const UserEdition = () => {


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

  const { appColor, singleUserId } = useContext(globleInfo);


  const onChangeHandler = e => {
    // console.log(e.target);

    const { name, value } = e.target;
    setUser({ ...user, [name]: value })

    setUserLogin({ ...userLogin, [name]: value })
  }


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




  const editUserHandler = (e) => {
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
      axios.put(`http://localhost:5001/api/v1/editUser/${singleUserId}`, formData)
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

  return (
    <>
      <div className={styles.regis_class}>
        <div className="main_container">
          <div className="title">
            <button className='login_btn1' >User Login</button>
            <button className='reg_btn ' >User Registration</button>
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
                <input type="submit" onClick={editUserHandler} value="Register" />
              </div>
            </form>
          </div>
        </div>
      </div>

    </>
  )
}

export default UserEdition