import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
  background: #000;
  padding: 20px;
`;

const Title = styled.h2`
  color: #ffffff;
  margin: 0;
`;

const Head = () => (
  <Header>
    <Title>Доска объявлений</Title>
  </Header>
);

export default Head;
