import Link from 'next/link';
import Image from 'next/image'
import React from 'react'
import SstuneLogoBlackSvg from  '/images/sstune_logo_bk.svg'

import styles from '../styles/footer.module.css'

const Footer = () => (
  <>
    <div className="gotop">
      <Link href="#top"><i className="fas fa-chevron-up"></i></Link>
    </div>
    <footer className={styles.footerBar}>
      <ul className={styles.footerNavi}>
        <li><Link href="index.html">ホーム</Link></li>
        <li><Link href="about.html">当店について</Link></li>
        <li className={styles.requestLink}><Link href="request.html">制作依頼する</Link></li>
        <li><Link href="plan.html">プランについて</Link></li>
        <li><Link href="works.html">制作事例</Link></li>
        <li><Link href="form.html">お問い合わせ</Link></li>
      </ul>
      <span className={styles.pagebreak}></span>
      <div className={styles.footerSns}>
        <ul>
          <li><Link href="https://twitter.com"><i className="fa-brands fa-twitter fa-fw"></i></Link></li>
          <li><Link href="https://www.instagram.com"><i className="fa-brands fa-instagram fa-fw"></i></Link></li>
          <li><Link href="#"><i className="fa-solid fa-blog fa-fw"></i></Link></li>
        </ul>
      </div>
      <div className={styles.navigationLogo}><Link href="index.html"><Image src={SstuneLogoBlackSvg} alt="SStune" /></Link></div>
      <p className="copyright">© SStune All rights reserved.</p>
    </footer>
  </>
)
export default Footer