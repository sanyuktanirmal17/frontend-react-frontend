import { Grid, Avatar, Paper, Typography, TextField, Button } from '@material-ui/core'
import React from 'react'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {Link} from 'react-router-dom'

const Register = () => {
    const paperStyle = { padding: '30px 20px', width: 300, margin: "20px auto" }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#1b66e4' }
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
                <form>
                    <TextField fullWidth label='firstName'></TextField>
                    <TextField fullWidth label='lastName'></TextField>
                    <TextField fullWidth label='Email'></TextField>
                    <TextField fullWidth label='password'></TextField>
                    <FormControlLabel
                        control={<Checkbox name="checkedB" color="primary"
                        />
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
}

export default Register;