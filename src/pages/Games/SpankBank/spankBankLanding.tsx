import React, { useState } from 'react';
import './spankBankLanding.scss';
import ImageUpload from '../../../components/ImageUpload/imageUpload';
import SpankBank from './spankBank';

const SpankBankLandingPage: React.FC = () => {
  const [isImageValid, setIsImageValid] = useState<boolean>(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);

  const handleImageValidation = (isValid: boolean) => {
    setIsImageValid(isValid);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsFormSubmitted(true);
  };

  return (
    <div className="input-details">
      {!isFormSubmitted ? (
        !isImageValid ? (
          <ImageUpload onImageValidate={handleImageValidation} />
        ) : (
            <form onSubmit={handleSubmit} className="custom-form">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="audio">Upload Audio:</label>
              <input type="file" id="audio" name="audio" accept="audio/*" required />
            </div>
            <div className="form-group">
              <label htmlFor="image">Upload Image:</label>
              <input type="file" id="image" name="image" accept="image/*" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Custom Message:</label>
              <textarea id="message" name="message" required />
            </div>
            <button type="submit" className="submit-button">SPANK!</button>
          </form>
        )
      ) : (
        <SpankBank />
      )}
    </div>
  );
};

export default SpankBankLandingPage;
