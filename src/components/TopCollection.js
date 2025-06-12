'use client'
import Image from 'next/image';
import styles from '@/styles/collection.module.css';
import logo_text from '@/assets/images/logo_text.png';
import { useRouter } from 'next/navigation';
import { useEffect, useRef } from 'react';
import M1 from '@/assets/images/M1.png';
import M2 from '@/assets/images/M2.png';
import M3 from '@/assets/images/M3.png';
import M4 from '@/assets/images/M4.png';
import M5 from '@/assets/images/M5.png';
import M6 from '@/assets/images/M6.png';
import W1 from '@/assets/images/W1.png';
import W2 from '@/assets/images/W2.png';
import W3 from '@/assets/images/W3.png';
import W4 from '@/assets/images/W4.png';
import W5 from '@/assets/images/W5.png';
import NFT_box from '@/assets/images/NFT_box.png';

const TopCollection = () => {
    const router = useRouter();
    const containerRef = useRef(null);
    useEffect(() => {
        const container = containerRef.current;
        let animationFrame;
        let scrollLeft = 0;

        const animate = () => {
            if (container && !container.matches(':hover')) {
                scrollLeft += 0.5;
                if (scrollLeft >= container.scrollWidth - container.clientWidth) {
                    scrollLeft = 0;
                }
                container.scrollLeft = scrollLeft;
            }
            animationFrame = requestAnimationFrame(animate);
        };

        animate();

        return () => cancelAnimationFrame(animationFrame);
    }, []);

    const images = [M1, W2, M3, W4, M5, W1, M2, W3, M4, W5, M6,]
    const handlePlay = () => {
        window.open('https://www.fomoney.io/')
    }
    const handleOverview = () => {
        router.push('/');
    }
    return (
        <div className={styles.top_bg}>
            <div className={styles.navi}>
                <Image src={logo_text} alt='logo' height={40} className={styles.logo} />
                <div className={styles.sub_navi}>
                    <div className={styles.nav_title} onClick={handleOverview}>Overview</div>
                    <div className={styles.nav_title}>FoMoney Collection</div>
                </div>
                <button onClick={handlePlay} className={styles.nav_button}>Launch Game</button>
            </div>
            <div className={styles.title1}>FoMoney Collection</div>
            <div className={styles.carousel} ref={containerRef}>
                {images.map((src, idx) => (
                    <div key={idx} className={styles.imageWrapper}>
                        <Image
                            src={src}
                            alt={`NFT ${idx}`}
                            width={205}
                            height={205}
                            className={styles.image}
                        />
                        <Image src={NFT_box} alt='nft_box' height={206} className={styles.nft_box} />
                    </div>
                ))}
            </div>
            <div className={styles.top_buttons}>
                <button className={styles.top_btn}>Mint NFT</button>
                <button className={styles.top_btn}>Trade</button>
            </div>
        </div>
    )
}

export default TopCollection;
