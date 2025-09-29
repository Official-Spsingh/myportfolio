import React from 'react'
import aboutimg from '../../media/aboutimg1.jpeg'
import SpPdf from '../../media/sps.pdf'
import { DownloadOutlined } from '@ant-design/icons';
const AboutComponent = () => {
    return (
        <div className='about'>
            <div className="about__img">
                <img src={aboutimg} alt='spsingh' />
            </div>
            <div className="about__para">
                Full Stack Engineer and Technical Lead with 6+ years of experience specializing in the MERN stack. Skilled in React.js, Node.js, JavaScript, and modern web technologies. Proven expertise in designing scalable architectures, leading teams, and building high-performance micro-frontend applications.

                <a href={SpPdf} download='Shubham Pratap Singh Resume'>
                    <DownloadOutlined />Resume</a>
            </div>

        </div>
    )
}

export default AboutComponent
