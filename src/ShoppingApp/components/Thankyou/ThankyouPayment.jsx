import React,{useContext} from "react";
import { ShopContext } from "../../contexts/shopContextProvider";
function ThankyouPayment({orderid}) {
  const {totalPrice} = useContext(ShopContext)
  function getDate() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    return `${month}/${date}/${year}`;
  }

  return (
    <>
      <div className=" main-payment-Box">
        <div>
          <p>Order Number:</p>
          <span>{orderid}</span>
        </div>
        <div>
          <p>Date:</p>
          <span>{getDate()}</span>
        </div>
        <div>
          <p>Total:</p>
          <span>₹ {totalPrice}</span>
        </div>
        <div>
          <p>Payment method:</p>
          <span>Online</span>
        </div>
      </div>
    </>
  );
}

export default ThankyouPayment;
