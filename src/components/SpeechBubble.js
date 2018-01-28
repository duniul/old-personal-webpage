import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { SocialIcon } from 'react-social-icons';
import { PAGES } from '../common/constants';
import './speech-bubble.css';

class SpeechBubble extends React.PureComponent {

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

    renderIntroPage = () => {
        const { tldr } = this.props;
        return (
            <React.Fragment>
                {this.renderHeader('Hi, I\'m Daniel')}
                <div className={`presentation-text ${tldr ? 'tldr' : ''}`}>
                    <p style={{ marginBottom: '0.4em' }}>
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
                        hobby.
                        I published a couple of the ones I made for Fallout 4, and they now have <span className="highlighted">over a million downloads</span> and
                        counting. If you want, you can&nbsp;
                        <a className="highlighted"
                           href="https://www.nexusmods.com/users/935126?tab=user+files"
                           target="_blank"
                           rel="noopener noreferrer">
                            check them out here
                        </a>.
                    </p>
                </div>
            </React.Fragment>
        );
    };

    getPageContent = () => {
        const { page } = this.props;
        switch (page) {
            case PAGES.INTRO:
                return this.renderIntroPage();
            default:
        }
    };

    render() {
        return (
            <div className="speech-bubble">
                {this.getPageContent()}
            </div>
        );
    }
}

SpeechBubble.propTypes = {
    tldr: PropTypes.bool,
    page: PropTypes.string
};

const mapStateToProps = ({ tldr, page }) => ({
    tldr,
    page
});

export default connect(mapStateToProps)(SpeechBubble);
