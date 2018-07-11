import { cx, css } from 'emotion';
import PropTypes from 'prop-types';
import React from 'react';

import colors from './colors';
import ShareButton from '../ShareButton';

const styles = css`
  align-items: center;
  background: none;
  border: 0;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  height: 44px;
  justify-content: center;
  margin: 3px;
  transition: 0.3s;
  width: 44px;

  & > svg {
    fill: white;
    filter: drop-shadow(0 0 2px rgba(0, 0, 0, 0.5));
    height: 80%;
    transition: 0.3s;
    width: 80%;
  }

  @media (any-hover: none) {
    &:hover > svg {
      fill: white;
      filter: drop-shadow(0 0 2px rgba(0, 0, 0, 0.5));
    }
  }

  @media (min-width: 330px) {
    margin: 5px;
  }

  @media (min-width: 600px) {
    margin: 7px;
  }

  @media (min-width: 1025px) {
    margin: 10px;
  }
`;

const dynamicStyles = props => css`
  &:hover > svg {
    fill: ${colors[props.network]};
    filter: none;
  }
`;

const ShareButtonOutline = props => {
  const { customClassName } = props;
  const dynamicStylesStr = dynamicStyles(props);

  return (
    <ShareButton
      className={cx(styles, dynamicStylesStr, customClassName)}
      {...props}
    />
  );
};

ShareButtonOutline.propTypes = {
  customClassName: PropTypes.string,
};

export default ShareButtonOutline;