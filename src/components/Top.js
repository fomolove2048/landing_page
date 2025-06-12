'use client'
import styles from '@/styles/home.module.css';
import Image from 'next/image';
import logo_text from '@/assets/images/logo_text.png';
import { useRouter } from 'next/navigation';

const Top = () => {
    const router = useRouter();

    const handlePlay = ()=>{
        window.open('https://www.fomoney.io/')
    }
    const handleCollection = ()=>{
        router.push('/collection');
    }
    return (
        <div className={styles.top_bg}>
            <div className={styles.navi}>
                <Image src={logo_text} alt='logo' height={40} className={styles.logo} />
                <div className={styles.sub_navi}>
                    <div className={styles.nav_title}>Overview</div>
                    <div className={styles.nav_title} onClick={handleCollection}>FoMoney Collection</div>
                </div>
                <button onClick={handlePlay} className={styles.nav_button}>Launch Game</button>
            </div>
            <div className={styles.top_title}>
                <div>Shape an Autonomous </div>
                <div>On-Chain World</div>
            </div>
            <div className={styles.title_2}>Stake / Play / Earn -- all in a single liquid economy</div>
            <div className={styles.btn_group}>
                <button onClick={handlePlay} className={styles.btn_top}>Play FoMoney</button>
                <button className={styles.btn_top}>Check $FoMoney</button>
            </div>

        </div>
    )
}


export default Top;
