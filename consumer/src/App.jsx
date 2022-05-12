import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import Header from 'provider/Header';

const App = () => (
  <div className="container">
    <Header title={'Im a MFE component!'} />
  </div>
);
ReactDOM.render(<App />, document.getElementById('app'));
