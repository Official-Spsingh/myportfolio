import React from 'react'
import { Card } from 'antd';
import githublogo from '../../media/githublogo1.png'
import {
    LinkOutlined
} from '@ant-design/icons';
const { Meta } = Card;
const ProjectsComponent = () => {
    return (
        <div className="projects_container">
            <div className="card-container">
                <Card
                    hoverable
                    cover={<img alt="example" src={githublogo} />}
                >
                    <Meta title="Amazon Clone" description={<a target="_blank" href="https://github.com/Official-Spsingh/amazonclone"><LinkOutlined /> Go to project</a>} />
                </Card>
            </div>
            <div className="card-container">
                <Card
                    hoverable
                    cover={<img alt="example" src={githublogo} />}
                >
                    <Meta title="Instagram Clone" description={<a target="_blank" href="https://github.com/Official-Spsingh/insta-clone-rn-sp"><LinkOutlined /> Go to project</a>} />
                </Card>
            </div>
            <div className="card-container">
                <Card
                    hoverable
                    cover={<img alt="example" src={githublogo} />}
                >
                    <Meta title="NPM Component Library" description={<a target="_blank" href="https://github.com/Official-Spsingh/spcomponentlibrary"><LinkOutlined /> Go to project</a>} />
                </Card>
            </div>
            <div className="card-container">
                <Card
                    hoverable
                    cover={<img alt="example" src={githublogo} />}
                >
                    <Meta title="Others" description={<a target="_blank" href="https://github.com/Official-Spsingh?tab=repositories"><LinkOutlined /> Explore all</a>} />
                </Card>
            </div>
        </div>
    )
}

export default ProjectsComponent
