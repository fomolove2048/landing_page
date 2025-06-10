'use client'
import styles from '@/styles/home.module.css';
import Image from 'next/image';
import logo_text from '@/assets/images/logo_text.png'

const Footer = ()=>{
    return(
        <div className={styles.footer_bg}>
            <div className={styles.columns}>
            <div className={styles.footer_l}>
                <Image className={styles.footer_logo} src={logo_text} alt='logo_text' height={40} />
                <div className={styles.footer_text}>The first truly autonomous,</div>
                <div className={styles.footer_text}>liquid on-chain world</div>
            </div>
            <div className={styles.footer_m}>
                <div className={styles.footer_title}>Sitemap</div>
                <div className={styles.footer_column}>
                    <div>Gameplay & Economy</div>
                    <div>Vision</div>
                    <div>Audit</div>
                    <div>Built on Sonic SVM</div>
                </div>
            </div>
            <div className={styles.footer_r}>
                <div className={styles.footer_title}>Social Media</div>
                <div className={styles.footer_column}>
                    <div>Twitter</div>
                    <div>Gitbook</div>
                    <div>Telegram</div>
                    <div>Youtube</div>
                </div>
            </div>
            </div>
            <div className={styles.copyright}>© 2025 FoMoney.io</div>
        </div>
    )
}

export default Footer;
