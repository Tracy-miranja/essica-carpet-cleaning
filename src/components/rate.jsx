// import React from 'react';

const CarpetCleaningReview = () => {
  const handleReviewClick = () => {
    window.open(
      "https://www.google.com/search?q=essica-carpet-cleaning",
      "_blank"
    );
  };

  return (
    <div>
      <h2>Rate Our Carpet Cleaning Services</h2>
      <p>
        We hope you were satisfied with our carpet cleaning services. Please
        consider leaving us a review!
      </p>
      <button onClick={handleReviewClick}>Leave a Review</button>
    </div>
  );
};

export default CarpetCleaningReview;
