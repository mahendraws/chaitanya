import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import allProducts from "../assets/allProduct.js";
import axios from "axios";



export const ShopContext =  createContext(null);

const getDefaultCart = ()=>{

}

const ShopContextProvider = (props) => {

    const [cartItems,setCartItems] = useState(0);
    const [isLogin,setLogin] = useState(false);
    const [custID,setCustID] = useState(0);
    const [productID,setProductID] = useState(0);


    const addToCart = (itemId,quantity) =>{
    
console.log("cart item : ",itemId,quantity,custID)


axios
.post("https://www.ncenanded.com/project/chaitanya/addtocart.php", {"itemId":itemId,"quantity":quantity,"custID":custID})
.then(function (response) {
  console.log("cart added >>> ", response.data);

  if(response.data.error)
  {


  }else{

    setCartItems(response.data.totalItems)


    console.log("cart items ",cartItems)
   // setTimeout(function(){navigate("/AllProducts")},1000);

  }

})
.catch(function(err){ console.log("Server is busy, Please try after some time...") })


    }

    const removeFromCart = (itemId) =>{
        
    }
    
    const getTotalCartAmount = () => {
     
        
      }

      const getTotalCartItems = () =>{
   
      }

    const contextValue = {setCartItems,custID,setCustID,productID,setProductID,setLogin,isLogin,getTotalCartItems,getTotalCartAmount,allProducts,cartItems,addToCart,removeFromCart};
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}     
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;