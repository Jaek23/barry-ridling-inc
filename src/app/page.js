import galleryImages from "./gallery/galleryData";
import Image from "next/image";
import { metadata as allMetadata } from "@/lib/metadata";
import styles from './homePage.module.css';
import Link from 'next/link';
import GalleryModal from "./gallery/galleryModal";
import { FaPaintRoller, FaHome, FaLayerGroup } from 'react-icons/fa';

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
    "image": [
        "https://www.barryridlingpainting.com/exterior-big-house-painting.jpg",
        "https://www.barryridlingpainting.com/master-room-painting",
        "https://www.barryridlingpainting.com/bathroom-painting",
        "https://www.barryridlingpainting.com/kitchen-living-painting"
    ] 
  };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />
            <main className={styles.main}>
                {/*Hero Section */}
                <section className={styles.heroSection}>
                    <h1>Barry Ridling Painting | A Quality Professional Painting Service</h1>
                    <p>Interior & Exterior Painting You Can Count On!</p>
                    <p>Get your FREE ESTIMATE TODAY!</p>
                    <Link href="/estimate">
                        <button className={styles.heroButton}>Get a Free Estimate</button>
                    </Link>
                </section>

                {/* Service Cards Section */}
                <section className={styles.cardsSection}>
                    <div className={styles.cardsContainer}>
                        <div className={styles.card}>
                            <FaPaintRoller className={styles.icon} />
                            <h3>Interior Painting</h3>
                            <p>
                               Refresh your indoor spaces with clean, even coats and professional results.
                               We handle living rooms, kitchens, bedrooms, and more with care and precision. 
                            </p>
                        </div>
                        <div className={styles.card}>
                            <FaHome className={styles.icon} />
                            <h3>Exterior Painting</h3>
                            <p>
                               Make a great first impression with exterior painting that stands up to the elements.
                               From trim to full facades, we deliver long lasting curb appeal.
                            </p>
                        </div>
                        <div className={styles.card}>
                            <FaLayerGroup className={styles.icon} />
                            <h3>All Textures & Finishes</h3>
                            <p>
                               We work with all surface types and finishes-from smooth walls to textured ceilings-
                               providing custom solutions tailored to your style.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Quick Service Summary Section */}
                <section className={styles.quickSummary} >
                <div className={styles.serviceList}>
                    <div>
                        <h3>What We Do</h3>
                        <ul>
                            <li>Interior Painting</li>
                            <li>Exterior Painting</li>
                            <li>All Textures & Finishes</li>
                        </ul>
                    </div>
                    <div> 
                        <h3>Who We Serve</h3>
                        <ul>
                            <li>Residential Homes</li>
                            <li>Commercial Properties</li>
                            <li>Churches</li>
                            <li>Schools</li>
                        </ul>
                    </div> 
                    <div className={styles.calloutBox}>
                        <p>
                            Ready to bring new life to your home or business? Contact <strong>Barry Ridling Painting</strong> today at <strong>214-989-5841</strong> for a free, no-obligation estimate and expert advice tailored to your project needs.
                        </p>
                    </div>    
                </div>
                </section>

                {/* Services Section*/}
                <section className={styles.serviceSection}>
                    <div className={styles.serviceContentWrapper}>
                        
                        {/* Left Text Content */}
                        <div className={styles.textWrapper}>
                        <h1>About Us!</h1>
                        <p>
                            <strong>Barry Ridling Painting</strong> is a trusted, locally owned painting company with a strong reputation for delivering
                            high-quality interior and exterior painting services. With years of hands-on experience, we specialize in a
                            wide range of textures, finishes, and custom color applications tailored to suit each client&apos;s unique vision.
                            Our skilled team proudly serves residential homes, commercial spaces, and institutional buildings such as
                            churches and schools. From small touch-ups to complete transformations, we bring precision, professionalism, and a personal
                            touch to every project. Whether you are looking to refresh your living room, modernize
                            your kitchen, or give your facility a professional edge, Barry Ridling Painting is committed to bringing your
                            space to life. Free estimates and consultations are always available—let&apos;s make your vision a reality.
                        </p>

                        {/* Call to Action Buttons */}
                        <div className={styles.buttonRow}>
                            <Link href="/reviews">
                            <button className={styles.homeButton}>Submit a Review</button>
                            </Link>
                            <Link href="/estimate">
                            <button className={styles.homeButton}>Free Estimates</button>
                            </Link>
                        </div>
                        </div>

                        {/* Right Image */}
                        <div className={styles.imageWrapper}>
                        <img src="/exterior-big-house-painting.jpg" alt="Exterior house painting" />
                        </div>
                    </div>
                </section>             

                {/*Gallery Section*/}
                <section className={styles.gallerySection}>
                    <h1>Gallery</h1>
                    <p><strong>Check out our previous work!</strong></p>
                    <GalleryModal images={galleryImages} />
                </section>
            </main>
        </>
    );
}