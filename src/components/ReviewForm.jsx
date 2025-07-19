import React, { useState } from "react";
import "./ReviewForm.css";

const ReviewForm = () => {
  const [rating, setRating] = useState(0); // State for storing the star rating
  const [comment, setComment] = useState(""); // State for storing the comment

  const handleStarClick = (index) => {
    setRating(index + 1); // Update the rating based on star clicked
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to the server or log it)
    alert(`Rating: ${rating} stars\nComment: ${comment}`);
  };

  return (
    <div className="review-form-container">
      <h2>Leave a Review</h2>
      <form onSubmit={handleSubmit} className="review-form">
        <div className="star-rating">
          {[...Array(5)].map((_, index) => (
            <span
              key={index}
              className={`star ${rating > index ? "filled" : ""}`}
              onClick={() => handleStarClick(index)}
            >
              ★
            </span>
          ))}
        </div>

        <div className="comment-box">
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Write your comment here..."
            rows="4"
          />
        </div>

        <button type="submit" className="submit-btn">
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default ReviewForm;
