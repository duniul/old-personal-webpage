import React from 'react';
import Presentation from './containers/Presentation';

class Root extends React.Component {

    render() {
        return (
            <div className="main">
                <Presentation />
            </div>
        );
    }
}

export default Root;
