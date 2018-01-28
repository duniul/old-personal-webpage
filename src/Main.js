import PropTypes from 'prop-types';
import React from 'react';
import { Provider } from 'react-redux';
import Presentation from './containers/Presentation';

class Main extends React.Component {
    render() {
        return (
            <div className="main">
                <Provider store={this.props.store}>
                    <Presentation />
                </Provider>
            </div>
        );
    }
}

Main.propTypes = {
    store: PropTypes.object
};

export default Main;
