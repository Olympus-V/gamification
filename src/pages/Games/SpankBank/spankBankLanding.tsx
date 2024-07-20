import React, { useState } from "react";
import "./spankBankLanding.scss";
import ImageUpload from "../../../components/ImageUpload/imageUpload";
import SpankBank from "./spankBank";

const SpankBankLandingPage: React.FC = () => {
  const [isImageValid, setIsImageValid] = useState<boolean>(true);
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
        <form onSubmit={handleSubmit} className="custom-form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="audio">Upload Audio:</label>
            <input
              type="file"
              id="audio"
              name="audio"
              accept="audio/*"
              required
            />
          </div>
          <ImageUpload onImageValidate={handleImageValidation} />
          <div className="form-group">
            <label htmlFor="dropdown">Choose an Option:</label>
            <select id="dropdown" name="dropdown">
              <option value="option1">Bedroom</option>
              <option value="option2">Classroom 2</option>
              <option value="option3">Bathroom</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="message">Custom Message:</label>
            <textarea id="message" name="message" required />
          </div>
          <button type="submit" className="submit-button">
            SPANK!
          </button>
        </form>
      ) : (
        <SpankBank />
      )}
    </div>
  );
};

export default SpankBankLandingPage;
