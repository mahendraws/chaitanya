import React, { useEffect, useState } from "react";
import Rating from "react-star-rating-lite";
import axios from "axios";
function Reviews(props) {
  const [review, setReview] = useState([]);
  const [filterreviews, setFilterreviews] = useState([]);
  useEffect(() => {
    axios
      .get("https://www.ncenanded.com/nidhisofttechnology/chaitanya/review.php")
      .then((response) => {
        setReview(response.data);
        const newfilter = response.data.filter((item) => {
          // console.log(item.product_id + 1);
          return Number(item.product_id) === props.productId;
        });
        setFilterreviews(newfilter);
      })
      .catch((error) => {
        console.error("Error fetching reviews:- ", error);
      });
  }, []);

  return (
    <div>
      <div className="container MainRevies">
        {filterreviews.map((val) => (
          <div key={val.id}>
            <hr />
            <p>
              <Rating weight="18" value={val.rating} />
            </p>
            <p style={{ color: "green", fontWeight: "600", lineHeight: "8px" }}>
              {val.title}
            </p>
            <p className="mb-1" style={{ fontSize: "14px" }}>
              <b>{val.user_name}</b> on <b>{val.user_email}</b>
            </p>
            <p style={{ fontSize: "14px", color: "" }}>{val.comments}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reviews;
