'use client';

import { useState } from "react";

const ReviewForm = ({handleSubmit}) => {
    const [name, setName] = useState('');
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');

    //Handle the rating click 
    const handleRating = (star) => {
        setRating(star);
    };

    //Handle form submission 
    const onSubmit = (e) => {
        e.preventDefault();
        const reviewData = {
            name,
            rating,
            comment,
        };

        handleSubmit(reviewData);
        setName('');
        setRating(0);
        setComment('');
    };

    return (
        <form onSubmit={onSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>

            <div>
                <label>Rating:</label>
                <div style={{display:'flex', gap:'5px'}}>
                    {/*Render Unicode stars*/}
                    {[1,2,3,4,5].map((star) => (
                        <button
                            key={star}
                            type="button"
                            onClick={() => handleRating(star)}
                            style={{
                                fontSize:'24px',
                                color: star <=rating ? 'gold' : 'gray', //Change color based on the rating 
                                background:'none',
                                border:'none',
                                cursor:'pointer',
                            }}
                        >
                            {star <= rating ? '★' : '☆'} {/* Unicode for filled and empty stars */}
                        </button>
                    ))}
                </div>
            </div>

            <div>
                <label htmlFor="comment">Comment:</label>
                <textarea
                    id="comment"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    required
                ></textarea>
            </div>

            <button type="submit">Submit Review</button>
        </form>
    );
};

export default ReviewForm;