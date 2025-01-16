import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { useFetchProductByIdQuery } from '../redux/feature/products/productsApi';
import { usePostReviewMutation } from '../redux/feature/reviews/reviewsApi';

const PostAReview = ({ isModalOpen, handleCloseReviewModal}) => {
  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState('')

  const {id} = useParams();
  const {user} = useSelector((state) => state.auth);
  const {refetch} = useFetchProductByIdQuery(id, {skip: !id});
  const [postReview, { isLoading}] = usePostReviewMutation();

  const navigate = useNavigate();
 

  const handleRating = (value) => {
    setRating(value)
  }

  const handleSubmit = async (e)=>{
    e.preventDefault();
    if(!user){
      alert('Please login to comment on this post');
      navigate('/login');
      return;
    }

    if (!comment || rating === 0) {
      alert("Please provide both a comment and a rating");
      return;
    }

    const newComment = {
      comment: comment,
      rating: rating,
      userId: user?.id,
      productId: id
    };
    try {
      const response = await postReview(newComment).unwrap();
      alert('Comment posted successfully');
      setComment('');
      setRating(0);
      refetch();
    } catch (error) {
      console.error("Error Posting Review:", error);
      alert(error?.data?.message || "An error occurred while posting your comment");
    }
    handleCloseReviewModal();
  }

  return (
    <div className={`${isModalOpen ? 'postreview-modal' : 'close' }`}>
      <div className='postreview-wrapper'>
        <h2>Post A Review</h2>
        <div className='postreview-rating'>
          {
            [1,2,3,4,5].map((star)=>(
              <span key={star} onClick={()=> handleRating(star)}>
                {
                  rating >= star ? (<i className="ri-star-fill"></i>):(<i className="ri-star-line"></i>)
                }
              </span>
            ))
          }
        </div>
        <label htmlFor="review-comment" className="sr-only">
            Write your review
          </label>
        <textarea 
        id="review-comment"
        className='postreview-textarea'
        value={comment} 
        onChange={(e)=> setComment(e.target.value)}
        rows='4'
        ></textarea>
        <div className='postreview-btns'>
          <button onClick={handleCloseReviewModal} disabled={isLoading}>Cancel</button>
          <button onClick={handleSubmit} disabled={isLoading}>{isLoading ? "Submitting..." : "Submit"}</button>
        </div>
      </div>
    </div>
  )
}

export default PostAReview