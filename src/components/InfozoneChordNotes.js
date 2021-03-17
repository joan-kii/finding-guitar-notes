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
  infoChord: {
    display: 'flex',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    justifyContent: 'center',
  },
  chip: {
    margin: theme.spacing(1)
  }
}));

const InfozoneChordNotes = ({ notesChord, chord, rightNotes }) => {
  
  const { exercises, actualExercise } = useContext(ExercisesContext);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container className={classes.container}>
        <Paper className={classes.paper}>
          <Typography className={classes.title}>
            {actualExercise ? `Find the notes of Major ${actualExercise.title}` : ''}
          </Typography>
          <MuiThemeProvider theme={theme}>
            <Container className={classes.results}>
              {notesChord.map((fret, index) => {
                return <Chip 
                  className={classes.chip} 
                  size='small' 
                  label={`String ${index + 1}`} 
                  color={rightNotes[index] ? 'primary' : 'default'}
                  icon={rightNotes[index] ? <DoneIcon /> : null} />
              })}
            </Container>
            <Container className={classes.infoChord}>
              <Chip 
                className={classes.chip} 
                size='medium' 
                label={`Chord ${chord}`} 
                color={exercises.chordExercises[chord].completed ? 'primary' : 'default'}
                icon={exercises.chordExercises[chord].completed ? <DoneIcon /> : null} />
            </Container>
          </MuiThemeProvider>
        </Paper>
      </Container>
    </div>
  );
}; 

export default InfozoneChordNotes;