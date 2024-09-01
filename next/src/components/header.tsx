import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { useState, useEffect} from 'react';
import classNames from 'classnames'

import styles from '../styles/header.module.css'

import SstuneLogo_w from '/images/sstune_logo_w.svg'
import SstuneLogo_bk from '/images/sstune_logo_bk.svg'

const Header = () => {
    const [isActive, setIsActive] = useState(false);
    const handleClick = () => {
    setIsActive(!isActive);
    };

    useEffect(() => {
        console.log('styles:', styles);
        console.log('isActive:', isActive);
        console.log('openButtonContainer class:', `${styles.openButtonContainer} ${isActive ? styles.containerAction : ''}`);
      }, [isActive]);

    return (
        <header className={styles.headerBar}>
            <div className={styles.headerBarContainer}>
                <div className={styles.headerLogo}><Link href="#"><Image src={SstuneLogo_w} alt="SStune" /></Link></div>
                <div className={styles.openButton}>
                    <div className={classNames(styles.openButtonLine, { [styles.lineAction]: isActive})} onClick={handleClick}>
                        <span></span><span></span><span></span>
                    </div>
                    <div className={classNames(styles.openButtonBox, { [styles.boxAction]: isActive})} onClick={handleClick}>
                        <div className={classNames(styles.openButtonContainer, { [styles.containerAction]: isActive})} onClick={handleClick}>
                            <nav>
                                <ul className={styles.headerNavigation}>
                                    <li><Link href="index.html">ホーム</Link></li>
                                    <li><Link href="about.html">当店について</Link></li>
                                    <li><Link className={styles.requestLink} href="request.html">制作依頼する</Link></li>
                                    <li><Link href="plan.html">プランについて</Link></li>
                                    <li><Link href="works.html">制作事例</Link></li>
                                    <li><Link href="form.html">お問い合わせ</Link></li>
                                </ul>
                                <span className={styles.pagebreak}></span>
                                <div className={styles.snsNavigation}>
                                    <ul>
                                        <li><Link href="https://twitter.com"><i className="fa-brands fa-twitter fa-fw"></i></Link></li>
                                        <li><Link href="https://www.instagram.com"><i className="fa-brands fa-instagram fa-fw"></i></Link></li>
                                        <li><Link href="#"><i className="fa-solid fa-blog fa-fw"></i></Link></li>
                                    </ul>
                                </div>
                                <div className={styles.navigationLogo}><Link href="index.html"><Image src={SstuneLogo_bk} alt="SStune" /></Link></div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header