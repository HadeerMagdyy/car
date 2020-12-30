import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {Route} from 'react-router-dom';
import {FormattedMessage} from "react-intl";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label={<FormattedMessage
              id="email-signup">
              </FormattedMessage>}
            name="email"
            autoComplete="email"
            autoFocus
          />
          
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label={<FormattedMessage
              id="password-signup">
              </FormattedMessage>}
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label={<FormattedMessage
              id="Rememberme-signin">
              </FormattedMessage>}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            <Route render={({ history}) => (
                 <Link href="#" onClick={() => { history.push('/visit') }}  variant="body2">
                 {<FormattedMessage
                  id="signInbutton-signin">
                  </FormattedMessage>}
               </Link>
              )} />   
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
              {<FormattedMessage
                  id="termsandpolicy-signin">
                  </FormattedMessage>}
              </Link>
            </Grid>
            <Grid item>
            <Route render={({ history}) => (
                 <Link href="#" onClick={() => { history.push('/SignUp') }}  variant="body2">
                 {<FormattedMessage
                  id="Donthaveaccount-signin">
                  </FormattedMessage>}
               </Link>
              )} />
             
            </Grid>
          </Grid>
        </form>
      </div>
    </Container> 
  );
     
}