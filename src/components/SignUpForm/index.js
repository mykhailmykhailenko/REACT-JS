import React from "react";
import styles from './SignUp.module.css';
import {SCHEMA } from '../../schemas';
import {Formik, Form, Field} from 'formik';

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
            >
           {(formikProps) => {
            return (
                <Form className={styles.form}>
                    <Field 
                    name="firstName"
                    placeholder="firstName"
                    />
                    <Field 
                    name="lastName"
                    placeholder="lastName"
                    />
                    <Field 
                    name="email"
                    placeholder="email"
                    />
                     <Field 
                    name="pass"
                    placeholder="pass"
                    />
                    <button>Send</button>
                </Form>
            )
           }}
            </Formik>
        )
}

export default SignUpForm;