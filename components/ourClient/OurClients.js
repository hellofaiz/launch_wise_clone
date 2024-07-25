import React from 'react'
import styles from './OurClient.module.css'
import Image from 'next/image'
import { icici_client, oyo_client, razorpay_client, slack_client, spring_client, we_work_client } from '@/assets'

function OurClients() {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.innerContainer}>
        <Image src={spring_client} className='clientImage' alt=' Spring House' />
        <Image src={slack_client} className='clientImage' alt=' Spring House' />
        <Image src={we_work_client} className='clientImage' alt=' Spring House' />
        <Image src={oyo_client} className='clientImage' alt=' Spring House' />
        <Image src={razorpay_client} className='clientImage' alt=' Spring House' />
        <Image src={icici_client} className='clientImage' alt=' Spring House' />
      </div>
      <div className={styles.newsLetter}>
        <div className={styles.newsLetterInner}>
          <div className={styles.left}>
            <h3>Subscribe For Latest <br />
              Newsletter</h3>
          </div>
          <div className={styles.right}>
            <div className={styles.wrapper}>
              <input type="text" placeholder='Your Email' />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurClients