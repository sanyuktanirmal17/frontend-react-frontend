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


/**
* @description creating registartion form
*/

const 

Register = () => {
    const paperStyle = { padding: '30px 20px', width: 300, margin: "20px auto" }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#1b66e4' }
    const buttonStyle = { margin: '40px 100px', backgroundColor: 'rgb(17, 127, 237)', color: 'white' }
    const initialValues = {
        firstName:'',
        lastName:'',
        emailId:'',
        password:''   
    }
    const validationSchema = Yup.object().shape({
        firstName: Yup.string().min(3, "First Name must have alteast three alphabets")
        .matches(/^[a-zA-Z]{3,}$/, "First Name must contain alphabets only").required("Required"),
        lastName: Yup.string().min(3, "Last Name must have alteast three alphabets")
        .matches(/^[a-zA-Z]{3,}$/, "First Name contain alphabets only").required("Required"),
        emailId: Yup.string().email("Enter a valid email id").required("Required"),
        password: Yup.string().min(8,"Password must be of atleast 8 characters")
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
        <Grid>
            <Paper elevation={20} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        <AddCircleIcon />
                    </Avatar>
                    <h2 style={headerStyle}>Sign Up</h2>
                    <Typography variant='caption' >please fill form to create an account !</Typography>

                </Grid>

                <Formik initialValues = {initialValues} onSubmit={onSubmit} validationSchema = {validationSchema}>
                {(props)=>(
                    <Form>
                        <Field as={TextField} 
                            fullWidth label="First Name" 
                            name = "firstName" 
                            required
                            helperText={<ErrorMessage name = "firstName">{msg => <div style={{ color: 'red' }}>{msg}</div>}</ErrorMessage>}/>
                        <Field as={TextField} 
                            fullWidth label="Last Name" 
                            name = "lastName"
                            required
                            helperText={<ErrorMessage name = "lastName">{msg => <div style={{ color: 'red' }}>{msg}</div>}</ErrorMessage>}/>
                        <Field as={TextField} 
                            fullWidth label="Email ID" 
                            name = "emailId" 
                            required
                            helperText={<ErrorMessage name = "emailId">{msg => <div style={{ color: 'red' }}>{msg}</div>}</ErrorMessage>}/>
                        <Field as={TextField} 
                            fullWidth label="Password" 
                            type="password" 
                            name = "password"  
                            required
                            helperText={<ErrorMessage name = "password">{msg => <div style={{ color: 'red' }}>{msg}</div>}</ErrorMessage>}/>
                        <Button style = {buttonStyle} 
                            type="submit" variant="contained" 
                            disabled = {props.isSubmitting}>
                            {props.isSubmitting?"Loading":"Sign Up"}</Button>
                            <Typography>Already have an account?
                            <Link to = '/login'>
                            Login
                            </Link>
                        </Typography>

                    </Form>
                )}
            </Formik>
        </Paper>
    </Grid>

    )
}




                {/* <form>
                    <TextField fullWidth label='firstName'></TextField>
                    <TextField fullWidth label='lastName'></TextField>
                    <TextField fullWidth label='Email'></TextField>
                    <TextField fullWidth label='password'></TextField>
                    <FormControlLabel
                        control={<Checkbox name="checkedB" color="primary" />
                        }
                        label="I accept the terms and condition "
                    />
                    <Button type='submit' variant='contained' color='primary'>Sign Up</Button>
                    <Typography>Already have an account?
                            <Link to = '/login'>
                            Login
                            </Link>
                        </Typography>
                </form>
            </Paper>
        </Grid>
    )
} */}

export default Register;