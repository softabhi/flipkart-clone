import React, { useRef, useState } from 'react'
import '../cssComp/UserProfi.css'
import userImg from '../assest/homeProdu/photo1.jpg'


const UserProfile = ({ setLogout,setLogedUser,currentUser }) => {
    const [open, setOpen] = useState(false);
    const [profileImg, setProfileImg] = useState();
// console.log(open)

    // const menuItem = ["Name", "Num"];

    const menuRef = useRef();
    const imgRef = useRef();

    window.addEventListener('click', (e)=>{
    if(e.target !== menuRef.current  && e.target !== imgRef.current){
        setOpen(false)
    };
      
    })

    return (
        <div className='logout me-4'>
            <div>
                <img 
                ref={imgRef}
                src={`http://localhost:5001/${currentUser.profileImg}`} 
                alt="" 
                className='pictu ms' 
                onClick={ () => setOpen(!open)}
                />
             </div>
                {
                    open && (
                        <div ref={menuRef} className="menus bg-white px-5 py-3 border border-secondary rounded">
                          {<div >
                            <h4 className='text-dark'>{currentUser.name}</h4>
                          </div>}
                           
                            {/* {
                                menuItem.map((item) => (
                                    <ul>
                                        <li className='text-dark'>{item}</li>
                                    </ul>
                                ))
                               
                            } */}
                             <div className="logout-btn">
                                    <button className='btn btn-success' onClick={()=> setLogout("sd")} >Logout</button>
                            </div>
                        </div>
                    )
                }

        </div>
    )
}

export default UserProfile