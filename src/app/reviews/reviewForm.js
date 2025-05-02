'use client';

import { useState } from "react";
import styles from './reviewStyles/reviewForm.module.css'

const ReviewForm = ({onAddReview}) => {
    const [name, setName] = useState('');
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');
    const [message, setMessage] = useState('');

    //Handle the rating click 
    const handleRating = (star) => {
        setRating(star);
    };

    //Handle form submission and POST request
    const handleSubmit = async (e) => {
        e.preventDefault();
        const reviewData = {
            name,
            rating,
            comment,
        };

        try {
            const response = await fetch('/api/reviews', {
                method:'POST',
                headers: {
                    'Content-Type': 'application/json',
                },

                body:JSON.stringify(reviewData),
            });

            if(response.ok) {
                setMessage('Review submitted successfully!');
               
                //Clear the form fields 
                setName('');
                setRating(0);
                setComment('');

                //Call addReview to update list immediately 
                if(onAddReview) {
                    onAddReview();
                }

            } else {
                setMessage('Failed to submit review.');
            }
        } catch (error) {
            console.error('Error submitting review:', error);
            setMessage('An error occured. Please try again later.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <h2 className={styles.heading}>Submit a Review</h2>
            <div className={styles.group}>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>

            <div className={styles.group}>
                <label>Rating:</label>
                <div className={styles.stars}>
                    {/*Render Unicode stars*/}
                    {[1,2,3,4,5].map((star) => (
                        <button
                            key={star}
                            type="button"
                            onClick={() => handleRating(star)}
                            className={`${styles.star} ${star <= rating ? styles.active : ''}`}
                        >
                            {star <= rating ? '★' : '☆'} {/* Unicode for filled and empty stars */}
                        </button>
                    ))}
                </div>
            </div>

            <div className={styles.group}>
                <label htmlFor="comment">Comment:</label>
                <textarea
                    id="comment"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    required
                ></textarea>
            </div>

            <button type="submit" className={styles.submit}>Submit Review</button>
            {message && <p className={styles.message}>{message}</p>}
        </form>
    );
};

export default ReviewForm;