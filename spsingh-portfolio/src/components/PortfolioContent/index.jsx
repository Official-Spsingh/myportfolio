import React from 'react'
import AboutComponent from '../AboutComponent'
import CareerComponent from '../CareerComponent'
import ContactMe from '../ContactMe'
import FooterComponent from '../FooterComponent'
import SkillsComponent from '../SkillsComponent'
import PortfolioHeader from './PortfolioHeader'

const PortfolioContent = () => {
    return (
        <div className='portfolio'>
            <div id="about" style={{ paddingTop: "75px" }}>
                <PortfolioHeader title='About' />
                <AboutComponent />
            </div>
            <div id="career" style={{ paddingTop: "75px" }}>
                <PortfolioHeader title='Career' />
                <CareerComponent />
            </div>
            <div id="skills" style={{ paddingTop: "75px" }}>
                <PortfolioHeader title='Skills' />
                <SkillsComponent />
            </div>
            <div id="contactme" style={{ paddingTop: "75px" }}>
                <PortfolioHeader title='Contact Me' />
                <ContactMe />
            </div>
            <FooterComponent />
        </div>
    )
}

export default PortfolioContent
