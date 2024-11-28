import React from 'react';
import './LoginPage.css';
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import FormError from "../../entities/FormError/FormError";
import { Link, useNavigate } from "react-router-dom";
import AuthService from "../../../services/AuthService";
import { useDispatch } from 'react-redux';
import { setLoggedIn } from '../../../store/authSlice';

const LoginPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const loginSchema = Yup.object().shape({
        email: Yup.string()
            .required('This field is required'),
        password: Yup.string()
            .required('This field is required')
    });

    const handleSubmit = async (values: any) => {
        try {
            const response = await AuthService.Login({
                email: values.email,
                password: values.password
            });
            if (response.data) {
                console.log(response.data);
                localStorage.setItem('token', response.data);
                dispatch(setLoggedIn(true));
                alert('Successfully logged in!');
                navigate('/');
            } else {
                alert('Failed to login');
            }
        } catch (error) {
            console.log(error);
            alert('Failed to login');
        }
    };

    return (
        <Formik
            initialValues={{
                email: '',
                password: ''
            }}
            validationSchema={loginSchema}
            onSubmit={async (values, { resetForm }) => {
                await handleSubmit(values);
                resetForm();
            }}>
            {({ errors, touched }) => (
                <Form className={"login-form"}>
                    <div className={'login-form-field'}>
                        <label htmlFor="email">Email</label>
                        <Field id="email" name="email" type="email" />
                        {errors.email && touched.email && <FormError message={errors.email} />}
                    </div>
                    <div className={'login-form-field'}>
                        <label htmlFor="password">Password</label>
                        <Field id="password" name="password" type="password" />
                        {errors.password && touched.password && <FormError message={errors.password} />}
                    </div>
                    <button className='login-submit' type="submit">Login</button>
                    <p className='sing-from-login-link'>Dont have an account? <Link to={"/sign-up"}>Sign up</Link></p>
                </Form>
            )}
        </Formik>
    );
};

export default LoginPage;