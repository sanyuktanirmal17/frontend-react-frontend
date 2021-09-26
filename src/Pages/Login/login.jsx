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
//  import {toast} from 'react-toastify';
import { User } from '../../Services/user';
const user = new User();

/**
* @description creating Login form
*/

// toast.configure()
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

    const onSubmit=(values, props)=>{
      console.log(values)
       const loginDetails = {
         email: values.email,
         password: values.password
       }

       user.userLogin(loginDetails).then((res) => {
        // setOpen(true);
        localStorage.setItem('token', res.data.token)
        console.log(res.data.message)
        // alert('You have been successfully logged in!!')
        
        history.push('./dashboard');
      }).catch(error => {
        console.log(error.message)
      })
      
      // eslint-disable-next-line
    //         props.resetForm()
            // props.setSubmitting(false)
    }
  
  //   const notify =()=> {
  //     toast.success(('You have been successfully logged in!!'), {autoClose:3000})  
  //  }
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
              <Form  className="login-form" data-testid="email">
                <Field
                  as={TextField}
                  className="login-form-input"
                  // data-testid="email"
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
                <Button
                  type="submit"
                  data-testid="button"
                  color="primary"
                  variant="contained"
                   disabled={props.isSubmitting}
                  className="register-form-button"
                  fullWidth>
                  {props.isSubmitting ? " " : "Login"}
                  {/* onlick = {notify} */}
                </Button>
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















































// import React, { Component } from "react";
// import TextField from "@material-ui/core/TextField";
// import Button from "@material-ui/core/Button";
// import { Link } from "react-router-dom";
// import "../Login/login.scss";
// import UserAPI from "../../service/UserAPI";

// const user = new UserAPI();

// export class SignIn extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       mailId: "",
//       mailError: false,
//       password: "",
//       passwordError: false,
//     };
//   }

//   componentDidMount() {
//     document.title = "Fundoo Login";
//   }

//   changeHandler = (e) => {
//     this.setState({
//       [e.target.name]: e.target.value,
//     });
//   };

//   validation = () => {
//     let isError = false;
//     const error = this.state;
//     error.mailError = this.state.mailId === "" ? true : false;
//     error.passwordError = this.state.password === "" ? true : false;

//     this.setState({
//       ...error,
//     });

//     isError = error.mailError || error.passwordError;
//     return isError;
//   };

//   onClicked = () => {
//     var isNotValid = this.validation();
//     if (isNotValid) {
//       console.log("Validation failed");
//     } else {
//       let data = {
//         email: this.state.mailId,
//         password: this.state.password,
//       };
//       console.log(data);

//         user
//         .SignIn(data)
//         .then((res) => {
//           localStorage.setItem("token", res.data.id);
//           this.props.history.push("/dashboard");
//         })
//         .catch((err) => {
//           console.log("The error is:" + err);
//         });
//     }
//   };

//   render() {
//     return (
//       <div className="signin-page">
//         <form className="signin-form">
//           <div className="signin-fundoo-logo">
//             <svg className="signin-fundoo-logo" height="20" width="100">
//               <text x="8" y="19" fill="blue">
//                 F
//               </text>
//               <text x="22" y="19" fill="red">
//                 u
//               </text>
//               <text x="36" y="19" fill="orange">
//                 n
//               </text>
//               <text x="51" y="19" fill="blue">
//                 d
//               </text>
//               <text x="66" y="19" fill="green">
//                 o
//               </text>
//               <text x="80" y="19" fill="red">
//                 o
//               </text>
//             </svg>
//             <h3 className="signin-head">Sign in</h3>
//             <p className="signin-tag">Use your Fundoo Account</p>
//           </div>

//           <div className="signin-input-div">
//             <TextField
//               name="mailId"
//               error={this.state.mailError}
//               helperText={
//                 this.state.mailError ? "Enter your email or phone number" : ""
//               }
//               className="signin-email-field"
//               label="Email or phone"
//               variant="outlined"
//               fullWidth
//               onChange={(e) => this.changeHandler(e)}
//             />
//           </div>
//           <div className="signin-input-div">
//             <Link className="forgot-link" to="/reset-email">
//               Forgot email?
//             </Link>
//           </div>
//           <div className="signin-input-div">
//             <TextField
//               name="password"
//               type="password"
//               error={this.state.passwordError}
//               helperText={this.state.passwordError ? "Enter password" : ""}
//               className="signin-email-field"
//               label="password"
//               variant="outlined"
//               fullWidth
//               onChange={(e) => this.changeHandler(e)}
//             />
//           </div>

//           <div className="signin-input-div">
//             <Link className="forgot-link" to="/forgot-password">
//               Forgot password?
//             </Link>
//           </div>
//           <div className="signin-middle-box">
//             <p className="signin-note">
//               Not your computer? Use Guest mode to sign in privately.
//             </p>
//             <a
//               className="learn-more-link"
//               href="https://support.google.com/chrome/answer/6130773?hl=en"
//             >
//               Learn more
//             </a>
//           </div>
//           <div className="signin-bottom-div">
//             <Link className="create-acc" to="/">
//               Create account
//             </Link>
//             <Button
//               onClick={this.onClicked}
//               // onClick={() => {
//               //   Auth.SignIn(() => {
//               //     this.props.history.push("/dashboard");
//               //   });
//               // }}
//               variant="contained"
//               color="primary"
//             >
//               Next
//             </Button>
//           </div>
//         </form>
//       </div>
//     );
//   }
// }

// export default SignIn;











