import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { useSelector } from 'react-redux';
import AppRoutes from "./AppRoutes"
import { ThemeProvider } from "styled-components";
import { StylesProvider } from '@material-ui/core/styles';

interface IGlobalTheme {
  backgroundColor: string;
  textColor: string;

}

interface IMainTheme {
  cardColor: string;
  textColor: string;
  headerColor: string;
  buttonColor: string;
}

const GlobalStyles: any = createGlobalStyle<IGlobalTheme>`
  html{    
    background: ${(props: IGlobalTheme) => props.backgroundColor};
    color: ${(props: IGlobalTheme) => props.textColor};
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
  // const alertMessage: string = useSelector((state: any) => state.app.alertMessage);
  // const alertMode: "error" | "success" | "info" | "warning" | undefined = useSelector((state: any) => state.app.alertMode);
  return (
    <DivStyle>
      <StylesProvider injectFirst>
        <GlobalStyles />
        <AppRoutes />
        {/* <Snackbar text={alertMessage} level={alertMode} /> */}
      </StylesProvider>
    </DivStyle>
  );
}

export default App;