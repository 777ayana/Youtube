import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllVideoOrByName } from './../../API/index';

const Header = ({ setVideos }) => {
    const [input, setInput] = useState('')
    return (
        <header>
            <Link to={'/'}><h1>YouTube</h1></Link>

            <div>
                <input type="text" placeholder='введите запрос' onChange={(e) => setInput(e.target.value)}></input>
                <button onClick={() => {
                    getAllVideoOrByName(input)
                        .then(response => {
                            setVideos(response?.data?.items);

                        })


                }}>Search</button>
            </div>

        </header>
    );
};

export default Header;