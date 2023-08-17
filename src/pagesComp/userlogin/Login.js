import React from 'react'
import './login.css'

const Login = () => {

    

    return (
        <>


            <div className="container-fluid main">
                <div className="row sub_element">
                    <div className="col ">
                      

                        <div className="row  bg-white input_box ">
                            <div className="col box">
                                <div className=''>
                                    <h2 className=''>Sing in</h2>
                                </div>
                                <div className='user-input'>

                                    {/* <label htmlFor="user_id">User Id/Email Id</label> */}
                                    <input type="text" id='user_id' placeholder='User Id/Email Id' />
                                </div>
                                <div className='user-input'>
                                    <input type="text" placeholder='Enter Password' />
                                </div>

                                <div className='user-input'>
                                    <input type="text" id='captcha' placeholder='CAPTCHA' />
                                    <span style={{ color: "red" }}>545655</span>
                                </div>


                                <div className="">
                                    <button className='btn btn-info w-75 mt-5 fs-5'>Login</button>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Login