import PropTypes from 'prop-types';
import React from 'react';
import AvatarConfused from '../assets/avatar-confused.svg';
import AvatarDisappointed from '../assets/avatar-disappointed.svg';
import AvatarHappy from '../assets/avatar-happy.svg';
import './avatar.css';

const avatarMoods = [
    AvatarDisappointed,
    AvatarConfused,
    AvatarHappy
];

const totalTransitionMs = 300;
const transitionStepMs = totalTransitionMs / (avatarMoods.length - 1);

class Avatar extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            moodIndex: avatarMoods.length - 1
        };
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.happy !== nextProps.happy) {
            this.startMoodTransition();
        }
    }

    startMoodTransition = () => {
        this.transition = setInterval(this.triggerTransitionStep, transitionStepMs);
    };

    triggerTransitionStep = () => {
        this.setState(({ moodIndex }, { happy }) => {
            const newMoodIndex = happy ? moodIndex + 1 : moodIndex - 1;
            if (!!avatarMoods[newMoodIndex]) {
                return { moodIndex: newMoodIndex };
            }

            clearInterval(this.transition);
        });
    };


    render() {
        return <img className="avatar" alt="" src={avatarMoods[this.state.moodIndex]} />;
    }
}

Avatar.propTypes = {
    happy: PropTypes.bool
};

export default Avatar;
