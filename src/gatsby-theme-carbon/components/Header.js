import React from 'react';
import Header from 'gatsby-theme-carbon/src/components/Header';

const CustomHeader = props => (
  <Header {...props}>
    Learning &nbsp;<span>OpenShift 4.x</span>
  </Header>
);

export default CustomHeader;
