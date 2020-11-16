import React from "react"
import Button from "@material-ui/core/Button";
import styled from "styled-components";


const StyledButton: any = styled(Button)`
    color: ${props => props.theme.textColor};
    background-color:${props => props.theme.buttonColor};
    width:auto%;
    height:5%;
`;

interface IProps {
    text: string,
    icon: any,
    clickHandler: Function,
    variant: "contained" | "outlined" | undefined
}
const AppIconButton: React.FunctionComponent<IProps> = ({ text, icon, clickHandler, variant }) => {
    return <StyledButton type={"submit"} startIcon={icon} onClick={() => clickHandler()} variant={variant}>
        {text}
    </StyledButton>;
}


export default AppIconButton