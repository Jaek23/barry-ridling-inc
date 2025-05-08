import galleryImages from "./gallery/galleryData";
import Image from "next/image";

export default function HomePage() {
    return (
        <main>
            <h1>Gallery</h1>
            <div 
                style={{
                    display:'flex', 
                    flexWrap:'wrap', 
                    gap:'1rem', 
                    justifyContent:'center'
                    }}
                >
                {galleryImages.map((image, index) => (
                    <div key={index} 
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            overflow: "hidden",
                            borderRadius: "8px",
                            border: "1px solid #eee",
                    }}>
                        <Image
                            src={image.src}
                            alt={image.alt}
                            width={300}
                            height={250}
                            unoptimized
                            style={{
                                borderRadius: "8px",
                            }}
                        />
                    </div>
                ))}
            </div>
        </main>
    );
}