/**
 * @module       Pages
 * @file         Register.js
 * @description  creates form for registration
 * @author       Sanyukta
----------------------------------------------------------------------------------------------- */


import { Grid,  Paper, Typography, TextField, Button } from '@material-ui/core'
import React from 'react'
// import AddCircleIcon from '@material-ui/icons/AddCircle';
// import {Link} from 'react-router-dom'
import {Link, BrowserRouter as Router} from 'react-router-dom';
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import './register.scss';
import { User } from '../../Services/user';
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
        console.log(values)
        if(values && !values.firstName && !values.lastName) return 
        
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
        <Router>
        <Grid className="formStyle">
            <Paper className="register-container paperStyle">
                <div className="register-form">
                    <h2 className="header" data-testid="title">
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
                        <span className="headerStyle" data-testid="register"> <h4 >Please fill form to create an account !</h4></span>
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
                                            className="register-form-inputs" data-testid="firstName"
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
                                            className="register-form-inputs" data-testid="lastName"
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
                                        className="register-form-inputs" data-testid="email"
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
                                <Grid container spacing={1} className="register-form-element" data-testid="password">
                                    <Grid item xs={12} sm={6}>
                                        <Field 
                                            className="register-form-inputs" data-testid="confirmPassword"
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
                                <Grid container spacing={1} className="register-form-element submit-button"  data-testid="submit">
                                    <Button
                                        type="submit"
                                        // data-testid="submitButton"
                                        variant="contained"
                                        disabled={props.isSubmitting}
                                        className="register-form-button"
                                        fullWidth
                                        // <Link to='/login' onClick={handleLogin}> Login</Link>
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
     </Router>
    );
};

    
export default Register;


























































































































// import "../Register/register.scss";
// import React, { Component } from "react";
// import TextField from "@material-ui/core/TextField";
// import InputAdornment from "@material-ui/core/InputAdornment";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import FormHelperText from "@material-ui/core/FormHelperText";
// import Checkbox from "@material-ui/core/Checkbox";
// import Button from "@material-ui/core/Button";
// import { Link } from "react-router-dom";
// import UserAPI from "../../service/UserAPI";

// const user = new UserAPI();

// export class NewAccount extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       fName: "",
//       lName: "",
//       userName: "",
//       password: "",
//       confirmPassword: "",
//       fNameError: false,
//       lNameError: false,
//       userNameError: false,
//       passwordError: false,
//       confirmPasswordError: false,
//       textType: "password",
//     };
//   }

//   componentDidMount() {
//     document.title = "Create a fundoo account";
//   }

//   showPassword = () => {
//     if (this.state.textType === "password") {
//       this.setState({
//         textType: "text",
//       });
//     } else {
//       this.setState({
//         textType: "password",
//       });
//     }
//   };

//   changeHandler = (e) => {
//     if (e.target.name === "userName") {
//       this.setState({
//         [e.target.name]: e.target.value + "@gmail.com",
//       });
//     } else {
//       this.setState({
//         [e.target.name]: e.target.value,
//       });
//     }
//   };

//   validation = () => {
//     let isError = false;
//     const error = this.state;

//     error.fNameError = this.state.fName === "" ? true : false;
//     error.lNameError = this.state.lName === "" ? true : false;
//     error.userNameError = this.state.userName === "" ? true : false;
//     error.passwordError = this.state.password === "" ? true : false;
//     error.confirmPasswordError = this.state.confirmPassword === "" ? true : false;

//     this.setState({
//       ...error,
//     });

//     isError =
//       error.fNameError ||
//       error.lNameError ||
//       error.userNameError ||
//       error.passwordError ||
//       error.confirmPasswordError;
//     return isError;
//   };

//   onClicked = (e) => {
//     e.preventDefault();

//     var isValid = this.validation();
//     if (isValid) {
//       console.log("Validation failed");
//     } else {
//       if (this.state.password === this.state.confirmPassword) {
//         let data = {
//           firstName: this.state.fName,
//           lastName: this.state.lName,
//           email: this.state.userName,
//         //   service: "advance",
//           password: this.state.password,
//           confirmPassword: this.state.password
//         };

//         user
//           .SignUp(data)
//           .then((res) => {
//             console.log(res);
//             localStorage.setItem("token", res.data.token);
//             this.props.history.push("/sign-in");
//           })
//           .catch((err) => {
//             console.log("The error is:" + err);
//           });
//       } else {
//         alert("password didn't match");
//       }
//     }
//   };

//   render() {
//     return (
//       <div className="outer-box">
//         <form onSubmit={this.onClicked} className="form-box">
//           <div className="first-box">
//             <div>
//               <svg className="fundoo-logo" height="20" width="100">
//                 <text x="1" y="19" fill="blue">
//                   F
//                 </text>
//                 <text x="13" y="19" fill="red">
//                   u
//                 </text>
//                 <text x="26" y="19" fill="orange">
//                   n
//                 </text>
//                 <text x="40" y="19" fill="blue">
//                   d
//                 </text>
//                 <text x="54" y="19" fill="green">
//                   o
//                 </text>
//                 <text x="68" y="19" fill="red">
//                   o
//                 </text>
//                 {/* <text x="85" y="19" fill="blue">
//                   N
//                 </text>
//                 <text x="100" y="19" fill="red">
//                   o
//                 </text>
//                 <text x="130" y="19" fill="orange">
//                   t
//                 </text>
//                 <text x="160" y="19" fill="blue">
//                   e
//                 </text>
//                 <text x="200" y="19" fill="green">
//                   s
//                   </text> */}
                
//               </svg>
//               <p className="form-heading">Create your Fundoo Account</p>
//             </div>
//             <div className="name-div">
//               <div className="name-field">
//                 <TextField
//                   name="fName"
//                   error={this.state.fNameError}
//                   helperText={this.state.fNameError ? "Enter First Name" : ""}
//                   label="First Name"
//                   variant="outlined"
//                   onChange={this.changeHandler}
//                   fullWidth
//                 />
//               </div>
//               <div className="name-field">
//                 <TextField
//                   name="lName"
//                   error={this.state.lNameError}
//                   helperText={this.state.lNameError ? "Enter Last Name" : ""}
//                   label="Last Name"
//                   variant="outlined"
//                   onChange={this.changeHandler}
//                   fullWidth
//                 />
//               </div>
//             </div>
//             <div>
//               <TextField
//                 name="userName"
//                 error={this.state.userNameError}
//                 helperText={
//                   this.state.userNameError
//                     ? "Enter Username"
//                     : "You can use letters, numbers and periods"
//                 }
//                 label="Username"
//                 className="username"
//                 InputProps={{
//                   endAdornment: (
//                     <InputAdornment position="end">@gmail.com</InputAdornment>
//                   ),
//                 }}
//                 variant="outlined"
//                 onChange={this.changeHandler}
//                 fullWidth
//               />
//             </div>
//             {/* <div className="link-div">
//               <a className="current-mail" href="#current-mail-link">
//                 Use my current email address instead
//               </a>
//             </div> */}
//             <div className="password-div">
//               <div className="password-field">
//                 <TextField
//                   name="password"
//                   type={this.state.textType}
//                   error={this.state.passwordError}
//                   helperText={this.state.passwordError ? "Enter password" : ""}
//                   label="Password"
//                   variant="outlined"
//                   onChange={this.changeHandler}
//                   fullWidth
//                 />
//               </div>
//               <div className="password-field">
//                 <TextField
//                   name="confirmPassword"
//                   type={this.state.textType}
//                   error={this.state.confirmPasswordError}
//                   helperText={
//                     this.state.confirmPasswordError
//                       ? "Enter confirmation password"
//                       : ""
//                   }
//                   label="Confirm"
//                   variant="outlined"
//                   onChange={this.changeHandler}
//                   fullWidth
//                 />
//               </div>
//             </div>
//             {this.state.password !== this.state.confirmPassword ? (
//               <FormHelperText error>Password no match</FormHelperText>
//             ) : null}

//             <FormHelperText>
//               Use 8 or more characters with a mix of letters, numbers and
//               symbols
//             </FormHelperText>
//             <div id="show-password">
//               <FormControlLabel
//                 control={<Checkbox color="primary" />}
//                 label="Show Password"
//                 onChange={this.showPassword}
//               />
//             </div>
//             <div className="bottom-div">
//               <Link className="sign-in-instead" to="/sign-in">
//                 Sign in instead
//               </Link>
//               <Button variant="contained" color="primary" type="submit">
//                 Next
//               </Button>
//             </div>
//           </div>
//           <div className="img-box">
//             <img
//               src="https://ssl.gstatic.com/accounts/signup/glif/account.svg"
//               width="244"
//               height="244"
//               alt="fundoo"
//             />
//             {/* <p>One account. All of Fundoo working for you.</p> */}
//           </div>
//         </form>
//       </div>
//     );
//   }
// }

// export default NewAccount;










