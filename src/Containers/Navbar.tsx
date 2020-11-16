import React from "react"
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Dispatch } from 'redux';
import * as Routes from "../Lib/routes"
import styled from 'styled-components';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

//dark mode color for header #333
const StyledDiv: any = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-wrap:wrap;
    background-color: #1976d2 ;
    color: white;
    width: 100%;
    
`;

const StyledTitle: any = styled.h1`
    margin-left: 1%;
    margin-right: auto;
`;

// const StyledIconText: any = styled.p`
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     margin: 8px;
// `;

// const StyledIconButton: any = styled(ExitToAppIcon)`
//     align - items: center;
//     margin: 8px;
//     margin-right: 1%;
// `;

const NavBar: React.FunctionComponent = () => {
    const history = useHistory();
    const dispatch: Dispatch = useDispatch();

    return (
        <StyledDiv>
            <StyledTitle>Books shop</StyledTitle>
            {/* <StyledIconText>
                <StyledIconButton clickHandler={() => changeThemeModeHandler()} text={""} icon={themeButton} variant={undefined} />
            </StyledIconText> */}
        </StyledDiv>
    );
}

export default NavBar;