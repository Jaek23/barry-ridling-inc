'use client';
import { useState } from "react";
import Image from 'next/image';
import styles from './galleryStyles/galleryModal.module.css';

export default function GalleryModal({images}) {
    const [isOpen, setIsOpen] = useState(false);
    const [ currentIndex, setCurrentnIndex] = useState(0);

    const openModal = (index) => {
        setCurrentnIndex(index);
        setIsOpen(true);
    };

    const closeModal = () => setIsOpen(false);

    const nextImage = () =>
        setCurrentnIndex((prev) => (prev + 1) % images.length);

    const prevImage = () =>
        setCurrentnIndex((prev) => 
            prev === 0 ? images.length - 1 : prev - 1
        );

    return (
        <>
            <div className={styles.galleryGrid}>
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={styles.galleryItem}
                        onClick={() => openModal(index)}
                    >
                        <Image
                            src={image.src}
                            alt={image.alt}
                            width={300}
                            height={250}
                            className={styles.galleryImage}
                            unoptimized
                        />
                    </div>
                ))}
            </div>

            {isOpen && (
                <div className={styles.modalOverlay} onClick={closeModal}>
                    <div className={styles.imageWrapper} onClick={(e) => e.stopPropagation()}>
                        <div className={styles.imageContainer}>
                            <button onClick={closeModal} className={styles.closeBtn}>✕</button>
                            <button onClick={prevImage} className={`${styles.navBtn} ${styles.leftBtn}`}>‹</button>
                            <div className={styles.imageInner}>
                                <Image
                                    src={images[currentIndex].src}
                                    alt={images[currentIndex].alt}
                                    width={1000}
                                    height={600}
                                    layout="responsive"
                                    // fill
                                    className={styles.modalImage}
                                    unoptimized
                                />
                            </div>

                            <button onClick={nextImage} className={`${styles.navBtn} ${styles.rightBtn}`}>›</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}