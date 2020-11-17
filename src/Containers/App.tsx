import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import AppRoutes from "./AppRoutes";

const GlobalStyles: any = createGlobalStyle`
  html{    
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    font-weight: bold;
    height: 100%;
    width: 100%;
  }
  body{
    height: 100%;
    width: 100%;
    margin: 0px;
  }
  #root {
    height: 100%;
  }
`;

const DivStyle: any = styled.div`
  height: 100%;
  width: 100%;
  margin: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
`;




function App() {
  return (
    <DivStyle>
      <GlobalStyles />
      <AppRoutes />
    </DivStyle>
  );
}

export default App;