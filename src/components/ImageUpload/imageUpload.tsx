import React, { useState } from 'react';

interface ImageUploadProps {
  onImageValidate: (isValid: boolean) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onImageValidate }) => {
  const [image, setImage] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      setImage(URL.createObjectURL(file));
      onImageValidate(true);
    } else {
      alert('Please upload a valid image file.');
      onImageValidate(false);
    }
  };

  return (
    <div>
      <label htmlFor="image-upload">Upload Image:</label>
      <input type="file" id="image-upload" accept="image/*" onChange={handleImageChange} />
      {image && <img src={image} alt="Uploaded" style={{ width: '100px', height: '100px' }} />}
    </div>
  );
};

export default ImageUpload;
