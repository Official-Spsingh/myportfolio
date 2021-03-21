import React from 'react'
import aboutimg from '../../media/aboutimg.jpeg'
import SpPdf from '../../media/sps.pdf'
import { DownloadOutlined } from '@ant-design/icons';
const AboutComponent = () => {
    return (
        <div className='about'>
            <div className="about__img">
                <img src={aboutimg} alt='spsingh' />
            </div>
            <div className="about__para">
                Full stack engineer having grasp knowledge and experience on MERN stack.
                I am comfortable with a lot of web technologies & frameworks and would love to work in a very dynamic & aspirational environment.
                I like to know about new technologies and I feel this is the way of making oneself sustainable. I like writing blogs and like using new tools which makes life easier.

                <a href={SpPdf} download='Shubham Pratap Singh Resume'>
                    <DownloadOutlined />Resume</a>
            </div>

        </div>
    )
}

export default AboutComponent
