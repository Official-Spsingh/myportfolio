import React from 'react'
import aboutimg from '../../media/aboutimg.jpeg'
import SpPdf from '../../media/sps.pdf'
import { DownloadOutlined } from '@ant-design/icons';
const AboutComponent = () => {
    return (
        <div className='about'>
            <div className="about__img">
                <img src={aboutimg} alt='spsingh'/>
            </div>
            <div className="about__para">
                I am a person who loves coding and eventually shapes and compares everything with coding. I like to know about new technologies and I feel this is the way of making oneself sustainable. I like writing blogs and like using new tools which makes life easier.
                <a href={SpPdf} download='Shubham Pratap Singh Resume'>
                    <DownloadOutlined />Resume</a>
            </div>

        </div>
    )
}

export default AboutComponent
