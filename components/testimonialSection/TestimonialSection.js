import React from 'react'
import styles from './Testimonial.module.css'
import Image from 'next/image'
import { daburImage, leftArrow, rightArrow } from '@/assets'
function TestimonialSection() {
    return (
        <div className={styles.outerContainer}>
            <div className={styles.innerContainer}>
                <div className={styles.heading}>
                    <h2>Client Testimonial</h2>
                </div>
                <div className={styles.carousel}>

                    <Image src={leftArrow} className={styles.arrowImage} alt="left Arrow icon" />
                    <Image src={daburImage} className={styles.daburImage} alt="left Arrow icon" />
                    <div className={styles.testimonialContent}>
                        <p>The LaunchWise team is very professional and 100% transparent. We would surely recommend them to everyone who wants to have a new business setup or those who already have a company. Their experts are thorough with all corners of business. They have surely earned us as their permanent client.
                        </p>
                        <h6>
                            -Sunil Duggal, CEO, Dabur Healthcare
                        </h6>
                    </div>
                    <Image src={rightArrow} className={styles.arrowImage} alt="left Arrow icon" />

                </div>
            </div>
        </div>
    )
}

export default TestimonialSection