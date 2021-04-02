import React, { useEffect, useContext } from 'react';
import { Context } from '../context/Context';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import NoteImage from '../assets/note.jpg';
import ChordImage from '../assets/chord.jpg';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Buttons Selection

const images = [
  {
    url: NoteImage,
    title: 'Notes',
    width: 300,
    path: '/finding-guitar-notes/notes',
  },
  {
    url: ChordImage,
    title: 'Chords',
    width: 300,
    path: '/finding-guitar-notes/chords',
  }
];

const useStyles = makeStyles((theme) => ({
  main: {
    background: '#323232',
  },
  welcome: {
    color: theme.palette.common.white,
    padding: theme.spacing(12, 0, 12),
    background: '#323232',
  },
  text: {
    fontSize: 20,
  },
  buttons: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 200,
    width: 'auto',
    justifyContent: 'center',
    background: '#323232',
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

  const { setActualExercise, setChoiceMenu } = useContext(Context);
  useEffect(() => {
    setActualExercise('');
    setChoiceMenu('');
  });

  const classes = useStyles();

  return (
    <main className={classes.main}>
      <div className={classes.welcome}>
        <Container maxWidth='sm'>
          <Typography component='h2' variant='h4' align='center'>
            Welcome to Finding Guitar Notes!
          </Typography>
          <Typography className={classes.text} align='center'>
            Pick an exercise.
          </Typography>
          <Typography className={classes.text} align='center'>
            Don't forget to log in to track your progress.
          </Typography>
        </ Container>
      </div>
      <Container className={classes.buttons} >
        {images.map((image) => (
          <Link to={image.path} key={image.title}>
            <ButtonBase 
              component={motion.div}
              initial={{ scale: 0 }}
              animate={{ rotate: 360, scale: 1 }}
              transition={{ 
                type: 'spring',
                stiffness: 260,
                damping: 20 }}
              focusRipple
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
          </Link>
        ))}
      </ Container>
    </main>
  );
}; 

export default SelectGame;