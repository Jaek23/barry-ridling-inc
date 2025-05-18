import ReviewSection from "./reviewSection";
import { metadata as allMetadata} from "@/lib/metadata";

// Add this to export the metadata properly 
export const metadata = {
    ...allMetadata.review,
};

async function fetchReviews () {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/reviews`, {
        cache:'no-store'
    });

    if(!response.ok) {
        throw new Error('Failed to fetch reviews');
    }

    return response.json();
}

//Helper to calculate average rating
function calculateAverageRating(reviews) {
    if(!reviews.length) return 0;
    const total = reviews.reduce((sum, review) => sum + review.rating, 0);
    return (total / reviews.length).toFixed(1);
}

export default async function ReviewPage() {
    const initialReviews = await fetchReviews();

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Barry Ridling Painting",
        "url": "https://www.barryridlingpainting.com",
        "description": "Barry Ridling Inc provides professional interior and exterior painting services for churches, schools, homes, and commercial buildings across the Dallas-Fort Worth metroplex. Read verified customer reviews and testimonials.",
        "telephone": "+1-214-989-5841",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "6405 W. El Dorado Parkway Suite 600",
            "addressLocality": "Mckinney",
            "addressRegion": "TX",
            "postalCode": "75070",
            "addressCountry": "US"
        },
        "contactPoint": [
            {
                "@type": "ContactPoint",
                "telephone": "+1-214-989-5841",
                "contactType": "customer service",
                "areaServed": "US"
            },
            {
                "@type": "ContactPoint",
                "telephone": "+1-972-238-8767",
                "contactType": "office",
                "areaServed": "US"
            }
        ],
        "areaServed": {
        "@type": "Place",
        "name": "Dallas-Fort Worth Metroplex"
        },
        "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": calculateAverageRating(initialReviews),
        "reviewCount": initialReviews.length
        },
        "review": initialReviews.map((review) => ({
        "@type": "Review",
        "author": {
            "@type": "Person",
            "name": review.name || "Anonymous"
        },
        "reviewBody": review.comment,
        "reviewRating": {
            "@type": "Rating",
            "ratingValue": review.rating,
            "bestRating": "5",
            "worstRating": "1"
        },
        "itemReviewed": {
            "@type": "LocalBusiness",
            "name": "Barry Ridling Painting"
    }
      }))
    };

    return (
        <>
        {/*Structured Data for SEO*/}
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{__html: JSON.stringify(structuredData)}}
        />
        <div>
            <ReviewSection initialReviews={initialReviews}/>
        </div>
        </>        
    ) 
}