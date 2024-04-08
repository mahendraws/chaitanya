import React, { useEffect,useContext,useState,useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./CheckoutMain.css";
import ShppingAddress from "./ShppingAddress";
import { ShopContext } from "../../contexts/shopContextProvider";
import ProductInfo from "./ProductInfo";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.jpg"
import axios from "axios";
import useRazorpay from "react-razorpay";

function CheckoutMain() {
  const navigate = useNavigate()
  const {custID,totalPrice} = useContext(ShopContext)
  const [Razorpay] = useRazorpay();

  const [profileData2, setProfileData2] = useState({
    name: "",
    email: "",
    mobilenumber: "",
    address1: "",
    address2: "",
    newpassword: "",
    country: "",
    state: "",
    city: "",
    pincode: "",
    cust_id:"",
    isUpdate:"",
  });


 


useEffect(()=>{



},[profileData2])

  



  useEffect(()=>{

  
    axios
    .post(
      "https://www.ncenanded.com/project/chaitanya/profile.php",
      {"cust_id":custID,"isUpdate":"0"}
    )
    .then(function (response) {
     // setCustDetails(response.data)
      console.log("from checkout .... ",response.data.mobilenumber);
      //navigate('/');
      setProfileData2(response.data)



    });
  
  },[])



  const handlePayment = useCallback( () => {
    //const order = await createOrder();
    let options ={};



    axios
    .post(
      "https://www.ncenanded.com/project/chaitanya/createOrder.php",
      {
        billing_name: profileData2.name,
        billing_email: profileData2.email,
        billing_mobile: profileData2.mobilenumber,
        shipping_name: profileData2.name,
        shipping_email:profileData2.email,
        shipping_mobile: profileData2.mobilenumber,
        paymentOption:"netbanking",
        payAmount:totalPrice,
        action:"payOrder"
      }
    )
    .then(function (response) {
  
  if(response.data.res === "success")
  {
     
   options = {
      key: "rzp_test_uKrmtDbfsodwQi",
      amount: totalPrice*100,
      currency: "INR",
      name: "Chaitany Natural",
      description: "Pur natural Products",
      image: {logo},
     order_id:response.data.userData.rpay_order_id,
      handler: (res) => {
        console.log("payment success .... ",res);
        console.log(res);
        navigate("/Thankyou",{ state: res })
      },
      prefill: {
        name: profileData2.name,
        email: profileData2.email,
        contact: profileData2.mobilenumber,
      },
      notes: {
        address: profileData2.city,
      },
      theme: {
        color: "#3399cc",
      },
    };
     

    const rzpay = new Razorpay(options);
    rzpay.open();

  }else{

  }


    });



  }, [Razorpay]);


  return (
    <>
      <div>
        <div className="container MainBox">
          <div>
            <div className="container col-12 MainReview">
              <h4>Proceed to Checkout</h4>
              <hr />
              <div className="container MainCheckout">
              <div className="row">
                <div className="col-md-7 ShippingDIV">
                  <ShppingAddress />
                 
                </div>
                <div className="col-md-5 ProductINFO">
                  <ProductInfo />
                </div>

                </div>

              </div>

              <div className="mt-3 mb-3 review-Btn d-flex justify-content-between ">
                <div>
                  <p className="mx-2 mt-3" style={{ cursor: "pointer" }}>
                    <Link to="/Addtocart">Return to cart</Link>
                  </p>
                </div>
                <div>
                  <button onClick={handlePayment}>Proceed to Payment </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CheckoutMain;
