import React from 'react';
import '../Styles/infoCard.css';

function InfoCard({ featuresData }) {
  return (
    <section className="features">
      <h2 className="sr-only">Features</h2>
      {featuresData.map((feature) => (
        <FeatureItem
          key={feature.key}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </section>
  );
}

const FeatureItem = ({ icon, title, description }) => (
  <div className="feature-item">
    <img src={icon} alt="Chat Icon" className="feature-icon" />
    <h3 className="feature-item-title">{title}</h3>
    <p>{description}</p>
  </div>
);

export default InfoCard;