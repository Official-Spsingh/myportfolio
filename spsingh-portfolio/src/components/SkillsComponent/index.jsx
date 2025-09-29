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
                    <li>NextJS</li>
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
                    Architecture
                </div>
                <ul>
                    <li>System Design</li>
                    <li>Micro frontend</li>
                </ul>
            </div>
            <div className="skills__box">
                <div className="skills__head">
                    Others
                </div>
                <ul>
                    <li>C Language</li>
                    <li>Data structure</li>
                    <li>Algorithms</li>
                    <li>Git</li>
                    <li>Firebase</li>
                    <li>Highchart</li>
                    <li>AG Grid</li>
                    <li>Leaflet</li>
                    <li>Azure</li>
                    <li>Docker</li>
                    <li>Kubernetes</li>
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
