import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { useState, useEffect} from 'react';

import styles from '../styles/header.module.css'

import SstuneLogo_w from '/images/sstune_logo_w.svg'
import SstuneLogo_bk from '/images/sstune_logo_bk.svg'

const Header = () => {
    const [isActive, setIsActive] = useState(false);
    const handleClick = () => {
    setIsActive(!isActive);
    };

    useEffect(() => {
        const elementsBox = document.querySelectorAll(`.${styles.openButtonBox}`);
        const elementsLine = document.querySelectorAll(`.${styles.openButtonLine}`);
        const elementsContainer = document.querySelectorAll(`.${styles.openButtonContainer}`);

        elementsBox.forEach((element) => {
            if (isActive) {
                element.classList.add(styles.boxAction);
            } else {
                element.classList.remove(styles.boxAction);
            }
        });

        elementsLine.forEach((element) => {
            if (isActive) {
                element.classList.add(styles.lineAction);
            } else {
                element.classList.remove(styles.lineAction);
            }
        });

        elementsContainer.forEach((element) => {
            if (isActive) {
                element.classList.add(styles.containerAction);
            } else {
                element.classList.remove(styles.containerAction);
            }
            })
        }, [isActive])

    return (
        <header className={styles.headerBar}>
            <div className={styles.headerBarContainer}>
                <div className={styles.HeaderLogo}><Link href="#"><Image src={SstuneLogo_w} alt="SStune" /></Link></div>
                <div className={styles.openButton}>
                    <div className={styles.openButtonLine} onClick={handleClick}>
                        <span></span><span></span><span></span>
                    </div>
                    <div className={styles.openButtonBox} onClick={handleClick}>
                        <div className={styles.openButtonContainer} onClick={handleClick}>
                            <nav>
                                <ul className={styles.headernNavigation}>
                                    <li><Link href="index.html">ホーム</Link></li>
                                    <li><Link href="about.html">当店について</Link></li>
                                    <li className={styles.requestLink}><Link href="request.html">制作依頼する</Link></li>
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