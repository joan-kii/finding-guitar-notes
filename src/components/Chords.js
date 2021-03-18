import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ExercisesContext } from './Exercises';
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

const Chords = () => {

  const classes = useStyles();
  const { setActualExercise, setChoiceMenu } = useContext(ExercisesContext);

  useEffect(() => {
    setActualExercise('');
    setChoiceMenu('Learn the chords!');
  });

  return (
    <div className={classes.root}>
      <div className={classes.text}>
        <Container >
          <Typography component='h3' variant='h4' align='center' gutterBottom>
            Pick a chord
          </Typography>
        </Container>
      </div>
      <Container className={classes.grid}>
        <Grid className={classes.row}>
          <Link to='/chord-a'>
            <Button className={classes.button}>
              Chord A
            </Button>
          </Link>
          <Link to='/chord-b'>
            <Button className={classes.button}>
              Chord B
            </Button>
          </Link>
        </Grid>
        <Grid className={classes.row}>
          <Link to='/chord-c'>
            <Button className={classes.button}>
              Chord C
            </Button>
          </Link>
          <Link to='/chord-d'>
            <Button className={classes.button}>
              Chord D
            </Button>
          </Link>
        </Grid>
        <Grid className={classes.row}>
          <Link to='/chord-e'>
            <Button className={classes.button}>
              Chord E
            </Button>
          </Link>
          <Link to='/chord-f'>
            <Button className={classes.button}>
              Chord F
            </Button>
          </Link>
        </Grid>
        <Grid className={classes.row}>
          <Link to='/chord-g'>
            <Button className={classes.button}>
              Chord G
            </Button>
          </Link>
        </Grid>
      </Container>
    </div>
  );
}; 

export default Chords;