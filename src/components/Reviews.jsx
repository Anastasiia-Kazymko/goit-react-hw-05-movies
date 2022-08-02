import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { findReviewsId } from 'components/Services/fetch-movie';
import ReviewsList from 'components/ReviewsList';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const [noReviews, setNoReviews] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    if (!id) {
      return;
    }

    findReviewsId(id)
      .then(rez => {
        setReviews(rez.results);
        if (rez.results.length === 0) {
          setNoReviews("We don't have any reviews for this movie");
        }
      })
      .catch(error => console.log(error));
  }, [id]);
  return (
    <div>
      {reviews && <ReviewsList reviews={reviews} noReviews={noReviews} />}
    </div>
  );
};

export default Reviews;
