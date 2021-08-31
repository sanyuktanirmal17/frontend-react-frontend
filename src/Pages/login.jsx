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

/**
* @description creating Login form
*/

const Login =()=>{
    const paperStyle={padding :20, height:'70vh', width:300, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#1b66e4'}
    const btstyle={margin:'8px 0'}
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
              <Paper elevation={10} style={paperStyle}>
                <Grid align="center">
                  <Avatar style={avatarStyle}>
                    <LockOutlinedIcon />
                  </Avatar>
                  <h2>sign In</h2>
                </Grid>
                <Formik initialValues = {initialValues} onSubmit={onSubmit} validationSchema = {validationSchema}>
                {(props)=>(
                    <Form>
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
                <Button type="submit" color="primary" variant="contained"  disabled={props.isSubmitting}
                style={btstyle} fullWidth> {props.isSubmitting?"Loading":"Sign in"}</Button>
                {/* <Button style = {btstyle} 
                            type="submit" variant="contained" 
                            disabled = {props.isSubmitting}>
                            {props.isSubmitting?"Loading":"Login"}</Button> */}
                        <Typography>Create a new account? 
                            <Link to = '/register'>
                                Signup
                            </Link>
                        </Typography>  
         </Form>
         )}
</Formik>
           
      {/* <Typography >
        <Link href="#" >
              Forgot  Password ?
        </Link>
     </Typography>
             <Typography > Do you have an account 
                  {/* <Link href="#" > 
                  <Link to = '/register'>
                   Sign Up
                 </Link>
          </Typography> */}
        </Paper>
    </Grid>
    )
}

export  default Login;
