import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Presentation from './containers/Presentation';

class Main extends React.Component {
  render() {
    return (
      <div className="main">
        <BrowserRouter>
          <Presentation />
        </BrowserRouter>
      </div>
    );
  }
}

export default Main;
