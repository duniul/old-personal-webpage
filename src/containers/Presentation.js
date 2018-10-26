import PropTypes from 'prop-types';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { Container, Grid } from 'semantic-ui-react';
import Avatar from '../components/Avatar';
import SpeechBubble from '../components/SpeechBubble';
import './presentation.css';

class Presentation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tldr: false,
    };
  }

  toggleTldr = () => {
    this.setState({ tldr: !this.state.tldr });
  };

  render() {
    const { tldr } = this.state;

    return (
      <Container className="presentation">
        <Grid relaxed stackable>
          <Grid.Row>
            <Grid.Column width={4}>
              <Avatar tldr={tldr} />
            </Grid.Column>
            <Grid.Column width={12}>
              <SpeechBubble tldr={tldr} toggleTldr={this.toggleTldr} />
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

export default withRouter(Presentation);
