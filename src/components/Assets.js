'use client'
import styles from '@/styles/collection.module.css';
import Image from 'next/image';
import fomo_info1 from '@/assets/images/fomo_info1.png';
import fomo_info2 from '@/assets/images/fomo_info2.png';
import fomo_info3 from '@/assets/images/fomo_info3.png';
import fomo_info4 from '@/assets/images/fomo_info4.png';
import nft_beni from '@/assets/images/nft_beni.png';

const Assets = ()=>{

    return (
        <div className={styles.ass_bg}>
            <div className={styles.title2}>Assets Details</div>
            <div className={styles.title3}>Everything you need to know about FoMoney Collection</div>
            <div className={styles.infos}>
                <Image className={styles.info} src={fomo_info1} alt='info1' height={120} />
                <Image className={styles.info} src={fomo_info2} alt='info2' height={120} />
                <Image className={styles.info} src={fomo_info3} alt='info3' height={120} />
                <Image className={styles.info} src={fomo_info4} alt='info4' height={120} />
            </div>
            <Image className={styles.nft_beni} src={nft_beni} alt='beni' height={180} />
            <div className={styles.bottom_100}></div>
        </div>
    )
}

export default Assets;
