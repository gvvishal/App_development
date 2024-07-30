import React from 'react';
import './Connection.css';

const Connection = () => {
  return (
    <div className="connection-section">
      <h2>Buy a new connection</h2>
      <div className="connection-options">
        <div className="option">
          <img src="prepaid-icon.png" alt="Prepaid" />
          <p>Prepaid</p>
        </div>
        <div className="option">
          <img src="postpaid-icon.png" alt="Postpaid" />
          <p>Postpaid</p>
        </div>
        <div className="option">
          <img src="dth-icon.png" alt="DTH" />
          <p>DTH</p>
        </div>
        <div className="option">
          <img src="fiber-icon.png" alt="Fiber" />
          <p>Fiber</p>
        </div>
        <div className="option">
          <img src="airtel-black-icon.png" alt="Airtel Black" />
          <p>Airtel Black</p>
        </div>
        <div className="option">
          <img src="xsafe-icon.png" alt="Xsafe" />
          <p>Xsafe</p>
        </div>
      </div>
    </div>
  );
};

export default Connection;
