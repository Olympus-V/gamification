import React, { useState, useRef } from 'react';
import ExifReader from 'exifreader';
import { useNavigate } from 'react-router-dom';
 // Adjust the path as necessary
import './MemoryLane.scss';
import { useAppDispatch } from '../../../store/store';
import { setPhotos } from '../../../store/slices/photoSlice';
interface IPhoto {
  src: string;
  date: string | null;
}

interface IPhoto {
  src: string;
  date: string | null;
}

const MemoryLane: React.FC = () => {
  const [photos, setLocalPhotos] = useState<IPhoto[]>([]);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    const photoData: IPhoto[] = [];

    files.forEach((file) => {
      const reader = new FileReader();
      const imageReader = new FileReader();
      imageReader.onload = (imgEvent) => {
        const src = imgEvent.target?.result as string;

        reader.onload = async (e) => {
          if (e.target?.result) {
            const tags = await ExifReader.load(e.target.result as ArrayBuffer);
            const dateTag = tags['DateTimeOriginal'] || tags['DateTimeDigitized'] || tags['DateTime'];

            let date = null;
            if (dateTag && dateTag.description) {
              const dateTimeString = dateTag.description;

              if (dateTimeString.includes('T')) {
                date = new Date(dateTimeString).toISOString().split('T')[0];
              } else {
                const dateTimeParts = dateTimeString.split(' ');
                if (dateTimeParts.length >= 2) {
                  const dateParts = dateTimeParts[0].split(':').join('-');
                  date = dateParts;
                }
              }
            }

            photoData.push({
              src: src,
              date: date,
            });

            if (photoData.length === files.length) {
              setLocalPhotos((prevPhotos) => [...prevPhotos, ...photoData]);
            }
          }
        };

        reader.readAsArrayBuffer(file);
      };

      imageReader.readAsDataURL(file);
    });
  };

  const handleDateChange = (index: number, date: string) => {
    const updatedPhotos = [...photos];
    updatedPhotos[index].date = date;
    setLocalPhotos(updatedPhotos);
  };

  const removePhoto = (index: number) => {
    const updatedPhotos = photos.filter((_, i) => i !== index);
    setLocalPhotos(updatedPhotos);
  };

  const triggerFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleGenerate = () => {
    const sortedPhotos = [...photos].sort((a, b) => (a.date || '').localeCompare(b.date || ''));
    dispatch(setPhotos(sortedPhotos));
    navigate('/games/memoryLane/gallery');
  };

  return (
    <div className={`memory-lane ${photos.length > 0 ? 'single-column' : ''}`}>
      <div className='left-side'>
        <h1>Memory Lane</h1>
        <input
          type='file'
          multiple
          accept='image/*'
          onChange={handleFileUpload}
          ref={fileInputRef}
          style={{ display: 'none' }}
        />
        <div className={`photo-gallery ${photos.length > 0 ? 'horizontal-scroll' : ''}`}>
          {photos.length === 0 ? (
            <>
              <div className='upload-image' onClick={triggerFileInput}></div>
              <p className='add-images-text'>Click to add images</p>
            </>
          ) : (
            photos.map((photo, index) => (
              <div key={index} className='photo-card'>
                <img src={photo.src} alt={`Memory ${index}`} className='photo-image' />
                <a href="#" className="remove-button" onClick={() => removePhoto(index)}>&#215;</a>
                <input
                  type='date'
                  placeholder='Enter date'
                  onChange={(e) => handleDateChange(index, e.target.value)}
                  value={photo.date || ''}
                />
              </div>
            ))
          )}
          {photos.length > 0 && (
            <div className='add-more' onClick={triggerFileInput}>
              +
            </div>
          )}
        </div>
        {photos.length > 0 && (
          <button onClick={handleGenerate} className='generate-button'>
            Generate
          </button>
        )}
      </div>
      {photos.length === 0 && (
        <div className='right-side'>
          <img src="/images/MemoryLane/photo.jpg" alt="Right Side Image" className='right-image' />
        </div>
      )}
    </div>
  );
};

export default MemoryLane;