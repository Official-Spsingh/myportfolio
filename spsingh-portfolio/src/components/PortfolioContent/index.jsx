import React from 'react'
import AboutComponent from '../AboutComponent'
import CareerComponent from '../CareerComponent'
import FooterComponent from '../FooterComponent'
import PortfolioHeader from './PortfolioHeader'

const PortfolioContent = () => {
    return (
        <div className='portfolio'>
            <PortfolioHeader title='About' />
            <AboutComponent />
            <PortfolioHeader title='Career' />
            <CareerComponent />
            <FooterComponent/>
        </div>
    )
}

export default PortfolioContent
