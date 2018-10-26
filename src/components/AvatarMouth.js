import React from 'react';
import './avatar.css';
import { PropTypes } from 'prop-types';

export const MOUTHS = {
  happy: (
    <g id="avatar-mouth-happy" data-name="avatar-mouth">
      <rect className="teeth" x="70.8" y="139.1" width="88.6" height="18.52" />
      <path
        className="teeth"
        d="M115.1,216.7a44.4,44.4,0,0,1-44.2-40.8h88.3A44.3,44.3,0,0,1,115.1,216.7Z"
      />
      <path
        className="throat"
        d="M159.4,157.6v14.8c0,1.2-.1,2.4-.2,3.5H70.9c-.1-1.1-.1-2.3-.1-3.5V157.6Z"
      />
      <path
        className="tongue"
        d="M70.8,172.7a67.8,67.8,0,0,1,61.6,3.2H70.9C70.9,174.9,70.8,173.8,70.8,172.7Z"
      />
      <path
        className="skin dark"
        d="M115.1,221.1a48.8,48.8,0,0,0,48.7-48.7v-35a4.4,4.4,0,0,0-4.4-4.4,4.4,4.4,0,0,0-4.4,4.4v35a39.9,39.9,0,0,1-79.8,0v-35a4.4,4.4,0,0,0-8.8,0v35A48.8,48.8,0,0,0,115.1,221.1Z"
      />
      <path
        className="skin dark"
        d="M64.1,141.8H166a4.4,4.4,0,0,0,0-8.8H64.1a4.4,4.4,0,1,0,0,8.8Z"
      />
    </g>
  ),
  middle: (
    <g id="avatar-mouth-middle" data-name="avatar-mouth">
      <rect className="teeth" x="70.8" y="137.8" width="88.6" height="14.63" />
      <path
        className="throat"
        d="M159.4,152.4v11.7a26.4,26.4,0,0,1-.2,2.8H70.9a26.2,26.2,0,0,1-.1-2.8V152.4Z"
      />
      <path
        className="tongue"
        d="M70.8,164.4a80.1,80.1,0,0,1,27.7-4.7,81,81,0,0,1,33.9,7.2H70.9C70.9,166.1,70.8,165.2,70.8,164.4Z"
      />
      <path
        className="skin dark"
        d="M117.3,171.5c26.8,0,46.5,13.8,46.5-7.4V136.5c0-1.9-2-3.5-4.4-3.5s-4.4,1.6-4.4,3.5v20.4c0,17.4-17.5,6.7-39.5,6.7s-40.3,10.1-40.3-7.2V136.5c0-1.9-2-3.5-4.4-3.5s-4.4,1.6-4.4,3.5v27.6C66.4,185.3,90.4,171.5,117.3,171.5Z"
      />
      <path
        className="skin dark"
        d="M64.1,141.8H166a4.4,4.4,0,0,0,0-8.8H64.1a4.4,4.4,0,1,0,0,8.8Z"
      />
    </g>
  ),
  sad: (
    <g id="avatar-mouth-sad" data-name="avatar-mouth">
      <path
        className="skin dark"
        d="M66,158.9l101.3,8.8c2.4.2,4.6-1.7,5.1-4.6s-1.3-6.1-3.9-6.3L67.2,147.9c-2.3-.2-4.6,1.7-5,4.6S63.5,158.6,66,158.9Z"
      />
    </g>
  ),
};

const AvatarMouth = ({ mood }) => MOUTHS[mood];

AvatarMouth.propTypes = {
  mood: PropTypes.oneOf('happy', 'middle', 'sad'),
};

export default AvatarMouth;
