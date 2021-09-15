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
        password: Yup.string().min(8,"Password must be of atleast 8 characters").required('Required')
    })

    const onSubmit=(values, props)=>{
        console.log(values)
        setTimeout(()=>{
            props.resetForm()
            props.setSubmitting(false)
        },2000)

        console.log(props)
    }
//           return (
//             <Grid>
//               <Paper elevation={10} className="paperStyle">
//                 <Grid align="center">
//                   <Avatar className='avatarStyle'>
//                     <LockOutlinedIcon />
//                   </Avatar>
//                   <h2 className="header">Fundoo Notes Application</h2>
//                   <h2 className="header">sign In</h2>
//                 </Grid>
//                 <Formik initialValues = {initialValues} onSubmit={onSubmit} validationSchema = {validationSchema}>
//                 {(props)=>(
//                     <Form>
//                         <Field as={TextField} 
//                             fullWidth label="Email ID" 
//                             name = "emailId" 
//                             placeholder="Please enter email  "
//                             required
//                             helperText={<ErrorMessage name = "emailId">{msg => <div className="errorMessage">{msg}</div>}</ErrorMessage>}/>
//                         <Field as={TextField} 
//                             fullWidth label="Password" 
//                             type="password" 
//                             name = "password"  
//                             placeholder="Enter password"
//                             required
//                             helperText={<ErrorMessage name = "password">{msg => <div className="errorMessage">{msg}</div>}</ErrorMessage>}/>
                        
//                           <Button type="submit" className="buttonMargin" variant="contained"  disabled={props.isSubmitting}
//                            fullWidth> {props.isSubmitting?"Loading":"Sign in"}</Button>
//                          <Typography >
//                             <Link href="#" >
//                             Forgot  Password ?
//                            </Link>
//                           </Typography>
//                            <Typography>Create a new account? 
//                             <Link to = '/register'>
//                                 Signup
//                             </Link>
//                         </Typography>  
//                     </Form>
//                    )}
//              </Formik>
//         </Paper>
//     </Grid>
//  )}



return (
  <div>
    <Grid className="formStyle">
      <Paper className="login-container login-paper">
        <div  align="center" className="login-form-container">
        {/* <Avatar className='avatarStyle'>
                  <LockOutlinedIcon />
                </Avatar> */}
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
          <Grid>
            <h3>Sign in</h3>
          </Grid>
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          >
            {(props) => (
              <Form data-testid="form" className="login-form">
                <Field
                  as={TextField}
                  className="login-form-input"
                  data-testid="email"
                  label="Email Address"
                  name="email"
                  placeholder="Enter Email"
                  variant="outlined"
                  fullWidth
                  required
                  helperText={<ErrorMessage name='email'>{msg => <div style={{ color: 'red' }}>{msg}</div>}</ErrorMessage>}
                />
                <Field
                  as={TextField}
                  data-testid="password"
                  label="Password"
                  name="password"
                  placeholder="Enter password"
                  variant="outlined"
                  type="password"
                  fullWidth
                  required
                  helperText={
                    <ErrorMessage name='password'>{msg => <div style={{ color: 'red' }}>{msg}</div>}</ErrorMessage>
                  }
                />
                 <Link className="forgot-password-link" data-testid="link" to="/forgotPassword">Forgot password?</Link>
                <Button
                  type="submit"
                  data-testid="button"
                  color="primary"
                  variant="contained"
                  disabled={props.isSubmitting}
                  className="register-form-button"
                  fullWidth>
                  {props.isSubmitting ? "Loading" : "Login"}
                </Button>
                </Form>
                 )}
                 </Formik>
                 <Typography align="center">
                  <Link data-testid="link" to="/register">Create Account</Link>
               </Typography>
        </div>
      </Paper>
    </Grid>
   
  </div>
);
};

export  default Login;
