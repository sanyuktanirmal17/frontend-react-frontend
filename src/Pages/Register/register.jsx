/**
 * @module       Pages
 * @file         Register.js
 * @description  creates form for registration
 * @author       Sanyukta
----------------------------------------------------------------------------------------------- */

import { Grid,  Paper, Typography, TextField, Button } from '@material-ui/core'
import React from 'react'
// import AddCircleIcon from '@material-ui/icons/AddCircle';
import {Link} from 'react-router-dom'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import './register.scss';
import { User } from '../../service/user';
import { useHistory } from 'react-router-dom'; 
const user = new User()

/**
* @description creating registartion form
*/

const Register = () => {
    let history = useHistory();
    const initialValues = {
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        confirmPassword:''
    }
    const validationSchema = Yup.object().shape({
        firstName: Yup.string().min(3, "First Name must have alteast three alphabets")
        .matches(/^[a-zA-Z]{3,}$/, "First Name must contain alphabets only").required("Enter First Name"),
        lastName: Yup.string().min(3, "Last Name must have alteast three alphabets")
        .matches(/^[a-zA-Z]{3,}$/, "First Name contain alphabets only").required("Enter Last Name"),
        // email: Yup.string().email("Enter a valid email id").required("Required"),
        email:Yup.string().email('please enter valid email').required("Enter valid email"),
        password: Yup.string().min(8,"Password must be of atleast 8 characters").required("Please enter password"),
        confirmPassword:Yup.string().oneOf([Yup.ref('password')],"Password doesn't matched").required("Enter correct password" )   
    })

    // const handleLogin=()=>{
    //     history.push('/login');
    // };
    
    const onSubmit=(values, props)=>{
        if(values && !values.firstName && !values.lastName) return 
        console.log(values)
        const userCredentials = {
        firstName: values.firstName,
        lastName:values.lastName,
        email: values.email,
        password:values.password,
        confirmPassword:values.confirmPassword
        }
        user.userRegistration(userCredentials)
        .then((res)=>{
           history.push('/login');
            alert('data submit')
        }).catch(error=>{
            console.log(error)
        })

        //      props.resetForm()
        //    props.setSubmitting(false)
     }

    return (
        <Grid className="formStyle">
            <Paper className="register-container paperStyle">
                <div className="register-form">
                    <h2 className="header">
                    <h2 className="header">
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
          </h2>
                        <span className="headerStyle"> <h4 >Please fill form to create an account !</h4></span>
                    </h2>
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
                                            helperText={<ErrorMessage name='firstName'>{msg => <div style={{ color: 'red' }}>{msg}</div>}</ErrorMessage>}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Field
                                            className="register-form-inputs"
                                            as={TextField}
                                            label="Last Name"
                                            name="lastName"
                                            placeholder="Enter Last Name"
                                            variant="outlined"
                                            fullWidth
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
                                            
                                            helperText={<ErrorMessage name='confirmPassword'>{msg => <div style={{ color: 'red' }}>{msg}</div>}</ErrorMessage>}
                                        />
                                    </Grid>
                                </Grid>
                                <Grid container spacing={1} className="register-form-element submit-button">
                                    <Button
                                        type="submit"
                                        // data-testid="submitButton"
                                        variant="contained"
                                        disabled={props.isSubmitting}
                                        className="register-form-button"
                                        fullWidth
                                        // onClick={handleLogin}
                                        // >
                                        //   Register
                                          >
                                    
                                        {props.isSubmitting ? " ": "Register"}
                                    </Button>
                                </Grid>
                            </Form>
                        )}
                    </Formik>
                    <Typography className="signInlink">
                    {/* Sign in instead */}
                        <Link to="/login">sign in</Link>
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