import React from 'react'
import { BackTop } from 'antd';
import LandingComponent from '../LandingComponent'
import PortfolioContent from '../PortfolioContent'
import {
    ArrowUpOutlined
} from '@ant-design/icons';
const style = {
    height: 40,
    width: 40,
    lineHeight: '40px',
    borderRadius: "50%",
    backgroundColor: '#045a4f',
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
};
const HomeComponent = () => {
    return (
        <div className='home' id='home'>
            <LandingComponent />
            <PortfolioContent />
            <BackTop>
                <div style={style}><ArrowUpOutlined /></div>
            </BackTop>
        </div>
    )
}

export default HomeComponent
