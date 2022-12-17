import React, { useState } from 'react'

import { Modal, ModalHeader } from 'reactstrap'
const LoginCom = (prop) => {
    // const [modal,SetPopup] = useState(false);
   
    return (
        <>
         {/* <Modal size='lg'
           isOpen={prop.modal}
           toggle={()=> SetPopup(!modal)}
           >
            
            
            <ModalHeader
            toggle={()=> SetPopup(!modal)}
            >
                popup
            </ModalHeader>
         </Modal> */}
           {/* <button className='btn text-primary' onClick={ ()=> SetPopup(true)} >loging</button> */}
            {/* <form action="">
                <div className="d-flex flex-column mb-3">
                    <div>
                        <label htmlFor="inputEmail">Enter Email id/User id</label>
                    </div>
                    <div>
                        <input type="email" id='inputEmail' placeholder='enter emaid id' />
                    </div>


                </div>
                <div className="d-flex flex-column mb-3">
                    <div>
                        <label htmlFor="inputPassword">Enter Email id/User id</label>

                    </div>
                    <div>
                        <input type="password" id='inputPassword' placeholder='enter password id' />
                    </div>
                </div>
            </form> */}
        </>
    )
}

export default LoginCom