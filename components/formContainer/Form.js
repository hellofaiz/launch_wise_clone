import React from 'react'
import styles from './Form.module.css'
function Form() {
    return (
        <div className={styles.outerContainer}>
            <div className={styles.innerContainer}>
                <div className={styles.headings}>
                    <h4>Get in touch with us</h4>
                    <p>Submit your Details to get an Instant <span> All-inclusive</span> Quote to your email and a <span>FREE</span> Expert consultation</p>
                </div>
                <div className={styles.form}>
                    <form action="/">
                        <label htmlFor="name">Name</label>
                        <input type="text" id='name' placeholder='Your Name' />

                        <label htmlFor="number">Mobile</label>
                        <input type="number" id='number' placeholder='Mobile No.' />

                        <label htmlFor="email">Email</label>
                        <input type="email" id='email' placeholder='Email' />

                        <label htmlFor="city">City</label>
                        <input type="text" id='city' placeholder='City Name' />

                        <button className={styles.button}>Get a Detailed Quotation Now!</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Form