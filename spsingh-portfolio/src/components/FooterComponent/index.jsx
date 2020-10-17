import React from 'react'
import { LinkedinOutlined, GithubOutlined, InstagramOutlined, FacebookOutlined } from '@ant-design/icons';

const FooterComponent = () => {
    return (
        <div className="footer">
            <div className="rights">
                &copy; All right reserved 2020
            </div>
            <div className="social-media">
                <div className="smitem">
                    <LinkedinOutlined />
                </div>
                <div className="smitem">
                    <GithubOutlined />
                </div>
                <div className="smitem">
                    <InstagramOutlined />
                </div>
                <div className="smitem">
                    <FacebookOutlined />
                </div>
            </div>
        </div>
    )
}

export default FooterComponent
