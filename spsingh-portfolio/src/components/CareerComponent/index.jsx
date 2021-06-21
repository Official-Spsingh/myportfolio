import React from 'react'
import { Timeline } from 'antd';
import { DesktopOutlined, ReadOutlined } from '@ant-design/icons';
const CareerComponent = () => {
    return (
        <div className='career'>
            <Timeline mode="alternate">
                <Timeline.Item dot={<DesktopOutlined />} color="#444e79">
                    <h3>Software Engineer</h3><h4>Netlink Software Pvt. Ltd.</h4><h4>Full Stack Development</h4><h5>Apr 2021 - Present</h5>
                </Timeline.Item>
                <Timeline.Item dot={<DesktopOutlined />} color="#444e79">
                    <h3>Associate Software Engineer</h3><h4>Netlink Software Pvt. Ltd.</h4><h4>Full Stack Development</h4><h5>Aug 2019 - March 2021</h5>
                </Timeline.Item>
                <Timeline.Item dot={<DesktopOutlined />} color="#444e79">
                    <h3>Internship</h3><h4>Netlink Software Pvt. Ltd.</h4><h4>Full Stack Development</h4><h5>Jan 2019 - July 2019</h5>
                </Timeline.Item>
                <Timeline.Item dot={<ReadOutlined />} color="#444e79">
                    <h3>Bachelor Of Engineering</h3><h4>RGPV 2016-20</h4><h4>RITS Bhopal</h4><h5>8.58 CGPA</h5>
                </Timeline.Item>
                <Timeline.Item dot={<ReadOutlined />} color="#444e79">
                    <h3>Intermediate</h3><h4>BSEB 2014-16</h4><h4>N.L.S College, Saran</h4><h5>Percentage : 67%</h5>
                </Timeline.Item>
                <Timeline.Item dot={<ReadOutlined />} color="#444e79">
                    <h3>Matriculations</h3><h4>CBSE 2013-14</h4><h4>S.S Academy, Ami Saran</h4><h5>9.2 CGPA</h5>
                </Timeline.Item>
            </Timeline>
        </div>
    )
}

export default CareerComponent
