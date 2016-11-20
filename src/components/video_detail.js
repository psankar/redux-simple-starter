import React from 'react';

const VideoDetail = ({video}) => {

    const videoID = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoID}`

    return (
        <div>
            <iframe src={url}></iframe>
            <div>{video.snippet.title}</div>
            <div>{video.snippet.description}</div>
        </div>
    );

}

export default VideoDetail;