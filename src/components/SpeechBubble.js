import PropTypes from 'prop-types';
import React from 'react';
import ReactGA from 'react-ga';
import { connect } from 'react-redux';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';
import { Button, Divider } from 'semantic-ui-react';
import Hadouken from '../assets/hadouken.png';
import { URLS } from '../common/constants';
import { setPage, toggleTLDR } from '../redux/actions';
import Highlight from './Highlight';
import './speech-bubble.css';

const paths = {
  ME: '/me',
  MODS: '/mods',
  PROJECTS: '/projects',
};

class SpeechBubble extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      faded: true,
    };
  }

  shouldComponentUpdate = (nextProps, nextState) => {
    if (nextProps.tldr !== this.props.tldr) {
      return true;
    }

    if (nextProps.location.pathname !== this.props.location.pathname) {
      return true;
    }

    if (nextState.faded !== this.state.faded) {
      return true;
    }

    return false;
  };

  componentDidMount() {
    setTimeout(() => this.setState({ faded: false }), 600);
  }

  onClickOption = path => () => {
    if (path === this.props.location.pathname) {
      return;
    }

    ReactGA.event({
      category: 'Navigation',
      action: 'Clicked on a page button',
      label: path,
    });

    this.setState({ faded: true });
    setTimeout(() => {
      this.props.history.push(path);
      this.setState({ faded: false });
    }, 300);
  };

  onClickTLDR = () => {
    ReactGA.event({
      category: 'Button',
      action: 'Toggled TL;DR',
      label: String(this.props.tldr),
    });

    this.props.onToggleTLDR();
  };

  renderHeader = title => {
    return (
      <h1 className="presentation-header">
        {title}
        <div className="social-links">
          <SocialIcon url="mailto:daniel@gronstrand.com" color="#ef5350" />
          <SocialIcon url="https://www.linkedin.com/in/danielgronstrand/" />
          <SocialIcon url="https://github.com/gronstrand/" color="#24292e" />
        </div>
      </h1>
    );
  };

  renderOptions = () => {
    const { tldr } = this.props;
    const options = [
      {
        path: paths.ME,
        title: 'Who are you again?',
      },
      {
        path: paths.MODS,
        title: 'Tell me more about those mods.',
      },
      {
        path: paths.PROJECTS,
        title: 'What else have you done?',
      },
    ];

    return (
      <div className="options">
        <Divider />
        <Button.Group fluid vertical compact>
          {options.filter(option => option.path !== this.props.location.pathName).map(option => (
            <Button
              key={option.path}
              size="big"
              onClick={this.onClickOption(option.path)}
              style={{ marginBottom: 4 }}
            >
              -&ensp;
              {option.title}
            </Button>
          ))}

          <Button
            className="tldr-button"
            size="big"
            onClick={this.onClickTLDR}
            style={{ marginBottom: 4 }}
            toggle
            active={tldr}
          >
            -&ensp;
            {tldr ? 'Sorry, you can talk again.' : 'TL;DR'}
          </Button>
        </Button.Group>
      </div>
    );
  };

  renderProjectsPage = () => {
    const { tldr } = this.props;
    return (
      <React.Fragment>
        {this.renderHeader('Other projects')}
        <div className={`presentation-text ${tldr ? 'tldr' : ''}`}>
          <p>
            Well, during my time at Com Hem I built a{' '}
            <Highlight color="pink">web based, in-house CRM-system</Highlight> from scratch,
            together with four other people. It's a modern, fast SPA built with React.js, Java and
            Oracle. The system has been my primary focus at work.
          </p>
          <p>
            I have also been a part of several hackathons and side projects at Com Hem. Together
            with some colleagues I built an online,{' '}
            <Highlight color="orange">interactive map</Highlight> of the company office to help new
            and/or confused employees find their way around. We also created a{' '}
            <Highlight color="orange">web service</Highlight> for customers to{' '}
            <Highlight color="orange">easily configure modems</Highlight>, skipping the hazzle of
            having to manually log into it.
          </p>
          <p>
            All of these projects were made at and for Com Hem, so I am sadly not allowed to share
            any in-depth information or source code for them. However, there are others that I have
            been working on during my spare time which I am able to share.
          </p>
          <p>
            I{' '}
            <Highlight color="blue" url={URLS.GAME_ENGINE}>
              wrote a game engine
            </Highlight>{' '}
            from scratch in Java, and{' '}
            <Highlight color="blue" url={URLS.HADOUKATT}>
              created a game with it
            </Highlight>
            . The game is like a poor man's Duck Game where you play as a cat shooting other cats{' '}
            with <img src={Hadouken} alt="" style={{ height: '0.8em' }} /> hadoukens. Since I only
            had about two weeks to make both the engine and the game, I didn't have time polish it
            enough. Maybe I'll pick it up again some day?
          </p>
          <p>
            Finally, there's{' '}
            <Highlight color="blue" url={URLS.GRONSTRAND_COM_GITHUB}>
              this website
            </Highlight>
            . It's a new project of mine, and hopefully it will grow into something nice.
          </p>
        </div>
      </React.Fragment>
    );
  };

  renderModsPage = () => {
    const { tldr } = this.props;
    return (
      <React.Fragment>
        {this.renderHeader('My mods')}
        <div className={`presentation-text ${tldr ? 'tldr' : ''}`}>
          <p>
            If there is something I feel like I am missing in a game, you can be sure that I will
            try to either find a way to fix it, or create one on my own. I usually don't release
            them, but I made some mods for Fallout 4 that I thought could be useful to others.
          </p>

          <p>
            The most popular one is{' '}
            <Highlight color="teal" url={URLS.CRAFTING_WORKBENCHES}>
              Crafting Workbenches
            </Highlight>
            , which allows players to <Highlight color="teal">craft items</Highlight> from
            mater&shy;ials. It also serves as a{' '}
            <Highlight color="teal">plat&shy;form for modders</Highlight> to make their own
            creations craft&shy;able in the game. It is currently in the top 30 of the most endorsed
            Fallout 4 mods of all time, with over a{' '}
            <Highlight color="teal">million downloads</Highlight>.{' '}
          </p>

          <p>
            <Highlight color="pink" url={URLS.AWKCR}>
              AWKCR
            </Highlight>{' '}
            is a <Highlight color="pink">frame&shy;work to help modders</Highlight> make their
            creations compatible with each other. I joined the project in the early stages and{' '}
            <Highlight color="pink">contributed code</Highlight> from Crafting Workbenches. I also
            created many of its community patches. It is currently the{' '}
            <Highlight color="pink">most downloaded</Highlight> Fallout 4 mod of all time.
          </p>

          <p>
            I also created a number of <Highlight color="orange">smaller mods</Highlight>. One lets
            players{' '}
            <Highlight color="orange" url={URLS.COMPANION_TRACKING}>
              track companions
            </Highlight>
            , a feature which was later adopted by the game developers themselves. Another one
            allows players to{' '}
            <Highlight color="orange" url={URLS.SETTLER_RENAMING}>
              rename characters
            </Highlight>{' '}
            in the game using simple batch commands. Finally, one lets players{' '}
            <Highlight color="orange" url={URLS.VOT}>
              aim great distances
            </Highlight>{' '}
            with the games assisted aiming interface, V.A.T.S.
          </p>
        </div>
      </React.Fragment>
    );
  };

  renderIntroPage = () => {
    const { tldr } = this.props;
    return (
      <React.Fragment>
        {this.renderHeader("Hi, I'm Daniel")}
        <div className={`presentation-text ${tldr ? 'tldr' : ''}`}>
          <p>
            A <Highlight color="blue">Swedish</Highlight> man who likes to tinker with things, like
            code, hard&shy;ware or Legos. I currently work as a{' '}
            <Highlight color="blue">full-stack developer</Highlight> at Com Hem, in{' '}
            <Highlight color="blue">Stockholm</Highlight>.
          </p>
          <p>
            I love to create things and challenge myself, like trying out odd new programming
            languages, even though I am most <Highlight color="orange">proficient in</Highlight>{' '}
            main&shy;stream languages like <Highlight color="orange">JavaScript</Highlight> and{' '}
            <Highlight color="orange">Java</Highlight>.
          </p>
          <p>
            I am also an avid <Highlight color="teal">gamer</Highlight>, and have{' '}
            <Highlight color="teal">dabbled in game modding</Highlight> as a hobby. I published a
            couple of the ones I made for Fallout 4, and they now have over a{' '}
            <Highlight color="teal">million downloads</Highlight> and counting.
          </p>
        </div>
      </React.Fragment>
    );
  };

  render() {
    const { faded } = this.state;
    return (
      <div className="speech-bubble" style={{ opacity: faded ? 0 : 1 }}>
        <Switch>
          <Route exact path={paths.ME} render={this.renderIntroPage} />
          <Route exact path={paths.MODS} render={this.renderModsPage} />
          <Route exact path={paths.PROJECTS} render={this.renderProjectsPage} />
          <Redirect to={paths.ME} />
        </Switch>
        {this.renderOptions()}
      </div>
    );
  }
}

SpeechBubble.propTypes = {
  tldr: PropTypes.bool,
  onSetPage: PropTypes.func,
  onToggleTLDR: PropTypes.func,
  history: PropTypes.object,
  location: PropTypes.object,
};

const mapStateToProps = ({ tldr }) => ({
  tldr,
});

const mapDispatchToProps = dispatch => ({
  onSetPage: page => dispatch(setPage(page)),
  onToggleTLDR: () => dispatch(toggleTLDR()),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SpeechBubble)
);
