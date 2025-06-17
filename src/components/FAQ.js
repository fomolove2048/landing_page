'use client'
import styles from '@/styles/collection.module.css';
import Image from 'next/image';
import { useState } from 'react';
import gear1 from '@/assets/images/gear1.png';
import gear2 from '@/assets/images/gear2.png';
import gear3 from '@/assets/images/gear3.png';
import gear4 from '@/assets/images/gear4.png';
import gear5 from '@/assets/images/gear5.png';
import gear6 from '@/assets/images/gear6.png';
import down from '@/assets/images/down.png';
import up from '@/assets/images/up.png';


const FAQ = ()=>{
    const [hide1, setHide1] = useState(true);
    const [hide2, setHide2] = useState(true);
    const [hide3, setHide3] = useState(true);
    const [hide4, setHide4] = useState(true);
    const [hide5, setHide5] = useState(true);
    const [hide6, setHide6] = useState(true);



    return (
        <div className={styles.faq_bg}>
            <div className={styles.title2}>FAQ</div>
            <div className={styles.faq_body}>
                <div className={styles.faq_left}>
                    <Image className={styles.gear} src={gear1} alt='gear1' height={200} />
                    <Image className={styles.gear} src={gear2} alt='gear2' height={200} />
                    <Image className={styles.gear} src={gear3} alt='gear3' height={200} />
                    <Image className={styles.gear} src={gear4} alt='gear4' height={200} />
                    <Image className={styles.gear} src={gear5} alt='gear5' height={200} />
                    <Image className={styles.gear} src={gear6} alt='gear6' height={200} />
                </div>
                <div className={styles.faq_right}>
                    <div className={styles.faq_line}>
                        <div>How many FoMoney NFTs exist?</div>
                        <Image src={down} alt='down' height={15} className={hide1?'':styles.hidden} onClick={()=>setHide1(false)} />
                        <Image src={up} alt='up' height={15} className={hide1?styles.hidden:''} onClick={()=>setHide1(true)}  />
                    </div>
                    <div className={`${styles.answer} ${hide1?styles.hidden:''}`}><span className={styles.bold}>Total supply</span>: 9,000 NFTs, with three rarity tiers: Common, Rare, and Legendary</div>
                    <div className={styles.devide}></div>
                    <div className={styles.faq_line}>
                        <div>How do I mint a FoMoney NFT?</div>
                        <Image src={down} alt='down' height={15} className={hide2?'':styles.hidden} onClick={()=>setHide2(false)} />
                        <Image src={up} alt='up' height={15} className={hide2?styles.hidden:''} onClick={()=>setHide2(true)}  />
                    </div>
                    <div className={`${styles.answer} ${hide2?styles.hidden:''}`}><span className={styles.bold}>&#45; Phase 1</span>: Whitelist mint on <a href='https://chillonic.fun/' target="_blank" className={styles.underline}>Chillnic.fun</a> &#40;1 NFT per address&#41;.</div>
                    <div className={`${styles.answer} ${hide2?styles.hidden:''}`}><span className={styles.bold}>&#45; Phase 2</span>: Public sale via <a href='https://www.creampad.io/' target="_blank" className={styles.underline}>Cream Pad</a> &#40;Dutch Dual-Track Auction&#41;.</div>
                    <div className={styles.devide}></div>
                    <div className={styles.faq_line}>
                        <div>What makes FoMoney unique?</div>
                        <Image src={down} alt='down' height={15} className={hide3?'':styles.hidden} onClick={()=>setHide3(false)} />
                        <Image src={up} alt='up' height={15} className={hide3?styles.hidden:''} onClick={()=>setHide3(true)}  />
                    </div>
                    <div className={`${styles.answer} ${hide3?styles.hidden:''}`}><span className={styles.bold}>&#45; Semi-fungible</span>: Split NFTs into tokens for liquidity, or merge them back.</div>
                    <div className={`${styles.answer} ${hide3?styles.hidden:''}`}><span className={styles.bold}>&#45; Play-to-earn</span>: FoMoney game will incorporate upgradeable NFT elements, where winners can receive NFT or token airdrops. Holding an NFT is like having a golden shovel in the SONIC ecosystem - earn on multiple yields at once.</div>
                    <div className={`${styles.answer} ${hide3?styles.hidden:''}`}><span className={styles.bold}>&#45; Powered by Sonic SVM</span>: Low fees, high speed, driven by Attention Capital Market incentive mechanism.</div>
                    <div className={styles.devide}></div>
                    <div className={styles.faq_line}>
                        <div>What&#39;s Split & Merge?</div>
                        <Image src={down} alt='down' height={15} className={hide4?'':styles.hidden} onClick={()=>setHide4(false)} />
                        <Image src={up} alt='up' height={15} className={hide4?styles.hidden:''} onClick={()=>setHide4(true)}  />
                    </div>
                    <div className={`${styles.answer} ${hide4?styles.hidden:''}`}><span className={styles.bold}>&#45; Split</span>: Convert NFTs into tradable tokens.</div>
                    <div className={`${styles.answer} ${hide4?styles.hidden:''}`}><span className={styles.bold}>&#45; Merge</span>: Recombine tokens to recreate the original NFT.</div>
                    <div className={styles.devide}></div>
                    <div className={styles.faq_line}>
                        <div>Where can I trade tokens?</div>
                        <Image src={down} alt='down' height={15} className={hide5?'':styles.hidden} onClick={()=>setHide5(false)} />
                        <Image src={up} alt='up' height={15} className={hide5?styles.hidden:''} onClick={()=>setHide5(true)}  />
                    </div>
                    <div className={`${styles.answer} ${hide5?styles.hidden:''}`}>Tokens will be tradable on <a href='https://sega.so/swap/' target='_blank' className={styles.underline}>Sega DEX</a>. NFTs can also be traded if merged.</div>
                    <div className={styles.devide}></div>
                    <div className={styles.faq_line}>
                        <div>Is there a fee for Splitting&#47;Merging?</div>
                        <Image src={down} alt='down' height={15} className={hide6?'':styles.hidden} onClick={()=>setHide6(false)} />
                        <Image src={up} alt='up' height={15} className={hide6?styles.hidden:''} onClick={()=>setHide6(true)}  />
                    </div>
                    <div className={`${styles.answer} ${hide6?styles.hidden:''}`}>SPLITTING HAS NO FEE, BUT MERGING WILL INCUR FEE</div>
                    <div className={styles.devide}></div>
                </div>
            </div>
        </div>
    )
}

export default FAQ;
