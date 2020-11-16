import React from "react"
import { Dispatch } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import { ILoginDetails } from "../API/interfaces";
import Button from '@material-ui/core/Button';

import { Formik } from 'formik';
import * as Yup from 'yup';

const StyledInput: any = styled(TextField)`
    backgroundColor: 'white';
    width: '50%';
`

const StyledDiv: any = styled.div`
    display:flex;
    flex-direction: column;
    justify-content:center;
    width:50%;
    border:1px solid red;
    text-align:center;
`;

const Login: React.FunctionComponent = () => {
    const dispatch: Dispatch = useDispatch();
    const history = useHistory();
    const errorMessage = useSelector((state: any) => state.app.errorMessage);
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
            // onSubmit={(values) => { handleLogin(values) }}
            onSubmit={values => {
                if (values.isRegister) {
                    handleRegister(values.username,values.password)
                } else {
                    handleLogin(values.username,values.password)
                }
            }}
            validationSchema={SignupSchema}
        >
            {({ errors, touched, handleChange, handleBlur, handleSubmit, setFieldValue, values }) => (
                <form onSubmit={handleSubmit}>
                    <StyledInput
                        mode='outlined'
                        onChange={handleChange('username')}
                        onBlur={handleBlur('username')}
                        value={values.username}
                        placeholder="Enter your username"
                    />
                    {errors.username && touched.username ? (
                        <p >{errors.username}</p>
                    ) : null}
                    <StyledInput
                        mode='outlined'
                        type="password"
                        onChange={handleChange('password')}
                        onBlur={handleBlur('password')}
                        value={values.password}
                        placeholder="Enter your password"
                    />
                    {errors.password && touched.password ? (
                        <p >{errors.password}</p>
                    ) : null}
                    <Button variant="contained" color="primary" onClick={async () => {
                        await setFieldValue('isRegister', false)
                        handleSubmit();
                    }} > Login </Button>
                    <Button variant="contained" color="primary" onClick={async () => {
                        await setFieldValue('isRegister', true)
                        handleSubmit();
                    }}> Register and Login </Button>
                </form>
            )}
        </Formik>
    );

    const handleLogin = (username:string,password:string) => {
        // dispatch(loginRequest(loginDetails));
        console.log("log in")
    }

    const handleRegister = (username:string,password:string) => {
        console.log("register")
    }

    return (
        <StyledDiv >
            {form()}
        </StyledDiv>
    );
}

export default React.memo(Login);