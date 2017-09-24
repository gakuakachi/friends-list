/**
*
* Header
*
*/

import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  width: 100%;
  height: 80px;
`;

function Header() {
  return (
    <HeaderWrapper>
      ViewMix
    </HeaderWrapper>
  );
}

Header.propTypes = {

};

export default Header;
