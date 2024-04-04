import React,{useContext, useEffect} from "react";
import { ShopContext } from "../../contexts/shopContextProvider";
import axios from "axios";

function OrderDetails({ orderid,paymentid }) {
  const {removeFromCart,cartProduct,totalPrice,custID} = useContext(ShopContext)

useEffect(()=>{

//console.log({"product_id":cartProduct.product_id,"rorder_id":orderid,"cust_id":custID,"quantity":cartProduct.quantity,"rpayment_id":paymentid})
const data={"carts":cartProduct,"rorder_id":orderid,"cust_id":custID,"rpayment_id":paymentid}

console.log("----- card product -----  ",data)
axios
.post("https://www.ncenanded.com/project/chaitanya/addRazorpayOrder.php", data)
.then(function (response) {
 // getProdData(response)
 console.log(response)
})

//removeFromCart()
},[])


  return (
    <>
      <div>
        <table class="table">
          <thead>
            <tr>
              <th className="text-start" scope="col">
                Product
              </th>
              <th className="text-start" scope="col">
                quantity
              </th>
              <th className="text-end" scope="col">
                Total
              </th>
            </tr>
          </thead>

          <tbody>
            {
              cartProduct.map((item,index)=>{

                return <>
               { console.log("-----  ",item)}
                  <tr key={index}>
              <td className="text-start">{item.title}</td>
              <td className="text-start">{item.quantity}</td>
              <td className="text-end"> ₹ {item.amount} /-</td>
            </tr>
                </>
              })

            }
          

          
          </tbody>

          <thead>
            <tr>
              <th className="text-start" scope="col">
                Total
              </th>
              <th></th>
              <th className="text-end" scope="col">
                ₹ {totalPrice} /-
              </th>
            </tr>
          </thead>
        </table>
      </div>
    </>
  );
}

export default OrderDetails;
