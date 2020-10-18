import React from 'react'
import logo from '../../media/logo.png'

const HeaderComponent = () => {
    return (
        <div className='header'>
            <div className="header__left">
                <div className="header__logo">
                    <img src={logo} />
                </div>
            </div>
            <div className="header__right">
                <div className="header__menu">
                    <div className="header__menuitem">
                        <a href="#home">
                            Home
                        </a>
                    </div>
                    <div className="header__menuitem">
                        <a href="#about">
                            About
                        </a>
                    </div>
                    <div className="header__menuitem">
                        <a href="#career">
                            Career
                        </a>
                    </div>
                    <div className="header__menuitem">
                        <a href="#skills">
                            Skills
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderComponent
