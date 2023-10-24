import React from 'react';

const featuresData = [
  {
    icon: './assets/icon-chat.webp',
    title: 'You are our #1 priority',
    description:
      'Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.',
  },
  {
    icon: './assets/icon-money.webp',
    title: 'More savings means higher rates',
    description: 'The more you save with us, the higher your interest rate will be!',
  },
  {
    icon: './assets/icon-security.webp',
    title: 'Security you can trust',
    description: 'We use top of the line encryption to make sure your data and money is always safe.',
  },
];

export default function InfoCard() {
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