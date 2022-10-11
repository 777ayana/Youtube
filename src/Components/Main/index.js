import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from '../Header';
import Home from './../Home/index';
import DetailVideo from './../DetailVideo/index';
import { getAllVideoOrByName } from '../../API';

const Main = () => {
    const [videos, setVideos] = useState([])

    useEffect(() => {
        getAllVideoOrByName().then(response => {
            setVideos(response?.data?.items)
        })

    }, [])

    return (
        <div>
            <Header setVideos={setVideos} />

            <Routes>
                <Route path='/' element={<Home data={videos} />} />
                <Route path='/detailVideo/:id' element={<DetailVideo />} />

            </Routes>

        </div>
    );
};

export default Main;