import React,{useEffect} from 'react';
import styled from 'styled-components';
// import scssModule from './Header.module.scss';
import scssModule from '!!raw-loader!./Header.module.scss';

const Header = ({
  className,
  title,
  emitOnClick = () => {
    console.log('not passed');
  },
}) => {
  useEffect(() => {
    console.log('🚀 ~ file: Header.jsx ~ line 16 ~ scssModule', scssModule);
  }, [scssModule]);

  return (
    <div className={className} onClick={emitOnClick}>
      <h3 className="title">{title}</h3>
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
  ${scssModule}
`;

export default styledHeader;
