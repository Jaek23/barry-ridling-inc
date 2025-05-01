'use client';

import { useState, useEffect } from "react";
import ReviewForm from "./reviewForm";
import ReviewList from "./reviewList";
import styles from './reviewStyles/reviewSection.module.css';

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
        <div className={styles.container}>
            <div className={styles.formContainer}>
                <ReviewForm onAddReview={handleAddReview}/>
            </div>
            <div>
                {loading ? (
                    <div style={styles.loading}>
                        <div className={styles.spinner}></div>
                        <p className={styles.loadingText}>Loading reviews...</p>
                    </div>
                ) : (
                    <ReviewList reviews={reviews}/>
                )}
            </div>
        </div>
    );
}