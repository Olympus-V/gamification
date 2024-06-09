import React, { useState } from 'react';
import './MemoryLane.css';

interface Photo {
  src: string;
  date: string | null;
}

const MemoryLane: React.FC = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    const photoData: Photo[] = [];

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = (e) => {
        if (e.target?.result) {
          photoData.push({
            src: e.target.result as string,
            date: null, // initially set date as null
          });

          if (photoData.length === files.length) {
            setPhotos((prevPhotos) => [...prevPhotos, ...photoData]);
          }
        }
      };

      reader.readAsDataURL(file);
    });
  };

  const handleDateChange = (index: number, date: string) => {
    const updatedPhotos = [...photos];
    updatedPhotos[index].date = date;
    setPhotos(updatedPhotos);
  };

  return (
    <div className="memory-lane">
      <h1>Memory Lane</h1>
      <input type="file" multiple accept="image/*" onChange={handleFileUpload} />
      <div className="photo-gallery">
        {photos.map((photo, index) => (
          <div key={index} className="photo-card">
            <img src={photo.src} alt={`Memory ${index}`} className="photo-image" />
            <input
              type="date"
              placeholder="Enter date"
              onChange={(e) => handleDateChange(index, e.target.value)}
              value={photo.date || ''}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MemoryLane;
