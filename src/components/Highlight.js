import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import './highlight.css';

const Highlight = ({ children, color, url }) => {
  const className = `highlight ${color}`;

  if (url) {
    if (url.startsWith('http')) {
      return (
        <a className={className} href={url} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    }

    return (
      <Link className={className} to={url} target="_blank" rel="noopener noreferrer">
        {children}
      </Link>
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
