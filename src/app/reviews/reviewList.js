'use client';

import { useState, useEffect } from "react";

const ReviewList = () => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(false);

    //Fetch reviews from the backend
    const fetchReviews = async () => {
        setLoading(true);
        try {
            const response = await fetch('/api/reviews');
            const data = await response.json();
            setReviews(data);
        } catch (error) {
            console.error('Error fetching reviews:', error);
        } finally {
            setLoading(false);
        }
    };

    //Fetch reviews when component loads
    useEffect(() => {
        fetchReviews();
    }, []);

    return (
        <div>
            <h2>Customer Reviews</h2>
            {loading ? (
                <p>Loading reviews</p>
            ) : reviews.length === 0 ? (
                <p>No reviews yet.</p>
            ) : (
                <ul>
                    {reviews.map((review) => (
                        <li key={review._id}>
                            <p><strong>{review.name}</strong></p>
                            <p>Rating: {Array(review.rating).fill('★').join('')}</p>
                            <p>{review.comment}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ReviewList;