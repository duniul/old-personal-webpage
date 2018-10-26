import PropTypes from 'prop-types';
import React from 'react';
import { OutboundLink } from 'react-ga';
import './highlight.css';

const Highlight = ({ children, color, url }) => {
  const className = `highlight ${color}`;

  if (url) {
    return (
      <OutboundLink
        className={className}
        eventLabel="Clicked a link"
        to={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </OutboundLink>
    );
  }

  return <span className={className}>{children}</span>;
};

Highlight.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  url: PropTypes.string,
};

Highlight.defaultProps = {
  color: 'blue',
  url: undefined,
};

export default Highlight;
