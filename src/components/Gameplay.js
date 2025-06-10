'use client'
import styles from '@/styles/home.module.css';
import matrix_box from '@/assets/images/matrix_box.png';
import Image from 'next/image';
import NFT_box from '@/assets/images/NFT_box.png'



const Gameplay = () => {
    return (
        <div className={styles.bg_2}>
            <div className={styles.title_3}>Gameplay & Economy</div>
            <div className={styles.matrix}>
                <Image className={styles.matrix_box} src={matrix_box} alt='game_matrix' height={480} />
                <div className={styles.matrix_right}>
                    <div className={styles.matrix_title}>FoMoney Game Matrix</div>
                    <div className={styles.matrix_text}>FoMoney is a fully on-chain game on Sonic SVM that merges 2048 with the gamification of DeFi. It enables holders of sSONIC to generate yields while also engaging in immersive gameplays.</div>
                    <div className={styles.matrix_text}>More is on the way, we’re expanding our game matrix to include additional genres.</div>
                </div>
            </div>
            <div className={styles.NFTs}>
                <div className={styles.nft_left}>
                    <div>
                        <Image className={`${styles.nft} ${styles.nft_1}`} src={NFT_box} alt='w1' height={205} width={205} />
                    </div>
                    <div>
                        <Image className={`${styles.nft} ${styles.nft_2}`} src={NFT_box} alt='w1' height={205} width={205} />
                    </div>
                    <div>
                        <Image className={`${styles.nft} ${styles.nft_3}`} src={NFT_box} alt='w1' height={205} width={205} />
                    </div>
                    <div>
                        <Image className={`${styles.nft} ${styles.nft_4}`} src={NFT_box} alt='w1' height={205} width={205} />
                    </div>
                    <div>
                        <Image className={`${styles.nft} ${styles.nft_5}`} src={NFT_box} alt='w1' height={205} width={205} />
                    </div>
                    <div>
                        <Image className={`${styles.nft} ${styles.nft_6}`} src={NFT_box} alt='w1' height={205} width={205} />
                    </div>
                </div>
                <div className={styles.nft_right}>
                    <div className={styles.matrix_title}>FoMoney NFT</div>
                    <div className={styles.matrix_text}>The leading semi-fungible collection on Sonic SVM, merging play-to-earn mechanics with fully on-chain autonomous world. It combines the instant liquidity of memecoins with the exclusivity of NFTs.</div>
                </div>
            </div>
        </div>
    )
}

export default Gameplay;
