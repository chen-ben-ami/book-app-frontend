import React from "react";
import { useHistory } from 'react-router-dom';
import * as Routes from "../Lib/routes"
import styled from 'styled-components';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AppIconButton from "../Components/AppIconButton";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from 'redux';
import { logoutRequest } from "../State/Action/App";
import { removeOrderRequest } from "../State/Action/User";
const StyledDiv: any = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-wrap:wrap;
    background-color: #1976d2 ;
    color: black;
    width: 100%;
    
`;

const StyledTitle: any = styled.h1`
    margin-left: 1%;
    margin-right: auto;
`;

const StyledIconText: any = styled.p`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 8px;
`;

const StyledIconButton: any = styled(AppIconButton)`
    align - items: center;
    margin: 8px;
    margin-right: 1%;
`;

const NavBar: React.FunctionComponent = () => {
    const history = useHistory();
    const dispatch: Dispatch = useDispatch();
    const acessToken: string = useSelector((state: any) => state.app.acessToken)
    const handleLogoutClicked = () => {
        dispatch(logoutRequest());
        dispatch(removeOrderRequest())
        history.push(Routes.LOGIN);
    }
    return (
        <StyledDiv>
            <StyledTitle>Books shop</StyledTitle>
            <StyledIconText>
                {acessToken ?
                    <StyledIconButton clickHandler={() => handleLogoutClicked()} text={"Logout"} icon={<ExitToAppIcon />} variant={undefined} />
                    : <React.Fragment />}
            </StyledIconText>
        </StyledDiv>
    );
}

export default NavBar;