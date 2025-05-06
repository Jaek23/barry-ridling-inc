import EstimateForm from "./estimateForm";
import {metadata as allMetadata} from "@/lib/metadata";

//Add this to export the metadata properly 
export const metadata = {
    ...allMetadata.estimate,
};

export default function EstimatePage () {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Barry Ridling Inc",
        "url": "https://www.barryridlinginc.com",
        "description": "Interior and exterior painting services for churches, schools, homes, and commercial buildings in the DFW area.",
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
        "serviceType": "Interior and Exterior Painting Services"
    };

    return (
        <>
        {/* Structured Data for SEO */}
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <main>
            <EstimateForm/>
        </main>
        </>
    );
}