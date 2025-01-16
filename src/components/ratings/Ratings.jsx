import React from 'react'
import './Ratings.css'

const Ratings = ({rating}) => {
  const stars = [];
  for(let i =1; i<= 5; i++){
    stars.push(
    <span key={i} >
      <i className={`ri-star${i<=rating? '-fill' : '-line'}`}></i></span>)
  }
  return (
    <>
        <div className='rating'>
        {stars}
        </div>
    </>
  )
}

export default Ratings