import React from 'react';
import { connect } from 'react-redux';
import InfoCard from '../components/InfoCard';

const InfoCardContainer = ({ featuresData }) => {
  return <InfoCard featuresData={featuresData} />;
};

const mapStateToProps = (state) => {
  return {
    featuresData: state.features.featuresData,
  };
};

export default connect(mapStateToProps)(InfoCardContainer);