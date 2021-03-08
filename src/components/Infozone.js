import React, { useContext } from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import { makeStyles } from '@material-ui/core/styles';
import { ExercisesContext } from './Exercises';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  }, 
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  }, 
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  title: {
    fontSize: 24,
    margin: 'auto',
  },
  results: {
    display: 'flex',
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
    justifyContent: 'center',
  }, 
  chip: {
    margin: theme.spacing(1)
  }
}));

const Infozone = () => {
  
  const { exercises, setExercises } = useContext(ExercisesContext);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container className={classes.container}>
        <Paper className={classes.paper}>
          <Typography className={classes.title}>
            String 1 Notes
          </Typography>
          <Container className={classes.results}>
            <Chip className={classes.chip} size='medium' label='Open' />
            <Chip className={classes.chip} size='medium' label='Fret 1' />
            <Chip className={classes.chip} size='medium' label='Fret 2' />
            <Chip className={classes.chip} size='medium' label='Fret 3' />
            <Chip className={classes.chip} size='medium' label='Fret 4' />
            <Chip className={classes.chip} size='medium' label='Fret 5' />
            <Chip className={classes.chip} size='medium' label='Fret 6' />
            <Chip className={classes.chip} size='medium' label='Fret 7' />
            <Chip className={classes.chip} size='medium' label='Fret 8' />
            <Chip className={classes.chip} size='medium' label='Fret 9' />
            <Chip className={classes.chip} size='medium' label='Fret 10' />
            <Chip className={classes.chip} size='medium' label='Fret 11' />
            <Chip className={classes.chip} size='medium' label='Fret 12' />
          </Container>
        </Paper>
      </Container>
    </div>
  );
}; 

export default Infozone;