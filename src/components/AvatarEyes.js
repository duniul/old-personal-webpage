import React from 'react';
import { Transition } from 'semantic-ui-react';
import './avatar.css';

class AvatarEyes extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      blinkLeft: true,
      blinkRight: true,
    };
  }

  onBlinkLeft = () => this.setState({ blinkLeft: !this.state.blinkLeft });

  onBlinkRight = () => this.setState({ blinkRight: !this.state.blinkRight });

  render() {
    const { blinkLeft, blinkRight } = this.state;
    return (
      <g id="avatar-eyes" data-name="avatar-eyes">
        <Transition visible={blinkLeft} animation="bounce" duration={800}>
          <path
            onClick={this.onBlinkLeft}
            className="eyes"
            d="M67.4,108.8a5.5,5.5,0,0,0,5.5,5.5,5.5,5.5,0,0,0,5.5-5.5,5.5,5.5,0,0,0-5.5-5.5A5.4,5.4,0,0,0,67.4,108.8Z"
          />
        </Transition>
        <Transition visible={blinkRight} animation="bounce" duration={800}>
          <path
            onClick={this.onBlinkRight}
            className="eyes"
            d="M154.8,108.8a5.6,5.6,0,1,0,5.5-5.5A5.5,5.5,0,0,0,154.8,108.8Z"
          />
        </Transition>
      </g>
    );
  }
}

export default AvatarEyes;
