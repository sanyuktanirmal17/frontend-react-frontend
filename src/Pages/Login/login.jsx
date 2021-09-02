/**
 * @module       Pages
 * @file         Login.js
 * @description  creates form for Login
 * @author       Sanyukta
----------------------------------------------------------------------------------------------- */


import React from 'react'
import {Avatar, Button, Grid, Paper, TextField, Typography} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {Link} from 'react-router-dom'
import * as Yup from 'yup'
import {Formik,  Form, Field, ErrorMessage} from 'formik'
import './login.scss'
/**
* @description creating Login form
*/


const Login =()=>{
 const initialValues = {
        emailId:'',
        password:''   
    }

    const validationSchema = Yup.object().shape({
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
              <Paper elevation={10} className="paperStyle">
                <Grid align="center">
                  <Avatar className='avatarStyle'>
                    <LockOutlinedIcon />
                  </Avatar>
                  <h2 className="header">Fundoo Notes Application</h2>
                  <h2 className="header">sign In</h2>
                </Grid>
                <Formik initialValues = {initialValues} onSubmit={onSubmit} validationSchema = {validationSchema}>
                {(props)=>(
                    <Form>
                        <Field as={TextField} 
                            fullWidth label="Email ID" 
                            name = "emailId" 
                            placeholder="Please enter email  "
                            required
                            helperText={<ErrorMessage name = "emailId">{msg => <div className="errorMessage">{msg}</div>}</ErrorMessage>}/>
                        <Field as={TextField} 
                            fullWidth label="Password" 
                            type="password" 
                            name = "password"  
                            placeholder="Enter password"
                            required
                            helperText={<ErrorMessage name = "password">{msg => <div className="errorMessage">{msg}</div>}</ErrorMessage>}/>
                        
                          <Button type="submit" className="buttonMargin" variant="contained"  disabled={props.isSubmitting}
                           fullWidth> {props.isSubmitting?"Loading":"Sign in"}</Button>
                         <Typography >
                            <Link href="#" >
                            Forgot  Password ?
                           </Link>
                          </Typography>
                           <Typography>Create a new account? 
                            <Link to = '/register'>
                                Signup
                            </Link>
                        </Typography>  
                    </Form>
                   )}
             </Formik>
        </Paper>
    </Grid>
 )}

export  default Login;
