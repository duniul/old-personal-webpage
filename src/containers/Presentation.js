import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { Button, Container, Grid } from 'semantic-ui-react';
import Avatar from '../components/Avatar';
import SpeechBubble from '../components/SpeechBubble';
import './presentation.css';

class Presentation extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            showTLDR: false,
            avatar: 'talky'
        };
    }

    onClickTLDR = () => {
        this.setState({ showTLDR: !this.state.showTLDR });
    };


    render() {
        const { showTLDR } = this.state;

        return (
            <Container className="presentation">
                <Grid relaxed stackable verticalAlign="middle">
                    <Grid.Row>
                        <Grid.Column width={4}>
                            <Avatar happy={!showTLDR} />
                        </Grid.Column>
                        <Grid.Column width={12}>
                            <SpeechBubble>
                                <h1 className="presentation-header">
                                    Hello, I'm Daniel
                                    <div className="social-links">
                                        <SocialIcon url="mailto:daniel@gronstrand.com" color="#ef5350" />
                                        <SocialIcon url="https://www.linkedin.com/in/danielgronstrand/" />
                                        <SocialIcon url="https://github.com/gronstrand/" color="#24292e" />
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
        );
    }
}

export default Presentation;
