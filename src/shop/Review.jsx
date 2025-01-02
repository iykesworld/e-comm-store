import React, { useState } from "react";
import "./Shop.css";
import Ratings from "../components/ratings/Ratings";
import descImg from '../assets/descImage.webp'
import reviewImg1 from '../assets/review1.svg'
import reviewImg2 from '../assets/review2.svg'
import reviewImg3 from '../assets/review3.svg'

const reviewData = [
  {
    imgUrl: reviewImg1,
    imgAlt: "review image",
    name: "Ngozi Ashley",
    date: "Posted on August 20, 2024",
    desc: "I highly recommend this business. Their customer service is second to none. The ambiance here is always inviting and comfortable.",
  },
  {
    imgUrl: reviewImg2,
    imgAlt: "review image",
    name: "Emeka Okafor",
    date: "Posted on January 15, 2024",
    desc: "The product quality is consistently outstanding, exceeding my expectations every time. Pricing is fair and transparent - definitely value for money.",
  },
  {
    imgUrl: reviewImg3,
    imgAlt: "review image",
    name: "John Smith",
    date: "Posted on January 15, 2024",
    desc: "This place is worth splurge to look and feel wonderful. I recommend to anyone who is looking for some great design experience. I am happy to have patronize them.",
  },
];

const Review = () => {
    const[reviewTab, setReviewTab] = useState(1);
    const upDateReviewTab = (id)=>{
        setReviewTab(id)
    }
  return (
    <div className="review-description">
      <div className="review-main-button">
        <div className={reviewTab ===1 ? "review-desc-button-active" : "review-desc-button"} onClick={()=>upDateReviewTab(1)}>Reviews</div>
        <div className={reviewTab ===2 ? "review-desc-button-active" : "review-desc-button"} onClick={()=>upDateReviewTab(2)}>Descriptions</div>
      </div>
      <div className="review-info">
        <div className={reviewTab ===1 ? "review-update" : "description-inactive"}>
        {reviewData.map((review, index) => {
          return (
            <div className="review-content" >
              <div className="review-content-top">
                <div className="review-image-wrapper">
                  <img src={review.imgUrl} alt={review.imgAlt} />
                </div>
                <div className="review-details">
                  <div className="review-details-tops">
                    <h5>{review.name}</h5>
                    <p>{review.date}</p>
                    <Ratings />
                  </div>
                  <div>
                    <p>{review.desc}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <div className="review-form-wrapper">
          <h4>Add a Review</h4>
          <form >
            <div className="input-container">
              <input type="text" placeholder="Full Name *" />
              <input type="text" placeholder="Your Email *" />
              <div>
                <span>Your Ratings</span>
                <Ratings />
              </div>
            </div>
            <div className="textarea-wrapper">
              <textarea name="" id="" placeholder="Type Your Message" ></textarea>
            </div>
            <button className="btn">Submit Review</button>
          </form>
        </div>
        </div>

        {/* descriptions */}
        <div className={reviewTab ===2 ? "description" : "description-inactive"}>
          <div className="description-top">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              error consequatur deserunt omnis similique explicabo reprehenderit
              porro voluptatibus adipisci, voluptate consequuntur commodi
              delectus, rerum aliquam illo laborum doloribus molestias! Illum id
              doloribus accusantium est obcaecati omnis ullam quae cum! Culpa,
              beatae. Nobis, debitis ut? Tempora asperiores id consequuntur
              tempore voluptatem? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Modi error consequatur deserunt omnis similique
              explicabo reprehenderit porro voluptatibus adipisci, voluptate
              consequuntur commodi delectus, rerum aliquam illo laborum
              doloribus molestias! Illum id doloribus accusantium est obcaecati
              omnis ullam quae cum! Culpa, beatae. Nobis, debitis ut? Tempora
              asperiores id consequuntur tempore voluptatem?
            </p>
          </div>
          <div className="description-middle">
            <div className="description-list">
              <li>
                <i className="ri-star-line"></i> Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Modi error consequatur
              </li>
              <li>
                <i className="ri-star-line"></i> Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Modi error consequatur
              </li>
              <li>
                <i className="ri-star-line"></i> Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Modi error consequatur
              </li>
              <li>
                <i className="ri-star-line"></i> Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Modi error consequatur
              </li>
              <li>
                <i className="ri-star-line"></i> Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Modi error consequatur
              </li>
              <li>
                <i className="ri-star-line"></i> Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Modi error consequatur
              </li>
            </div>
            <div className="description-middile-image-wrapper">
              <img src={descImg} alt="description image" />
            </div>
          </div>
          <div className="description-bottom">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              error consequatur deserunt omnis similique explicabo reprehenderit
              porro voluptatibus adipisci, voluptate consequuntur commodi
              delectus, rerum aliquam illo laborum doloribus molestias! Illum id
              doloribus accusantium est obcaecati omnis ullam quae cum! Culpa,
              beatae. Nobis, debitis ut? Tempora asperiores id consequuntur
              tempore voluptatem? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Modi error consequatur deserunt omnis similique
              explicabo reprehenderit porro voluptatibus adipisci, voluptate
              consequuntur commodi delectus, rerum aliquam illo laborum
              doloribus molestias! Illum id doloribus accusantium est obcaecati
              omnis ullam quae cum! Culpa, beatae. Nobis, debitis ut? Tempora
              asperiores id consequuntur tempore voluptatem?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
