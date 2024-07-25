import { bulb_icon, checkmark_icon, hero_bg, meter_icon, target_icon, virtual_office_benefits } from '@/assets'
import Image from 'next/image'
import React from 'react'

function OurExpertiseSection() {
    return (
        <div className='outer-container'>
            <div className="inner-container">
                <div className="left-side">
                    <Image src={virtual_office_benefits} width={491} height={491} alt='Virtual Office Section ' />
                </div>
                <div className="right-side">
                    <div className="title">
                        <h4>Accessible. Affordable. Adaptable</h4>
                        <p>Whether you're an established enterprise or a scaling startup, your Virtual office should drive your business forward. Our virtual office solutions take your business places! (Accessible. Affordable. Adaptable)
                        </p>
                    </div>
                    <div className="card-container">
                        <div className="cards">
                            <div className="icon" style={{ backgroundColor: '#BBDEFB' }}>
                                <Image className='image-icon' src={checkmark_icon} width={18.15} height={18.15} alt='Checkmark Icon' />
                            </div>
                            <h4>Professional Image & Enhanced Credibility
                            </h4>
                            <p>
                                Elevate your company's image and attract top talent with a professional virtual address for websites, business cards, and marketing materials.
                            </p>
                        </div>
                        <div className="cards">
                            <div className="icon" style={{ backgroundColor: '#B2EBF2' }}>
                                <Image className='image-icon' src={target_icon} width={18.15} height={18.15} alt='Checkmark Icon' />
                            </div>
                            <h4>Unmatched Work Flexibility
                            </h4>
                            <p>
                                Improve work-life balance by eliminating commutes and allowing flexible schedules. </p>
                        </div>
                        <div className="cards">
                            <div className="icon" style={{ backgroundColor: '#EDE7F6' }}>
                                <Image className='image-icon' src={meter_icon} width={18.15} height={13} alt='Checkmark Icon' />
                            </div>
                            <h4>Streamlined Business Operations
                            </h4>
                            <p>
                                Access essential services like virtual assistants, answering services, and teleconferencing – all under one roof.
                            </p>
                        </div>
                        <div className="cards">
                            <div className="icon" style={{ backgroundColor: '#FBEABB' }}>
                                <Image className='image-icon' src={bulb_icon} width={18.15} height={18.15} alt='Checkmark Icon' />
                            </div>
                            <h4>Scalable & Cost-Effective Solution
                            </h4>
                            <p>
                                Choose a virtual office plan that fits your needs and budget, with options for various locations and service levels.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurExpertiseSection