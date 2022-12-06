import React from "react";
import styles from './SignUp.module.css';
import {SCHEMA } from '../../schemas';
import {Formik, Form, Field, ErrorMessage} from 'formik';

function SignUpForm (props) {

   const formikSubmit = (data, formikBag) => {
        console.log(data, formikBag);
        ////// TODO: send data to server
        formikBag.resetForm();
    }
        const initialValues = {
            firstName: '',
            lastName: '',
            email: '',
            pass: ''
        };
        return (
            <Formik 
            initialValues={initialValues}
            onSubmit={formikSubmit}
            validationSchema={SCHEMA}
            >
           {(formikProps) => {
            return (
                <Form className={styles.form}>
                    <Field 
                    name="firstName"
                    placeholder="firstName"
                    />
                    <ErrorMessage name="firstName" component="p"/>
                    <Field 
                    name="lastName"
                    placeholder="lastName"
                    />
                    <ErrorMessage name="lastName" />
                    <Field 
                    name="email"
                    placeholder="email"
                    />
                    <ErrorMessage name="email" />
                     <Field name="pass" 
                        placeholder="email"/>
                        <ErrorMessage name="pass" />
                    <button type="submit">Send</button>
                </Form>
            )
           }}
            </Formik>
        )
}
export default SignUpForm;