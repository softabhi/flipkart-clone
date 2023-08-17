import React, { useEffect, useState,useContext } from 'react'
import { globleInfo } from '../../App';
// export const userGetFunction = (id)=>{
//     //  console.log(id);
//     return id;
// }

// const targetId = userGetFunction;
// console.log(targetId);


const SingleUser = () => {
    

    const [viewUserData, setSingleUserData] = useState("");
    const [userId, setUserId] = useState("");
     
    const {appColor,singleUserId} = useContext(globleInfo);
    console.log(appColor)
    console.log(singleUserId)

    
    // setUserId(userGetFunction);
    // console.log(userId)

  const singleUserDetails =async (userId) =>{
    fetch(`http://localhost:5001/api/v1/singleUser/${singleUserId}`)
    .then((response)=>{
        return response.json();
    }).then((userData)=>{
          setSingleUserData(userData);
    })
}



useEffect(()=>{
    singleUserDetails();
},[])

console.log(viewUserData);
  return (
    <>
      <div className="container">
        <div className="row">
            <div className="col">
               <h3>User Name:{viewUserData.name}</h3>
               <h3>abhishek kumar</h3>
               <h3>email</h3>
            </div>
            <div className="col">
               <h3>user id</h3>
               <h3>user id</h3>
            </div>
        </div>
      </div>
    </>
  )
}

export default SingleUser