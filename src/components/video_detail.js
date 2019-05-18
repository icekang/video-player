import React from 'react';
import './video-detail-col-md-8.css';
const VideoDetail = (props) => {
    const video = props.video;

    if(!video){
        return <div>Loading...</div>;
    }

    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;

    return (
        <div className = "lol">
            <div className = "video-display">
                <iframe className = "embed-responsive-item" src={url}></iframe>            
            </div>
            <div className = "details">
                {/* <div>{videoId}</div> */}
                <div>{video.snippet.title}</div>
                <div>{video.snippet.decription}</div>
            </div>
        </div>
    );
};

export default VideoDetail;