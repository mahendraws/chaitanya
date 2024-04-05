import React, { createContext, useState,useEffect } from "react";
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
    const [cust_name,setCustName] = useState("");
    const [custDetails,setCustDetails] = useState([{}])
    const [productID,setProductID] = useState(0);
const [totalPrice,setTotalPrice] =  useState(0)
const [cartProduct,setCartProduct] = useState([])


useEffect(()=>{

  getTotalCartAmount()
},[cartProduct])


    const getProductDetails=(product_id)=>{
      let d = allProducts.filter((ele)=> ele.productId === product_id);
      //const [title] = d[0]
        return ({"title":d[0].title ,"amount": d[0].price, "url":d[0].productImages[0]})
      
      }


    const addToCart = (itemId,quantity) =>{
    
console.log("cart item : ",itemId,quantity,custID)


axios
.post("https://www.ncenanded.com/project/chaitanya/addtocart.php", {"itemId":itemId,"quantity":quantity,"custID":custID})
.then(function (response) {
  console.log("cart added >>> ", response.data);

  if(response.data.error)
  {


  }else{

    //setCartItems(response.data.totalItems)
    getTotalCartItems()

    console.log("cart items ",cartItems)
   // setTimeout(function(){navigate("/AllProducts")},1000);

  }

})
.catch(function(err){ console.log("Server is busy, Please try after some time...") })


    }

    const removeFromCart = (itemId) =>{
      setCartProduct([]);
      setTotalPrice(0)
      axios
      .delete("https://www.ncenanded.com/project/chaitanya/getcarts.php", {data:{"cust_id":custID}})
      .then(function (response) {
       // getProdData(response)
      })

    }

    const deleteCartItem=(num)=>{

      console.log("delete order id " ,num)
      
      const fc = cartProduct.filter((val,index)=> val.order_id !== num)
      console.log("after delete ",fc)
      setCartProduct(fc)

      axios
      .delete("https://www.ncenanded.com/project/chaitanya/getcarts.php", {data:{"order_id":num}})
      .then(function (response) {
       // getProdData(response)
      })


      }

    
    const getTotalCartAmount = () => {
     
      let total=0;
      cartProduct.forEach((item)=>{
        console.log(item.title,(item.amount*item.quantity))
        total += (Number(item.quantity) * Number(item.amount))
      })
  setTotalPrice(total)
      }

      const getTotalCartItemsLogin = (id) =>{

        axios
        .post("https://www.ncenanded.com/project/chaitanya/getcarts.php", {"cust_id":id})
        .then(function (response) {
          getProdData(response)
        })

      }


      const getTotalCartItems = () =>{
   
        axios
        .post("https://www.ncenanded.com/project/chaitanya/getcarts.php", {"cust_id":custID})
        .then(function (response) {

          getProdData(response)

          
      
        })

      }


      const getProdData=(response)=>{

        let alld =[];
      
        response.data.forEach(element => {
          let obj2 = getProductDetails(element.product_id);
          let obj1= {"quantity":Number(element.quantity),"product_id":element.product_id,"order_id":element.order_id}
          let cb = {...obj1,...obj2}
          alld.push(cb);
        // setTotalPrice((amount)=> amount+Number(cb.amount))
        });
      
        setCartProduct(alld)

        console.log("all cart product details ------------  ",alld)

      }


const updateQuantity=(no,id)=>{

  
  // 1. Find the todo with the provided id
  const currentTodoIndex = cartProduct.findIndex((item) => item.order_id === id);
  // 2. Mark the todo as complete
  let cq = cartProduct[currentTodoIndex].quantity

  let updatedTodo={...cartProduct[currentTodoIndex], quantity: cq};;
  if(no)
  {
    if(cq>1){
    
      updatedTodo = {...cartProduct[currentTodoIndex], quantity: cq-1};
    }
    
  }else{
   updatedTodo = {...cartProduct[currentTodoIndex], quantity: cq+1};
  }


  const newTodos = [...cartProduct];
  console.log("updated todo ",updatedTodo)
  newTodos[currentTodoIndex] = updatedTodo;
  setCartProduct(newTodos);
  
}

    const contextValue = {removeFromCart,custDetails,setCustDetails,cust_name,setCustName,updateQuantity,getTotalCartItemsLogin,cartProduct,setCartProduct,setTotalPrice,totalPrice,getProductDetails,setCartItems,custID,setCustID,productID,setProductID,setLogin,isLogin,getTotalCartItems,getTotalCartAmount,allProducts,cartItems,addToCart,deleteCartItem};
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}     
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;