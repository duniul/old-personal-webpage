import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Button, Container, Grid } from 'semantic-ui-react';
import Avatar from '../components/Avatar';
import SpeechBubble from '../components/SpeechBubble';
import { toggleTLDR } from '../redux/actions';
import './presentation.css';

class Presentation extends React.PureComponent {
    render() {
        const { tldr, onToggleTLDR } = this.props;

        return (
            <Container className="presentation">
                <Grid relaxed stackable verticalAlign="middle">

                    <Grid.Row>
                        <Grid.Column width={4}>
                            <Avatar />
                        </Grid.Column>
                        <Grid.Column width={12}>
                            <SpeechBubble />
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                        <Grid.Column width={4} />
                        <Grid.Column width={12}>
                            <Button
                                className="tldr-button"
                                active={tldr}
                                size="big"
                                onClick={onToggleTLDR}
                                toggle
                            >
                                {tldr ? 'Keep talking!' : 'TL;DR'}
                            </Button>
                        </Grid.Column>
                    </Grid.Row>

                </Grid>
            </Container>
        );
    }
}

Presentation.propTypes = {
    tldr: PropTypes.bool,
    onToggleTLDR: PropTypes.func
};

const mapStateToProps = ({ tldr }) => ({
    tldr
});

const mapDispatchToProps = (dispatch) => ({
    onToggleTLDR: () => dispatch(toggleTLDR())
});

export default connect(mapStateToProps, mapDispatchToProps)(Presentation);
