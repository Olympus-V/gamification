import './home.scss';

import { useEffect, useState } from 'react';
import { StringConstants } from '../../utils/constants';

const HomePage = () => {
    const [currentGifIndex, setCurrentGifIndex] = useState(0);

    const gifSources = [
        `${process.env.PUBLIC_URL}/gifs/home/1.gif`,
        `${process.env.PUBLIC_URL}/gifs/home/2.gif`,
        `${process.env.PUBLIC_URL}/gifs/home/3.gif`,
        `${process.env.PUBLIC_URL}/gifs/home/4.gif`,
        `${process.env.PUBLIC_URL}/gifs/home/5.gif`,
        `${process.env.PUBLIC_URL}/gifs/home/6.gif`,
        `${process.env.PUBLIC_URL}/gifs/home/7.gif`,
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentGifIndex((prevIndex) => (prevIndex + 1) % gifSources.length);
        }, 6000); // Change GIF every 6 seconds

        return () => clearInterval(timer);
    }, []);

    return (
        <div className='container home-page'>
            <div className='landing-content'>
                <h1>{StringConstants.APP_TITLE_TEXT}</h1>
                <p>{StringConstants.APP_DESCRIPTION_TEXT}</p>
            </div>
            <div className='gif-container'>
                <img
                    src={gifSources[currentGifIndex]}
                    alt='Landing animation'
                    className='landing-gif'
                />
            </div>
        </div>
    );
}

export default HomePage;
