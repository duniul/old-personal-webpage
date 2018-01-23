import PropTypes from 'prop-types';
import React from 'react';
import './speech-bubble.css';

class SpeechBubble extends React.PureComponent {

    render() {
        const { children } = this.props;
        return (
            <div className="speech-bubble">
                {children}
            </div>
        );
    }
}

SpeechBubble.propTypes = {
    children: PropTypes.node
};

export default SpeechBubble;
