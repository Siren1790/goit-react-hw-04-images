import React from 'react';
import PropTypes from 'prop-types';

import { Dna } from 'react-loader-spinner';
import { Backdrop } from './Loader.styled';

export const Loader = ({ isLoading }) => {
  if (isLoading) {
    return (
      <Backdrop>
        <Dna
          visible={true}
          color="blue"
          width="1400"
          height="80"
          wrapperClass=""
          wrapperStyle={{}}
          ariaLabel="dna-loading"
        />
      </Backdrop>
    );
  }
};

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};
