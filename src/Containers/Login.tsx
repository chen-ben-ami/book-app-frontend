import React, { useEffect } from "react";
import { Dispatch } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { loginRequest, registerRequest, setSuccessMessage } from "../State/Action/App";
import { IToken } from "../API/interfaces";
import * as Routes from "../Lib/routes";
import jwt from 'jwt-decode';
import AppBackdrop from "../Components/Backdrop";

const StyledDiv: any = styled.div`
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:'center';
    align-content:'center';
    width:50%;
    height: 100%;
`;


const Login: React.FunctionComponent = () => {
    const dispatch: Dispatch = useDispatch();
    const history = useHistory();
    const acessToken: string = useSelector((state: any) => state.app.acessToken);
    const isLoading: boolean = useSelector((state: any) => state.app.isLoading);

    useEffect(() => {
        if (acessToken !== null) {
            const userInfo: IToken = jwt(acessToken);
            if (userInfo.premission === "admin") history.push(Routes.ADMIN);
            else if (userInfo.premission === "user") history.push(Routes.USER);
        }
    }, [acessToken]);
    useEffect(() => {
        dispatch(setSuccessMessage("Welcome to the book store! admin user -username:admin password:admin", "success"))
    }, [dispatch]);

    const fieldRegex = /^[A-Za-z]+$/;

    const SignupSchema = Yup.object().shape({
        username: Yup.string()
            .min(2, 'Username must be longer than 2 characters')
            .max(20, 'Username is too Long!')
            .matches(fieldRegex, "Only English letters")
            .required('Required'),
        password: Yup.string()
            .min(2, 'Password must be longer than 2 characters')
            .matches(fieldRegex, "Only English letters")
            .max(20, "Password is too long!")
            .required('Required'),
    });

    const form = () => (
        <Formik
            initialValues={{ isRegister: false, username: '', password: '' }}
            onSubmit={values => {
                if (values.isRegister) {
                    handleRegister(values.username, values.password)
                } else {
                    handleLogin(values.username, values.password)
                }
            }}
            validationSchema={SignupSchema}
        >
            {({ errors, touched, handleChange, handleBlur, handleSubmit, setFieldValue, values }) => (
                <form onSubmit={handleSubmit} style={{
                    display: 'flex', flexDirection: 'column'
                    , alignItems: 'center', border: '2px solid black', borderRadius: '10px', padding: '15%'
                }}>
                    <TextField
                        autoComplete='username'
                        style={{ margin: '2.5%', width: '50%' }}
                        variant='outlined'
                        onChange={handleChange('username')}
                        onBlur={handleBlur('username')}
                        value={values.username}
                        placeholder="Enter your username"
                    />
                    {errors.username && touched.username ? (
                        <p >{errors.username}</p>
                    ) : null}
                    <TextField
                        autoComplete="current-password"
                        style={{ margin: '2.5%', width: '50%' }}
                        variant='outlined'
                        type="password"
                        onChange={handleChange('password')}
                        onBlur={handleBlur('password')}
                        value={values.password}
                        placeholder="Enter your password"
                    />
                    {errors.password && touched.password ? (
                        <p >{errors.password}</p>
                    ) : null}
                    <Button variant="contained" color="primary" style={{ margin: '2.5%', width: '50%' }} onClick={async () => {
                        await setFieldValue('isRegister', false)
                        handleSubmit();
                    }} > Login </Button>
                    <Button variant="contained" color="primary" style={{ margin: '2.5%', width: '50%' }} onClick={async () => {
                        await setFieldValue('isRegister', true)
                        handleSubmit();
                    }}> Register and Login </Button>
                </form>
            )
            }
        </Formik >
    );

    const handleLogin = (username: string, password: string) => {
        dispatch(loginRequest(username, password));
    }

    const handleRegister = (username: string, password: string) => {
        dispatch(registerRequest(username, password));
    }

    const showProgressBar = () => {
        if (isLoading) return (<AppBackdrop loading={isLoading} />)
        else return null
    }

    return (
        <StyledDiv >
            {form()}
            {showProgressBar()}
        </StyledDiv>

    );
}

export default React.memo(Login);