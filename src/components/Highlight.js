import PropTypes from 'prop-types';
import React from 'react';
import './highlight.css';


const Highlight = ({ children, color, url }) => {
    const className = `highlight ${color}`;

    if (url) {
        return <a className={className} href={url} target="_blank" rel="noopener noreferrer">{children}</a>;
    }

    return <span className={className}>{children}</span>
};

Highlight.propTypes = {
    children: PropTypes.node,
    color: PropTypes.string,
    url: PropTypes.string
};

export default Highlight;
