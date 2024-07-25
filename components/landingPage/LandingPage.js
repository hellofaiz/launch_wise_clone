import React from 'react';
import styles from './Landing.module.css';
import Image from 'next/image';
import { arrowbtn, checklist_book, launch_wise_logo, person_icon } from '@/assets';
import Form from '../formContainer/Form';

function LandingPage() {
    return (
        <div className={styles.container}>
            <div className={styles.outerContainer}>
                <div className={styles.innerContainer}>
                    <div className={styles.navbar}>
                        <Image src={launch_wise_logo} className={styles.launchLogo} alt='launch Wise Logo' />
                        <button>Enquire now <Image style={{ marginLeft: '10px' }} src={arrowbtn} alt="right arrow btn" /></button>
                    </div>
                    <div className={styles.main}>
                        <h1>
                            Work From Anywhere, Grow Everywhere.
                            Get Your Instant Virtual Office
                        </h1>
                        <div>
                            <Form />
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.cardContainer}>
                <div className={styles.card}>
                    <Image src={person_icon} className={styles.icon} alt='icon' />
                    <h3>Unleash Flexibility</h3>
                    <p>Work from anywhere in India with a prestigious virtual address.</p>
                </div>
                <div className={styles.card}>
                    <Image src={person_icon} className={styles.icon} alt='icon' />
                    <h3>Simplify Operations</h3>
                    <p>Get a mailing address, access GST registration, and enjoy streamlined services.</p>
                </div>
                <div className={styles.card} style={{backgroundColor:'#23A6F0'}}>
                    <Image src={person_icon} className={styles.icon} alt='icon' />
                    <h3>Boost Credibility</h3>
                    <p>Project a professional image and attract top talent nationwide.</p>
                </div>
            </div>
            <div className={styles.wrapper}>
                <div className={styles.checklist}>
                    <div className={styles.left}>
                        <h2>FREE DOWNLOAD:</h2>
                        <h6>The ultimate checklist for virtual office 2024</h6>
                        <p>Discover the step-by-step procedures and
                            essential considerations you need to know
                            before setting up a Virtual Office in India.</p>
                        <button>
                            Send Me The Checklist
                        </button>
                    </div>
                    <div className={styles.right}>
                        <Image src={checklist_book} className={styles.checklistImage} alt='checklist_book' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;
