import React from 'react';
import { Link } from 'react-router-dom';

const CardVideo = ({ el }) => {
    return (
        <div>
            <Link to={'/detailvideo/' + el.id.videoId}>
                <img src={el?.snippet?.thumbnails?.medium?.url} />
            </Link>

            <h2 title={el?.snippet?.title}>{el?.snippet?.title.length > 30 ? el?.snippet?.title.slice(0, 30) + '...' : el?.snippet?.title}</h2>
            <a href={'https://www.youtube.com/c/Erlando-THR' + el.snippet?.channelTitle}>
                <h5>{el.snippet?.channelTitle}</h5></a>



        </div>
    );
};

export default CardVideo;