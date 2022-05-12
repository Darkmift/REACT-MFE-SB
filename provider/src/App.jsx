import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';

import styled from 'styled-components';

const App = ({ className }) => (
  <div className={className}>
    <Header title={'Provider'} />
    <div className="main">
      <div className="container">
        <div>Name: provider</div>
        <div>Framework: react</div>
        <div>Language: JavaScript</div>
        <div>CSS: Empty CSS</div>
      </div>
    </div>
  </div>
);

const StyledApp = styled(App)`
  .main {
    background-color: antiquewhite;
  }
  .container {
    display: flex;
    padding: 1vmin;
    background-color: cadetblue;
  }
`;
ReactDOM.render(<StyledApp />, document.getElementById('root'));
