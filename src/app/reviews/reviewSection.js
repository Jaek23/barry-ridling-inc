'use client';

import { useState, useEffect } from "react";
import ReviewForm from "./reviewForm";
import ReviewList from "./reviewList";

export default function ReviewSection({initialReviews}) {
    const [reviews, setReviews] = useState(initialReviews || []);
    const [loading, setLoading] = useState(false);

    //After from submission, re-fetch the latest reviews
    const handleAddReview = async () => {
        try {
            setLoading(true);
            const response = await fetch('/api/reviews');
            if(response.ok) {
                const updatedReviews = await response.json();
                setReviews(updatedReviews);
            }
        } catch (error) {
            console.error('Failed to fetch updated reviews:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        handleAddReview();
    }, [])

    return (
        <div>
            <ReviewForm onAddReview={handleAddReview}/>
            {loading ? (
                <div style={{textAlign:'center', marginTop: '2rem'}}>
                    <div className="spinner"></div>
                    <p>Loading reviews...</p>
                </div>
            ) : (
                <ReviewList reviews={reviews}/>
            )}
        </div>
    );
}