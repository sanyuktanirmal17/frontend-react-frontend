import React from "react";
// import {
//   Grid,
//   Paper,
//   // TextField,
//   // Button,
// } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "../../Pages/ForgotPassword/forgotPassword.scss";
import Services from "../../Services/NoteServices";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { Grid, Paper,Typography} from "@material-ui/core";
import {Link, BrowserRouter as Router} from 'react-router-dom';

//const service = new Services();
function Alert(props) {
  return <MuiAlert variant="filled" {...props} />;
}
export default class Hello extends React.Component {
  
  nextPath(path) {
    this.props.history.push(path);
  }
  constructor(props){
    super(props)
    this.state = {
      email: "",
      emailError: "",
      emailFlag: false,
      setOpen: false,
      open: false,
      snackMessage: "",
      snackType: ""
    };
  }

  change = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  validate = () => {
    let isError = false;
    const errors = {
      emailError: "",
      emailFlag: false,
    };
    if (this.state.email.length === 0) {
      errors.emailFlag = true;
      isError = true;
      errors.emailError = "Enter your Email ";
    }
    if (
      !/[a-zA-Z0-9._]+[@]{1}[a-zA-Z120-9]*[.]{1}[a-zA-Z]*$/.test(
        this.state.email
      )
    ) {
      errors.emailFlag = true;
      isError = true;
      errors.emailError = "Email is not proper";
    }
    this.setState({
      ...errors,
    });

    return isError;
  };

  onSubmit = (e) => {
    e.preventDefault();
    const err = this.validate();
    if (!err) {
      this.setState({
        emailFlag: false,
        emailError: "",
        email: ""
      });
      let data = {
        email: this.state.email,
      };
      Services
        .forgotPassword(data)
        console.log("fP", data)
        .then((data) => {
          let obj = JSON.stringify(data);
          console.log("Mail Sended to given email" + obj);
          this.setState({snackType: "success", snackMessage: "Mail Sended to given email", open: true, setOpen: true})
        })
        .catch((err) => {
          this.setState({snackType: "error", snackMessage: "Request Failed", open: true, setOpen: true})
        });
    } else {
      console.log("Request Failed");
    }
  };

render() {
  return (
    <Grid className="formStyle">
    {/* <div className="formStyle"> */}
    <Paper className="forgot-password-container register-paper">
    <div className="register-form">
      <div elevation={0} className="ForgetPassPage">
        {/* <span className="inlineTitle"> */}
          <h2>
            <font color="#1976d2">F</font>
            <font color="#e53935">u</font>
            <font color="#ffb74d">n</font>
            <font color="#1976d2">d</font>
            <font color="#388e3c">o</font>
            <font color="#e53935">o</font>
            <font color="#1976d2">N</font>
            <font color="#e53935">o</font>
            <font color="#ffb74d">t</font>
            <font color="#1976d2">e</font>
          </h2>
        {/* </span> */}
        <Grid>
       <h3>Forgot Password</h3>
      
       </Grid>
       
        <form className="register-form-inputs" data-testid="form" align="center">
        {/* <form className="register-form-inputs"> */}
          <Grid container spacing={1} className="register-form-element" >
          {/* <div className="register-form-inputs"> */}
            <TextField
              className="register-form-inputs"
              spacing={2}
              // as={TextField}
              label="Email"
              variant="outlined"
              name="email"
              
              value={this.state.email}
              helperText={this.state.emailError}
              error={this.state.emailFlag}
              onChange={(e) => this.change(e)}
              fullwidth
            />
          {/* </div> */}
          </Grid>
          {/* <span className="buttonFooter"> */}
          <Grid container spacing={1} className="register-form-element submit-button">
          
            {/* <div className="register-form-button"> */}
              <Button
              type="submit"
                variant="contained"
                className="register-form-button"
                onClick={(e) => this.onSubmit(e)}
                // color="primary"
              >
                send
                </Button>
                
                {/* <Link></Link> */}
            {/* </div> */}
          </Grid>
          </form>
          <Typography align="center">
                <Link className="forgot-password-link"  to="/register">sign in instead?</Link>
                 </Typography>
        {/* </form> */}
      </div>
      <div>
     
      <Snackbar open={this.state.open} autoHideDuration={3000} >
        <Alert severity={this.state.snackType}>
          {this.state.snackMessage}
        </Alert>
      </Snackbar>
    </div>
    
    </div>
    </Paper>
  </Grid>
  );
}
}



// render() {
//   return (
//     <Grid>
//     <div className="main">
//       <div elevation={0} className="ForgetPassPage">
//         <span className="inlineTitle">
//           <b>
//             <font color="#1976d2">F</font>
//             <font color="#e53935">u</font>
//             <font color="#ffb74d">n</font>
//             <font color="#1976d2">d</font>
//             <font color="#388e3c">o</font>
//             <font color="#e53935">o</font>
//           </b>
//         </span>
//        <h5>Forgot Password</h5>
//         Enter your phone number or email
//         <form className="register-form-inputs">
//           <div container spacing={1} className="register-form-element">
//           <div className="register-form-inputs">
//             <TextField
//               className="register-form-inputs"
//               label="Email"
//               variant="outlined"
//               name="email"
//               value={this.state.email}
//               helperText={this.state.emailError}
//               error={this.state.emailFlag}
//               onChange={(e) => this.change(e)}
//             />
//           </div>
//           </div>
//           <span className="buttonFooter">
//           <div className="signInLink">
//                 <Button
//                   color="primary"
//                   onClick={() => this.nextPath('/register')}>
//                   Sign In insted
//                 </Button>
//               </div>
//             <div className="button">
//               <Button
//                 variant="contained"
//                 onClick={(e) => this.onSubmit(e)}
//                 color="primary"
//               >
//                 Send
//               </Button>
//             </div>
//           </span>
//         </form>
//       </div>
//       <div>
//       <Snackbar open={this.state.open} autoHideDuration={3000} >
//         <Alert severity={this.state.snackType}>
//           {this.state.snackMessage}
//         </Alert>
//       </Snackbar>
//     </div>
//     </div>
//   </Grid>
//   );
// }
// }

