'use client';
import { useState } from "react";
import styles from './reviewStyles/reviewList.module.css';

const ReviewList = ({reviews}) => {
    if (!reviews) {
        return <p>No reviews yet.</p>
    }

    const [loading, setLoading] = useState(false);

    return (
        <div>
            <h2 className={styles.heading}>Customer Reviews</h2>
            {loading ? (
                <p className={styles.message}>Loading reviews</p>
            ) : reviews.length === 0 ? (
                <p className={styles.message}>No reviews yet.</p>
            ) : (
                <div className={styles.reviewList}>
                    {reviews.map((review) => (
                        <div key={review._id} className={styles.reviewItem}>
                            <p className={styles.reviewName}><strong> Name: {review.name}</strong></p>
                            <p className={styles.reviewRating}><strong>Rating:</strong>{Array(review.rating).fill('★').join('')}</p>
                            <p className={styles.reviewComment}><strong>Comment:</strong>{review.comment}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ReviewList;