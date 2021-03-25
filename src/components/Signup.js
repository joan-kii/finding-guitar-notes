import React from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import SvgIcon from '@material-ui/core/SvgIcon';
import GitHubIcon from '@material-ui/icons/GitHub';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    display: 'flex',
    position: 'absolute',
    top: '30%',
    left: '30%',
    width: '40%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  title: {
    fontSize: 24,
    marginTop: theme.spacing(2),
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  text: {
    fontSize: 18,
  },
}));

const Signup = () => {

  const classes = useStyles();

  return (
    <Container>
      <Paper className={classes.paper}>
        <Avatar>
          <LockOutlinedIcon />
        </Avatar>
        <Typography 
          component='h2'
          variant='h3' 
          className={classes.title}>
            Sign up
        </Typography>
        <form className={classes.form}>
          <Grid container spacing={2}>
            <Grid item>
              <ButtonGroup 
                variant='contained' 
                size='large' 
                aria-label='contained button group'>
                <Button endIcon={<SvgIcon htmlColor='#c0392b'>
                  <svg role="img" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg"><title>Google icon</title><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/></svg>
                </SvgIcon>}>
                  Sign up with Gmail
                </Button>
                <Button startIcon={<GitHubIcon />}>
                  Sign up with Github
                </Button>
              </ButtonGroup>
            </Grid>
            <Grid item>
              <TextField required 
                id='email'
                fullWidth
                label='Email'
                variant='outlined'
                defaultValue='Your email' />
            </Grid>
            <Grid item>
              <TextField required 
                id='password'
                fullWidth
                label='Password'
                variant='outlined'
                defaultValue='Password' />
            </Grid>
            <Grid item>
              <TextField required 
                id='passwordConfirm'
                fullWidth
                label='Confirm Password'
                variant='outlined'
                defaultValue='Confirm Password' />
            </Grid>
          </Grid>
          <Button 
            variant='contained' 
            size='large'
            fullWidth>
            Sign up
          </Button>
          <Typography 
            variant='h6'
            className={classes.text}>
              Already have an account? Log In.
          </Typography>
        </form>
      </Paper>  
    </Container>
  )
};

export default Signup;
