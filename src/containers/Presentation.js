import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { Button, Container, Grid, Image } from 'semantic-ui-react';
import HalfwayAvatar from '../assets/me-right-disgust.svg';
import QuietAvatar from '../assets/me-right-quiet.svg';
import TalkyAvatar from '../assets/me-right.svg';
import SpeechBubble from '../components/SpeechBubble';
import './presentation.css';

const avatars = {
    'talky': TalkyAvatar,
    'halfway': HalfwayAvatar,
    'quiet': QuietAvatar
};

class Presentation extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            showTLDR: false,
            avatar: 'talky'
        };
    }

    onClickTLDR = () => {
        this.triggerAvatarTransition();
        this.setState({ showTLDR: !this.state.showTLDR });
    };

    triggerAvatarTransition = () => {
        setTimeout(() => this.setState({ avatar: 'halfway' }), 100);
        setTimeout(() => this.setState({ avatar: this.state.showTLDR ? 'quiet' : 'talky' }), 200);
    };

    render() {
        const { showTLDR, avatar } = this.state;
        const socialIconProps = {
            style: { height: 40, width: 40, marginLeft: '0.2em' }
        };

        return (
            <div className="presentation">
                <Container style={{ paddingTop: '8em' }}>
                    <Grid relaxed stackable verticalAlign="middle">
                        <Grid.Row>
                            <Grid.Column width={4}>
                                <Image src={avatars[avatar]} style={{ width: 234, height: 300, margin: '0 auto' }} />
                            </Grid.Column>
                            <Grid.Column width={12}>
                                <SpeechBubble>
                                    <h1 className="presentation-header">
                                        Hello, I'm Daniel
                                        <div style={{ float: 'right', marginTop: '-0.1em' }}>
                                            <SocialIcon {...socialIconProps} url="mailto:daniel@gronstrand.com" color="#ef5350" />
                                            <SocialIcon {...socialIconProps} url="https://www.linkedin.com/in/danielgronstrand/" />
                                            <SocialIcon {...socialIconProps} url="https://github.com/gronstrand/" color="#24292e" />
                                        </div>
                                    </h1>
                                    <div className={`presentation-text ${showTLDR ? 'tldr' : ''}`}>
                                        <p style={{ marginBottom: '0.4em' }}>
                                            A <span className="highlighted">Swedish</span> man who likes to tinker with things, like code, hardware and/or Legos.
                                            I currently work as a <span className="highlighted">full-stack developer</span> at Com Hem <span className="highlighted">in Stockholm</span>.
                                        </p>
                                        <p>
                                            I love to create things and challenge myself, like trying out odd new programming languages,
                                            even though I am most <span className="highlighted">proficient in</span> mainstream languages
                                            like <span className="highlighted">JavaScript</span> and <span className="highlighted">Java</span>.
                                        </p>
                                    </div>
                                    <Button
                                        className="tldr-button"
                                        active={showTLDR}
                                        toggle
                                        size="big"
                                        onClick={this.onClickTLDR}
                                    >
                                        {showTLDR ? 'Give me the deets!' : 'TL;DR'}
                                    </Button>
                                </SpeechBubble>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </div>
        );
    }
}

export default Presentation;
