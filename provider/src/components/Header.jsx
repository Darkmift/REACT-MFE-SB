import React from 'react';
import styled from 'styled-components';

const Header = ({ className, title }) => {
  return (
    <div className={className}>
      <h3>{title}</h3>
    </div>
  );
};

const styledHeader = styled(Header)`
  display: flex;
  width: 100%;
  background-color: #c57575;
  h3 {
    padding: 0 1vmin;
    color: white;
  }
`;

export default styledHeader;
