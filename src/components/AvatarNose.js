import React from 'react';
import { Transition } from 'semantic-ui-react';
import './avatar.css';

class AvatarNose extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            noseBump: true
        };
    }

    bumpNose = () => this.setState({ noseBump: !this.state.noseBump });

    render() {
        return (
            <Transition visible={this.state.noseBump} animation="shake" duration={600}>
                <g id="avatar-nose" data-name="avatar-nose" onClick={this.bumpNose}>
                    <path className="nose" d="M98.5,124.8a22.6,22.6,0,0,0,22.6,22.5h0a22.5,22.5,0,0,0,22.5-22.5V98.4a22.6,22.6,0,0,0-22.5-22.6h0A22.6,22.6,0,0,0,98.5,98.4Z" />
                </g>
            </Transition>
        );
    }
}

export default AvatarNose;
