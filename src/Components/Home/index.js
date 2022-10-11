import React from 'react';
import CardVideo from '../CardVideo';

const Home = ({ data }) => {
    return (
        <div>
            {
                data?.map(el => {
                    //console.log(el);
                    return (
                        <CardVideo el={el} key={el?.id?.videoId} />
                    )
                })
            }

        </div>
    );
};

export default Home;