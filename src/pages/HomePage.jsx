import React from 'react';
import { connect } from 'react-redux';
import Banner from '../components/Banner';
import InfoCard from '../components/InfoCard';

function HomePage({ featuresData }) {
  const mappedFeatures = featuresData.map((feature, index) => ({
    key: index,
    icon: process.env.PUBLIC_URL + feature.icon,
    title: feature.title,
    description: feature.description,
  }));

  return (
    <>
      <main>
        <Banner />
        <InfoCard featuresData={mappedFeatures} />
      </main>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    featuresData: state.features.featuresData,
  };
};

export default connect(mapStateToProps)(HomePage);