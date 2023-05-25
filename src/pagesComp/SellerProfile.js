import React, { useRef, useState,useEffect} from 'react'
import '../cssComp/UserProfi.css'
import userImg from '../assest/homeProdu/photo1.jpg'



const SellerProfile = ({ setLogoutSeller,currentLogedSeller }) => {
    const [open, setOpen] = useState(false);
    const [profileImg, setProfileImg] = useState();
// console.log(open)

    const menuItem = ["Name", "Num"];

    const menuRef = useRef();
    const imgRef = useRef();

    window.addEventListener('click', (e)=>{
    if(e.target !== menuRef.current  && e.target !== imgRef.current){
        setOpen(false)
    };
       
        
    })
    
    // console.log(open)

    useEffect(()=>{
        console.log("hero",20)
    },[setLogoutSeller])

    // const logoutHandler = ()=>{
        
    // }

    // console.log("monuoo");
    // console.log(setLogoutSeller);

    return (
        <div className='logout me-4'>
            <div>
                <img 
                ref={imgRef}
                src={`http://localhost:5001/${currentLogedSeller.profileImg}`} 
                alt="" 
                className='pictu ms-5' 
                onClick={ () => setOpen(!open)}
                />
             </div>
                {
                    open && (
                        <div ref={menuRef} className="menus bg-white px-5 py-3 border border-secondary rounded">
                            {
                                menuItem.map((item) => (
                                    <ul>
                                        <li className='text-dark'>{item}</li>
                                    </ul>
                                ))
                               
                            }
                             <div className="logout-btn">
                                    <button type='btn' className='btn btn-success' onClick={()=> setLogoutSeller("")}>Logout</button>
                            </div>
                            
                        </div>
                    )
                } 
            
           
        </div>
    )
}

export default SellerProfile