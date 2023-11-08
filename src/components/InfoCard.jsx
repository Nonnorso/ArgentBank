import React from 'react';
import { connect } from 'react-redux';
import '../Styles/infoCard.css'

export function InfoCard({featuresData}) {
  return (
    <section className="features">
      <h2 className="sr-only">Features</h2>
      {featuresData.map((feature, index) => (
        <div className="feature-item" key={index}>
          <img src={feature.icon} alt="Chat Icon" className="feature-icon" />
          <h3 className="feature-item-title">{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    featuresData: state.features.featuresData,
  };
};

export default connect (mapStateToProps)(InfoCard);