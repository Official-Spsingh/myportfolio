import React from 'react'
import { Carousel } from 'antd';
const YouTubeComponet = () => {
    return (
        <Carousel autoplay>
            <div className="video-responsive">
                <iframe src="https://www.youtube.com/embed/y5u52-gLf9o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className="video-responsive">
                <iframe src="https://www.youtube.com/embed/y5u52-gLf9o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </Carousel>
    )
}

export default YouTubeComponet
