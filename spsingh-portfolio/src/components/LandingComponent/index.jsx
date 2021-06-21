import React from 'react'
import Typical from 'react-typical'
const LandingComponent = () => {
    return (
        <div className='landing'>
            <div className="landing__data">
                <div className="landing__name">
                    Shubham Pratap singh
                </div>
                <div className="landing__designation">
                    <Typical
                        steps={['Full Stack Engineer', 1000, 'MERN Stack', 1000]}
                        loop={Infinity}
                        wrapper="no"
                    />
                    {/* Full Stack Engineer */}
                </div>
                <a href='tel:+91 7067350842'>Call me</a>

            </div>
        </div>
    )
}

export default LandingComponent
