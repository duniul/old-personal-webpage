import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Transition } from 'semantic-ui-react';
import { simpleDebounce } from '../common/util';
import './avatar.css';
import AvatarEyes from './AvatarEyes';
import AvatarMouth from './AvatarMouth';
import AvatarNose from './AvatarNose';

const avatarMoods = ['SAD', 'MIDDLE', 'HAPPY'];

const totalTransitionMs = 200;
const transitionStepMs = totalTransitionMs / (avatarMoods.length - 1);

class Avatar extends React.PureComponent {
  constructor(props) {
    super(props);
    this.debouncedTransition = simpleDebounce(this.runMoodTransition, transitionStepMs / 2);
    this.state = {
      moodIndex: avatarMoods.length - 1,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.tldr !== nextProps.tldr) {
      this.debouncedTransition();
    }
  }

  runMoodTransition = () => {
    setTimeout(() => {
      this.transition = requestAnimationFrame(this.runMoodTransition);
      this.triggerTransitionStep();
    }, transitionStepMs);
  };

  triggerTransitionStep = () => {
    this.setState(({ moodIndex }, { tldr }) => {
      const newMoodIndex = tldr ? moodIndex - 1 : moodIndex + 1;
      if (!!avatarMoods[newMoodIndex]) {
        return { moodIndex: newMoodIndex };
      }

      cancelAnimationFrame(this.transition);
    });
  };

  render() {
    const { moodIndex } = this.state;
    return (
      <Transition visible animation="tada" duration={600} transitionOnMount>
        {/*<img className="avatar" alt="" src={avatarMoods[this.state.moodIndex]} />*/}

        <svg className="avatar" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 204.5 321.5">
          <title>Avatar</title>

          <g id="avatar-base" data-name="avatar-base">
            <path
              className="hair dark"
              d="M160.7,31.6a54.1,54.1,0,0,1,.7-9.1c13,10.6,26.8,44,28.4,61.7.2,3.1,1.7,33,1.2,36C178.1,109.5,160.7,49,160.7,31.6Z"
            />
            <rect className="skin dark" x="27.1" y="217.3" width="127.7" height="96.81" />
            <path
              className="skin dark"
              d="M160.3,140.5a22.1,22.1,0,1,0,22.1-22.1A22.1,22.1,0,0,0,160.3,140.5Z"
            />
            <path
              className="skin light"
              d="M20,210.1a85.5,85.5,0,0,0,85.5,85.6h0a85.6,85.6,0,0,0,85.6-85.6V114a85.6,85.6,0,0,0-85.6-85.6h0A85.5,85.5,0,0,0,20,114Z"
            />
            <path
              className="skin light"
              d="M0,140.5a22.1,22.1,0,1,0,22.1-22.1A22.1,22.1,0,0,0,0,140.5Z"
            />
            <path
              className="skin dark"
              d="M115.5,250.2a5.6,5.6,0,0,0,5.6,5.5h0a5.5,5.5,0,0,0,5.5-5.5h0a5.5,5.5,0,0,0-5.5-5.5h0a5.5,5.5,0,0,0-5.6,5.5Z"
            />
            <path
              className="hair dark"
              d="M43,15.5c8.6,10,30.9,8.6,30.9,21.8,0,21.2-33.8,70.1-53.9,81.2-8.7-10-9.1-35.3-9.1-48.5C10.9,48.8,22.8,26.6,43,15.5Z"
            />
            <rect className="shirt" x="20" y="304.1" width="145.9" height="17.36" />
            <path
              className="hair light"
              d="M35.8,20C53,7.6,76.7,0,102.9,0c45.1,0,86.3,21.1,95.8,51.4-16.9,7-39.9,15.6-61,15.6C93.6,67,55,46.2,35.8,20Z"
            />
            <path
              className="hair streak"
              d="M162.8,42.9c4.2-1.9,5.4-5.8,2.8-8.8C143.1,8.8,96.1,1.2,60.8,17.3c-4.2,1.8-5.4,5.8-2.8,8.7s8.1,3.9,12.3,2c27.1-12.3,63.1-6.5,80.3,12.9C153.2,43.9,158.7,44.8,162.8,42.9Z"
            />
          </g>

          <AvatarEyes />
          <AvatarMouth mood={avatarMoods[moodIndex]} />
          <AvatarNose />
        </svg>
      </Transition>
    );
  }
}

Avatar.propTypes = {
  tldr: PropTypes.bool,
};

const mapStateToProps = ({ tldr }) => ({
  tldr,
});

export default connect(mapStateToProps)(Avatar);
