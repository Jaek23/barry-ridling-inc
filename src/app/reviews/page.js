'use client';
import ReviewForm from "./reviewForm";
import { useState, useEffect } from "react";

//This function will handle the form submisson and send the review data to the backend 
const ReviewPage = () => {
    const [message, setMessage] = useState('');
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(false);

    //Fetch reviews from the backend 
    const fetchReviews = async () => {
        setLoading(true); //Start loading
        try {
            const response = await fetch('/api/reviews');
            const data = await response.json();
            setReviews(data)
        } catch (error) {
            console.error('Error fetching reviews:', error);
        } finally {
            setLoading(false);  //Stop the loading after the reviews are fetched 
        }
    };

    //Fetch reviews when page first loads
    useEffect(() => {
        fetchReviews();
    }, []);

    //Handle the review submission 
    const handleSubmit = async (reviewData) => {
        try {
            const response = await fetch('/api/reviews', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(reviewData), //Send the review data as JSON 
            });

            if(response.ok) {
                setMessage('Review submitted succesfully!');

                await fetchReviews(); //Refetches the updated list of reviews without having to reload the page

            } else {
                setMessage('Failed to submit review.');
            }
        } catch (error) {
            console.error('Error submitting review:', error);
            setMessage('An error occured. Please try again later.');
        }
    };

    return (
        <div>
            <h1>Submit a Review</h1>
            <ReviewForm handleSubmit={handleSubmit}/>
            {message && <p>{message}</p>} {/* This shows the submisson status message*/}

            <h2>Customer Reviews</h2>
            {loading ? ( //If loading, show spinner
                <p>Loading reviews...</p> 
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

export default ReviewPage;