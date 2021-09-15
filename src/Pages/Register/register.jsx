/**
 * @module       Pages
 * @file         Register.js
 * @description  creates form for registration
 * @author       Sanyukta
----------------------------------------------------------------------------------------------- */

import { Grid, Avatar, Paper, Typography, TextField, Button } from '@material-ui/core'
import React from 'react'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import {Link} from 'react-router-dom'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import './register.scss'

/**
* @description creating registartion form
*/

const Register = () => {
    const initialValues = {
        firstName:'',
        lastName:'',
        emailId:'',
        password:'',
        conformPassword:''
    }
    const validationSchema = Yup.object().shape({
        firstName: Yup.string().min(3, "First Name must have alteast three alphabets")
        .matches(/^[a-zA-Z]{3,}$/, "First Name must contain alphabets only").required("Required"),
        lastName: Yup.string().min(3, "Last Name must have alteast three alphabets")
        .matches(/^[a-zA-Z]{3,}$/, "First Name contain alphabets only").required("Required"),
        emailId: Yup.string().email("Enter a valid email id").required("Required"),
        password: Yup.string().min(8,"Password must be of atleast 8 characters"),
        confirmPassword:Yup.string().oneOf([Yup.ref('password')],"Password doesn't matched").required("Required" )   
    })
    
    const onSubmit=(values, props)=>{
        console.log(values)
        setTimeout(()=>{
            props.resetForm()
            props.setSubmitting(false)
        },2000)
    
        console.log(props)
    }

    return (
        <Grid className="formStyle">
            <Paper className="register-container paperStyle">
                <div className="register-form">
                    <h3 className="header">
                    <h3 className="header">
            <span className="fun1">F</span>
            <span className="fun2">u</span> 
            <span className="fun3">n</span> 
            <span className="fun4">d</span> 
            <span className="fun5">o</span> 
            <span className="fun6">o</span> 
            <span className="fun1">N</span>
            <span className="fun2">o</span> 
            <span className="fun3">t</span> 
            <span className="fun4">e</span> 
            <span className="fun5">s</span>
          </h3>
                        <span className="headerStyle"> <h5 >Please fill form to create an account !</h5></span>
                    </h3>
                    <Grid>
                       
                    </Grid>
                    <Formik
                        initialValues={initialValues}
                        onSubmit={onSubmit}
                        validationSchema={validationSchema}
                    >
                        {(props) => (
                            <Form className="register-form-inputs" data-testid="form">
                                <Grid container spacing={5} className="register-form-element">
                                    <Grid item xs={16} sm={6}>
                                        <Field
                                            className="register-form-inputs"
                                            as={TextField}
                                            label="First Name"
                                            name="firstName"
                                            placeholder="Enter First Name"
                                            variant="outlined"
                                            fullWidth
                                            required
                                            helperText={<ErrorMessage name='firstName'>{msg => <div style={{ color: 'red' }}>{msg}</div>}</ErrorMessage>}
                                        />
                                    </Grid>
                                    <Grid item xs={16} sm={6}>
                                        <Field
                                            className="register-form-inputs"
                                            as={TextField}
                                            label="Last Name"
                                            name="lastName"
                                            placeholder="Enter Last Name"
                                            variant="outlined"
                                            fullWidth
                                            required
                                            helperText={<ErrorMessage name='lastName'>{msg => <div style={{ color: 'red' }}>{msg}</div>}</ErrorMessage>}
                                        />
                                    </Grid>
                                </Grid>
                                <Grid container spacing={1} className="register-form-element">
                                    <Field
                                        className="register-form-inputs"
                                        spacing={3}
                                        as={TextField}
                                        label="Email Address"
                                        name="email"
                                        placeholder="Enter Email"
                                        variant="outlined"
                                        fullWidth
                                        required
                                        helperText={<ErrorMessage name='email'>{msg => <div style={{ color: 'red' }}>{msg}</div>}</ErrorMessage>}
                                    />
                                </Grid>
                                <Grid container spacing={1} className="register-form-element">
                                    <Grid item xs={12} sm={6}>
                                        <Field
                                            className="register-form-inputs"
                                            as={TextField}
                                            label="Password"
                                            name="password"
                                            placeholder="Enter password"
                                            variant="outlined"
                                            type="password"
                                            fullWidth
                                            required
                                            helperText={<ErrorMessage name='password'>{msg => <div style={{ color: 'red' }}>{msg}</div>}</ErrorMessage>}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Field
                                            className="register-form-inputs"
                                            as={TextField}
                                            label="Confirm Password"
                                            name="confirmPassword"
                                            placeholder="Enter password"
                                            variant="outlined"
                                            type="password"
                                            fullWidth
                                            required
                                            helperText={<ErrorMessage name='confirmPassword'>{msg => <div style={{ color: 'red' }}>{msg}</div>}</ErrorMessage>}
                                        />
                                    </Grid>
                                </Grid>
                                <Grid container spacing={1} className="register-form-element submit-button">
                                    <Button
                                        type="submit"
                                        data-testid="submitButton"
                                        variant="contained"
                                        disabled={props.isSubmitting}
                                        className="register-form-button"
                                        fullWidth
                                    >
                                        {props.isSubmitting ? "Loading" : "Register"}
                                    </Button>
                                </Grid>
                            </Form>
                        )}
                    </Formik>
                    <Typography className="signInlink">
                        <Link to="/login">Sign in instead</Link>
                    </Typography>
                </div>
                <div className="register-avatar">
                <img src="https://ssl.gstatic.com/accounts/signup/glif/account.svg"></img>
                </div>
            </Paper>
        </Grid >
    );
};

    
export default Register;