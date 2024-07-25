import React from 'react'
import styles from './Faq.module.css'

function Faq() {
    return (
        <div className={styles.outerContainer}>
            <div className={styles.innerContainer}>
                <div className={styles.heading}>
                    <h4>Questions in mind?</h4>
                    <p>Read our FAQ</p>
                    <div className={styles.lineContainer}>
                        <div className={styles.line}>
                        </div>
                        <div className={styles.line}>
                        </div>
                    </div>
                </div>
                <div className={styles.accordianContainer}>
                    <div className={styles.accordian}>
                        <p>
                            How can a virtual office benefit my business in India?
                        </p>
                        <p>+</p>
                    </div>
                    <div className={styles.accordian}>
                        <p>
                            Can I legally register my business using a virtual office address in India?
                        </p>
                        <p>+</p>
                    </div>
                    <div className={styles.accordian}>
                        <p>
                            How will I receive my business mail and packages with a virtual office?
                        </p>
                        <p>+</p>
                    </div>
                    <div className={styles.accordian}>
                        <p>
                            Can I use a virtual office address for official correspondence and marketing materials?
                        </p>
                        <p>+</p>
                    </div>
                    <div className={styles.accordian}>
                        <p>
                            Do virtual office services in India include call answering and forwarding?
                        </p>
                        <p>+</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Faq