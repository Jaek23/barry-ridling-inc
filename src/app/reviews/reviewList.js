'use client';
import { useState } from "react";
import styles from './reviewStyles/reviewList.module.css';

const ReviewList = ({reviews}) => {
    const [expandedReviewIds, setExpandedReviewIds] = useState(new Set());

    if (!reviews) {
        return <p>No reviews yet.</p>
    }

    const toggleExpand = (id) => {
        const newSet = new Set(expandedReviewIds);
        if (newSet.has(id)) {
            newSet.delete(id);
        } else {
            newSet.add(id)
        }
        setExpandedReviewIds(newSet);
    };

    return (
        <div>
            <h2 className={styles.heading}>Customer Reviews</h2>
            {reviews.length === 0 ? (
                <p className={styles.message}>No reviews yet.</p>
            ) : (
                <div className={styles.reviewList}>
                    {reviews.map((review) => {
                        const isExpanded = expandedReviewIds.has(review._id);
                        return (
                            <div key={review._id} className={styles.reviewItem}>
                                <p className={styles.reviewName}><strong>Name:</strong> {review.name}</p>
                                <p className={styles.reviewRating}>
                                    <strong>Rating:</strong>{' '}
                                    <span className={styles.stars}>
                                        {Array(review.rating).fill('★').join('')}
                                    </span>
                                </p>
                                <p className={`${styles.reviewComment} ${isExpanded ? styles.expanded : styles.truncated}`}>
                                    <strong>Comment:</strong> {review.comment}
                                </p>
                                {review.comment.length > 150 && (
                                    <button
                                        className={styles.readMoreButton}
                                        onClick={() => toggleExpand(review._id)}
                                    >
                                        {isExpanded ? "Show less" : "Read more"}
                                    </button>
                                )}
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default ReviewList;