import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import Note from '../assets/note.jpg';
import Chord from '../assets/chord.jpg';

// Buttons Selection
const images = [
  {
    url: Note,
    title: 'Notes',
    width: 300
  },
  {
    url: Chord,
    title: 'Chords',
    width: 300
  }
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '10vh',
  },
  paper: {
    display: 'flex',
    position: 'absolute',
    height: '30%',
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '10vh',
  },
  buttons: {
    display: 'flex',
    position: 'absolute',
    flexWrap: 'wrap',
    minWidth: 200,
    width: 'auto',
    justifyContent: 'center',
  },
  image: {
    position: 'relative',
    height: 200,
    border: '2px solid white',
    [theme.breakpoints.down('xs')]: {
      width: '100% !important',
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.1,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '2px solid currentColor',
      },
    },
  },
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0, 
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 300,
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0, 
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
    fontSize: 22,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  }
}));

const SelectGame = () => {

  const classes = useStyles();

  return (
    <Container fixed className={classes.root}>
      <Paper className={classes.paper} elevation={3}>
        <Typography>
          Welcome to Finding Guitar Notes!
        </Typography>
      </Paper>
      <div className={classes.buttons}>
        {images.map((image) => (
          <ButtonBase 
            focusRipple
            key={image.title}
            className={classes.image}
            focusVisibleClassName={classes.focusVisible}
            style={{
              width: image.width,
              margin: 20,
            }}
          >
            <span 
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(${image.url})`,
              }}
            />
            <span className={classes.imageBackdrop} />
            <span className={classes.imageButton}>
              <Typography 
                component='span'
                variant='subtitle1'
                color='inherit'
                className={classes.imageTitle}
              >
                {image.title}
                <span className={classes.imageMarked} />
              </Typography>
            </span>
          </ButtonBase>
        ))}
      </div>
    </ Container>
  );
}; 

export default SelectGame;