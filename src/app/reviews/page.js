import ReviewForm from "./reviewForm";
import ReviewList from "./reviewList";
import { metadata as importMetadata} from "@/lib/metadata";

// Add this to export the metadata properly 
export const metadata = {
    title: importMetadata.title,
    description: importMetadata.description,
    keywords: importMetadata.keywords,
    alternates: {
        canonical: importMetadata.alternates.canonical,
    },
};

// Server-side fetching function
async function fetchReviews() {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/reviews`);
        if (!response.ok) {
            throw new Error('Failed to fetch reviews');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching reviews:', error);
        return [];
    }
}

export default async function ReviewPage() {
    const reviews = await fetchReviews();
    return (
        <div>
            <ReviewForm/>
            <ReviewList reviews={reviews}/>
        </div>
    ) 
}