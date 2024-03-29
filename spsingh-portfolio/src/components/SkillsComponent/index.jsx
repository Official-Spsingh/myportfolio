import React from 'react'

const SkillsComponent = () => {
    return (
        <div className='skills'>
            <div className="skills__box">
                <div className="skills__head">
                    Frontend
                </div>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>ReactJS</li>
                    <li>React Native</li>
                    <li>Redux</li>
                </ul>
            </div>
            <div className="skills__box">
                <div className="skills__head">
                    Backend
                </div>
                <ul>
                    <li>NodeJS</li>
                    <li>ExpressJS</li>
                    <li>Java</li>
                    <li>Springboot</li>
                </ul>
            </div>
            <div className="skills__box">
                <div className="skills__head">
                    Database
                </div>
                <ul>
                    <li>MySQL</li>
                    <li>MongoDB</li>
                </ul>
            </div>
            <div className="skills__box">
                <div className="skills__head">
                     Compt. Programming
                </div>
                <ul>
                    <li>C Language</li>
                    <li>Data structure</li>
                    <li>Algorithms</li>
                </ul>
            </div>
            <div className="skills__box">
                <div className="skills__head">
                    Others
                </div>
                <ul>
                    <li>Git</li>
                    <li>Firebase</li>
                    <li>Highchart</li>
                    <li>Cordova</li>
                    <li>Expo</li>
                </ul>
            </div>
            <div className="skills__box">
                <div className="skills__head">
                    Soft skills
                </div> <ul>
                    <li>Team work</li>
                    <li>Adaptability</li>
                    <li>Problem Solving</li>
                    <li>Communication</li>
                    <li>Leadership</li>
                </ul>
            </div>
        </div>
    )
}

export default SkillsComponent
