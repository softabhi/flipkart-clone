import React, { useState } from 'react'
import '../cssComp/LoginCom.css'
import { Link } from 'react-router-dom';
import axios from 'axios';

const RegiCom = ({ setLogedUser,setUserIcon }) => {


    const [classForm, setClassForm] = useState(false);
    const [LoginForm, setLoginForm] = useState(true);
    const [imagePic, setImage] = useState("");
    const [userLogin, setUserLogin] = useState({
        email: "",
        password: ""
    })
    const [user, setUser] = useState({
        name:"",
        userName: "",
        email: "",
        password: "",
        repassword: "",
        profileImg:""
    });

    const onChangeHandler = e => {
        // console.log(e.target);

        const { name, value } = e.target;
        setUser({ ...user, [name]: value })

        setUserLogin({ ...userLogin, [name]: value })
    }



    const userRegisterHandler = (e) => {
        e.preventDefault();

        const formData = new FormData();

        const { name, userName, email, password, repassword} = user;

        formData.append('name',user.name)
        formData.append('userName',user.userName)
        formData.append('email',user.email)
        formData.append('password',user.password)
        formData.append('repassword',user.repassword)
        formData.append('profileImg',imagePic)

        if (name && userName && email && (password === repassword)) {
            axios.post("http://localhost:5001/api/v1/registration", formData)
                .then(rep => alert(rep.data));
        } else {
            alert("please enter all field");
        }


        console.log(formData);
        console.log(imagePic);
        setUser({
            name: "",
            userName: "",
            email: "",
            password: "",
            repassword: "",
            profileImg:""
        });
    }


    // console.log(mainClass)
    const classChangHandler = () => {

        setClassForm(true);
        setLoginForm(false)

    }

    const registerHandler = () => {
        setLoginForm(true)
        setClassForm(false)
    }


    
    //   login code section

    const login = (e) => {
        e.preventDefault();
        axios.post("http://localhost:5001/api/v1/login", userLogin)
        .then(res => {alert(res.data.massage)
        setLogedUser(res.data.user)
        // setUserIcon(res.data.user)
    }
        );
      
        

        setUserLogin({email:"",password:""});
        // console.log(userLogin)
        // console.log("mona")
    }



    // popupHandler(classChangHandler)
    return (
        <>
            <div>

                <div className={classForm ? "active" : "logiform"}>

                    <div className="main shadow-lg">
                        <Link to="/">
                            <button >X</button>
                        </Link>

                        <div className="d-flex justify-content-evenly">
                            <button className='btn btn-success login' onClick={classChangHandler} >Login</button>
                            <button className='btn btn-primary singup' onClick={registerHandler}>Registration</button>
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
                                    <input type="file" id='profileImg' name='profileImg'  onChange={(e)=>setImage(e.target.files[0])} />
                                </div>
                                <div className='d-flex justify-content-center p-3'>
                                    <button className='btn btn-success' onClick={userRegisterHandler} >Register</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>


                <div className={LoginForm ? "inactive" : ""}>
                    <div className="regiform main shadow-lg">
                        <Link to="/">
                            <button >X</button>
                        </Link>
                        <div className="d-flex justify-content-evenly">
                            <button className='btn btn-success login' onClick={classChangHandler}>Login</button>
                            <button className='btn btn-primary singup' onClick={registerHandler}>Registration</button>
                        </div>
                        <form action="" className='p'>
                            <h4 className='d-flex justify-content-evenly m-3'>Login here</h4>
                            <div className="row">
                                <div className="col d-flex  justify-content-evenly">
                                    <label htmlFor="email">Username</label>
                                    <input type="email" id='email' className='m-3' name='email' value={userLogin.email} onChange={onChangeHandler} />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col d-flex justify-content-evenly m-3">
                                    <label htmlFor="password">Password</label>
                                    <input type="text" id='password' name='password' value={userLogin.password} onChange={onChangeHandler} />
                                </div>
                            </div>

                            <div className='d-flex justify-content-center p-3'>
                                <button className='btn btn-success' onClick={login} >Login</button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </>
    )
}

export default RegiCom