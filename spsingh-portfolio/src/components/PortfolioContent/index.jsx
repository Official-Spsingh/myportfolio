import React from 'react'
import AboutComponent from '../AboutComponent'
import CareerComponent from '../CareerComponent'
import FooterComponent from '../FooterComponent'
import SkillsComponent from '../SkillsComponent'
import PortfolioHeader from './PortfolioHeader'

const PortfolioContent = () => {
    return (
        <div className='portfolio'>
            <PortfolioHeader title='About' id="about" />
            <AboutComponent />
            <PortfolioHeader title='Career' id="career" />
            <CareerComponent />
            <PortfolioHeader title='Skills' id="skills" />
            <SkillsComponent />
            <FooterComponent />
        </div>
    )
}

export default PortfolioContent
