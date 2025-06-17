'use client'
import styles from '@/styles/collection.module.css';
import Image from 'next/image';
import logo_text from '@/assets/images/logo_text.png'

const Footer = ()=>{
    const handleTwitter = ()=>{
        window.open('https://x.com/Fomoney2048')
    }
    const handleGitbook = ()=>{
        window.open('https://fomoney.gitbook.io/fomoney-litepaper')
    }
    const handleTelegram = ()=>{
        window.open('https://t.me/fomoneyofficial')
    }
    const handleYoutube = ()=>{
        window.open('https://www.youtube.com/@FoMoney2048')
    }
    const handleAsset = ()=>{
        window.scrollTo(0,820)
    }
    const handleRM = ()=>{
        window.scrollTo(0,1800)
    }
    const handleFaq = ()=>{
        window.scrollTo(0,3400)
    }
    return(
        <div className={styles.footer_bg}>
            <div className={styles.columns}>
            <div className={styles.footer_l}>
                <Image className={styles.footer_logo} src={logo_text} alt='logo_text' height={30} />
                <div className={styles.footer_text}>The first truly autonomous,</div>
                <div className={styles.footer_text}>liquid on-chain world</div>
            </div>
            <div className={styles.footer_m}>
                <div className={styles.footer_title}>Sitemap</div>
                <div className={styles.footer_column_middle}>
                    <div onClick={handleAsset}>Assets Details</div>
                    <div onClick={handleRM}>Roadmap</div>
                    <div onClick={handleFaq}>FAQ</div>
                </div>
            </div>
            <div className={styles.footer_r}>
                <div className={styles.footer_title}>Social Media</div>
                <div className={styles.footer_column}>
                    <div onClick={handleTwitter}>Twitter</div>
                    <div onClick={handleGitbook}>Gitbook</div>
                    <div onClick={handleTelegram}>Telegram</div>
                    <div onClick={handleYoutube}>Youtube</div>
                </div>
            </div>
            </div>
            <div className={styles.copyright}>© 2025 FoMoney</div>
        </div>
    )
}

export default Footer;
