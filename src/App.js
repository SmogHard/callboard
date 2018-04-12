import React, { Component } from 'react';
import Header from './Header';
import CallBoard from './CallBoard';

class App extends Component {
  state = {};

  componentWillMount() {
    if (!localStorage.getItem('Notices')) localStorage.setItem('Notices', JSON.stringify([]));
    if (!localStorage.getItem('id')) localStorage.setItem('id', 0);
  }

  render() {
    return (
      <div className="container main">
        <Header />
        <CallBoard />
      </div>
    );
  }
}

export default App;
