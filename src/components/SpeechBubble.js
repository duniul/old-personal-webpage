import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { SocialIcon } from 'react-social-icons';
import { Button, Divider } from 'semantic-ui-react';
import Hadouken from '../assets/hadouken.png';
import { PAGES } from '../common/constants';
import { setPage, toggleTLDR } from '../redux/actions';
import './speech-bubble.css';

const sharedLinkProps = { target: '_blank', rel: 'noopener noreferrer' };

const linkProps = {
    nexus: { ...sharedLinkProps, href: "https://www.nexusmods.com/fallout4/users/935126?tab=user+files" },
    craftingWorkbenches: { ...sharedLinkProps, href: "https://www.nexusmods.com/fallout4/mods/2451" },
    companionTracking: { ...sharedLinkProps, href: "https://www.nexusmods.com/fallout4/mods/7903" },
    settlerRenaming: { ...sharedLinkProps, href: "https://www.nexusmods.com/fallout4/mods/2017" },
    vot: { ...sharedLinkProps, href: "https://www.nexusmods.com/fallout4/mods/2173" },
    awkcr: { ...sharedLinkProps, href: "https://www.nexusmods.com/fallout4/mods/6091" },
    gameEngine: { ...sharedLinkProps, href: "https://github.com/gronstrand/sp6-vt2016-gameengine" },
    hadoukatt: { ...sharedLinkProps, href: "https://github.com/gronstrand/sp6-vt2016-hadoukatt" },
    gronstrandCom: { ...sharedLinkProps, href: "https://github.com/gronstrand/gronstrand-com" },
};

class SpeechBubble extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            faded: true
        };
    }

    componentDidMount() {
        setTimeout(() => this.setState({ faded: false }), 600);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.page !== nextProps.page) {
            this.setState({ faded: true });
            setTimeout(() => this.setState({ faded: false }), 200);
        }
    }

    renderHeader = (title) => {
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
        const { tldr, page, lastPage, onSetPage, onToggleTLDR } = this.props;
        const pageOptions = [{
            page: PAGES.INTRO,
            title: 'Who are you again?'
        }, {
            page: PAGES.MODS,
            title: 'Tell me more about those mods.'
        }, {
            page: PAGES.PROJECTS,
            title: 'What else have you done?'
        }];

        return (
            <div className="options">
                <Divider />
                <Button.Group fluid vertical compact>
                    {pageOptions
                        .filter(option => option.page !== (this.state.faded ? lastPage : page))
                        .map(option => {
                            return (
                                <Button key={option.page} size="big" onClick={onSetPage(option.page)} style={{ marginBottom: 4 }}>
                                    -&ensp;{option.title}
                                </Button>
                            );
                        })}
                    <Button className="tldr-button" size="big" onClick={onToggleTLDR} style={{ marginBottom: 4 }} toggle active={tldr}>
                        -&ensp;{tldr ? 'Sorry, you can talk again.' : 'You talk too much, just give me the essentials!'}
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
                        Well, during my time at Com Hem I built <span className="highlighted">a web based, in-house CRM-system</span> from scratch, together
                        with four other people. It's a modern, fast SPA built with React.js, Java and Oracle. The system has been my primary focus at work.
                    </p>
                    <p>
                        I have also been a part of several hackathons and side projects at Com Hem. Together with some colleagues I
                        built <span className="highlighted">an online, interactive map of the company office</span> to help new and/or confused
                        employees find their way around. We also created <span className="highlighted">a service for customers to configure their modem online</span>,
                        without the hazzle of having to manually log into it.
                    </p>
                    <p>
                        All of these projects were made at and for Com Hem, so I am sadly not allowed to share any in-depth information or source code for them.
                        However, there are others that I have been working on during my spare time which I am able to share.
                    </p>
                    <p>
                        I <a className="highlighted" {...linkProps.gameEngine}>wrote a game engine</a> from scratch in Java,
                        and <a className="highlighted" {...linkProps.hadoukatt}>created my own game with it</a>.
                        The game is like a poor man's Duck Game where you play as a cat shooting other cats
                        with <img src={Hadouken} alt="" style={{ height: '0.8em' }} /> hadoukens.
                        Since I only had about two weeks to make both the engine and the game, I didn't
                        have time polish it enough. Maybe I'll pick it up again some day?
                    </p>
                    <p>
                        Finally, there's <a className="highlighted" {...linkProps.gronstrandCom}>this website</a>.
                        It's a new project of mine, and hopefully it will grow into something nice.
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
                        If there is something I feel like I am missing in a game, you can be sure that I will try to either find a way to fix it, or create one on my own.
                        I usually don't release them, but <a className="highlighted"  {...linkProps.nexus}>I made some mods for Fallout 4</a> that I thought could
                        be useful to others.
                    </p>

                    <p>
                        The most popular one is <a className="highlighted" {...linkProps.craftingWorkbenches}>Crafting Workbenches</a>, which allows players
                        to <span className="highlighted">craft items from mater&shy;ials</span>. It also serves as
                        a <span className="highlighted">plat&shy;form for modders</span> to make their own creations
                        craft&shy;able in the game. It is currently in the top 30 of the most endorsed Fallout 4 mods
                        of all time, with <span className="highlighted">over a million downloads</span>.
                    </p>

                    <p>
                        The <a className="highlighted" {...linkProps.awkcr}>Armor and Weapon Keywords Community Resource</a> is a frame&shy;work
                        to <span className="highlighted">help modders</span> make their creations compatible with each
                        other. I joined the project in the early stages and <span className="highlighted">contributed code</span> from Crafting Workbenches. I also created many
                        of its community patches. It is currently the <span className="highlighted">most downloaded Fallout 4 mod of all time</span>.
                    </p>

                    <p>
                        I also <span className="highlighted">created a number of smaller mods</span>.
                        One <a className="highlighted" {...linkProps.companionTracking}>gives players the option to track companions</a>,
                        a feature which was later adopted by the game developers themselves.
                        Another one <a className="highlighted" {...linkProps.settlerRenaming}>allows players to rename characters</a> in
                        the game using simple batch commands. Finally, one <a className="highlighted" {...linkProps.vot}>lets players aim great distances</a> with
                        the games assisted aiming interface, V.A.T.S.
                    </p>
                </div>
            </React.Fragment>
        );
    };

    renderIntroPage = () => {
        const { tldr } = this.props;
        return (
            <React.Fragment>
                {this.renderHeader('Hi, I\'m Daniel')}
                <div className={`presentation-text ${tldr ? 'tldr' : ''}`}>
                    <p>
                        A <span className="highlighted">Swedish</span> man who likes to tinker with things, like code, hard&shy;ware or Legos.
                        I currently work as a <span className="highlighted">full-stack developer</span> at Com Hem <span className="highlighted">in Stockholm</span>.
                    </p>
                    <p>
                        I love to create things and challenge myself, like trying out odd new programming languages,
                        even though I am most <span className="highlighted">proficient in</span> main&shy;stream languages
                        like <span className="highlighted">JavaScript</span> and <span className="highlighted">Java</span>.
                    </p>
                    <p>
                        I am also an avid <span className="highlighted">gamer</span>, and have <span className="highlighted">dabbled in game modding</span> as a
                        hobby. I published a couple of the ones I made for Fallout 4, and they now have <span className="highlighted">over a million downloads</span> and
                        counting.
                    </p>
                </div>
            </React.Fragment>
        );
    };

    getPageContent = () => {
        const { page, lastPage } = this.props;
        const pageToShow = this.state.faded ? lastPage : page;
        switch (pageToShow) {
            case PAGES.INTRO:
                return this.renderIntroPage();
            case PAGES.MODS:
                return this.renderModsPage();
            case PAGES.PROJECTS:
                return this.renderProjectsPage();
            default:
        }
    };

    render() {
        const { faded } = this.state;
        return (
            <div className="speech-bubble" style={{ opacity: faded ? 0 : 1 }}>
                {this.getPageContent()}
                {this.renderOptions()}
            </div>
        );
    }
}

SpeechBubble.propTypes = {
    tldr: PropTypes.bool,
    page: PropTypes.string,
    lastPage: PropTypes.string,
    onSetPage: PropTypes.func,
    onToggleTLDR: PropTypes.func
};

const mapStateToProps = ({ tldr, page, lastPage }) => ({
    tldr,
    page,
    lastPage
});

const mapDispatchToProps = (dispatch) => ({
    onSetPage: (page) => () => dispatch(setPage(page)),
    onToggleTLDR: () => dispatch(toggleTLDR())
});

export default connect(mapStateToProps, mapDispatchToProps)(SpeechBubble);
