import React, { useState } from 'react';
import './Recharge.css';

const Recharge = () => {
  const [activeTab, setActiveTab] = useState('Prepaid');

  return (
    <div className="recharge-section">
      <h2>Recharge or pay bills</h2>
      <div className="tabs">
        {['Prepaid', 'Postpaid', 'DTH', 'Fiber', 'Airtel Black'].map((tab) => (
          <button
            key={tab}
            className={`tab ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <input type="text" placeholder="Enter mobile number" className="mobile-input" />
      <br />
      <input type="text" placeholder="Enter name" className="mobile-name" />
      <button className="recharge-button">RECHARGE</button>
    </div>
  );
};

export default Recharge;
