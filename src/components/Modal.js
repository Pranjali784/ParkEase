import React from 'react';
import './Modal.css';

const Modal = ({ title, details, onClose }) => (
  <div className="modal-overlay">
    <div className="modal-content">
      <h3>Details for {title}</h3>
      <p><strong>Owner:</strong> {details.owner}</p>
      <p><strong>Vehicle Type:</strong> {details.vehicleType}</p>
      <p><strong>Timing:</strong> {details.timing}</p>
      <p><strong>Price:</strong> {details.price}</p>
      <button onClick={onClose} className="close-button">Close</button>
    </div>
  </div>
);

export default Modal;
