import { useState,useContext } from "react";
import { BASE_URL } from "../helpers/backedurl";
import axios from 'axios';
import { globleInfo } from '../App'



const useCartItems = (intialValue = 0) => {
      const [item, setItem] = useState(intialValue)
      const [cartLength, setCartLength] = useState(intialValue)
      const{logedUser} = useContext(globleInfo)
      

      let userId = logedUser
      axios.get(`${BASE_URL}/api/v2/cartItems/${userId}`) 
      .then(res=>{
            setItem(res.data.result)
            // setCartLength(res.data.result.lenght())
      }) 


 
    return{
        item,cartLength
    }

}

export default useCartItems;