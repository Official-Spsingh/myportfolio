import React from 'react'

const HeaderComponent = () => {
    return (
        <div className='header'>
            <div className="header__left">
                <div className="header__logo">
                    SPS
                </div>
            </div>
            <div className="header__right">
                <div className="header__menu">
                    <div className="header__menuitem">
                        Home
                       </div>
                    <div className="header__menuitem">
                        About
                    </div>
                    <div className="header__menuitem">
                        Career
                       </div>
                    <div className="header__menuitem">
                        Projects
                     </div>
                    <div className="header__menuitem">
                        Contact
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderComponent
