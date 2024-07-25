import React from 'react'
import styles from './Footer.module.css'
import Form from '../formContainer/Form'
import Image from 'next/image'
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
import TelegramIcon from '@mui/icons-material/Telegram';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';

import { footerLogo, launch_wise_logo, map_img } from '@/assets'
import { Twitter } from '@mui/icons-material';
function Footer() {
    return (
        <div className={styles.outerContainer}>
            <div className={styles.innerContainer}>
                <div className={styles.formContainer}>
                    <Form />
                </div>
                <div className={styles.infoAddress}>
                    <div className={styles.logo}>
                        <Image src={footerLogo} alt='logo' className={styles.logo} />
                        <h6>Feel free to connect with us</h6>
                    </div>
                    <div className="address">
                        <p className={styles.para}>
                            <span><PhoneIcon sx={{ fontSize: '16px', fontWeight: 'bold' }} /> </span>
                            <span> +91 93112 21210</span>
                        </p>
                        <p className={styles.para}>
                            <span><MailIcon sx={{ fontSize: '16px', fontWeight: 'bold' }} /> </span>
                            <span> virtualoffice@teamco.work</span>
                        </p>
                        <p className={styles.para}>
                            <span><TelegramIcon sx={{ fontSize: '16px', fontWeight: 'bold' }} /> </span>
                            <span> 704, Palm Court, Mehrauli-Gurgaon Rd, Gurugram, Haryana, 122007</span>
                        </p>
                    </div>
                    <div className={styles.socialIcons}>
                        <FacebookRoundedIcon />
                        <InstagramIcon />
                        <LinkedInIcon />
                        <XIcon />
                    </div>
                </div>
                <div className={styles.map}>
                    <Image src={map_img} className={styles.mapImage} alt='map Image' />
                </div>
            </div>
        </div>
    )
}

export default Footer