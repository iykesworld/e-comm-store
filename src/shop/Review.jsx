import React, { useState } from "react";
import "./Shop.css";
import { useSelector } from "react-redux";
import avatar from '../assets/avatar.png'
import { formatDate } from "../utils/formatDate";
import Ratings from "../components/ratings/Ratings";
import PostReviews from "./PostReviews";





const Review = ({ productReview }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const reviews = productReview || [];

  const handleOpenReviewModal =()=>{
    setIsModalOpen(true);
  }
  const handleCloseReviewModal =()=>{
    setIsModalOpen(false);
  }

    
  return (
    <div className="review">
      {
        reviews.length> 0 ? (<div>
          <h3>All Comments</h3>
          <div>
            {
              reviews.map((review, index)=>(
                <div key={index} className="review-wrapper">
                  <div className="review-top">
                  <div className="review-image">
                    <img src={review?.userId?.profileImage || avatar} alt="user profile" />
                  </div>
                  <div className="review-details">
                    <p>{review.userId.username || 'Anonymous'}</p>
                    <p>{formatDate(review?.updatedAt)}</p>
                    <Ratings rating= {review?.rating}/>
                  </div>
                  </div>
                  
                  <div className="review-comment">
                    <p>{review?.comment}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>):(<div>No Reviews</div>)
      }
      {/* add review button */}
      <div className="review-btns">
        <button onClick={handleOpenReviewModal}>Add A Review</button>
      </div>
      {/* review modal */}
      <PostReviews isModalOpen={isModalOpen} handleCloseReviewModal={handleCloseReviewModal} />
    </div>
  );
};

export default Review;
