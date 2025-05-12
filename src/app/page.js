import galleryImages from "./gallery/galleryData";
import Image from "next/image";
import { metadata as allMetadata } from "@/lib/metadata";

//Export SEO metadata
export const metadata = {
    ...allMetadata.home
};

export default function HomePage() {
    const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Barry Ridling Inc",
    "url": "https://www.barryridlingpainting.com",
    "description": "Interior and exterior painting services with all textures and finishes for churches, schools, homes, and commercial buildings across DFW.",
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
    "serviceType": [
      "Interior Painting",
      "Exterior Painting",
      "Texture Finishes",
      "Residential Painting",
      "Commercial Painting",
      "Church Painting",
      "School Painting"
    ],
    "image": "https://www.barryridlingpainting.com/exterior-big-house-painting.jpg"
  };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />
            <main style={{padding:"2rem"}}>
                {/* Services Section*/}
                <section style={{marginBottom:"3rem"}}>
                    <h1>Our Services</h1>
                    <p style={{maxWidth:"600px", marginBottom:"1.5rem"}}>
                        <strong>Barry Ridling Painting</strong> is a trusted local painting company specializing in both 
                        interior and exterior projects. With expertise in all textures and finishes, we proudly Serve
                        residential, commercial, and institutional porperties like churches and schools. Whether you're
                        refreshing a home or updating a large facility, we deliver quality craftsmanship and offer
                        free estimates!
                    </p>
                    <div
                        style={{
                            display:"flex",
                            flexWrap:"wrap",
                            gap:"2rem",
                            justifyContent:"center",
                            alignItems:"flex-start"
                        }}
                    >
                        <div>
                            <h2>What We Do</h2>
                            <ul>
                                <li>Interior Painting</li>
                                <li>Exterior Painting</li>
                                <li>All Textures & Finishes</li>
                            </ul>
                        </div>
                        <div>
                            <h2>Who We Serve</h2>
                            <ul>
                                <li>Residential Homes</li>
                                <li>Commercial Properties</li>
                                <li>Churches</li>
                                <li>Schools</li>
                            </ul>
                        </div>     
                    </div>
                </section>

                {/*Gallery Section*/}
                <section>
                    <h1>Gallery</h1>
                    <p><strong>Check out our previous work!</strong></p>
                    <div
                        style={{
                            display:"flex",
                            flexWrap:"wrap",
                            gap:"1rem",
                            justifyContent:"center",
                        }}
                    >
                        {galleryImages.map((image, index) => (
                            <div
                                key={index}
                                style={{
                                    display:"flex",
                                    justifyContent:"center",
                                    alignItems:"center",
                                    overflow:"hidden",
                                    borderRadius:"8px",
                                    border:"1px solid #eee"
                                }}
                            >
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    width={300}
                                    height={250}
                                    unoptimized
                                    style={{
                                        borderRadius:"8px"
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </>
    );
}