import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SpinnerStyles from 'styled-loaders-common/styles/block';

const Block = ({ ...props }) => {
  const Spinner = styled.div`${SpinnerStyles}`;

  return <Spinner {...props} />
};

export default Block;

Block.propTypes = {
  /**
	 * Background of the spinner
	 * default is #333
	 */
  color: PropTypes.string,

  /**
	 * Animation duration
	 * default is 1.2s
	 */
  duration: PropTypes.string,

  /**
	 * Size of the spinner
	 * default is 40px
	 */
  size: PropTypes.string
};