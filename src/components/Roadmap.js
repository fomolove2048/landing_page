'use client'
import styles from '@/styles/collection.module.css';
import Image from 'next/image';
import roadmap from '@/assets/images/roadmap.png';

const Roadmap = ()=>{
    return (
        <div className={styles.rm_bg}>
            <div className={styles.title2}>Roadmap</div>
            <Image className={styles.roadmap} src={roadmap} alt="roadmap" height={1300} width={1100} />
        </div>
    )
}

export default Roadmap;
