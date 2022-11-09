import PropTypes from 'prop-types';
import React from 'react';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';
import { Button, Divider } from 'semantic-ui-react';
import Hadouken from '../assets/hadouken.png';
import { urls } from '../constants';
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

  onClickOption = (path) => () => {
    if (path === this.props.location.pathname) {
      return;
    }

    this.setState({ faded: true });
    setTimeout(() => {
      this.props.history.push(path);
      this.setState({ faded: false });
    }, 300);
  };

  onClickTldr = () => {
    this.props.toggleTldr();
  };

  renderHeader = (title) => {
    return (
      <h1 className="presentation-header">
        {title}
        <div className="social-links">
          <SocialIcon url="mailto:hello@danielgrefberg.com" bgColor="#ef5350" />
          <SocialIcon url="https://www.linkedin.com/in/danielgrefberg/" />
          <SocialIcon url="https://github.com/duniul/" bgColor="#24292e" />
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
        path: paths.PROJECTS,
        title: 'What else have you done?',
      },
      {
        path: paths.MODS,
        title: 'Tell me more about those mods.',
      },
    ];

    return (
      <div className="options">
        <Divider />
        <Button.Group fluid vertical compact>
          {options
            .filter((option) => option.path !== this.props.location.pathname)
            .map((option) => (
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
            onClick={this.onClickTldr}
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
            Other than regular professional experience I've participated in a lot of hackathons or
            hackdays. At Com Hem I built an online,{' '}
            <Highlight color="orange">interactive map</Highlight> of the company office to help new
            or confused employees find their way around, as well as a{' '}
            <Highlight color="orange">web service</Highlight> for customers to{' '}
            <Highlight color="orange">easily configure modems</Highlight>, skipping the hassle of
            manually logging in to it.
          </p>
          <p>
            At Acast I've made a lot of hacks that evolved into production features! An automated
            "repo janitor" for <Highlight color="teal">maintaining documentation</Highlight> and
            monorepos, <Highlight color="teal">automated per-branch environment domains</Highlight>{' '}
            for PR requests, a <Highlight color="teal">reverse-proxy tunneling service</Highlight>{' '}
            for hosting local environments on a public Acast domain, and a{' '}
            <Highlight color="teal">token provider</Highlight> to help cache tokens and connect to
            Acast's auth services.
          </p>
          <p>
            Some of these projects were all done at and for the companies I work for, so I sadly
            cannot share them all in public except for the ones with links.
          </p>
          <p>
            I also{' '}
            <Highlight color="blue" url={urls.GAME_ENGINE}>
              wrote a game engine
            </Highlight>{' '}
            from scratch in Java once and{' '}
            <Highlight color="blue" url={urls.HADOUKATT}>
              created a game with it
            </Highlight>
            . The game is like a poor man's Duck Game, where you play as a cat shooting other cats{' '}
            with <img src={Hadouken} alt="" style={{ height: '0.8em' }} /> hadoukens. Since I only
            had about two weeks to make both the engine and the game, I didn't have time to polish
            it enough. Maybe I'll pick it up again some day?
          </p>
          <p>
            You can find more of the stuff I've made on my{' '}
            <Highlight color="blue" url={urls.GITHUB}>
              Github profile
            </Highlight>
            .
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
            them, but I made some for <i>Fallout 4</i> and <i>Mount and Blade: Bannerlord</i> that I
            thought could be useful to others. I publish most of them on{' '}
            <Highlight color="orange" url={urls.NEXUS}>
              NexusMods
            </Highlight>
            .
          </p>

          <p>
            <Highlight color="teal" url={urls.CRAFTING_WORKBENCHES}>
              Crafting Workbenches
            </Highlight>{' '}
            is the most popular one that I made on my own, which allows players to{' '}
            <Highlight color="teal">craft items</Highlight> from mater&shy;ials. It also serves as a{' '}
            <Highlight color="teal">plat&shy;form for modders</Highlight> to make their own
            creations craft&shy;able in the game. It is currently in the top 30 of the most endorsed
            Fallout 4 mods of all time, with{' '}
            <Highlight color="teal">over a million downloads</Highlight>.{' '}
          </p>

          <p>
            <Highlight color="pink" url={urls.AWKCR}>
              AWKCR
            </Highlight>{' '}
            is a <Highlight color="pink">frame&shy;work to help modders</Highlight> make their
            creations compatible with each other. I joined the project in the early stages and{' '}
            <Highlight color="pink">contributed code</Highlight> from Crafting Workbenches. I also
            created many of its community patches. It is currently the{' '}
            <Highlight color="pink">most downloaded Fallout 4 mod of all time</Highlight>.
          </p>

          <p>
            I also created a number of <Highlight color="blue">smaller mods</Highlight>. One lets
            players{' '}
            <Highlight color="blue" url={urls.COMPANION_TRACKING}>
              track companions
            </Highlight>
            , a feature which was later adopted by the game developers themselves. Another one
            allows players to{' '}
            <Highlight color="blue" url={urls.SETTLER_RENAMING}>
              rename characters
            </Highlight>{' '}
            in the game using simple batch commands. Finally, one lets players{' '}
            <Highlight color="blue" url={urls.VOT}>
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
        {this.renderHeader("Hello, I'm Daniel")}
        <div className={`presentation-text ${tldr ? 'tldr' : ''}`}>
          <p>
            I'm a <Highlight color="blue">Swedish</Highlight> developer who loves slick user
            interfaces, CLI tools and great developer experiences. I currently work as a{' '}
            <Highlight color="blue">Staff Engineer</Highlight> at{' '}
            <Highlight color="blue">Acast</Highlight> in{' '}
            <Highlight color="blue">Stockholm</Highlight>.
          </p>
          <p>
            <Highlight color="orange">JavaScript</Highlight> is my bread and butter, preferably with{' '}
            <Highlight color="orange">TypeScript</Highlight>, and I've worked full-time with{' '}
            <Highlight color="orange">Node</Highlight> and{' '}
            <Highlight color="orange">React</Highlight> for a lot of years now. I've also gotten
            efficient with <Highlight color="orange">Bash</Highlight> and a lot of{' '}
            <Highlight color="orange">DevOps</Highlight> tooling.
          </p>
          <p>
            I got into prog&shy;ramming as a <Highlight color="teal">game modder</Highlight>, and I
            still mod the games I play every now and then. Some of{' '}
            <Highlight color="teal">my mods</Highlight> have been more success&shy;ful than others,
            like my Fallout 4 mods that now{' '}
            <Highlight color="teal">have millions of downloads</Highlight>.
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
  toggleTldr: PropTypes.func.isRequired,
  tldr: PropTypes.bool.isRequired,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default withRouter(SpeechBubble);
