import React from 'react';
import './PlanSelection.css';

const PlansSection = () => {
  const plansData = [
    {
      id: 1,
      price: "₹3599",
      validity: "365 Days",
      data: "2.5 GB/Day",
      subscription: ["YouTube", "+1 more"],
      monthlyCost: "₹276",
      details: "UNLIMITED TRUE 5G DATA"
    },
    // Add more plans as needed
  ];

  return (
    <div className="plans-section">
      <h2>Plans</h2>
      <div className="grid-container">
        {plansData.map((plan) => (
          <div key={plan.id} className="plan-card">
            <div className="monthly-cost">ONLY {plan.monthlyCost}/MONTH</div>
            <div className="price">{plan.price}</div>
            <div className="details">{plan.details}</div>
            <a href="#details" className="view-details">View details</a>
            <div className="plan-info">
              <div className="validity"><strong>VALIDITY</strong><br />{plan.validity}</div>
              <div className="data"><strong>DATA</strong><br />{plan.data}</div>
            </div>
            <div className="subscriptions">
              <strong>SUBSCRIPTIONS</strong><br />
              {plan.subscription.map((sub, index) => (
                <span key={index} className="subscription">{sub}</span>
              ))}
            </div>
            <button className="recharge-button">Recharge</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlansSection;
