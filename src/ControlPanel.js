import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background: green;
  padding: 20px;
`;

const Panel = styled.section``;

const ControlPanel = () => (
  <Panel>
    <Button>Добавить</Button>
  </Panel>
);

export default ControlPanel;
