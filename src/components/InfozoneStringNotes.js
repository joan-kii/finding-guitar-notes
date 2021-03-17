import React, { useContext } from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import DoneIcon from '@material-ui/icons/Done';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { ExercisesContext } from './Exercises';

const theme = createMuiTheme ({
  palette: {
    primary: {
      main: '#008080',
    }
  }
});

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
    width: '100%',
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
  infoString: {
    display: 'flex',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    justifyContent: 'center',
  },
  chip: {
    margin: theme.spacing(1)
  }
}));

const InfozoneStringNotes = ({ notesString, string }) => {
  
  const { exercises, actualExercise } = useContext(ExercisesContext);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container className={classes.container}>
        <Paper className={classes.paper}>
          <Typography className={classes.title}>
            {actualExercise ? `Find the notes in the ${actualExercise.title}` : ''}
          </Typography>
          <MuiThemeProvider theme={theme}>
            <Container className={classes.results}>
              <Chip 
                className={classes.chip} 
                size='medium' 
                label='Open' 
                color={exercises.notesExercises[string][notesString[0]].completed ? 'primary' : 'default'}
                icon={exercises.notesExercises[string][notesString[0]].completed ? <DoneIcon /> : null} />
              <Chip 
                className={classes.chip} 
                size='medium' 
                label='Fret 1' 
                color={exercises.notesExercises[string][notesString[1]].completed ? 'primary' : 'default'}
                icon={exercises.notesExercises[string][notesString[1]].completed ? <DoneIcon /> : null} />
              <Chip 
                className={classes.chip} 
                size='medium' 
                label='Fret 2' 
                color={exercises.notesExercises[string][notesString[2]].completed ? 'primary' : 'default'}
                icon={exercises.notesExercises[string][notesString[2]].completed ? <DoneIcon /> : null} />
              <Chip 
                className={classes.chip} 
                size='medium' 
                label='Fret 3' 
                color={exercises.notesExercises[string][notesString[3]].completed ? 'primary' : 'default'}
                icon={exercises.notesExercises[string][notesString[3]].completed ? <DoneIcon /> : null} />
              <Chip 
                className={classes.chip} 
                size='medium' 
                label='Fret 4' 
                color={exercises.notesExercises[string][notesString[4]].completed ? 'primary' : 'default'}
                icon={exercises.notesExercises[string][notesString[4]].completed ? <DoneIcon /> : null} />
              <Chip 
                className={classes.chip} 
                size='medium' 
                label='Fret 5' 
                color={exercises.notesExercises[string][notesString[5]].completed ? 'primary' : 'default'}
                icon={exercises.notesExercises[string][notesString[5]].completed ? <DoneIcon /> : null} />
              <Chip 
                className={classes.chip} 
                size='medium' 
                label='Fret 6' 
                color={exercises.notesExercises[string][notesString[6]].completed ? 'primary' : 'default'}
                icon={exercises.notesExercises[string][notesString[6]].completed ? <DoneIcon /> : null} />
              <Chip 
                className={classes.chip} 
                size='medium' 
                label='Fret 7' 
                color={exercises.notesExercises[string][notesString[7]].completed ? 'primary' : 'default'}
                icon={exercises.notesExercises[string][notesString[7]].completed ? <DoneIcon /> : null} />
              <Chip 
                className={classes.chip} 
                size='medium' 
                label='Fret 8' 
                color={exercises.notesExercises[string][notesString[8]].completed ? 'primary' : 'default'}
                icon={exercises.notesExercises[string][notesString[8]].completed ? <DoneIcon /> : null} />
              <Chip 
                className={classes.chip} 
                size='medium' 
                label='Fret 9' 
                color={exercises.notesExercises[string][notesString[9]].completed ? 'primary' : 'default'}
                icon={exercises.notesExercises[string][notesString[9]].completed ? <DoneIcon /> : null} />
              <Chip 
                className={classes.chip} 
                size='medium' 
                label='Fret 10' 
                color={exercises.notesExercises[string][notesString[10]].completed ? 'primary' : 'default'}
                icon={exercises.notesExercises[string][notesString[10]].completed ? <DoneIcon /> : null} />
              <Chip 
                className={classes.chip} 
                size='medium' 
                label='Fret 11' 
                color={exercises.notesExercises[string][notesString[11]].completed ? 'primary' : 'default'}
                icon={exercises.notesExercises[string][notesString[11]].completed ? <DoneIcon /> : null} />
              <Chip 
                className={classes.chip} 
                size='medium' 
                label='Fret 12' 
                color={exercises.notesExercises[string][notesString[12]].completed ? 'primary' : 'default'}
                icon={exercises.notesExercises[string][notesString[12]].completed ? <DoneIcon /> : null} />
            </Container>
            <Container className={classes.infoString} >
              <Chip 
                className={classes.chip} 
                size='medium' 
                label={`${exercises.notesExercises[string].title}`} 
                color={exercises.notesExercises[string].completed ? 'primary' : 'default'}
                icon={exercises.notesExercises[string].completed  ? <DoneIcon /> : null} />
            </Container>
          </MuiThemeProvider>
        </Paper>
      </Container>
    </div>
  );
}; 

export default InfozoneStringNotes;