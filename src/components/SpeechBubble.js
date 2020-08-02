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
            During my time at Com Hem, I built a{' '}
            <Highlight color="pink">web-based, in-house CRM-system</Highlight> from scratch,
            together with four other people. It's a modern, fast SPA built with React.js, Java, and
            Oracle. The system has been my primary focus at work.
          </p>
          <p>
            I have also been a part of several hackathons and side projects at Com Hem. Together
            with some, I built an online, <Highlight color="orange">interactive map</Highlight> of
            the company office to help new or confused employees find their way around. We also
            created a <Highlight color="orange">web service</Highlight> for customers to{' '}
            <Highlight color="orange">easily configure modems</Highlight>, skipping the hassle of
            manually logging in to it.
          </p>
          <p>
            These projects were all done at and for Com Hem, so I am sadly not able to share any
            in-depth information or source code. However, there are other things that I have been
            working on during my spare time, which I can share.
          </p>
          <p>
            I{' '}
            <Highlight color="blue" url={urls.GAME_ENGINE}>
              wrote a game engine
            </Highlight>{' '}
            from scratch in Java and{' '}
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
            I'm a <Highlight color="blue">Swedish</Highlight> developer who likes to tinker with
            things like code, hard&shy;ware, and Legos. I currently work as a{' '}
            <Highlight color="blue">Senior Software Engineer</Highlight> at{' '}
            <Highlight color="blue">Acast</Highlight> in{' '}
            <Highlight color="blue">Stockholm</Highlight>. Before that, I was at Com Hem as a
            full-stack developer.
          </p>
          <p>
            I think it's fair to say I'm{' '}
            <Highlight color="orange">proficient in JavaScript</Highlight> by now, having worked
            full-time with <Highlight color="orange">React</Highlight>,{' '}
            <Highlight color="orange">Node</Highlight>, and{' '}
            <Highlight color="orange">TypeScript</Highlight> for several years. Before that, I did{' '}
            <Highlight color="orange">quite a bit of Java</Highlight>, and I love to try out new
            languages and frame&shy;works in general.
          </p>
          <p>
            I got into prog&shy;ramming as a hobbyist{' '}
            <Highlight color="teal">game modder</Highlight>, and I still mod the games I play now
            and then. Some of <Highlight color="teal">my mods</Highlight> have been more
            success&shy;ful than others, like my Fallout 4 mods that now{' '}
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
