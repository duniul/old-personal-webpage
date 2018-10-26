import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Presentation from './containers/Presentation';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Presentation />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
