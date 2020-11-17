import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import AppRoutes from "./AppRoutes";
import Snackbar from "../Components/Snackbar";
import { useSelector } from 'react-redux';

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
  const alertMessage: string = useSelector((state: any) => state.app.alertMessage);
  const alertMode: "error" | "success" | "info" | "warning" | undefined = useSelector((state: any) => state.app.alertMode);
  return (
    <DivStyle>
      <GlobalStyles />
      <AppRoutes />
      <Snackbar text={alertMessage} level={alertMode} />
    </DivStyle>
  );
}

export default App;