import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getVideoByID } from '../../API';

const DetailVideo = () => {
    const { id } = useParams()
    console.log(id);
    useEffect(() => {
        getVideoByID + id
    }, [])
    return (
        <div>

        </div>
    );
};

export default DetailVideo;