import React, { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";


function MyReviews({ user, destinations }) {
  const [reviews, setReviews] = useState([])
  const [starInput, setStarInput] = useState("");
  const [reviewInput, setReviewInput] = useState("");
  const [reviewEditInput, setReviewEditInput] = useState("");
  const [starEditInput, setStarEditInput] = useState("");

  useEffect(() => {
    fetch(`/reviews`)
      .then((res) => res.json())
      .then((data) => setReviews(data))
  },[])

  const deleteReview = (review) => {
    fetch(`/reviews/`,{
      method: 'DELETE'
    })
      .then((res) => res.json())
      .then((data) => {
        handleDeleteReview(data)(reviews.filter((review) => review.id !== data.id));
      });
  };
  const handleDeleteReview = (data) => {
    setReviews(reviews.filter((review) => review.id !== data.id))
  }

  const renderReviews = reviews.map((review) => {
    return (
      <div className='review'>
        <h3>{destinations.map(destination => destination.id === review.destination_id ? destination.name : null)}:</h3>
        <ReviewCard
          key={review.id}
          review= {review.content}
          reviewInput={reviewInput}
          setReviewInput={setReviewInput}
          starInput={starInput}
          setStarInput={setStarInput}
          reviewEditInput={reviewEditInput}
          setReviewEditInput={setReviewEditInput}
          setStarEditInput={setStarEditInput}
          starEditInput={starEditInput}
        />
      </div>
    );
  });

  return (
    <div style={{fontFamily: 'Georgia, serif', marginBottom: '10px'}}>
      <div className='reviews-header-div'>
          <h1>MY REVIEWS</h1>
        </div>
        <div className="reviews-container">
            {renderReviews}
         
        </div>
      </div>
  );
}
export default MyReviews;