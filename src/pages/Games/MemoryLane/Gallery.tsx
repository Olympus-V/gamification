import React, { useEffect, useState } from 'react';
import './Gallery.scss';
import { useAppSelector } from '../../../store/store';

const Gallery: React.FC = () => {
  const photos = useAppSelector((state) => state.photosData.photos);
  const [imageURLs, setImageURLs] = useState<string[]>([]);

  const photoClassesAndLinks = [
    { className: 'slower', link: 'https://altphotos.com/photo/stylish-parisian-cafe-terrace-279/' },
    { className: 'faster', link: 'https://altphotos.com/photo/retro-boy-doll-wearing-elegant-clothes-330/' },
    { className: 'slower vertical', link: 'https://altphotos.com/photo/clocks-shop-exposition-window-reflecting-the-streets-277/' },
    { className: 'slower slower-down', link: 'https://altphotos.com/photo/swans-and-ducks-swimming-in-a-river-264/' },
    { className: '', link: 'https://altphotos.com/photo/sidewalk-terrace-of-a-blue-facade-cafe-312/' },
    { className: 'slower', link: 'https://altphotos.com/photo/paris-waterfront-at-sunset-1555/' },
    { className: 'faster1', link: 'https://altphotos.com/photo/old-man-leaning-over-the-barrier-looking-at-the-river-265/' },
    { className: 'slower slower2', link: 'https://altphotos.com/photo/cafe-terrace-with-a-row-of-retro-tables-261/' },
    { className: '', link: 'https://altphotos.com/photo/street-scene-with-pedestrians-and-dogs-318/' },
    { className: 'slower', link: 'https://altphotos.com/photo/tourist-barge-on-the-river-seine-near-notre-dame-266/' },
    { className: 'slower last', link: 'https://altphotos.com/photo/skulls-decoration-in-a-shop-window-331/' },
  ];

  useEffect(() => {
    const urls = photos.map((photo: { src: any; }) => photo.src);
    setImageURLs(urls);

    return () => {
      urls.forEach(url => URL.revokeObjectURL(url));
    };
  }, [photos]);

  useEffect(() => {
    let autoScrollInterval: NodeJS.Timeout;
    let scrollAmount = 0;

    const wrapper = document.querySelector('.horizontal-scroll-wrapper') as HTMLElement;
    const scrollStep = 1;

    const step = () => {
      scrollAmount += scrollStep;
      wrapper.scrollTop = scrollAmount;

      if (scrollAmount >= wrapper.scrollHeight - wrapper.clientHeight) {
        scrollAmount = 0;
      }
    };

    autoScrollInterval = setInterval(step, 20);

    const stopAutoScroll = () => clearInterval(autoScrollInterval);
    const startAutoScroll = () => autoScrollInterval = setInterval(step, 20);

    wrapper.addEventListener('mouseenter', stopAutoScroll);
    wrapper.addEventListener('mouseleave', startAutoScroll);

    return () => {
      clearInterval(autoScrollInterval);
      wrapper.removeEventListener('mouseenter', stopAutoScroll);
      wrapper.removeEventListener('mouseleave', startAutoScroll);
    };
  }, []);

  return (
    <div className="gallery-external">
      <div className="horizontal-scroll-wrapper">
        {imageURLs.map((url, index) => (
          <div className={`img-wrapper ${photoClassesAndLinks[index]?.className || ''}`} key={index}>
            <a href={photoClassesAndLinks[index]?.link || '#'} target="_blank" rel="noopener">
              <img src={url} alt={`memory-${index}`} />
            </a>
          </div>
        ))}
      </div>
      <p className="scroll-info">
        <span className="icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <path d="M50,67.1c-0.6,0-1.2-0.2-1.8-0.7c-3.8-3.8-7.7-7.7-11.5-11.5c-2.3-2.3,1.2-5.8,3.5-3.5c2.5,2.5,4.9,4.9,7.4,7.4c0-13.7,0-27.4,0-41.2c0-0.6,0.2-1.2,0.5-1.5c0,0,0,0,0,0c0.4-0.6,1.1-1,2-0.9c13.7,0.3,26.4,7.2,33.5,19.1C96.5,55.9,84.7,85,60.2,91.6C35.5,98.2,11.6,79.1,11.1,54c-0.1-3.2,4.9-3.2,5,0c0.3,13.8,8.4,26.4,21.3,31.5c12.5,5,27.1,1.9,36.6-7.5c9.5-9.5,12.5-24.1,7.5-36.6c-4.8-12.1-16.3-20.1-29-21.2c0,12.8,0,25.5,0,38.3c2.5-2.5,4.9-4.9,7.4-7.4c2.3-2.3,5.8,1.3,3.5,3.5c-3.9,3.9-7.8,7.8-11.8,11.8C51.2,66.9,50.6,67.1,50,67.1z"/>
          </svg>
        </span>
        Try scrolling down
      </p>
      <header>
        <p>Your Memory Lane</p>
        <h1>Relive your beautiful memories</h1>
      </header>
    </div>
  );
};

export default Gallery;
