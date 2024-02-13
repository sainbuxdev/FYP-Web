// Modal.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Modal = ({ isOpen, handleClose, content, details }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded-lg max-w-lg w-full">
        <div className="flex justify-between items-center mb-2">
          <h4 className="text-lg">{details.fileName}</h4>
          <button onClick={handleClose}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
        <div>
          {content.type === 'video' ? (
            <video controls src={content.src} className="w-full"></video>
          ) : (
            <img src={content.src} alt={details.fileName} className="w-full" />
          )}
        </div>
        <div className="text-sm mt-2">
          <p>Date: {details.date}</p>
          <p>Timestamp: {details.timestamp}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
