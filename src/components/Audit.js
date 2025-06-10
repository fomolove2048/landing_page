'use client'
import styles from '@/styles/home.module.css'
import beosin from '@/assets/images/beosin.png';
import Image from 'next/image';
import sonic_logo from '@/assets/images/sonic_logo.png'

const Audit = ()=>{
    const handleClick = ()=>{
        window.open('https://beosin.com/audits/Fomoney_202505231107.pdf')
    }
    const handleSonic = ()=>{
        window.open('https://www.sonic.game/')
    }
    return (
        <div className={styles.audit_bg}>
            <div className={styles.audit_t1}>Audited by</div>
            <div className={styles.audit_line}>
                <Image src={beosin} alt='beosin' height={130} />
                <div className={styles.audit_text} onClick={handleClick}>View Audit Report</div>
            </div>
            <div className={styles.audit_t1}>Built on</div>
            <Image onClick={handleSonic} className={styles.sonic_logo} src={sonic_logo} alt='sonic_logo' height={100} />
            <div className={styles.audit_bottom}></div>
        </div>
    )
}

export default Audit;
