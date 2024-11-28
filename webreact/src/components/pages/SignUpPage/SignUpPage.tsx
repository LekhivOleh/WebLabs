import React from 'react';
import './SingUpPage.css';
import {Formik, Form, Field} from "formik";
import * as Yup from "yup";
import FormError from "../../entities/FormError/FormError";
import {Link} from "react-router-dom";
import AuthService from "../../../services/AuthService";

const SignUpPage = () => {
    const signUpSchema = Yup.object().shape({
        username: Yup.string()
            .min(2, 'Too Short!')
            .max(40, 'Too Long!')
            .required('This field is required'),
        email: Yup.string()
            .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Invalid email')
            .required('This field is required'),
        password: Yup.string()
            .min(8, 'Too Short!')
            .max(30, 'Too Long!')
            .required('This field is required'),
        retypePassword: Yup.string()
            .oneOf([Yup.ref('password')], 'Passwords must match')
            .required('This field is required'),
    });

    const handleSubmit = async (values: any) => {
        alert('Successfully registered!');
        console.log(values);
        await AuthService.Register({
            username: values.username,
            email: values.email,
            password: values.password
        });
    }

    return (
        <Formik
            initialValues={{
                username: '',
                email: '',
                password: '',
                retypePassword: ''
            }}
            validationSchema={signUpSchema}
            onSubmit={async (values, {resetForm}) => {
                await handleSubmit(values);
                resetForm();
            }}>
            {({errors, touched}) => (
                <Form className={"signup-form"}>
                    <div className={'signup-form-field'}>
                        <label htmlFor="username">Username</label>
                        <Field name="username" type="text"/>
                        {errors.username && touched.username && <FormError message={errors.username}/>}
                    </div>
                    <div className={'signup-form-field'}>
                        <label htmlFor="email">Email</label>
                        <Field name="email" type="email"/>
                        {errors.email && touched.email && <FormError message={errors.email}/>}
                    </div>
                    <div className={'signup-form-field'}>
                        <label htmlFor="password">Password</label>
                        <Field name="password" type="password"/>
                        {errors.password && touched.password && <FormError message={errors.password}/>}
                    </div>
                    <div className={'signup-form-field'}>
                        <label htmlFor="retypePassword">Retype password</label>
                        <Field name="retypePassword" type="password"/>
                        {errors.retypePassword && touched.retypePassword &&
                            <FormError message={errors.retypePassword}/>}
                    </div>
                    <button className='signup-submit' type="submit">Sign up</button>
                    <p className='login-from-sign-link'>Already have an account? <Link to={"/login"}>Login</Link></p>
                </Form>
            )}
        </Formik>
    );
};

export default SignUpPage;