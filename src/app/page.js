import galleryImages from "./gallery/galleryData";
import Image from "next/image";

export default function HomePage() {
    return (
        <main>
            <h1>Gallery</h1>
            <div style={{display:'flex', flexWrap:'wrap', gap:'1rem', justifyContent:'space-around'}}>
                {galleryImages.map((image, index) => (
                    <div key={index} style={{position:'relative', width:'300px', height:'200px'}}>
                        <Image
                            src={image.src}
                            alt={image.alt}
                            layout="fill"
                            objectFit="cover"
                            style={{borderRadius:'8px'}}
                        />
                    </div>
                ))}
            </div>
        </main>
    );
}