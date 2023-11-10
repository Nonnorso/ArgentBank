import React from 'react';
import '../Styles/infoCard.css';

export default function InfoCard({ featuresData }) {
  return (
    <section className="features">
      <h2 className="sr-only">Features</h2>
      {featuresData.map(({ icon, title, description }, index) => (
        <div className="feature-item" key={index}>
          <img src={process.env.PUBLIC_URL + icon} alt="Chat Icon" className="feature-icon" />
          <h3 className="feature-item-title">{title}</h3>
          <p>{description}</p>
        </div>
      ))}
    </section>
  );
}