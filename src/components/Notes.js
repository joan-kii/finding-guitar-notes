import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../context/Context';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    background: '#323232',
  },
  text: {
    color: theme.palette.common.white,
    padding: theme.spacing(18, 0, 6),
  },
  grid: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  row: {
    padding: theme.spacing(2, 2, 2),
  },
  button: {
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2),
    backgroundColor: theme.palette.common.white,
    padding: theme.spacing(1, 5, 1),
    '&:hover': {
      backgroundColor: '#353535',
      outline: '4px solid white',
      color: 'white',
      borderRadius: 4,
    },
  },
}));

const Notes = () => {

  const classes = useStyles();
  const { setActualExercise, setChoiceMenu } = useContext(Context);

  useEffect(() => {
    setActualExercise('');
    setChoiceMenu('Learn the notes!');
  });

  return (
    <div className={classes.root}>
      <div className={classes.text}>
        <Container >
          <Typography component='h3' variant='h4' align='center' gutterBottom>
            Pick a string
          </Typography>
        </Container>
      </div>
      <Container className={classes.grid}>
        <Grid className={classes.row}>
          <Link to='/notes-string-1'>
            <Button className={classes.button}>
              String 1
            </Button>
          </Link>
          <Link to='/notes-string-2'>
            <Button className={classes.button}>
              String 2
            </Button>
          </Link>
        </Grid>
        <Grid className={classes.row}>
          <Link to='/notes-string-3'>
            <Button className={classes.button}>
              String 3
            </Button>
          </Link>
          <Link to='/notes-string-4'>
            <Button className={classes.button}>
              String 4
            </Button>
          </Link>
        </Grid>
        <Grid className={classes.row}>
          <Link to='/notes-string-5'>
            <Button className={classes.button}>
              String 5
            </Button>
          </Link>
          <Link to='/notes-string-6'>
            <Button className={classes.button}>
              String 6
            </Button>
          </Link>
        </Grid>
      </Container>
    </div>
  );
}; 

export default Notes;