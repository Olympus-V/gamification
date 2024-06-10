import './home.scss';

import { useEffect, useState } from 'react';

const HomePage = () => {
    const [currentGifIndex, setCurrentGifIndex] = useState(0);

    const gifSources = [
        '/gifs/home/1.gif',
        '/gifs/home/2.gif',
        '/gifs/home/3.gif',
        '/gifs/home/4.gif',
        '/gifs/home/5.gif',
        '/gifs/home/6.gif',
        '/gifs/home/7.gif',
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentGifIndex((prevIndex) => (prevIndex + 1) % gifSources.length);
        }, 6000); // Change GIF every 6 seconds

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="home-page">
            <div className="landing-content">
                <h1>Welcome to Love Laurels</h1>
                <p>Surprise your loved ones with customizable games and more.</p>
            </div>
            <div className="gif-container">
                <img
                    src={gifSources[currentGifIndex]}
                    alt="Landing animation"
                    className="landing-gif"
                />
            </div>
        </div>
    );
}

export default HomePage;
