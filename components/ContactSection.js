import { need_help, phone_icon } from '@/assets'
import Image from 'next/image'
import React from 'react'

function ContactSection() {
    return (
        <div className='outer-container' style={{ height: '100vh' }}>
            <div className="inner-container" style={{ height: '60vh', gap: '1rem' }}>
                <div className="left">
                    <div className="title-section">
                        <Image src={phone_icon} width={67} height={67} alt='phone_icon' style={{ display: 'inline' }} />
                        <p><span>Expert Guidance:</span> Consultation and Company Formation</p>
                    </div>
                    <div className="para-section">
                        <p>
                            Book a free CONSULTATION with our CA/CS and                        
                            company formation expert.
                        </p>
                    </div>
                    <div className="button">
                        <button>Talk to an Expert</button>
                    </div>
                </div>
                <div className="right">
                    <Image src={need_help} style={{ width: '475px', height: '475px' }} alt='need-help' />
                </div>
            </div>
        </div>
    )
}

export default ContactSection