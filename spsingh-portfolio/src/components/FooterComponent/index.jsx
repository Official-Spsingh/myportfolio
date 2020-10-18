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
                    <a href="https://www.linkedin.com/in/shubhampratapsingh/" target="_blank" rel="noopener noreferrer">
                        <LinkedinOutlined />
                    </a>
                </div>
                <div className="smitem">
                    <a href="https://github.com/Official-Spsingh" target="_blank" rel="noopener noreferrer">
                        <GithubOutlined />
                    </a>
                </div>
                <div className="smitem">
                    <a href="https://www.instagram.com/official_spsingh/" target="_blank" rel="noopener noreferrer">
                        <InstagramOutlined />
                    </a>
                </div>
                <div className="smitem">
                    <a href="https://www.facebook.com/Shubham.rgibhopal" target="_blank" rel="noopener noreferrer">
                        <FacebookOutlined />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default FooterComponent
