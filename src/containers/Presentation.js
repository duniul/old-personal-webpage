import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import { Container, Grid } from 'semantic-ui-react';
import Avatar from '../components/Avatar';
import SpeechBubble from '../components/SpeechBubble';
import { toggleTLDR } from '../redux/actions';
import './presentation.css';

class Presentation extends React.Component {
  render() {
    return (
      <Container className="presentation">
        <Grid relaxed stackable>
          <Grid.Row>
            <Grid.Column width={4}>
              <Avatar />
            </Grid.Column>
            <Grid.Column width={12}>
              <SpeechBubble />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

Presentation.propTypes = {
  tldr: PropTypes.bool,
  onToggleTLDR: PropTypes.func,
};

const mapStateToProps = ({ tldr }) => ({
  tldr,
});

const mapDispatchToProps = dispatch => ({
  onToggleTLDR: () => dispatch(toggleTLDR()),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Presentation)
);
