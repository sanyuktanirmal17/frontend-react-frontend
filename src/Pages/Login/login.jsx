/**
 * @module       Pages
 * @file         Login.js
 * @description  creates form for Login
 * @author       Sanyukta
----------------------------------------------------------------------------------------------- */



import React from 'react'
import {Avatar, Button, Grid, Paper, TextField, Typography} from '@material-ui/core'
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {Link, BrowserRouter as Router} from 'react-router-dom';
import * as Yup from 'yup';
import {Formik,  Form, Field, ErrorMessage} from 'formik';
import './login.scss';
 import { useHistory } from 'react-router-dom';
import {toast, ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { User } from '../../Services/user';
const user = new User();

/**
* @description creating Login form
*/

const Login =()=>{
 const history = useHistory();
 const initialValues = {
        email:'',
        password:''   
    }

  //   const handleRegister=()=>{
  //     history.push('/register');
  // };

    const validationSchema = Yup.object().shape({
        email: Yup.string().email("Enter a valid email id").required("Please enter email "),
        password: Yup.string().min(8,"Password must be of atleast 8 characters").required('Enter correct password')
    })

    const onSubmit=(values, props)=>
    {
      console.log(values)
       const loginDetails = {
         email: values.email,
         password: values.password
       }

       user.userLogin(loginDetails).then((res) => {
        localStorage.setItem('token', res.data.token)
        // toast.success(res.data.message)
        setTimeout(() => {
          history.push("/dashboard");
        }, 2000);
        toast.success("Login Successfull");
      }).catch(error => {
        toast.error(error.message);
      })
      
     
    }
  
  
  //   const handleLogin=()=>{
  //     history.push('/login');
  // };

return (
  <Router>
  <div>
    <Grid className="formStyle">
      <Paper className="login-container login-paper">
        <div  align="center" className="login-form-container">
          <h1 className="header" data-testid="title">
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
          </h1>
          <Grid >
            <h2  className="header" data-testid="login">Sign In</h2>
          </Grid >
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          >
            {(props) => (
              <Form  className="login-form" data-testid="form">
                <Field
                  as={TextField}
                  className="login-form-input"  data-testid="email"
                  label="Email Address"
                  name="email"
                  placeholder="Enter Email"
                  variant="outlined"
                  fullWidth
                  helperText={<ErrorMessage name='email'>{msg => <div style={{ color: 'red' }}>{msg}</div>}</ErrorMessage>}
                />
                <Field
                  as={TextField}
                  className="login-form-input" data-testid="password"
                  // data-testid="password"
                  label="Password"
                  name="password"
                  placeholder="Enter password"
                  variant="outlined"
                  type="password"
                  fullWidth
                  
                  helperText={
                    <ErrorMessage name='password'>{msg => <div style={{ color: 'red' }}>{msg}</div>}</ErrorMessage>
                  }
                />
                 <Link className="forgot-password-link" data-testid="submit" to="/forgotPassword">Forgot password?</Link>
                {/* <div className="forgetPassword">
              <Button color="primary" onClick={() => this.nextPath('../forgotPassword.jsx')}>Forgot password?</Button>
            </div> */}
                <Button
                  type="submit"
                  data-testid="button"
                  color="primary"
                  variant="contained"
                   disabled={props.isSubmitting}
                  className="register-form-button"
                  fullWidth>
                  {props.isSubmitting ? " " : "Login"}
                  

                </Button>
                <ToastContainer position='top-center'/>
                </Form>
                 )}
                 </Formik>
                 <Typography align="center">
                  <Link data-testid="link" to="/register"> Create Account</Link></Typography>
        </div>
      </Paper>
    </Grid>
  </div>
  
  </Router>
 );
};




export  default Login;


























































