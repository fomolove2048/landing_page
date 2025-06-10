'use client'
import styles from '@/styles/home.module.css';
import Image from 'next/image';
import vision1 from '@/assets/images/vision1.png';
import vision2 from '@/assets/images/vision2.png';
import vision3 from '@/assets/images/vision3.png';


const Vision = ()=>{
    return (
        <div className={styles.vision_bg}>
            <div className={styles.vision_t1}>Vision</div>
            <div className={styles.vision_t2}>Building an Autonomous On-Chain World</div>
            <div className={styles.vision_text}>FoMoney aims to build A Fully On-chain Autonomous World with Attention Capital Efficiency.</div>
            <div className={styles.vision_text}>We envision a future where gaming and financial empowerment unite.</div>
            <div className={styles.vision_box}>
                <Image src={vision1} alt='vision1' height={100} width={450} />
                <Image src={vision2} alt='vision2' height={100} width={450} />
                <Image src={vision3} alt='vision3' height={100} width={450} />
            </div>
        </div>
    )
}

export default Vision;
